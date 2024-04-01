import { Grid, Text, Col, Image, Row } from "@nextui-org/react";
import './roadtoapl.css';
import React from "react";
import {IoLocation, IoGameController} from 'react-icons/io5';
import { AiOutlineTeam, AiOutlineClockCircle } from "react-icons/ai";
// Fifa
import PS5 from '../../assets/images/PS5Controller2.JPG';
// FanUp Team Quiz
import PReg from '../../assets/images/PlayerReg.jpeg';
// Team Registration
import TReg from '../../assets/images/TeamReg.jpeg';
// Scouting Games
import SG from '../../assets/images/ScoutingGamesSprinkler.jpg';
// Auction 
// import Auction from '../../assets/images/Auction.jpeg';
//Foosball Event
import Foosball from '../../assets/images/Foosball1.jpg'
//Preedictions Event
import AuctionPredictions from '../../assets/images/AuctionPredictions.jpg'
//Practice Games
//Groups Draw
import GroupsDraw from '../../assets/images/GroupsDraw.jpeg'
//APL
import APL from '../../assets/images/AshokaFieldSunset.jpg'

import Grey from '../../assets/images/Grey.jpeg';


import FootballQuiz from '../../assets/images/Football Quiz.jpg'
import Scouting from '../../assets/images/ScoutingGame1.jpeg'
import Auction from '../../assets/images/auction.jpg'
import HeaderChallenge from '../../assets/images/headerchallenge.jpg'
import Sepak from '../../assets/images/sepaktakraw.jpg'
import PracticeGames from '../../assets/images/PracticeGames2.jpg'
import Footballrelay from '../../assets/images/footballrelay.jpg'
import draw from "../../assets/images/draw.jpg"
import Scavenger from "../../assets/images/scavenge.jpeg"



export default function RoadToAPLContent(){
    return(
        <>
            <Grid.Container
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                paddingTop: '60px'
            }}>
                <Grid>
                    <Grid.Container gap={0.5}
                    css={{
                        jc: 'center',
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>

                        {/* FanUp Team Quiz */}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    28th March
                                    
                                </Text>
                            </Grid>
                            <Grid showIn={'sm'}>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    width: '70px'
                                }}> 
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        28th
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        March
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        
            
                                    </Text>
                                    
                                </Col>

                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderRadius: '0px 0px 0px 0px',
                                borderColor: '#CC0033',
                            }}>
                                <Grid.Container gap={0}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center',
                                        margin: '0px 10px 0px 10px'
                                    }}>
                                        <Image css={{
                                            '@xsMin':{
                                                width: '250px',
                                                height: '250px',
                                                borderRadius: '20px'
                                            },
                                            '@xsMax':{
                                                width: '200px',
                                                height: '200px',
                                                borderRadius: '20px'
                                            },
                                            objectFit: 'cover',
                                        }}src={FootballQuiz} />
                                    </Grid>

                                    {/* Text side grid */}
                                    <Grid
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Col>
                                                {/* Title */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    maxWidth: 'fit-content',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$4xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#CC0033'
                                                        }}>
                                                            FanUp Team Quizzes
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$2xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#CC0033'
                                                        }}>
                                                            FanUp Team Quizzes
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                
                                                {/* Description */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$xl',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '500px'
                                                        }}>
