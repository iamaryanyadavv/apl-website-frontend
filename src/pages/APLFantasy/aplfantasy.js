import { Grid, Input, Text, Dropdown, Col, Row } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import './aplfantasy.css';
import JerseyImage from "./jersey template 1.png"
import FanUpLogo from "./fanup_logo-white 1.png"
import APLTEXT from "./apl.png"
import FANTASYTEXT from "./Fantasy Game.png"
import { Collapse, Checkbox } from "@nextui-org/react";
import { color } from "@chakra-ui/react";
import addPlayerButton from "./addplayericon.png"

export default function APLFantasy() {
  const genderOptions = ['Cis Man', 'Non Cis Man'];
  const positionOptions = ['Defender', 'Midfielder', 'Attacker'];
  const formationOptions = ['1-3-1', '2-1-2', '3-1-1'];
  const priceOptions = ['0M-9M', '10M-25M', '25M-50M', '50M+'];
  const [selectedJersey, setSelectedJersey] = useState(null);


  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 10;
  const addPlayer = (player) => {
    // Implement logic to add player to selectedPlayers
    // For example:
    if (!selectedPlayers.includes(player)) {
        setSelectedPlayers([...selectedPlayers, player]);
    } else {
        alert('Player already selected!');
    }
};
const [filters, setFilters] = useState({
  gender: {},
  position: {},
  formation: '2-1-2', // set default formation to '2-1-2'
  price: '0M-9M'
});


  

const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  const renderJerseys = () => {
    return selectedPlayers.map((player, index) => (
      <div key={index} className="player-jersey" style={{ position: 'relative' }}>
        <img src={JerseyImage} alt="Jersey" />
        <Text h4 css={{ position: 'absolute', bottom: '0' }}>{player}</Text>
        <img src={addPlayerButton} alt="Add Player"
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', cursor: 'pointer' }}
          onClick={() => setSelectedJersey(index)} />
      </div>
    ));
  };
  
  const handleFormationChange = (newFormation) => {
    if (filters.formation !== newFormation) {
      setFilters({
        ...filters,
        formation: newFormation
      });
      // Reset selected players when formation changes
      setSelectedPlayers([]);
    }
  };

  // This useEffect ensures that the default formation '2-1-2' is set on component mount
  useEffect(() => {
    setFilters(f => ({ ...f, formation: '2-1-2' }));
  }, []);

    const playersData =  [{
        name: "Rivan Sengupta",
        price: "15 MIL",
        position: "Defender"
    },
    {
        name: "Zahaan Shapoorjee",
        price: "150 MIL",
        position: "Attacker"
    },
    {
        name: "Aryan Yadav",
        price: "150 MIL",
        position: "Midfielder"
    },
    {
        name: "Dhruv Achappa",
        price: "1 MIL",
        position: "Defender"
    },
    {
        name: "Rehaan Raha",
        price: "15 MIL",
        position: "Defender"
    },
    {
        name: "Nandini Chhabra",
        price: "999 MIL",
        position: "Defender"
    },
    {
        name: "Pukhraj Bedi",
        price: "15 MIL",
        position: "Defender"
    },
    {
        name: "Shantanu Iyer",
        price: "15 MIL",
        position: "Defender"
    },
    {
        name: "Atharva Dawar",
        price: "15 MIL",
        position: "Defender"
    },
    {
        name: "Abdi Abdi",
        price: "15 MIL",
        position: "Defender"
    },
    {
        name: "John Stones",
        price: "15 MIL",
        position: "Defender"
    },
]
    
const [selectedPlayers, setSelectedPlayers] = useState([]);
const [formationState, setFormationState] = useState(1);

const handleSelectPlayer = (playerName) => {
  if (selectedJersey !== null) {
    let newSelectedPlayers = [...selectedPlayers];
    newSelectedPlayers[selectedJersey] = playerName; // Update the player in the specific jersey
    setSelectedPlayers(newSelectedPlayers);
    setSelectedJersey(null); // Reset selected jersey
  } else {
    alert('Please select a jersey first by clicking on the add icon.');
  }
};

useEffect(() => {
  switch (filters.formation) {
    case '1-3-1':
      setFormationState(2);
      break;
    case '2-1-2':
      setFormationState(1);
      break;
    case '3-1-1':
      setFormationState(3);
      break;
    default:
      setFormationState(1); // Default case can be set to any valid value
  }
}, [filters.formation]);

const handlePageChange = (newPage) => {
  if (newPage > 0 && newPage <= Math.ceil(playersData.length / playersPerPage)) {
      setCurrentPage(newPage);
  }
};

const indexOfLastPlayer = currentPage * playersPerPage;
const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
const currentPlayers = playersData.slice(indexOfFirstPlayer, indexOfLastPlayer);


const renderPlayersList = () => {
  const playerCardStyle = {
    backgroundColor: '#4DFFA8', // or any dark color you prefer
    color: 'white',
    marginBottom: '20px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontWeight:"800",
    height:"10%",
    width:"100%",
    fontSize:"14px"
  };



  const playerNameStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align text to the left
    flex: '1', // Take up the full width of the card minus the button
    color: "#000000",
    fontFamily: 'Montserrat',
    fontWeight: "800",
    marginBottom: '5px', // Adds space between the name and the position
    fontSize: "12px",
    lineHeight: "15px",
    display: "flex",
    alignItems: "center",
    letterSpacing:"0.13em",
    textTransform: "uppercase",
  };


  
  const playerPriceStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end', // Align text to the left
    flex: '1', // Take up the full width of the card minus the button
    color: "#484848",
    fontFamily: 'Montserrat',
    fontWeight: "800",
    marginBottom: '5px' ,// Adds space between the name and the position
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "11px",
    lineHeight: "13px",
    display: "flex",
    alignitems: "center",
    letterSpacing: "0.01em",
    textTransform: "uppercase",
  };
  
  const playerPositionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align text to the left
    flex: '1', // Take up the full width of the card minus the button
    color: "#484848",
    fontFamily: 'Montserrat',
    fontWeight: "500",
    fontFamily: 'Montserrat',
    fontStyle: "italic",
    fontWeight: "500",
    fontSize: "10px",
    lineHeight: "12px",
    display: "flex",
    alignitems: "center",
    letterSpacing: "0.05em",
    textTransform: "uppercase"
  };

  const addButtonStyle = {
    backgroundColor: '#21ba45', // Green background
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    marginLeft: '10px' // Add some space between the button and the player info
  };







  return (
    <div className="players-list">
    {currentPlayers.map((player, index) => (
      <div key={index} style={playerCardStyle} onClick={() => addPlayer(player.name)}>
        <div style={{display:"flex", flexDirection:"column", columnGap:"0px"}}>
        <div style={playerNameStyle}>{player.name}</div>
        <div style={playerPositionStyle}>{player.position}</div>
        </div>
        <div style={playerPriceStyle}>{player.price}</div>
        {/* <button style={addButtonStyle} onClick={() => addPlayer(player.name)}>
          Add Player
        </button> */}
      </div>
    ))}
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => handlePageChange(currentPage - 1)}>Previous Page</button>
      )}
      {currentPage < Math.ceil(playersData.length / playersPerPage) && (
        <button onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
      )}
    </div>
  </div>
  );
};

