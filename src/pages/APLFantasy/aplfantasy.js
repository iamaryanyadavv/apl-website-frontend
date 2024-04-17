import { Grid, Input, Text, Dropdown, Col, Row, Modal, Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import './aplfantasy.css';
import JerseyImage from "./jersey template 1.png"
import FanUpLogo from "./fanup_logo-white 1.png"
import APLTEXT from "./apl.png"
import FANTASYTEXT from "./Fantasy Game.png"
import { Collapse, Checkbox } from "@nextui-org/react";
import { color } from "@chakra-ui/react";
import addPlayerButton from "./addplayericon.png"
import infoIcon from "./infoicon.png"
import matchesPlayerImage from "./MP.png"
import cleanSheets from "./CLEANSHEETS.png"
import goals from "./GOALS.png"
import assists from "./ASSISTS.png"
import redCards from "./REDCARDS.png"
import yellowCards from "./YELLOWCARDS.png"
import testPlayerTeamLogo from "./TESTPLAYERTEAMLOGO.png"
import testPlayerImage from "./TESTPLAYERIMAGE.png"




export default function APLFantasy() {
  const genderOptions = ['Cis Man', 'Non Cis Man'];
  const positionOptions = ['Defender', 'Midfielder', 'Attacker'];
  const formationOptions = ['1-3-1', '2-1-2', '3-1-1'];
  const priceOptions = ['0M-9M', '10M-25M', '25M-50M', '50M+'];
  const [playersData, setPlayerData] = useState([])

  const [selectedJersey, setSelectedJersey] = useState(null);
  const formationStructures = {
    "1-3-1": [0, 1, 2, 3, 4, 5], 
    "2-1-2": [0, 1, 2, 3, 4, 5],
    "3-1-1": [0, 1, 2, 3, 4, 5]
  };
  
  const playerRoles = {
    "1-3-1": ['Goalkeeper', 'Def', 'Mid', 'Mid', 'Mid', 'Att'],
    "2-1-2": ['Goalkeeper', 'Def', 'Def', 'Mid', 'Att', 'Att'],
    "3-1-1": ['Goalkeeper', 'Def', 'Def', 'Def', 'Mid', 'Att']
  };
  

  const [currentPage, setCurrentPage] = useState(1);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const playersPerPage = 10;

  const addPlayer = (playerName) => {
    if (selectedJersey != null) {
      const newSelectedPlayers = [...selectedPlayers];
      // Check if the position allows adding this player
      const playerData = playersData.find(p => p[0] === playerName);
      const requiredPosition = playerRoles[filters.formation][selectedJersey];
      console.log(playerData.position)
      if (playerData[2].startsWith(requiredPosition) || requiredPosition === 'All') {
        newSelectedPlayers[selectedJersey] = playerName; // Add the player to the selected jersey position
        setSelectedPlayers(newSelectedPlayers);
        setSelectedJersey(null); // Clear the selected jersey after updating
      } else {
        alert(`Selected player must be a ${requiredPosition}.`);
      }
    } else {
      // alert('Please select a position by clicking on a jersey icon.');
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

   
const [selectedPlayers, setSelectedPlayers] = useState([]);
const [formationState, setFormationState] = useState(1);

const handleSelectPlayer = (playerName, playerPosition) => {
  if (selectedJersey !== null) {
    // Check if the player's position matches the slot's required position
    if (playersData.find(p => p[0] === playerName)[2] === playerRoles[filters.formation][selectedJersey]) {
      let newSelectedPlayers = [...selectedPlayers];
      newSelectedPlayers[selectedJersey] = playerName;
      setSelectedPlayers(newSelectedPlayers);
      setSelectedJersey(null);
    } else {
      alert('This player does not match the position requirements!');
    }
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
    // height:"10%",
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
    {playersData.map((player, index) => (
      <div key={index} style={playerCardStyle} onClick={() => addPlayer(player[0])}>
        <div style={{display:"flex", flexDirection:"column", columnGap:"0px"}}>

        <div style={{display:"flex", flexDirection:"row", columnGap:"0px"}}>

        <div style={playerNameStyle}>{player[0]}</div>
        <img style={{height:"12px", margin:"2px", zIndex:"1000"}}  onClick={() => setShowInfoModal(true)} src={infoIcon} alt="Jersey" />

</div>
        <div style={playerPositionStyle}>{player[2]}</div>
        </div>
        <div style={playerPriceStyle}>{player[3]}</div>
        {/* <button style={addButtonStyle} onClick={() => addPlayer(player.name)}>
          Add Player
        </button> */}
      </div>
    ))}
    <div className="pagination">
      
    </div>
  </div>
  );
};

const handleSubmit = ()=>{
}

// StatCard component
const StatCard = ({ title, value, image }) => (
  <Grid css={{
    textAlign: "center", 
    flexDirection: "column",
    height: "150px", // Set the total height of the StatCard
    flex: "1", // Ensure that all stat cards take up equal width
    padding: "10px", // Add some padding
  }}>
    <div css={{
      height: "60%", // Image takes up 60% of the card's height
      display: "flex",
      alignItems: "center", // Center the image vertically
      justifyContent: "center", // Center the image horizontally
    }}>
      <img src={image} alt={title} css={{
        height: "100%", // The image will fill the div's height
      }} />
    </div>
    <div css={{
      height: "20%", // Value takes up 20% of the card's height
      display: "flex",
      alignItems: "center", // Center the text vertically
      justifyContent: "center", // Center the text horizontally
    }}>
      <Text css={{ fontSize: "1.25em", fontWeight: "bold" }}>{value}</Text>
    </div>
    <div css={{
      height: "20%", // Title takes up 20% of the card's height
      display: "flex",
      alignItems: "center", // Center the text vertically
      justifyContent: "center", // Center the text horizontally
    }}>
      <Text css={{ fontSize: "1em" }}>{title}</Text>
    </div>
  </Grid>
);



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
                <Dropdown.Item key={player[0]}>{player[0]}</Dropdown.Item>
              ))}
            </Dropdown.Menu>

        </Dropdown>
    );
};