Spots for APL teams are gone in the blink of an eye but THIS is your chance to secure one without fastest fingers- participate in this quiz to win a team for yourself at APL!                                                         </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
Spots for APL teams are gone in the blink of an eye but THIS is your chance to secure one without fastest fingers- participate in this quiz to win a team for yourself at APL!                                                         </Text>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Description 2 */}
                                                {/* <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$xl',
                                                            width: '500px'
                                                        }}>
                                                            It is on a first-come-first-serve basis, so watch out! Max. "Man" allowed is 160
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            It is on a first-come-first-serve basis, so watch out!  Max. "Man" allowed is 160
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}

                                                {/* Time */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineClockCircle
                                                    style={{
                                                        color: 'rgb(255 0 64)',
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            28/03/24 9:30PM onwards
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                

                                                {/* Location */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <IoLocation
                                                    style={{
                                                        color: 'rgb(255 0 64)'
                                                    }}/>
                                                    <Grid>
                                                        <Row>
                                                            <Text 
                                                            css={{
                                                                jc: 'center',
                                                                fontWeight: '$medium',
                                                                textAlign: 'left',
                                                                paddingRight: '5px'
                                                            }}>
                                                                <a href="/registration/player" >Website</a>
                                                            </Text>
                                                        </Row>
                                                        
                                                    </Grid>
                                                </Grid.Container> */}


                                                {/* Teams */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineTeam
                                                    style={{
                                                        color: 'rgb(255 0 64)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Solo 
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}
                                
                                        </Col>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                        </Row>

                        {/* Scouting */}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    29th - 31st March 
                                    
                                </Text>
                            </Grid>
                            <Grid showIn={'sm'}>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    width: '70px'
                                }}> 
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        29th - 31st 
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        March
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        
            
                                    </Text>
                                    
                                </Col>

                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#cc0033'
                            }}>
                                <Grid.Container gap={0}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center',
                                        margin: '0px 10px 0px 10px'
                                    }}>
                                        <Image css={{
                                            '@xsMin':{
                                                width: '250px',
                                                height: '250px',
                                                borderRadius: '20px'
                                            },
                                            '@xsMax':{
                                                width: '200px',
                                                height: '200px',
                                                borderRadius: '20px'
                                            },
                                            objectFit: 'cover'
                                        }} src={Scouting} />
                                    </Grid>

                                    {/* Text side grid */}
                                    <Grid
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Col>
                                                {/* Title */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    maxWidth: 'fit-content',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$4xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#CC0033'
                                                        }}>
                                                           Scouting
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$2xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#CC0033'
                                                        }}>
                                                            Scouting
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                
                                                {/* Description */}
                                                {/* <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$xl',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '500px'
                                                        }}>
                                                            Head over to the 'Registrations' tab to register your team!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Head over to the 'Registrations' tab to register your team !
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}


                                                {/* Description 2 */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$xl',
                                                            width: '500px'
                                                        }}>
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            {/* It is on a first-come-first-serve basis, so watch out! */}
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>

                                                {/* Time */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineClockCircle
                                                    style={{
                                                        color: 'rgb(255 0 64)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            29th - 31st March
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                

                                                {/* Location */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <IoLocation
                                                    style={{
                                                        color: 'rgb(255 0 64)'
                                                    }}/>
                                                    <Grid>
                                                        <Row>
                                                            <Text 
                                                            css={{
                                                                jc: 'center',
                                                                fontWeight: '$medium',
                                                                textAlign: 'left',
                                                                paddingRight: '5px',
                                        
                                                            }}>
                                                                Football Field
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Teams */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineTeam
                                                    style={{
                                                        color: 'rgb(255 0 64)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Solo or Team (of upto 5) 
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}
                                
                                        </Col>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                        </Row>

                        {/* Foosball Event */}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    3rd April 
                                    
                                </Text>
                            </Grid>
                            <Grid showIn={'sm'}>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    width: '70px'
                                }}> 
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        3rd
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        April
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        
            
                                    </Text>
                                    
                                </Col>

                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#c1004d'
                            }}>
                                <Grid.Container gap={0}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center',
                                        margin: '0px 10px 0px 10px'
                                    }}>
                                        <Image css={{
                                            '@xsMin':{
                                                width: '250px',
                                                height: '250px',
                                                borderRadius: '20px'
                                            },
                                            '@xsMax':{
                                                width: '200px',
                                                height: '200px',
                                                borderRadius: '20px'
                                            },
                                            objectFit: 'cover'
                                        }} src={Auction} />
                                    </Grid>

                                    {/* Text side grid */}
                                    <Grid
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Col>
                                                {/* Title */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    maxWidth: 'fit-content',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$4xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#e6025d'
                                                        }}>
                                                            Auction
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$2xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#e6025d'
                                                        }}>
                                                            Auction
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                
                                                {/* Description */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$xl',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '500px'
                                                        }}>
                                                            {/* Foosball? Foosball. */}
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            {/* Foosball? Foosball. */}
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Description 2 */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$xl',
                                                            width: '500px'
                                                        }}>
                                                            {/* Get your friends for a fun evening filled with foosball, music and more! */}
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            {/* Get your friends for a fun evening filled with foosball, music and more! */}
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>

                                                {/* Time */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineClockCircle
                                                    style={{
                                                        color: '#e6025d'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            8:45PM onwards
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                

                                                {/* Location */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <IoLocation
                                                    style={{
                                                        color: '#e6025d'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            MPH
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Teams */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineTeam
                                                    style={{
                                                        color: '#e6025d'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Solo or Duos
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}
                                
                                        </Col>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                        </Row>

                        {/* Fifa Event */}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    5th April
                                    
                                </Text>
                            </Grid>
                            <Grid showIn={'sm'}>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    width: '70px'
                                }}> 
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        5th
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        April
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                         
            
                                    </Text>
                                    
                                </Col>

                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#c1004d'
                            }}>
                                <Grid.Container gap={0}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center',
                                        margin: '0px 10px 0px 10px'
                                    }}>
                                        <Image css={{
                                            '@xsMin':{
                                                width: '250px',
                                                height: '250px',
                                                borderRadius: '20px'
                                            },
                                            '@xsMax':{
                                                width: '200px',
                                                height: '200px',
                                                borderRadius: '20px'
                                            },
                                            objectFit: 'cover'
                                        }} src={HeaderChallenge} />
                                    </Grid>

                                    {/* Text side grid */}
                                    <Grid
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Col>
                                                {/* Title */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    maxWidth: 'fit-content',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$4xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#e6025d'
                                                        }}>
                                                            Header Challenge
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$2xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#e6025d'
                                                        }}>
                                                            Header Challenge
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                
                                                {/* Description */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$xl',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '500px'
                                                        }}>
                                                           Using your head the right way- work with your team to get the ball across a path and finally into the bucket. 
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Using your head the right way- work with your team to get the ball across a path and finally into the bucket. 
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Description 2 */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$xl',
                                                            width: '500px'
                                                        }}>
                                                            {/* You think you got what it takes? */}
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            {/* You think you got what it takes? */}
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>

                                                {/* Time */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineClockCircle
                                                    style={{
                                                        color: '#e6025d'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            1:30-3:30PM
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                

                                                {/* Location */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <IoLocation
                                                    style={{
                                                        color: '#e6025d'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                           TBA
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Teams */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineTeam
                                                    style={{
                                                        color: '#e6025d'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            2v2
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}

                                                {/* Registration Link */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <IoGameController
                                                    style={{
                                                        color: '#e6025d'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            <a href="/registration/fifa" >Register me!</a> 
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}
                                
                                        </Col>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                        </Row>

                        {/* Predictions Event */}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                   8th April 
                                    
                                </Text>
                            </Grid>
                            <Grid showIn={'sm'}>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    width: '70px'
                                }}> 
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                       8th
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        April
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        
            
                                    </Text>
                                    
                                </Col>

                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#a90069'
                            }}>
                                <Grid.Container gap={0}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center',
                                        margin: '0px 10px 0px 10px'
                                    }}>
                                        <Image css={{
                                            '@xsMin':{
                                                width: '250px',
                                                height: '250px',
                                                borderRadius: '20px'
                                            },
                                            '@xsMax':{
                                                width: '200px',
                                                height: '200px',
                                                borderRadius: '20px'
                                            },
                                            objectFit: 'cover'
                                        }} src={Scavenger} />
                                    </Grid>

                                    {/* Text side grid */}
                                    <Grid
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Col>
                                                {/* Title */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    maxWidth: 'fit-content',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$4xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#ed0293'
                                                        }}>
                                                            Scavenger Challenge
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$2xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#ed0293'
                                                        }}>
                                                            Scavenger Challenge
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                
                                                {/* Description */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$xl',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '500px'
                                                        }}>
                                                            A fun game filled with football-related challenges designed for APL teams to bond and work together. 
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            A fun game filled with football-related challenges designed for APL teams to bond and work together. 
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Description 2 */}
                                                {/* <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$xl',
                                                            width: '500px'
                                                        }}>
                                                            Correct predictions get &#x20B9;50 after the auction!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            Correct predictions get &#x20B9;50 after the auction!
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}

                                                {/* Time */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineClockCircle
                                                    style={{
                                                        color: '#ed0293'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                           8:00PM-12:00AM
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                

                                                {/* Location */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <IoLocation
                                                    style={{
                                                        color: '#ed0293'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Outside Mess
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}


                                                {/* Teams */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineTeam
                                                    style={{
                                                        color: '#ed0293'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Solo
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}
                                
                                        </Col>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                        </Row>

                        {/* Scouting Games */}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    10th April 
                                    
                                </Text>
                            </Grid>
                            <Grid showIn={'sm'}>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    width: '70px'
                                }}> 
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                       10th
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        April
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                         
            
                                    </Text>
                                    
                                </Col>

                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#a90069'
                            }}>
                                <Grid.Container gap={0}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center',
                                        margin: '0px 10px 0px 10px'
                                    }}>
                                        <Image css={{
                                            '@xsMin':{
                                                width: '250px',
                                                height: '250px',
                                                borderRadius: '20px'
                                            },
                                            '@xsMax':{
                                                width: '200px',
                                                height: '200px',
                                                borderRadius: '20px'
                                            },
                                            objectFit: 'cover'
                                        }} src={Sepak}  />
                                    </Grid>

                                    {/* Text side grid */}
                                    <Grid
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Col>
                                                {/* Title */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    maxWidth: 'fit-content',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$4xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#ed0293'
                                                        }}>
                                                            Sepak Takraw
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$2xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#ed0293'
                                                        }}>
                                                            Sepak Takraw
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                
                                                {/* Description */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$xl',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '500px'
                                                        }}>
