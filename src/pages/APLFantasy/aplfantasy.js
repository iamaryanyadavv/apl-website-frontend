import { Grid, Input, Text, Dropdown } from "@nextui-org/react";
import React, { useState } from "react";
import './aplfantasy.css';
import JerseyImage from "./jersey template 1.png"
import FanUpLogo from "./fanup_logo-white 1.png"

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
    
    // This state will hold the selected players
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    // Handle selecting a player from the dropdown
    const handleSelectPlayer = (playerName) => {
        // Prevent adding more players than the formation allows
        if (selectedPlayers.length < 11) {
            setSelectedPlayers([...selectedPlayers, playerName]);
        } else {
            // Handle the case when more than 11 players are selected
            alert('You can only select 11 players');
        }
    };

    // Render a dropdown with player names
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
            <img src={FanUpLogo} alt="FanUp Logo" className="fanup-logo"/>
            <Grid.Container gap={2}>
                {/* Your football field with player jerseys */}
                <Grid xs={12} sm={8}>
                    <div className="football-field">
                        {selectedPlayers.map((playerName, index) => (
                            <div key={index} className="player-jersey">
                                <img src={JerseyImage} alt="Jersey" />
                                <Text h4 css={{ position: 'absolute', bottom: 0 }}>{playerName}</Text>
                            </div>
                        ))}
                    </div>
                </Grid>
                
                {/* The sidebar for selecting players */}
                <Grid xs={12} sm={4}>
                    <div className="sidebar">
                        <Text h3>{'Money Left: $140M'}</Text>
                        {renderDropdown()}
                        <Text h6>{'Selected Players:'}</Text>
                        <ul>
                            {selectedPlayers.map((playerName, index) => (
                                <li key={index}>{playerName}</li>
                            ))}
                        </ul>
                    </div>
                </Grid>
            </Grid.Container>
        </div>
    );
}