const renderPlayers = () => {
    // Define the desired layout for players
    const formationLayout = [1, 2, 1, 2]; // The pattern of players per row
  
    let playerElements = [];
    let playerIndex = 0;
    let rowIndex = 0;
  
    while (playerIndex < selectedPlayers.length) {
      // Determine the number of players in the current row
      const numPlayersInRow = formationLayout[rowIndex % formationLayout.length];
      let rowPlayers = [];
  
      for (let i = 0; i < numPlayersInRow && playerIndex < selectedPlayers.length; i++) {
        const player = selectedPlayers[playerIndex++];
        rowPlayers.push(
          <div key={player} className="player-jersey">
            <img src={JerseyImage} alt="Jersey" />
            <Text h4 css={{ position: 'absolute', bottom: '0' }}>{player}</Text>
          </div>
        );
      }
  
      // Add the row of players to the overall player elements
      playerElements.push(
        <div key={`row-${rowIndex}`} className={`player-row row-${rowIndex % formationLayout.length}`}>
          {rowPlayers}
        </div>
      );
  
      rowIndex++; // Move to the next row
    }
  
    return playerElements;
  };
  
  

const renderDropdown = () => {
    return (
        <Dropdown>
            <Dropdown.Button color={"white"} className="dropdown-button" flat>{'Select Player'}</Dropdown.Button>
            <Dropdown.Menu
              aria-label="Select a player"
              disallowEmptySelection
              selectionMode="single"
              onAction={(key) => handleSelectPlayer(key)}
            >
              {playersData.map(player => (
                <Dropdown.Item key={player.name}>{player.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>

        </Dropdown>
    );
};

return (
    <div className="fantasy-game-container">
        <Grid.Container
            css={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px'  // Adjust gap size here to control the spacing between columns
            }}>
            <Row>
            <Grid xs={12} md={8} css={{ padding: '0 10px' }}>
  <Col className="leftcol">
    <Text className="fantasytitle">APL FANTASY GAME</Text>
    <div className="football-field">
        {formationState==1 && <>
          <Grid.Container
            css={{
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10vw',
              height:"20%"
            }}>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(4)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[4]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[4])?.price}</Text>
              </div>
         
            </div>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(5)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[5]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[5])?.price}</Text>
              </div>
            </div>
          </Grid.Container>
          <div className="player-jersey midfielder-1">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '50%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(2)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[2]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[2])?.price}</Text>
              </div>
            </div>
          <Grid.Container
            css={{
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10vw'  ,// Adjust gap size here to control the spacing between columns
              height:"20%"
            }}>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(0)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[0]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[0])?.price}</Text>
              </div>
            </div>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(1)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[1]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[1])?.price}</Text>
              </div>
            </div>
          </Grid.Container>
          <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(3)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[3]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[3])?.price}</Text>
              </div>
            </div>
        </>}

        {formationState==2 && <>
          <div className="player-jersey midfielder-1">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '50%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(2)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[2]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[2])?.price}</Text>
              </div>
            </div>
          <Grid.Container
            css={{
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10vw',
              height:"20%"
            }}>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(4)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[4]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[4])?.price}</Text>
              </div>
            </div>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(5)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[5]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[5])?.price}</Text>
              </div>
            </div>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(0)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[0]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[0])?.price}</Text>
              </div>
            </div>
          </Grid.Container>
        
          <Grid.Container
            css={{
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10vw'  ,// Adjust gap size here to control the spacing between columns
              height:"20%"
            }}>
            
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(1)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[1]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[1])?.price}</Text>
              </div>
            </div>
          </Grid.Container>
          <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(3)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[3]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[3])?.price}</Text>
              </div>
            </div>
        </>}


        {formationState==3 && <>
          <Grid.Container
            css={{
              display: "flex",
              flexDirection:"column",
              // justifyContent: 'center',
              alignItems: 'center',
              // gap: '10vw',
              // height:"20%",
              flexWrap:"nowrap"
            }}>
          <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(3)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[3]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[3])?.price}</Text>
              </div>
            </div>
          <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(2)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[2]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[2])?.price}</Text>
              </div>
            </div>
            </Grid.Container>

          <Grid.Container
            css={{
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10vw',
              height:"20%"
            }}>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(4)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[4]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[4])?.price}</Text>
              </div>
            </div>
            <div className="player-jersey">
            <img src={JerseyImage} alt="Jersey" />
            <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(5)} />              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[5]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[5])?.price}</Text>
              </div>
            </div>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(0)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[0]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[0])?.price}</Text>
              </div>
            </div>
          </Grid.Container>
        
          <Grid.Container
            css={{
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10vw'  ,// Adjust gap size here to control the spacing between columns
              height:"20%"
            }}>
            
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(1)} />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[1]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p.name === selectedPlayers[1])?.price}</Text>
              </div>
            </div>
          </Grid.Container>

        </>}

    </div>
  </Col>
