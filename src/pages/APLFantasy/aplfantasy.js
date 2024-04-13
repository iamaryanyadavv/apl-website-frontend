import { Grid, Input, Text, Dropdown, Col, Row } from "@nextui-org/react";
import React, { useState } from "react";
import './aplfantasy.css';
import JerseyImage from "./jersey template 1.png"
import FanUpLogo from "./fanup_logo-white 1.png"
import APLTEXT from "./apl.png"
import FANTASYTEXT from "./Fantasy Game.png"

export default function APLFantasy() {
    const playersData =  [{
        name: "Rivan Sengupta",
        price: "15 MIL",
        position: "Defender"
    },
    {
        name: "Zahaan Shapoorjee",
        price: "150 MIL",
        position: "Defender"
    },
    {
        name: "Aryan Yadav",
        price: "150 MIL",
        position: "Defender"
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

const handleSelectPlayer = (playerName) => {
    if (selectedPlayers.length < 6) {
        setSelectedPlayers([...selectedPlayers, playerName]);
    } else {
        alert('You can only select 6 players');
    }
};

const renderDropdown = () => {
    return (
        <Dropdown>
            <Dropdown.Button flat>{'Select Player'}</Dropdown.Button>
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
                            {selectedPlayers.map((playerName, index) => (
                                <div key={index} className="player-jersey">
                                    <img src={JerseyImage} alt="Jersey" />
                                    <Text h4 css={{ position: 'absolute', bottom: 0 }}>{playerName}</Text>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Grid>
                <Grid xs={12} md={4} css={{ marginTop: '2%' }}>
                    <Col className="rightcol">
                        <div className="sponsor-section">
                            <Text className="sponsortext" center>{'Sponsored by'}</Text>
                            <img src={FanUpLogo} alt="FanUp Logo" className="fanup-logo"/>
                        </div>
                        <div className="sidebar">
                        <Text h3>{'Money Left: $140M'}</Text>
                        {renderDropdown()}
                        <Text h6>{'Selected Players:'}</Text>
                        <ul>
                            {selectedPlayers.map((player, index) => {
                            // Find the player data to get their position
                            const playerData = playersData.find(p => p.name === player);
                            return (
                                <li key={index} className="player-list-item">
                                <span className="player-name">{player}</span>
                                {playerData && <span className="player-position">{playerData.position}</span>}
                                </li>
                            );
                            })}
                        </ul>
                        </div>
                    </Col>
                </Grid>
            </Row>
        </Grid.Container>
    </div>
);
}