import { Grid, Input, Text, Dropdown, Col, Row, Modal, Button, Image , Loading} from "@nextui-org/react";
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
import axios from "axios";
import jwt_decode from "jwt-decode";
import FantasyHelpLogo from '../../assets/images/FantasyHelp.png'
import FantasyHelpCross from '../../assets/images/FantasyRulesCross.png'
import T2 from "./ASSISTS.png"
import T3 from "./ASSISTS.png"
import T4 from "./ASSISTS.png"
import T5 from "./ASSISTS.png"
import captain from "./captain.png"
import viceCaptain from "./vicecaptain.png"


export default function APLFantasy() {
    const genderOptions = ['Male','Female' ,'Non-Cis Man'];
    const [apl7players, setApl7players] = useState([])
    const positionOptions = ['Defender', 'Midfielder', 'Attacker'];
    const formationOptions = ['1-3-1', '2-1-2', '3-1-1'];
    const priceOptions = ['10M-19M', '20M-29M', '30M-39M','40M']
    const [wrongPosition, setWrongPosition] = useState("")
    const [playersData, setPlayerData] = useState([])
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [user, setUser] = useState({})
    const [showFantasyHelp, setShowFantasyHelp] = useState(false)
    const [selectedJersey, setSelectedJersey] = useState(null);
    const[currentPlayers, setCurrentPlayers] = useState([])
    const [showTutorial, setShowTutorial] = useState(false)
    const [tutorialIndex, setTutorialIndex] = useState(0)
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [teamcaptain, setTeamCaptain] = useState("")
    const [vicecaptain, setViceCaptain] = useState("")
    const [isLoading, setIsLoading] = useState(true);  // State to handle image loading
    const [fantasyCaptain, setFantasyCaptain] = useState("")
    const [fantasyViceCaptain, setFantasyViceCaptain] = useState("")


    const tutorialItems = [
        {
            image: T2,
            text: 'Search & filter for exactly what you are looking for. No need to scroll endlessly anymore.',
        },
        {
            image: T3,
            text: "Unpublish items when sold so people don't keep spamming you. Edit if you made a mistake.",
        },
        {
            image: T4,
            text: `"Can someone send rasananda number?" "What's the THC website?" We have all of it right here.`,
        },
        {
            image: T5,
            text: "Enable notifications so you don't miss a single item! You will only be notified of items being posted.",
        },
    ]

    const formationStructures = {
        "1-3-1": [0, 1, 2, 3, 4, 5],
        "2-1-2": [0, 1, 2, 3, 4, 5],
        "3-1-1": [0, 1, 2, 3, 4, 5]
    };

    const playerRoles = {
        "1-3-1": ['Goalkeeper', 'Defender', 'Midfield', 'Midfield', 'Midfield', 'Attack'],
        "2-1-2": ['Goalkeeper', 'Defender', 'Defender', 'Midfield', 'Attack', 'Attack'],
        "3-1-1": ['Goalkeeper', 'Defender', 'Defender', 'Defender', 'Midfield', 'Attack']
    };

    const [budget, setBudget] = useState(100); // Let's say the budget is 100 million dollars

    const [currentPage, setCurrentPage] = useState(1);
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [showPositionModal, setShowPositionModal] = useState(false);
    const [showRulesModal, setShowRulesModal] = useState(false);
    const [showSelectJersey, setShowSelectJersey] = useState(false);




    const playersPerPage = 10;
    const addPlayer = (playerName) => {
        if (selectedJersey != null) {
            const newSelectedPlayers = [...selectedPlayers];
            const playerData = playersData.find(p => p[0] === playerName);
            const playerCost = parseInt(playerData[3].replace('M', '')); // assuming the cost is in the format "XXM"
    
            if (budget - playerCost >= 0) { // Check if budget allows adding this player
                const requiredPosition = playerRoles[filters.formation][selectedJersey];
                if (playerData[2].startsWith(requiredPosition) || requiredPosition === 'All') {
                    newSelectedPlayers[selectedJersey] = playerName;
                    setSelectedPlayers(newSelectedPlayers);
                    setBudget(budget - playerCost); // Deduct the player's cost from the budget
                    setSelectedJersey(null);
                } else {
                    setWrongPosition(requiredPosition);
                    setShowPositionModal(true);
                }
            } else {
                // alert("Not enough budget to add this player.");
                setShowRulesModal(true)
            }
        } else {
            setShowSelectJersey(true)
            
        }
    };
    
    const [filters, setFilters] = useState({
        gender: 'Male',
        position: '',
        formation: '1-3-1', // set default formation to '2-1-2'
        price: '10M-20M'
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
            setBudget(100)
        }
    };
    const handleGenderChange = (newGender) => {
        if (filters.gender !== newGender) {
            setFilters({
                ...filters,
                gender: newGender
            });
            // Reset selected players when formation changes
            setSelectedPlayers([]);
        }
    };

    const handlePositionChange = (newPosition) => {
        if (filters.gender !== newPosition) {
            setFilters({
                ...filters,
                position: newPosition
            });
            // Reset selected players when formation changes
        }
    };

    const handlePriceChange = (newPrice) => {
        if (filters.price !== newPrice) {
            setFilters({
                ...filters,
                price: newPrice
            });
            // Reset selected players when formation changes
            setSelectedPlayers([]);
        }
    };

    useEffect(() => {
        // Function to apply filters
        const applyFilters = (players) => {
            let filteredPlayers = players;
            // Filter by gender if specified
            if (filters.gender!=="") {
                filteredPlayers = filteredPlayers.filter(player =>
                    player[17]=== filters.gender
                );
            }
    
            // Filter by position if specified
            if (filters.position!=="") {
                filteredPlayers = filteredPlayers.filter(player =>
                    player[2]=== filters.position
                );
            }
    
            // Filter by price (you will need to adjust the logic to parse and compare the price range)
            if (filters.price) {
                const priceRange = filters.price.split('-');
                const lowerBound = parseInt(priceRange[0]);
                const upperBound = priceRange[1] ? parseInt(priceRange[1]) : Infinity;
    
                filteredPlayers = filteredPlayers.filter(player => {
                    const price = parseInt(player[3].replace('M', ''));
                    return price >= lowerBound && price <= upperBound;
                });
            }
    
            return filteredPlayers;
        };
    
        // Apply filters to playersData
        console.log(playersData)
        const filteredPlayers = applyFilters(playersData);
        setCurrentPlayers(filteredPlayers);
        console.log(currentPlayers)
    }, [filters, playersData]);  // Dependencies include filters and the base playersData
    
    useEffect(() => {
    }, [currentPlayers]);
    // This useEffect ensures that the default formation '2-1-2' is set on component mount
    useEffect(() => {
        setFilters(f => ({ ...f, formation: '1-3-1' }));
    }, []);


    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [formationState, setFormationState] = useState(1);

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
            fontWeight: "800",
            // height:"10%",
            width: "100%",
            fontSize: "14px"
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
            letterSpacing: "0.13em",
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
            marginBottom: '5px',// Adds space between the name and the position
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
                    <div key={index} style={playerCardStyle} onClick={() => addPlayer(player[0])}>
                        <div style={{ display: "flex", flexDirection: "column", columnGap: "0px" }}>

                            <div style={{ display: "flex", flexDirection: "row", columnGap: "0px" }}>

                                <div style={playerNameStyle}>{player[0]}</div>
                                <img
                                    style={{ height: "12px", margin: "2px", zIndex: "1000" }}
                                    onClick={(e) => {
                                        e.stopPropagation();  // Prevent the addPlayer event from firing
                                        setSelectedPlayer(player);
                                        setShowInfoModal(true);
                                    }}
                                    src={infoIcon} alt="Jersey"
                                />
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
    useEffect(() => {
        console.log(`Captain: ${teamcaptain}, Vice Captain: ${vicecaptain}`);
      }, [teamcaptain, vicecaptain]);

    const handleSubmit = () => {
        // Assuming `selectedPlayers` is an array of player names you gathered from your selection logic
        const payload = {
            name: 'Team Name', // You would need a mechanism to capture and store the team name
            player1: selectedPlayers[0],
            player2: selectedPlayers[1],
            player3: selectedPlayers[2],
            player4: selectedPlayers[3],
            player5: selectedPlayers[4],
            player6: selectedPlayers[5],
            captain: teamcaptain,
            viceCaptain: vicecaptain
        };

        axios.post('https://aplapi.onrender.com/fantasy/submit', payload) // Adjust the URL to wherever your server is hosted
            .then(response => {
                setShowConfirmModal(true)
                console.log(response.data); // Handling the response from your server
            })
            .catch(error => {
                console.error('Submission failed:', error);
                alert('Submission failed. Please try again.');
            });
    };

    const StatCard = ({ title, value, image }) => (
        <Grid css={{
            textAlign: "center",
            display: "flex", // Ensure it's using flexbox
            flexDirection: "column", // Align children vertically
            height: "100%", // Fill the height
            flex: "1", // Allow the card to expand
            padding: "10px",
            justifyContent: 'center'
        }}>
            <div css={{
                flex: "60%", // Image takes 60% of the card's height now using flex basis
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Image css={{
                    height: 100,
                    width: 200
                }} src={image} />
            </div>
            <div css={{// Adjust title section
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text className="statcard-title">{title}</Text>
            </div>
            <div css={{ // Adjust value section
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text>{value}</Text>
            </div>
        </Grid>
    );
    // Function to fetch team data
    const fetchTeamData = async () => {
        try {
            const response = await fetch('https://aplapi.onrender.com/seasons/apl7/teamdata');
            const data = await response.json();
            const response2 = await fetch('https://aplapi.onrender.com/seasons/apl7/playerdata');
            const data2 = await response2.json();
            console.log(data2.values)
            setApl7players(data2.values)
            fetchPlayersData(data);
        } catch (error) {
            console.error('Failed to fetch team data:', error);
        }
    };

    // Function to fetch player data and match team logos
    const fetchPlayersData = async (teams) => {
        try {
            const response = await fetch('https://aplapi.onrender.com/fantasy/apl7/playerdata');
            const data = await response.json();
            const players = data.values.slice(1); // Assuming data.values[0] contains headers or unwanted data
            const updatedPlayers = players.map(player => {
                // console.log(teams)
                // console.log(players)
                const team = teams.find(team => team[2] === player[1]); // Match team name
                if (team) {
                    // console.log('FOund team', team)
                    player[5] = team[0]; // Update player data with team logo from team data
                }
                return player;
            });
            // console.log(updatedPlayers)
            setPlayerData(updatedPlayers);
            setCurrentPlayers(updatedPlayers)
        } catch (error) {
            console.error('Failed to fetch players data:', error);
        }
    };

    // funciton to handle callback for google sign in
    function handleCallbackresponse(response) {

        var userObject = jwt_decode(response.credential)
        document.getElementById("GoogleButton").hidden = true;
        setUser(userObject)
    }

    useEffect(() => {
        fetchTeamData();
        window.google.accounts.id.initialize({
            client_id: "307601456989-3visvqebfkepaqi9b86e95pgn6bd8qfb.apps.googleusercontent.com",
            callback: handleCallbackresponse
        });

        window.google.accounts.id.renderButton(
            document.getElementById("GoogleButton"),
            { theme: 'outlined', size: 'large', shape: 'pill', }
        );
    }, [])


    return (
        <div className="fantasy-game-container">

            {currentPlayers && <Grid.Container
                css={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px'  // Adjust gap size here to control the spacing between columns
                }}>

                {Object.keys(user).length === 0 ?
                    <Grid.Container
                        css={{
                            jc: 'center',
                            alignitems: 'center',
                            padding: '128px 0px 256px 0px',
                            justifyContent:"center"
                        }}>
                        <Col css={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text className="fantasytitle">APL FANTASY GAME</Text>
                            <Text
                                className="apl-font"
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    marginBottom: '24px'
                                }}>
                                Login with your ashoka email and start making your own fantasy APL team!
                            </Text>
                            <div className="GoogleButton" id='GoogleButton'></div>
                        </Col>
                    </Grid.Container>
                    :
                    <Row>
                        <Grid xs={12} md={8} css={{ padding: '0 10px' }}>
                            <Col className="leftcol">
                                <Row className="title-container" css={{
                                    display:"flex",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign:"center"
                                }}>
                                    <Text  css={{
                                        textAlign:"center",
                                    display:"flex",
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }} className="fantasytitle">APL FANTASY GAME</Text>
                                    {showFantasyHelp ?
                                        <Image
                                            src={FantasyHelpCross}
                                            height={'80'}
                                            width={'80'}
                                            css={{
                                                '&:hover': {
                                                    cursor: 'pointer'
                                                }
                                            }}
                                            onClick={() => {
                                                setShowFantasyHelp(!showFantasyHelp)
                                            }}
                                        />
                                        :
                                        <Image
                                            src={FantasyHelpLogo}
                                            height={'80'}
                                            width={'80'}
                                            css={{
                                                '&:hover': {
                                                    cursor: 'pointer'
                                                }
                                            }}
                                            onClick={() => {
                                                setShowFantasyHelp(!showFantasyHelp)
                                            }}
                                        />
                                    }
                                </Row>
                                {showFantasyHelp ?
                                    <Grid.Container css={{
                                        justifyContent: 'center',
                                        borderStyle: 'solid',
                                        borderWidth: '8px',
                                        borderColor: '#1EA463',
                                        backgroundColor: '#D9D9D9',
                                        paddingBottom: '16px'
                                    }}>
                                        <Text
                                            className="rules-text"
                                            css={{
                                                fontSize: '$4xl',
                                                color: '#484848',
                                                margin: '24px 0px 12px 0px'
                                            }}
                                        >
                                            Rules
                                        </Text>
                                        <Col css={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 16,
                                            alignItems: 'start',
                                            justifyContent: 'center',
                                            width: '100%',
                                            margin: '0px 24px',
                                        }}>
                                            <Text
                                                className="rules-text2"
                                                css={{
                                                    color: '#484848',
                                                    fontSize: '$2xl'
                                                }}>
                                                1. Total Sports: 12 sports available for selection.
                                            </Text>
                                            <Text
                                                className="rules-text2"
                                                css={{
                                                    color: '#484848',
                                                    fontSize: '$2xl'
                                                }}>
                                                2. Athlete Selection: Pick 1 athlete from each sport
                                            </Text>
                                            <Text
                                                className="rules-text2"
                                                css={{
                                                    color: '#484848',
                                                    fontSize: '$2xl'
                                                }}>
                                                3. Team Composition: Ensure a mix of 6 cisgender and 6 non-cisgender athletes.
                                            </Text>
                                            <Text
                                                className="rules-text2"
                                                css={{
                                                    color: '#484848',
                                                    fontSize: '$2xl'
                                                }}>
                                                4. Budget Limit: Each team has a budget of ‘X’.
                                            </Text>
                                            <Text
                                                className="rules-text2"
                                                css={{
                                                    color: '#484848',
                                                    fontSize: '$2xl'
                                                }}>
                                                5. Leadership Roles: Choose 1 captain (x2 points) and 1 vice captain (x1.5 points), each of different genders.
                                            </Text>
                                            <Text
                                                className="rules-text2"
                                                css={{
                                                    color: '#484848',
                                                    fontSize: '$2xl'
                                                }}>
                                                6. Submission: Submit your team as a one-time entry.
                                            </Text>
                                            <Text
                                                className="rules-text2"
                                                css={{
                                                    color: '#484848',
                                                    fontSize: '$2xl'
                                                }}>
                                                7. Points System: Refer to the provided link for detailed point scoring.
                                            </Text>
                                        </Col>
                                    </Grid.Container>
                                    :
                                    <Grid.Container css={{
                                        justifyContent: 'center'
                                    }}>
                                        <Row css={{
                                            width: 'max-content',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 8,
                                            marginBottom: '16px'
                                        }}>
                                            <Image
                                                src={user.picture}
                                                css={{
                                                    borderRadius: '48px',
                                                    height: '64px',
                                                    width: '64px'
                                                }}
                                            />
                                            <Text
                                                className="apl-font"
                                                css={{
                                                    fontSize: '$xl',
                                                    fontWeight: '$semibold',
                                                    textAlign: 'center'
                                                }}>
                                                {user.name}'s Team
                                            </Text>
                                        </Row>
                  
                                        <div className="football-field">
                                   

                                        <Modal
                open={showTutorial}
                preventClose
                aria-label="tutorial-modal"
            >
                <Grid.Container css={{
                    jc: 'center',
                    alignItems: '',
                    padding: '12px 0px',
                }}>
                    <Col css={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Text css={{
                            '@xsMin': {
                                fontSize: '$xl'
                            },
                            '@xsMax': {
                                fontSize: '$lg'
                            },
                            fontWeight: '$medium',
                            paddingBottom: '6px',
                            borderStyle: 'solid',
                            borderColor: '$gray600',
                            borderWidth: '0px 0px 1px 0px',
                            width: 318,
                            marginBottom: '12px'
                        }}>
                            Welcome To UniSwap!
                        </Text>

                        <Col css={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Image
                                src={tutorialItems[tutorialIndex].image}
                                width={320}
                                height={358}
                                css={{
                                    objectFit: 'cover',
                                    borderRadius: '0px 0px 12px 12px'
                                }}
                            />

                            <Row css={{
                                display: 'flex',
                                flexDirection: 'row',
                                jc: 'center',
                                width: 'max-content',
                                gap: 4,
                                padding: '0px 8px',
                                borderRadius: '8px',
                                backgroundColor: '$gray300',
                                alignItems: 'center',
                                marginTop: '12px',
                            }}>
                                {tutorialItems.map((item, index) => (
                                    <Text key={index} css={{
                                        color: index === tutorialIndex ? '$red600' : '$gray600',
                                        width: 'max-content',
                                        lineHeight: '1.1'
                                    }}>
                                        •
                                    </Text>
                                ))}
                            </Row>

                            <Text css={{
                                fontSize: '$md',
                                fontWeight: '$medium',
                                jc: 'center',
                                alignItems: 'center',
                                padding: '8px 16px 6px 16px'
                            }}>
                                {tutorialItems[tutorialIndex].text}
                            </Text>


                            {tutorialIndex === 0 &&
                                <Button auto light color={'error'}
                                    onClick={() => {
                                        setTutorialIndex(prev => prev + 1)
                                    }}
                                >
                                    Next →
                                </Button>
                            }
                            {tutorialIndex >= 1 && tutorialIndex <= 2 &&
                                <Row css={{
                                    width: 'max-content',
                                    jc: 'center',
                                }}>
                                    <Button auto light color={'default'}
                                        onClick={() => {
                                            setTutorialIndex(prev => prev - 1)
                                        }}
                                    >
                                        ← Previous
                                    </Button>
                                    <Button auto light color={'error'}
                                        onClick={() => {
                                            setTutorialIndex(prev => prev + 1)
                                        }}
                                    >
                                        Next →
                                    </Button>
                                </Row>
                            }
                            {tutorialIndex === 3 &&
                                <Row css={{
                                    width: 'max-content',
                                    jc: 'center',
                                }}>
                                    <Button auto light color={'default'}
                                        onClick={() => {
                                            setTutorialIndex(prev => prev - 1)
                                        }}
                                    >
                                        ← Previous
                                    </Button>
                                    <Button auto light color={'error'}
                                        onClick={() => {
                                            setShowTutorial(false)
                                        }}
                                    >
                                        Enable Notifications ✔️
                                    </Button>
                                </Row>
                            }

                        </Col>

                    </Col>
                </Grid.Container>
            </Modal>
                                            <Modal
                                    open={showPositionModal}
                                    closeButton
                                    onClose={()=>{setShowPositionModal(false)}}
                                    >
                                            <Modal.Header
                                            css={{
                                                paddingTop: '0px',
                                            }}>
                                                <Col>
                                                    <Text 
                                                    css={{
                                                        textAlign: 'center',
                                                        fontSize: '$3xl',
                                                        fontWeight: '$bold',
                                                        color: '$red600',
                                                        borderStyle: 'solid',
                                                        borderWidth: '0px 0px 1px 0px',
                                                        borderColor: '$gray800'
                                                    }}>
                                                        Error!
                                                    </Text>
                                                    
                                                </Col>
                                            </Modal.Header>
                                            <Modal.Body
                                            css={{
                                                paddingTop: '0px'
                                            }}>
                                                <Text 
                                                css={{
                                                    textAlign: 'center',
                                                    fontSize: '$xl',
                                                    fontWeight: '$bold',
                                                    color: 'white',
                                                }}>
                                                    Please choose a {wrongPosition}
                                                </Text>
                                            </Modal.Body>
                                            
                                    </Modal>

                                    <Modal
                                    open={showSelectJersey}
                                    closeButton
                                    onClose={()=>{setShowSelectJersey(false)}}
                                    >
                                            <Modal.Header
                                            css={{
                                                paddingTop: '0px',
                                            }}>
                                                <Col>
                                                    <Text 
                                                    css={{
                                                        textAlign: 'center',
                                                        fontSize: '$3xl',
                                                        fontWeight: '$bold',
                                                        color: '$red600',
                                                        borderStyle: 'solid',
                                                        borderWidth: '0px 0px 1px 0px',
                                                        borderColor: '$gray800'
                                                    }}>
                                                        Error!
                                                    </Text>
                                                    
                                                </Col>
                                            </Modal.Header>
                                            <Modal.Body
                                            css={{
                                                paddingTop: '0px'
                                            }}>
                                                <Text 
                                                css={{
                                                    textAlign: 'center',
                                                    fontSize: '$xl',
                                                    fontWeight: '$bold',
                                                    color: 'white',
                                                }}>
                                                    Please select a jersey icon before choosing a player!
                                                </Text>
                                            </Modal.Body>
                                            
                                    </Modal>






                                    <Modal
                                    open={showConfirmModal}
                                    closeButton
                                    onClose={()=>{setShowConfirmModal(false)}}
                                    >
                                            <Modal.Header
                                            css={{
                                                paddingTop: '0px',
                                            }}>
                                                <Col>
                                                    <Text 
                                                    css={{
                                                        textAlign: 'center',
                                                        fontSize: '$3xl',
                                                        fontWeight: '$bold',
                                                        color: '$green600',
                                                        borderStyle: 'solid',
                                                        borderWidth: '0px 0px 1px 0px',
                                                        borderColor: '$gray800'
                                                    }}>
                                                        Success!
                                                    </Text>
                                                    
                                                </Col>
                                            </Modal.Header>
                                            <Modal.Body
                                            css={{
                                                paddingTop: '0px'
                                            }}>
                                                <Text 
                                                css={{
                                                    textAlign: 'center',
                                                    fontSize: '$xl',
                                                    fontWeight: '$bold',
                                                    color: 'white',
                                                }}>
                                                    Fantasy team saved successfully!
                                                </Text>
                                            </Modal.Body>
                                            
                                    </Modal>
                                    <Modal
                                    open={showRulesModal}
                                    closeButton
                                    onClose={()=>{setShowRulesModal(false)}}
                                    >
                                            <Modal.Header
                                            css={{
                                                paddingTop: '0px',
                                            }}>
                                                <Col>
                                                    <Text 
                                                    css={{
                                                        textAlign: 'center',
                                                        fontSize: '$3xl',
                                                        fontWeight: '$bold',
                                                        color: '$red600',
                                                        borderStyle: 'solid',
                                                        borderWidth: '0px 0px 1px 0px',
                                                        borderColor: '$gray800'
                                                    }}>
                                                        Error!
                                                    </Text>
                                                    
                                                </Col>
                                            </Modal.Header>
                                            <Modal.Body
                                            css={{
                                                paddingTop: '0px'
                                            }}>
                                                <Text 
                                                css={{
                                                    textAlign: 'center',
                                                    fontSize: '$xl',
                                                    fontWeight: '$bold',
                                                    color: 'white',
                                                }}>
                                                    You have gone over your total budget!
                                                </Text>
                                            </Modal.Body>
                                            
                                    </Modal>


                                            <Modal
                                                closeButton
                                                open={showInfoModal}
                                                onClose={() => setShowInfoModal(false)}
                                                className="info-modal"
                                                width="40%"
                                                height="100%"
                                            >
                                                <Modal.Header className="modal-header">
                                                    {/* Close button is provided by the Modal itself */}
                                                </Modal.Header>

                                                {selectedPlayer && <Modal.Body className="player-info-modal">
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
                                                                marginBottom: "10px", // Space between the info row and stats
                                                            }}
                                                        >
                                                            <Grid
                                                                css={{
                                                                    display: "flex",
                                                                    flexDirection:"row",
                                                                    justifyContent: "center", // Adjust to match design
                                                                    alignItems: "center",
                                                                    gap:"20px",
                                                                    width:"95%"
                                                                }}
                                                            >
                                                                <Image
                                                                
                                                                referrerpolicy="no-referrer" alt="Player Image" className="player-modal-image"
                                                                src={selectedPlayer[4].split('/')[5]!=null?`https://lh3.google.com/u/0/d/${selectedPlayer[4].split('/')[5]}`:apl7players.find(p=>p[1]==selectedPlayer[0])[0]}
                                                                        css={{display:"flex",alignItems:"center", justifyContent:"center"}}
                                                                        showSkeleton
                                                                        />
                                                                <Grid.Container css={{ flexDirection: "column", alignItems: "center", }}>
                                                                    <Grid.Container css={{ flexDirection: "row", alignItems: "center", justifyContent: "left" }}>

                                                                        <img
                                                                        src={selectedPlayer[5]} 
                                                                        className="player-modal-team-logo" 
                                                                        alt="Player Image"
                                                                        css={{ maxWidth: "100%", display: isLoading ? "none" : "block" }}
                                                                        />

                                                                        <Text className="player-modal-team-name">{selectedPlayer[1]}</Text>

                                                                    </Grid.Container>

                                                                    <Text className="player-modal-name">{selectedPlayer[0]}</Text>
                                                                    <Row css={{ width: "100%", justifyContent: "space-between" }}>
                                                                        <Text className="player-modal-position">{selectedPlayer[2]}</Text>
                                                                        <Text className="player-modal-price">{selectedPlayer[3]}</Text>
                                                                    </Row>
                                                                   

                                                                </Grid.Container>
                                                                <Grid
                                                                css={{
                                                                    display: "flex",
                                                                    flexDirection:"column",
                                                                    justifyContent: "center", // Adjust to match design
                                                                    alignItems: "center",
                                                                    width:"5vw",
                                                                    padding:"10px",
                                                                    gap:"10px"
                                                                }}
                                                            >
                                                                <div
                                                                // key={teamcaptain}
                                                                 style={{backgroundColor: teamcaptain === selectedPlayer[0] ? 'green' : 'transparent',
}}>
                                                                <Image
                                                                     onClick={() => setTeamCaptain(currentCaptain =>
                                                                        currentCaptain === selectedPlayer[0] ? "" : selectedPlayer[0]
                                                                    )}
                                                                    style={{
                                                                        height: "50px",
                                                                        width: "55px",
                                                                        cursor: 'pointer',
                                                                    }}
                                                                    src={captain}
                                                                    alt="Team Captain"
                                                                />
                                                                </div>
                                                                <div
                                                                 style={{backgroundColor: vicecaptain === selectedPlayer[0] ? 'red' : 'transparent',}}>
                                                                <Image
                                                                    onClick={() => setViceCaptain(vicecaptain === selectedPlayer[0]?"":selectedPlayer[0])}
                                                                    style={{
                                                                        height: "50px",
                                                                        width: "55px",
                                                                        cursor: 'pointer',
                                                                    }}
                                                                    src={viceCaptain}
                                                                    alt="Team Vice Captain"
                                                                />
                                                                </div>


                                                            </Grid>
                                                                
                                                                    
                                                            </Grid>
                                                        </Grid.Container>

                                                        {/* Player Stats */}
                                                        <Grid.Container
                                                            css={{
                                                                width: "100%",
                                                                marginBottom: "20px", // Space between the stats and matches
                                                                display: "flex", // Ensure it's a flex container
                                                                flexDirection: "row", // Align children in a row
                                                                alignItems: "center", // Stretch children to fill container height
                                                                justifyContent: "center",
                                                                height: "100%" // Take full height available
                                                            }}
                                                            className="player-stats"
                                                        >
                                                            <StatCard title="Matches Played" value={selectedPlayer[10]} image={matchesPlayerImage} />
                                                            <StatCard title="Clean Sheets" value={selectedPlayer[11]} image={cleanSheets} />
                                                            <StatCard title="Goals" value={selectedPlayer[12]} image={goals} />
                                                            <StatCard title="Assists" value={selectedPlayer[13]} image={assists} />
                                                            <StatCard title="Red Cards" value={selectedPlayer[14]} image={redCards} />
                                                            <StatCard title="Yellow Cards" value={selectedPlayer[15]} image={yellowCards} />
                                                        </Grid.Container>

                                                        {/* Player Team Matches */}
                                                        <Grid.Container
                                                            css={{
                                                                width: "100%",
                                                                marginBottom: "20px", // Space between the stats and matches
                                                                display: "flex", // Ensure it's a flex container
                                                                flexDirection: "row", // Align children in a row
                                                                alignItems: "stretch", // Stretch children to fill container height
                                                                justifyContent: "center",
                                                                height: "100%" // Take full height available
                                                            }}
                                                            className="player-stats"
                                                        >
                                                            {/* You would map over your match data and create these dynamically */}
                                                            <Grid css={{
                                                                textAlign: "center",
                                                                display: "flex", // Ensure it's using flexbox
                                                                flexDirection: "column", // Align children vertically
                                                                height: "100%", // Fill the height
                                                                flex: "1", // Allow the card to expand
                                                                padding: "10px",
                                                                alignItems: "center",
                                                                justifyContent: "center"
                                                            }}>
                                                                <div css={{
                                                                    flex: "60%", // Image takes 60% of the card's height now using flex basis
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}>
                                                                </div>
                                                                <div css={{
                                                                    flex: "20%", // Adjust title section
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}>
                                                                    <Text className="game-info-title">Group</Text>
                                                                </div>
                                                                <div css={{
                                                                    flex: "20%", // Adjust value section
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}>
                                                                    <Text className="player-group">{selectedPlayer[6]}</Text>
                                                                </div>
                                                            </Grid>
                                                            <Grid css={{
                                                                textAlign: "center",
                                                                display: "flex", // Ensure it's using flexbox
                                                                flexDirection: "column", // Align children vertically
                                                                height: "100%", // Fill the height
                                                                flex: "1", // Allow the card to expand
                                                                padding: "10px",
                                                                alignItems: "center",
                                                                justifyContent: "center"
                                                            }}>
                                                                <div css={{
                                                                    flex: "60%", // Image takes 60% of the card's height now using flex basis
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}>
                                                                </div>
                                                                <div css={{
                                                                    flex: "20%", // Adjust title section
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}
                                                                    className="game-info-title">
                                                                    <Text className="game-info-title">Match 1</Text>
                                                                </div>
                                                                <div css={{
                                                                    flex: "20%", // Adjust value section
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}>
                                                                    <Text>{selectedPlayer[7]}</Text>
                                                                </div>
                                                            </Grid>
                                                            <Grid css={{
                                                                textAlign: "center",
                                                                display: "flex", // Ensure it's using flexbox
                                                                flexDirection: "column", // Align children vertically
                                                                height: "100%", // Fill the height
                                                                flex: "1", // Allow the card to expand
                                                                padding: "10px",
                                                                alignItems: "center",
                                                                justifyContent: "center"
                                                            }}>
                                                                <div css={{
                                                                    flex: "60%", // Image takes 60% of the card's height now using flex basis
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}>
                                                                </div>
                                                                <div css={{
                                                                    flex: "20%", // Adjust title section
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}>
                                                                    <Text className="game-info-title">Match 2</Text>
                                                                </div>
                                                                <div css={{
                                                                    flex: "20%", // Adjust value section
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}>
                                                                    <Text>{selectedPlayer[8]}</Text>
                                                                </div>
                                                            </Grid>
                                                            <Grid css={{
                                                                textAlign: "center",
                                                                display: "flex", // Ensure it's using flexbox
                                                                flexDirection: "column", // Align children vertically
                                                                height: "100%", // Fill the height
                                                                flex: "1", // Allow the card to expand
                                                                padding: "10px",
                                                                alignItems: "center",
                                                                justifyContent: "center"
                                                            }}>
                                                                <div css={{
                                                                    flex: "60%", // Image takes 60% of the card's height now using flex basis
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}>
                                                                </div>
                                                                <div css={{
                                                                    flex: "20%", // Adjust title section
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}>
                                                                    <Text className="game-info-title">Match 3</Text>
                                                                </div>
                                                                <div css={{
                                                                    flex: "20%", // Adjust value section
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    backgroundColor: "#1F335B",
                                                                    zIndex: 10
                                                                }}>
                                                                    <Text>{selectedPlayer[9]}</Text>
                                                                </div>
                                                            </Grid>
                                                            <Grid css={{
                                                                textAlign: "center",
                                                                display: "flex", // Ensure it's using flexbox
                                                                flexDirection: "column", // Align children vertically
                                                                height: "100%", // Fill the height
                                                                flex: "1", // Allow the card to expand
                                                                padding: "10px",
                                                                alignItems: "center",
                                                                justifyContent: "center"
                                                            }}>
                                                                <div css={{
                                                                    flex: "60%", // Image takes 60% of the card's height now using flex basis
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}>
                                                                </div>
                                                                <div css={{
                                                                    flex: "20%", // Adjust title section
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}>
                                                                    <Text className="game-info-title">Points</Text>
                                                                </div>
                                                                <div css={{
                                                                    flex: "20%", // Adjust value section
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}>
                                                                    <Text>{selectedPlayer[10]}</Text>
                                                                </div>
                                                            </Grid></Grid.Container>

                                                    </Grid.Container>
                                                </Modal.Body>}
                                            </Modal>

                                            {formationState == 1 && <>
                                                <Grid.Container
                                                    css={{
                                                        display: "flex",
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        gap: '10vw',
                                                        height: "20%"
                                                    }}>
                                                    <div className="player-jersey">
                                                        <img src={JerseyImage} alt="Jersey" />
                                                       {!selectedPlayers[5] && <img 
                                                            src={addPlayerButton} 
                                                            alt="Add Player" 
                                                            style={{
                                                                position: 'absolute',
                                                                top: '40%',
                                                                left: '49%',
                                                                transform: 'translate(-50%, -50%)',
                                                                cursor: 'pointer',
                                                                width: "25px",
                                                                height: "25px",
                                                                filter: selectedJersey === 5 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white

                                                            }} 
                                                            className={`${selectedJersey === 5 ? 'green-filter pulsing' : ''}`}
                                                            onClick={() => {setSelectedJersey(5);handlePositionChange("Attacker")}}
                                                        />}
                                                        {
                                                            selectedPlayers[5] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[5]));
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                        
                                                        <div className="player-name-bg">
                                                            <Text className="player-name-text">{selectedPlayers[5]}</Text>
                                                        </div>
                                                        <div className="player-price-bg">
                                                            <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[5]) ? playersData.find(p => p[0] === selectedPlayers[5])[3] : "ATTACKER"}</Text>
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
                                                            width: "25px",
                                                            height: "25px",
                                                            filter: selectedJersey === 4 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                        }} onClick={() =>{ setSelectedJersey(4); handlePositionChange("Attacker")}} />}
                                                         {
                                                            selectedPlayers[4] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[4]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                        <div className="player-name-bg">
                                                            <Text className="player-name-text">{selectedPlayers[4]}</Text>
                                                        </div>
                                                        <div className="player-price-bg">
                                                            <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[4]) ? playersData.find(p => p[0] === selectedPlayers[4])[3] : "ATTACKER"}</Text>
                                                        </div>
                                                    </div>
                                                </Grid.Container>
                                                <div className="player-jersey midfielder-1">
                                                    <img src={JerseyImage} alt="Jersey" />
                                                    {!selectedPlayers[3] && <img src={addPlayerButton} alt="Add Player" style={{
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '49%',
                                                        transform: 'translate(-50%, -50%)',
                                                        cursor: 'pointer',
                                                        width: "25px",
                                                        height: "25px",
                                                        filter: selectedJersey === 3 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white

                                                    }} onClick={() =>{ setSelectedJersey(3); handlePositionChange("Midfielder")}} />}
                                                     {
                                                            selectedPlayers[3] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[3]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                    <div className="player-name-bg">
                                                        <Text className="player-name-text">{selectedPlayers[3]}</Text>
                                                    </div>
                                                    <div className="player-price-bg">
                                                        <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[3]) ? playersData.find(p => p[0] === selectedPlayers[3])[3] : "MIDFIELDER"}</Text>
                                                    </div>
                                                </div>
                                                <Grid.Container
                                                    css={{
                                                        display: "flex",
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        gap: '10vw',// Adjust gap size here to control the spacing between columns
                                                        height: "20%"
                                                    }}>
                                                    <div className="player-jersey">
                                                        <img src={JerseyImage} alt="Jersey" />
                                                        {!selectedPlayers[2] && <img src={addPlayerButton} alt="Add Player" style={{
                                                            position: 'absolute',
                                                            top: '40%',
                                                            left: '48%',
                                                            transform: 'translate(-50%, -50%)',
                                                            cursor: 'pointer',
                                                            width: "25px",
                                                            height: "25px",
                                                            filter: selectedJersey === 2 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                        }} onClick={() =>{setSelectedJersey(2); handlePositionChange("Defender")} } />}
                                                         {
                                                            selectedPlayers[2] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[2]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                        <div className="player-name-bg">
                                                            <Text className="player-name-text">{selectedPlayers[2]}</Text>
                                                        </div>
                                                        <div className="player-price-bg">
                                                            <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[2]) ? playersData.find(p => p[0] === selectedPlayers[2])[3] : "DEFENDER"}</Text>
                                                        </div>
                                                    </div>
                                                    <div className="player-jersey">
                                                        <img src={JerseyImage} alt="Jersey" />
                                                        {!selectedPlayers[1] && <img src={addPlayerButton} alt="Add Player" style={{
                                                            position: 'absolute',
                                                            top: '40%',
                                                            left: '49%',
                                                            transform: 'translate(-50%, -50%)',
                                                            cursor: 'pointer',
                                                            width: "25px",
                                                            height: "25px",
                                                            filter: selectedJersey === 1 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                        }} onClick={() => {setSelectedJersey(1); handlePositionChange("Defender")}}/>}
                                                         {
                                                            selectedPlayers[1] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[1]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                        <div className="player-name-bg">
                                                            <Text className="player-name-text">{selectedPlayers[1]}</Text>
                                                        </div>
                                                        <div className="player-price-bg">
                                                            <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[1]) ? playersData.find(p => p[0] === selectedPlayers[1])[3] : "DEFENDER"}</Text>
                                                        </div>
                                                    </div>
                                                </Grid.Container>
                                                <div className="player-jersey">
                                                    <img src={JerseyImage} alt="Jersey" />
                                                    {!selectedPlayers[0] && <img src={addPlayerButton} alt="Add Player" style={{
                                                        position: 'absolute',
                                                        top: '40%',
                                                        left: '48%',
                                                        transform: 'translate(-50%, -50%)',
                                                        cursor: 'pointer',
                                                        width: "25px",
                                                        height: "25px",
                                                        filter: selectedJersey === 0? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                    }} onClick={() =>{setSelectedJersey(0); handlePositionChange("Goalkeeper")} } />}
                                                     {
                                                            selectedPlayers[0] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[0]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                    <div className="player-name-bg">
                                                        <Text className="player-name-text">{selectedPlayers[0]}</Text>
                                                    </div>
                                                    <div className="player-price-bg">
                                                        <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[0]) ? playersData.find(p => p[0] === selectedPlayers[0])[3] : "GOALKEEPER"}</Text>
                                                    </div>
                                                </div>
                                            </>}

                                            {formationState == 2 && <>
                                                <div className="player-jersey midfielder-1">
                                                    <img src={JerseyImage} alt="Jersey" />
                                                    {!selectedPlayers[5] && <img src={addPlayerButton} alt="Add Player" style={{
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '48%',
                                                        transform: 'translate(-50%, -50%)',
                                                        cursor: 'pointer',
                                                        width: "25px",
                                                        height: "25px",
                                                        filter: selectedJersey === 5 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                    }} onClick={() => {setSelectedJersey(5); handlePositionChange("Attacker")} }  />}
                                                     {
                                                            selectedPlayers[5] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[5]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                    <div className="player-name-bg">
                                                        <Text className="player-name-text">{selectedPlayers[5]}</Text>
                                                    </div>
                                                    <div className="player-price-bg">
                                                        <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[5]) ? playersData.find(p => p[0] === selectedPlayers[5])[3] : "ATTACKER"}</Text>
                                                    </div>
                                                </div>
                                                <Grid.Container
                                                    css={{
                                                        display: "flex",
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        gap: '10vw',
                                                        height: "20%"
                                                    }}>
                                                    <Row css={{
                                                        width: '100%',
                                                        justifyContent: 'space-around',
                                                        alignItems: 'center'
                                                    }}>
                                                        <div className="player-jersey">
                                                            <img src={JerseyImage} alt="Jersey" />
                                                            {!selectedPlayers[4] && <img src={addPlayerButton} alt="Add Player" style={{
                                                                position: 'absolute',
                                                                top: '40%',
                                                                left: '49%',
                                                                transform: 'translate(-50%, -50%)',
                                                                cursor: 'pointer',
                                                                width: "25px",
                                                                height: "25px",
                                                                filter: selectedJersey === 4? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                            }} onClick={() =>{setSelectedJersey(4); handlePositionChange("Midfielder")} }  />}
                                                            {
                                                            selectedPlayers[4] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[4]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                            <div className="player-name-bg">
                                                                <Text className="player-name-text">{selectedPlayers[4]}</Text>
                                                            </div>
                                                            <div className="player-price-bg">
                                                                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[4]) ? playersData.find(p => p[0] === selectedPlayers[4])[3] : "MIDFIELDER"}</Text>
                                                            </div>
                                                        </div>
                                                        <div className="player-jersey">
                                                            <img src={JerseyImage} alt="Jersey" />
                                                            {!selectedPlayers[3] && <img src={addPlayerButton} alt="Add Player" style={{
                                                                position: 'absolute',
                                                                top: '40%',
                                                                left: '49%',
                                                                transform: 'translate(-50%, -50%)',
                                                                cursor: 'pointer',
                                                                width: "25px",
                                                                height: "25px",
                                                                filter: selectedJersey === 3? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                            }} onClick={() => {setSelectedJersey(3); handlePositionChange("Midfielder")} }  />}
                                                            {
                                                            selectedPlayers[3] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[3]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                            <div className="player-name-bg">
                                                                <Text className="player-name-text">{selectedPlayers[3]}</Text>
                                                            </div>
                                                            <div className="player-price-bg">
                                                                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[3]) ? playersData.find(p => p[0] === selectedPlayers[3])[3] : "MIDFIELDER"}</Text>
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
                                                                width: "25px",
                                                                height: "25px",
                                                                filter: selectedJersey === 2 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                            }} onClick={() => {setSelectedJersey(2); handlePositionChange("Midfielder")} } />}
                                                            {
                                                            selectedPlayers[2] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[2]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                            <div className="player-name-bg">
                                                                <Text className="player-name-text">{selectedPlayers[2]}</Text>
                                                            </div>
                                                            <div className="player-price-bg">
                                                                <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[2]) ? playersData.find(p => p[0] === selectedPlayers[2])[3] : "MIDFIELDER"}</Text>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                </Grid.Container>

                                                <Grid.Container
                                                    css={{
                                                        display: "flex",
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        gap: '10vw',// Adjust gap size here to control the spacing between columns
                                                        height: "20%"
                                                    }}>

                                                    <div className="player-jersey">
                                                        <img src={JerseyImage} alt="Jersey" />
                                                        {!selectedPlayers[1] && <img src={addPlayerButton} alt="Add Player" style={{
                                                            position: 'absolute',
                                                            top: '40%',
                                                            left: '49%',
                                                            transform: 'translate(-50%, -50%)',
                                                            cursor: 'pointer',
                                                            width: "25px",
                                                            height: "25px",
                                                            filter: selectedJersey === 1 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                        }} onClick={() =>{setSelectedJersey(1); handlePositionChange("Defender")} } />}
                                                        {
                                                            selectedPlayers[1] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[1]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                        <div className="player-name-bg">
                                                            <Text className="player-name-text">{selectedPlayers[1]}</Text>
                                                        </div>
                                                        <div className="player-price-bg">
                                                            <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[1]) ? playersData.find(p => p[0] === selectedPlayers[1])[3] : "DEFENDER"}</Text>
                                                        </div>
                                                    </div>

                                                </Grid.Container>
                                                <div className="player-jersey">
                                                    <img src={JerseyImage} alt="Jersey" />
                                                    {!selectedPlayers[0] && <img src={addPlayerButton} alt="Add Player" style={{
                                                        position: 'absolute',
                                                        top: '40%',
                                                        left: '49%',
                                                        transform: 'translate(-50%, -50%)',
                                                        cursor: 'pointer',
                                                        width: "25px",
                                                        height: "25px",
                                                        filter: selectedJersey === 0 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                    }} onClick={() => {setSelectedJersey(0); handlePositionChange("Goalkeeper")} } />}
                                                    {
                                                            selectedPlayers[0] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[0]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                    <div className="player-name-bg">
                                                        <Text className="player-name-text">{selectedPlayers[0]}</Text>
                                                    </div>
                                                    <div className="player-price-bg">
                                                        <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[0]) ? playersData.find(p => p[0] === selectedPlayers[0])[3] : "GOALKEEPER"}</Text>
                                                    </div>
                                                </div>
                                            </>}

                                            {formationState == 3 && <>
                                                <Grid.Container
                                                    css={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        // justifyContent: 'center',
                                                        alignItems: 'center',
                                                        // gap: '10vw',
                                                        // height:"20%",
                                                        flexWrap: "nowrap"
                                                    }}>
                                                    <div className="player-jersey">
                                                        <img src={JerseyImage} alt="Jersey" />
                                                        {!selectedPlayers[5] && <img src={addPlayerButton} alt="Add Player" style={{
                                                            position: 'absolute',
                                                            top: '40%',
                                                            left: '49%',
                                                            transform: 'translate(-50%, -50%)',
                                                            cursor: 'pointer',
                                                            width: "25px",
                                                            height: "25px",
                                                            filter: selectedJersey === 5 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                        }} onClick={() => {setSelectedJersey(5); handlePositionChange("Attacker")} }  />}
                                                         {
                                                            selectedPlayers[5] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[5]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                        <div className="player-name-bg">
                                                            <Text className="player-name-text">{selectedPlayers[5]}</Text>
                                                        </div>
                                                        <div className="player-price-bg">
                                                            <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[5]) ? playersData.find(p => p[0] === selectedPlayers[5])[3] : "ATTACKER"}</Text>
                                                        </div>
                                                    </div>
                                                    <div className="player-jersey">
                                                        <img src={JerseyImage} alt="Jersey" />
                                                        {!selectedPlayers[4] && <img src={addPlayerButton} alt="Add Player" style={{
                                                            position: 'absolute',
                                                            top: '40%',
                                                            left: '49%',
                                                            transform: 'translate(-50%, -50%)',
                                                            cursor: 'pointer',
                                                            width: "25px",
                                                            height: "25px",
                                                            filter: selectedJersey === 4 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                        }} onClick={() =>{setSelectedJersey(4); handlePositionChange("Midfielder")} }  />}
                                                         {
                                                            selectedPlayers[4] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[4]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                        <div className="player-name-bg">
                                                            <Text className="player-name-text">{selectedPlayers[4]}</Text>
                                                        </div>
                                                        <div className="player-price-bg">
                                                            <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[4]) ? playersData.find(p => p[0] === selectedPlayers[4])[3] : "MIDFIELDER"}</Text>
                                                        </div>
                                                    </div>
                                                </Grid.Container>

                                                <Grid.Container
                                                    css={{
                                                        display: "flex",
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        gap: '10vw',
                                                        height: "20%"
                                                    }}>
                                                    <div className="player-jersey">
                                                        <img src={JerseyImage} alt="Jersey" />
                                                        {!selectedPlayers[3] && <img src={addPlayerButton} alt="Add Player" style={{
                                                            position: 'absolute',
                                                            top: '40%',
                                                            left: '49%',
                                                            transform: 'translate(-50%, -50%)',
                                                            cursor: 'pointer',
                                                            width: "25px",
                                                            height: "25px",
                                                            filter: selectedJersey === 3 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                        }} onClick={() =>{setSelectedJersey(3); handlePositionChange("Defender")} } />}
                                                        {
                                                            selectedPlayers[3] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[3]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                        <div className="player-name-bg">
                                                            <Text className="player-name-text">{selectedPlayers[3]}</Text>
                                                        </div>
                                                        <div className="player-price-bg">
                                                            <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[3]) ? playersData.find(p => p[0] === selectedPlayers[3])[3] : "DEFENDER"}</Text>
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
                                                            width: "25px",
                                                            height: "25px",
                                                            filter: selectedJersey === 2 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                    
                                                        }} onClick={() => {setSelectedJersey(2); handlePositionChange("Defender")} }  />} 
                                                        {
                                                            selectedPlayers[2] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[2]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                                    <div className="player-name-bg">
                                                            <Text className="player-name-text">{selectedPlayers[2]}</Text>
                                                        </div>
                                                        <div className="player-price-bg">
                                                            <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[2]) ? playersData.find(p => p[0] === selectedPlayers[2])[3] : "DEFENDER"}</Text>
                                                        </div>
                                                    </div>
                                                    <div className="player-jersey">
                                                        <img src={JerseyImage} alt="Jersey" />
                                                        {!selectedPlayers[1] && <img src={addPlayerButton} alt="Add Player" style={{
                                                            position: 'absolute',
                                                            top: '40%',
                                                            left: '49%',
                                                            transform: 'translate(-50%, -50%)',
                                                            cursor: 'pointer',
                                                            width: "25px",
                                                            height: "25px",
                                                            filter: selectedJersey ===1 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                        }} onClick={() => {setSelectedJersey(1); handlePositionChange("Defender")} }  />}
                                                        {
                                                            selectedPlayers[1] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[1]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                        <div className="player-name-bg">
                                                            <Text className="player-name-text">{selectedPlayers[1]}</Text>
                                                        </div>
                                                        <div className="player-price-bg">
                                                            <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[1]) ? playersData.find(p => p[0] === selectedPlayers[1])[3] : "DEFENDER"}</Text>
                                                        </div>
                                                    </div>
                                                </Grid.Container>

                                                <Grid.Container
                                                    css={{
                                                        display: "flex",
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        gap: '10vw',// Adjust gap size here to control the spacing between columns
                                                        height: "20%"
                                                    }}>

                                                    <div className="player-jersey">
                                                        <img src={JerseyImage} alt="Jersey" />
                                                        {!selectedPlayers[0] && <img src={addPlayerButton} alt="Add Player" style={{
                                                            position: 'absolute',
                                                            top: '40%',
                                                            left: '49%',
                                                            transform: 'translate(-50%, -50%)',
                                                            cursor: 'pointer',
                                                            width: "25px",
                                                            height: "25px",
                                                            filter: selectedJersey === 0 ? 'invert(100%)' : 'none'  // Inverts the colors to make black white
                                                        }} onClick={() => {setSelectedJersey(0); handlePositionChange("Goalkeeper")} } />}
                                                        {
                                                            selectedPlayers[0] && <img
                                                            style={{position:"absolute", height: "24px", margin: "2px", zIndex: "1000", width:"24px", cursor:"pointer" }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();  // Prevent the addPlayer event from firing
                                                                setSelectedPlayer(playersData.find(p => p[0] === selectedPlayers[0]));
                                                                console.log()
                                                                setShowInfoModal(true);
                                                            }}
                                                            src={infoIcon} alt="Jersey"
                                                        />
                                                        }
                                                        <div className="player-name-bg">
                                                            <Text className="player-name-text">{selectedPlayers[0]}</Text>
                                                        </div>
                                                        <div className="player-price-bg">
                                                            <Text className="player-price-text" color="black">{playersData.find(p => p[0] === selectedPlayers[0]) ? playersData.find(p => p[0] === selectedPlayers[0])[3] : "GOALKEEPER"}</Text>
                                                        </div>
                                                    </div>
                                                </Grid.Container>

                                            </>}

                                        </div>
                                    </Grid.Container>
                                }
                            </Col>
                        </Grid>

                        <Grid xs={12} md={4} css={{ marginTop: '1%', width: "60%" }}>
                            <Col className="rightcol">
                                <div className="sponsor-section" >
                                    <Text className="sponsortext" center>{'Sponsored by'}</Text>
                                    <img src={FanUpLogo} alt="FanUp Logo" className="fanup-logo" />
                                </div>
                                <div className="sidebar">
                                <div className="money-left">
                                            <Text className="money-left-text">{'Money'}<br />{'Left'}</Text>
                                            <Text className="money-left-text">${budget}M</Text>
                                        </div>
                                    <div className="coll-group">
                                        <Collapse title="Formation" className="coll-dropdown">
                                            {formationOptions.map((formationOption) => {
                                                return (
                                                    <Checkbox
                                                        key={formationOption}
                                                        isSelected={formationOption == filters.formation}
                                                        onChange={() => handleFormationChange(formationOption)}
                                                    >
                                                        {formationOption}
                                                    </Checkbox>
                                                )
                                            })}
                                        </Collapse>
                                        <Collapse title="Gender" className="coll-dropdown">
                                            {genderOptions.map((gender) => (
                                                <Checkbox
                                                    key={gender}
                                                    isSelected={gender == filters.gender}
                                                    onChange={() => handleGenderChange(gender)}
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
                                                isSelected={price == filters.price}
                                                onChange={() => handlePriceChange(price)}
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
                                <button className="submit-button" onClick={() => {handleSubmit()}}>Save Team</button>
                            </Col>
                        </Grid>
                    </Row>
                }
            </Grid.Container>
            }
        </div>
    );
}