const fetchPlayersData = async (teams) => {
  await fetch('https://aplapi.onrender.com/fantasy/apl7/playerdata')
      .then(response => response.json())
      .then((data) => {
          console.log(data.values)
          setPlayerData(data.values.slice(1))
      })
}

useEffect(() => {
  fetchPlayersData();
}, [])


return (
    <div className="fantasy-game-container">
                            
        {playersData && <Grid.Container
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



    <Modal 
    closeButton
    open={showInfoModal}
    onClose={() => setShowInfoModal(false)}
    className="info-modal"
    width="60%"
    height="100%"
>
    <Modal.Header className="modal-header">
        {/* Close button is provided by the Modal itself */}
    </Modal.Header>

    <Modal.Body className="player-info-modal">
        <Grid.Container
            css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: 'space-between',
                alignItems: 'center',
                width: "100%",
                height: "100%", // Assuming you want to use the entire height
                gap: '20px', // Adjust gap size here to control the spacing between elements
                position: "relative", // For absolute positioning inside
            }}
        >
            {/* Player Info Row */}
            <Grid.Container 
                css={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px", // Space between the info row and stats
                }}
            >
                <Grid 
                    css={{
                        display: "flex",
                        justifyContent: "center", // Adjust to match design
                        alignItems: "center",
                    }}
                >
                    <img src={testPlayerImage} alt="Player" className="player-modal-image" />
                    <Grid.Container css={{ flexDirection: "column", alignItems: "center" }}>

                    <Grid.Container css={{ flexDirection: "row", alignItems: "center", justifyContent:"center"}}>

                        <img src={testPlayerTeamLogo} alt="Player" className="player-modal-team-logo" />
                        <Text className="player-modal-team-name">Player Team Name</Text>


                        </Grid.Container>

                        <Text className="player-modal-name">Dhruv Achappa</Text>
                        <Text className="player-modal-position">Defender</Text>
                        <Text className="player-modal-price">96 M</Text>
                    </Grid.Container>
                </Grid>
            </Grid.Container>

            {/* Player Stats */}
            <Grid.Container 
                css={{
                    width: "100%",
                    justifyContent: "space-evenly", // Adjust to match design
                    marginBottom: "20px", // Space between the stats and matches
                    alignitems:"center"
                }} className="player-stats"
            >
                {/* You would map over your stats data and create these dynamically */}
                <StatCard title="Matches Played" value={3} image={matchesPlayerImage} />
                <StatCard title="Clean Sheets" value={0} image={cleanSheets} />
                <StatCard title="Goals" value={5} image={goals} />
                <StatCard title="Assists" value={1} image={assists} />
                <StatCard title="Red Cards" value={2} image={redCards} />
                <StatCard title="Yellow Cards" value={3} image={yellowCards} />
                {/* ...more stats */}
            </Grid.Container>

            {/* Player Team Matches */}
            <Grid.Container 
                css={{
                    width: "100%",
                    justifyContent: "center",
                }}
                className="player-matches"
            >
                {/* Group and Match Icons */}
                <Text>Group A</Text>
                {/* You would map over your match data and create these dynamically */}
                {/* <MatchIcon matchNumber={1} active={true} />
                <MatchIcon matchNumber={2} active={false} />
                <MatchIcon matchNumber={3} active={false} /> */}
            </Grid.Container>
        </Grid.Container>
    </Modal.Body>