</Grid>

                <Grid xs={12} md={4} css={{ marginTop: '1%', width:"60%"}}>
                    <Col className="rightcol">
                        <div className="sponsor-section" >
                            <Text className="sponsortext" center>{'Sponsored by'}</Text>
                            <img src={FanUpLogo} alt="FanUp Logo" className="fanup-logo"/>
                        </div>
                        <div className="sidebar">
                          <div className="money-left">
                          <Text className="money-left-text">{'Money'}<br/>{'Left'}</Text>
                          <Text className="money-left-text">$140M</Text>
                          </div>
                          <div className="coll-group">
           


      <Collapse title="Formation" className="coll-dropdown">
              {formationOptions.map((formationOption) => {
                return (
                <Checkbox
                  key={formationOption}
                  isSelected={formationOption==filters.formation}
                  onChange={() => handleFormationChange(formationOption)}
                >
                  {formationOption}
                </Checkbox>
              )})}
            </Collapse>
          <Collapse title="Gender" className="coll-dropdown">
          {genderOptions.map((gender) => (
            <Checkbox
              key={gender}
              checked={filters.gender[gender]}
              onChange={() => handleFilterChange('gender', gender)}
            >
              {gender}
            </Checkbox>
          ))}
        </Collapse>
                {/* Price Collapse with Checkbox Options */}
                <Collapse title="Price" className="coll-dropdown">
          {priceOptions.map((price) => (
            <Checkbox
              key={price}
              checked={filters.price === price}
              onChange={() => handleFilterChange('price', price)}
            >
              {price}
            </Checkbox>
          ))}
        </Collapse>
                      </div>
                        {renderPlayersList()}
                      
                        </div>
                    </Col>
                </Grid>
            </Row>
        </Grid.Container>
    </div>
);
}