Want to recreate the iconic topgun scene? Come watch teams play a twist on beach football with a net                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
Want to recreate the iconic topgun scene? Come watch teams play a twist on beach football with a net                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Description 2 */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$xl',
                                                            width: '500px'
                                                        }}>
                                                            {/* Play hard and you might get a Tier boost! */}
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            {/* Play hard and you might get a Tier boost! */}
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>

                                                {/* Time */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineClockCircle
                                                    style={{
                                                        color: '#ed0293'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            8:30PM-12:00AM
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                

                                                {/* Location */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <IoLocation
                                                    style={{
                                                        color: '#ed0293'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Beach Volleyball Court
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Teams */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineTeam
                                                    style={{
                                                        color: '#ed0293'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            6v6/7v7
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}
                                
                                        </Col>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                        </Row>

                        

                        {/* Auction */}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    11th - 16th April 
                                    
                                </Text>
                            </Grid>
                            <Grid showIn={'sm'}>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    width: '70px'
                                }}> 
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        11th - 16th
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        April
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
            
                                    </Text>
                                    
                                </Col>

                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#7f0085'
                            }}>
                                <Grid.Container gap={0}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center',
                                        margin: '0px 10px 0px 10px'
                                    }}>
                                        <Image css={{
                                            '@xsMin':{
                                                width: '250px',
                                                height: '250px',
                                                borderRadius: '20px'
                                            },
                                            '@xsMax':{
                                                width: '200px',
                                                height: '200px',
                                                borderRadius: '20px'
                                            },
                                            objectFit: 'cover'
                                        }} src={PracticeGames} />
                                    </Grid>

                                    {/* Text side grid */}
                                    <Grid
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Col>
                                                {/* Title */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    maxWidth: 'fit-content',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$4xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#e502f0'
                                                        }}>
                                                            Practice Games
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$2xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#e502f0'
                                                        }}>
                                                            Practice Games
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                
                                                {/* Description */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$xl',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '500px'
                                                        }}>
                                                            {/* Ready? Time to make your team! */}
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            {/* Ready? Time to make your team! */}
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>

                                                 {/* Description 2 */}
                                                 <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            <a href="/slots" >Slot Booking!</a> 
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Description 2 */}
                                                   {/* Time */}
                                                   <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineClockCircle
                                                    style={{
                                                        color: 'rgb(86 30 255)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                           According to your slots
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>

                                                {/* Time */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineClockCircle
                                                    style={{
                                                        color: '#e502f0'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                           9:30PM-12:00AM
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}
                                                

                                                {/* Location */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <IoLocation
                                                    style={{
                                                        color: '#e502f0'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Football Field
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Teams */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineTeam
                                                    style={{
                                                        color: '#e502f0'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Team
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}
                                
                                        </Col>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                        </Row>

                        {/* Groups Draw */}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    15th April  
                                    
                                </Text>
                            </Grid>
                            <Grid showIn={'sm'}>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    width: '70px'
                                }}> 
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        15th
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        April
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                         
            
                                    </Text>
                                    
                                </Col>

                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#27009d'
                            }}>
                                <Grid.Container gap={0}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center',
                                        margin: '0px 10px 0px 10px'
                                    }}>
                                        <Image css={{
                                            '@xsMin':{
                                                width: '250px',
                                                height: '250px',
                                                borderRadius: '20px'
                                            },
                                            '@xsMax':{
                                                width: '200px',
                                                height: '200px',
                                                borderRadius: '20px'
                                            },
                                            objectFit: 'cover'
                                        }} src={Footballrelay} />
                                    </Grid>

                                    {/* Text side grid */}
                                    <Grid
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Col>
                                                {/* Title */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    maxWidth: 'fit-content',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$4xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#3300CC'
                                                        }}>
                                                            Football Relay
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$2xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#3300CC'
                                                        }}>
                                                            Football Relay
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                
                                                {/* Description */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$xl',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '500px'
                                                        }}>
                                                           A skill based challenge that sets up the teams sharpness and fitness for the event
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            A skill based challenge that sets up the teams sharpness and fitness for the event
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Description 2 */}
                                                {/* <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$xl',
                                                            width: '500px'
                                                        }}>
                                                            Come and witness it live!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            Come and witness it live!
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}

                                                {/* Time */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineClockCircle
                                                    style={{
                                                        color: 'rgb(86 30 255)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                           9:30PM-12:00AM
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                

                                                {/* Location */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <IoLocation
                                                    style={{
                                                        color: 'rgb(86 30 255)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Football Field
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Teams */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineTeam
                                                    style={{
                                                        color: 'rgb(86 30 255)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Solo
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}
                                
                                        </Col>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                        </Row>

                        {/* DRAW*/}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    16th April 
                                    
                                </Text>
                            </Grid>
                            <Grid showIn={'sm'}>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    width: '70px'
                                }}> 
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        16th
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        April
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                       
            
                                    </Text>
                                    
                                </Col>

                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#27009d'
                            }}>
                                <Grid.Container gap={0}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center',
                                        margin: '0px 10px 0px 10px'
                                    }}>
                                        <Image css={{
                                            '@xsMin':{
                                                width: '250px',
                                                height: '250px',
                                                borderRadius: '20px'
                                            },
                                            '@xsMax':{
                                                width: '200px',
                                                height: '200px',
                                                borderRadius: '20px'
                                            },
                                            objectFit: 'cover'
                                        }} src={draw} />
                                    </Grid>

                                    {/* Text side grid */}
                                    <Grid
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Col>
                                                {/* Title */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    maxWidth: 'fit-content',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$4xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#3300CC'
                                                        }}>
                                                            Draw
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$2xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#3300CC'
                                                        }}>
                                                            Draw
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                
                                                {/* Description */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$xl',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '500px'
                                                        }}>