</Modal>

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
              {!selectedPlayers[5] && <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(5)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[5]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[5])?playersData.find(p => p[0] === selectedPlayers[5])[3]:"ATTACKER"}</Text>
              </div>
         
            </div>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              {!selectedPlayers[4] && <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(4)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[4]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[4])?playersData.find(p => p[0] === selectedPlayers[4])[3]:"ATTACKER"}</Text>
              </div>
            </div>
          </Grid.Container>
          <div className="player-jersey midfielder-1">
              <img src={JerseyImage} alt="Jersey" />
              {!selectedPlayers[3] &&<img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '50%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(3)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[3]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[3])?playersData.find(p => p[0] === selectedPlayers[3])[3]:"MIDFIELDER"}</Text>
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
              {!selectedPlayers[2] &&<img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(2)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[2]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[2])?playersData.find(p => p[0] === selectedPlayers[2])[3]:"DEFENDER"}</Text>
              </div>
            </div>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              {!selectedPlayers[1] &&<img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(1)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[1]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[1])?playersData.find(p => p[0] === selectedPlayers[1])[3]:"DEFENDER"}</Text>
              </div>
            </div>
          </Grid.Container>
          <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              {!selectedPlayers[0] &&<img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(0)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[0]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[0])?playersData.find(p => p[0] === selectedPlayers[0])[3]:"GOALKEEPER"}</Text>
              </div>
            </div>
        </>}

        {formationState==2 && <>
          <div className="player-jersey midfielder-1">
              <img src={JerseyImage} alt="Jersey" />
              {!selectedPlayers[5] &&<img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '50%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(5)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[5]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[5])?playersData.find(p => p[0] === selectedPlayers[5])[3]:"ATTACKER"}</Text>
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
              {!selectedPlayers[4] && <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(4)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[4]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[4])?playersData.find(p => p[0] === selectedPlayers[4])[3]:"MIDFIELDER"}</Text>
              </div>
            </div>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              {!selectedPlayers[3] &&<img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(3)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[3]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[3])?playersData.find(p => p[0] === selectedPlayers[3])[3]:"MIDFIELDER"}</Text>
              </div>
            </div>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              {!selectedPlayers[2] &&<img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(2)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[2]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[2])?playersData.find(p => p[0] === selectedPlayers[2])[3]:"MIDFIELDER"}</Text>
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
              {!selectedPlayers[1] &&<img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(1)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[1]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[1])?playersData.find(p => p[0] === selectedPlayers[1])[3]:"DEFENDER"}</Text>
              </div>
            </div>
          </Grid.Container>
          <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              {!selectedPlayers[0] &&<img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(0)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[0]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[0])?playersData.find(p => p[0] === selectedPlayers[0])[3]:"GOALKEEPER"}</Text>
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
              {!selectedPlayers[5] &&<img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(5)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[5]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[5])?playersData.find(p => p[0] === selectedPlayers[5])[3]:"ATTACKER"}</Text>
              </div>
            </div>
          <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              {!selectedPlayers[4] &&<img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(4)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[4]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[4])?playersData.find(p => p[0] === selectedPlayers[4])[3]:"MIDFIELDER"}</Text>
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
              {!selectedPlayers[3] &&<img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(3)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[3]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[3])?playersData.find(p => p[0] === selectedPlayers[3])[3]:"DEFENDER"}</Text>
              </div>
            </div>
            <div className="player-jersey">
            <img src={JerseyImage} alt="Jersey" />
            {!selectedPlayers[2] && <img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(2)} /> }             <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[2]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[2])?playersData.find(p => p[0] === selectedPlayers[2])[3]:"DEFENDER"}</Text>
              </div>
            </div>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              {!selectedPlayers[1] &&<img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(1)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[1]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[1])?playersData.find(p => p[0] === selectedPlayers[1])[3]:"DEFENDER"}</Text>
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
              {!selectedPlayers[0] &&<img src={addPlayerButton} alt="Add Player" style={{
          position: 'absolute',
          top: '40%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          width:"25px",
          height:"25px"
        }} onClick={() => setSelectedJersey(0)} />}
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[0]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[0])?playersData.find(p => p[0] === selectedPlayers[0])[3]:"GOALKEEPER"}</Text>
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
                        {/* {currentPage < Math.ceil(playersData.length / playersPerPage) && (
        <button className="next-page-button" onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
      )}
      {currentPage > 1 && (
        <button className="next-page-button" onClick={() => handlePageChange(currentPage - 1)}>Previous Page</button>
      )} */}
                        </div>
                        <button className="submit-button" onClick={handleSubmit}>Submit Team</button>
                    </Col>
                </Grid>
            </Row>
        </Grid.Container>
       }
    </div>
);
}