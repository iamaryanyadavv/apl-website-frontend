import { Grid, Input, Text, Dropdown, Col, Row } from "@nextui-org/react";
import React, { useState } from "react";
import './aplfantasy.css';
import JerseyImage from "./jersey template 1.png"
import FanUpLogo from "./fanup_logo-white 1.png"
import APLTEXT from "./apl.png"
import FANTASYTEXT from "./Fantasy Game.png"
import { Collapse, Checkbox } from "@nextui-org/react";
import { color } from "@chakra-ui/react";

export default function APLFantasy() {
  const genderOptions = ['Cis Man', 'Non Cis Man'];
  const positionOptions = ['Defender', 'Midfielder', 'Attacker'];
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
    gender: {
      cisMan: false,
      nonCisMan: false,
    },
    position: {
      defender: false,
      midfielder: false,
      attacker: false,
    },
  });

  const handleFilterChange = (filterType, filterName) => {
    const keyName = filterName.toLowerCase();
    setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: {
            ...prevFilters[filterType],
            [keyName]: !prevFilters[filterType][keyName]
        }
    }));
};

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
const [formation, setFormation] = useState(1)

const handleSelectPlayer = (playerName) => {
    if (selectedPlayers.length < 6) {
        setSelectedPlayers([...selectedPlayers, playerName]);
    } else {
        alert('You can only select 6 players');
    }
};

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
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontWeight:"800"

  };



  const playerNameStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align text to the left
    flex: '1', // Take up the full width of the card minus the button
    color: "#484848",
    fontFamily: 'Montserrat',
    fontWeight: "800",
    marginBottom: '5px' // Adds space between the name and the position
  };
  
  const playerPositionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align text to the left
    flex: '1', // Take up the full width of the card minus the button
    color: "#484848",
    fontFamily: 'Montserrat',
    fontWeight: "500"
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
      <div key={index} style={playerCardStyle}>
        <div style={playerNameStyle}>{player.name}</div>
        <div style={playerPositionStyle}>{player.position}</div>
        <div style={playerNameStyle}>{player.price}</div>
        <button style={addButtonStyle} onClick={() => addPlayer(player.name)}>
          Add Player
        </button>
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
                aria-label="Single selection actions"
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
        {formation==1 && <>
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
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[4]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-name-text" color="black">{playersData.find(p => p.name === selectedPlayers[4])?.price}</Text>
              </div>
            </div>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[5]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-name-text" color="black">{playersData.find(p => p.name === selectedPlayers[5])?.price}</Text>
              </div>
            </div>
          </Grid.Container>
          <div className="player-jersey midfielder-1">
              <img src={JerseyImage} alt="Jersey" />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[2]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-name-text" color="black">{playersData.find(p => p.name === selectedPlayers[2])?.price}</Text>
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
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[0]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-name-text" color="black">{playersData.find(p => p.name === selectedPlayers[0])?.price}</Text>
              </div>
            </div>
            <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[1]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-name-text" color="black">{playersData.find(p => p.name === selectedPlayers[1])?.price}</Text>
              </div>
            </div>
          </Grid.Container>
          <div className="player-jersey">
              <img src={JerseyImage} alt="Jersey" />
              <div className="player-name-bg">
                <Text className="player-name-text">{selectedPlayers[3]}</Text>
              </div>
              <div className="player-price-bg">
                <Text className="player-name-text" color="black">{playersData.find(p => p.name === selectedPlayers[3])?.price}</Text>
              </div>
            </div>
        </>}


    </div>
  </Col>
</Grid>

                <Grid xs={12} md={4} css={{ marginTop: '1%' }}>
                    <Col className="rightcol">
                        <div className="sponsor-section">
                            <Text className="sponsortext" center>{'Sponsored by'}</Text>
                            <img src={FanUpLogo} alt="FanUp Logo" className="fanup-logo"/>
                        </div>
                        <div className="sidebar">
                        <Text className="money-left">{'Money Left: $140M'}</Text>

                        <Collapse.Group color={"black"}  css={{width:"100%", gap:"2"}}>
                        <Collapse title="Gender"  css={{width:"100%"}}>
                          {genderOptions.map((option) => (
                            <Checkbox
                              key={option}
                              isSelected={filters.gender[option.toLowerCase().replace(' ', '')]}
                              onChange={() => handleFilterChange('gender', option)}
                            >
                              {option}
                            </Checkbox>
                          ))}
                        </Collapse>
                        <Collapse title="Position">
                          {positionOptions.map((option) => (
                           <Checkbox
                           key={option}
                           isSelected={filters.position[option.toLowerCase()]}
                           onChange={() => handleFilterChange('position', option)}
                       >
                           {option}
                       </Checkbox>
                          ))}
                        </Collapse>
                      </Collapse.Group>
                        {renderPlayersList()}
                      
                        </div>
                    </Col>
                </Grid>
            </Row>
        </Grid.Container>
    </div>
);
}