Come to see which team faces which in the group stages                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
Come to see which team faces which in the group stages                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>



                                             
                                                

                                                {/* Location */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <IoLocation
                                                    style={{
                                                        color: 'rgb(86 30 255)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                          TBA
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Teams */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineTeam
                                                    style={{
                                                        color: 'rgb(86 30 255)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Team
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}
                                
                                        </Col>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                        </Row>

                        {/* APL */}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    18th To 21st April
                                    
                                </Text>
                            </Grid>
                            <Grid showIn={'sm'}>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    width: '70px'
                                }}> 
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        18th To
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        21st
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        April
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        
            
                                    </Text>
                                    
                                </Col>

                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#27009d'
                            }}>
                                <Grid.Container gap={0}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center',
                                        margin: '0px 10px 0px 10px'
                                    }}>
                                        <Image css={{
                                            '@xsMin':{
                                                width: '250px',
                                                height: '250px',
                                                borderRadius: '20px'
                                            },
                                            '@xsMax':{
                                                width: '200px',
                                                height: '200px',
                                                borderRadius: '20px'
                                            },
                                            objectFit: 'cover'
                                        }} src={APL} />
                                    </Grid>

                                    {/* Text side grid */}
                                    <Grid
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Col>
                                                {/* Title */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    maxWidth: 'fit-content',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$4xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#3300CC'
                                                        }}>
                                                            APL 7.0
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$2xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#3300CC'
                                                        }}>
                                                            APL 7.0
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                
                                                {/* Description */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$xl',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '500px'
                                                        }}>
                                                            Weeks of prep, for what? This.
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Weeks of prep, for what? This.
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


                                                {/* Description 2 */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Grid>
                                                        <Text hideIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$xl',
                                                            width: '500px'
                                                        }}>
                                                            Blood, toil, tears and sweat.
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            Blood, toil, tears and sweat.
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>

                                                {/* Time */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineClockCircle
                                                    style={{
                                                        color: 'rgb(86 30 255)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                           TBA
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}
                                                

                                                {/* Location */}
                                                {/* <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <IoLocation
                                                    style={{
                                                        color: 'rgb(86 30 255)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            TBA
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container> */}


                                                {/* Teams */}
                                                <Grid.Container gap={1}
                                                css={{
                                                    maxWidth: 'fit-content',
                                                    jc: 'center',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <AiOutlineTeam
                                                    style={{
                                                        color: 'rgb(86 30 255)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Team
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                
                                        </Col>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                        </Row>

                    </Grid.Container>


                </Grid>
            </Grid.Container>
        </>
    )
}