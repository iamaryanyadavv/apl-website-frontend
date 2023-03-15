import { Grid, Text, Col, Image, Row } from "@nextui-org/react";
import './roadtoapl.css';
import React from "react";
import {IoLocation, IoGameController} from 'react-icons/io5';
import { AiOutlineTeam, AiOutlineClockCircle } from "react-icons/ai";
// Fifa
import PS5 from '../../assets/images/PS5Controller2.JPG';
// Player Registration
import PReg from '../../assets/images/PlayerReg.jpeg';
// Team Registration
import TReg from '../../assets/images/TeamReg.jpeg';
// Scouting Games
import SG from '../../assets/images/ScoutingGamesSprinkler.jpg';
// Auction 
import Auction from '../../assets/images/Auction.jpeg';
//Foosball Event
import Foosball from '../../assets/images/Foosball1.jpg'
//Inclusivity Event
import Inclusivity from '../../assets/images/Inclusivity.jpg'
//Preedictions Event
import AuctionPredictions from '../../assets/images/AuctionPredictions.jpg'
//Practice Games
import PracticeGames from '../../assets/images/PracticeGames2.jpg'
//Groups Draw
import GroupsDraw from '../../assets/images/GroupsDraw.jpeg'
//APL
import APL from '../../assets/images/AshokaFieldSunset.jpg'

import Grey from '../../assets/images/Grey.jpeg';

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

                        {/* Player Registration */}
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
                                    16th March 2023 
                                    
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
                                        March
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        2023 
            
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
                                        }}src={PReg} />
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
                                                            Player Registrations
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
                                                            Player Registrations
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
                                                            Head over to the 'Registrations' tab to register as a player!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Head over to the 'Registrations' tab to register as a player!
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
                                                            It is on a first-come-first-serve basis, so watch out!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            It is on a first-come-first-serve basis, so watch out!
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
                                                        color: 'rgb(255 0 64)',
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Until 02/04/2023
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
                                                                paddingRight: '5px'
                                                            }}>
                                                                <a href="/registration/player" >Website</a>
                                                            </Text>
                                                        </Row>
                                                        
                                                    </Grid>
                                                </Grid.Container>


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
                                                </Grid.Container>
                                
                                        </Col>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                        </Row>

                        {/* Team Registration */}
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
                                    16th March 2023 
                                    
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
                                        March
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        2023 
            
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
                                        }} src={TReg} />
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
                                                            Team Registrations
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
                                                            Team Registrations
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
                                                            It is on a first-come-first-serve basis, so watch out!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            It is on a first-come-first-serve basis, so watch out!
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
                                                            Until 31/03/2023
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
                                                                paddingRight: '5px'
                                                            }}>
                                                                <a href="/registration/team" >Website</a>
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                </Grid.Container>


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
                                                </Grid.Container>
                                
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
                                    16th March 2023 
                                    
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
                                        March
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        2023 
            
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
                                        }} src={Foosball} />
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
                                                            Foosball
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
                                                            Foosball
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
                                                            Foosball? Foosball.
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Foosball? Foosball.
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
                                                            Get your friends for a fun evening filled with foosball, music and more!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            Get your friends for a fun evening filled with foosball, music and more!
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
                                                            TBA
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
                                                            Outside Mess
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


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
                                                </Grid.Container>
                                
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
                                    22nd & 23rd March 2023 
                                    
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
                                        22nd &
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        23rd
                                        
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
                                        2023 
            
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
                                        }} src={PS5} />
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
                                                            FIFA Tournament
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
                                                            FIFA Tournament
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
                                                            Chance for you to showcase your FIFA skills? Pounce on it!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Chance for you to showcase your FIFA skills? Pounce on it!
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
                                                            Registration start 20th March, 2023!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            Registration start 20th March, 2023!
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
                                                            TBA
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
                                                            Mini Amphitheatre
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


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
                                                        color: '#e6025d'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Duos
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>

                                                {/* Registration Link */}
                                                <Grid.Container gap={1}
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
                                                </Grid.Container>
                                
                                        </Col>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                        </Row>
                        
                        {/* Inclusivity Event */}
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
                                    30th March 2023 
                                    
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
                                        30th
                                        
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
                                        2023 
            
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
                                        }} src={Inclusivity}  />
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
                                                            Inclusivity Event
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
                                                            Inclusivity Event
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
                                                            TBA
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            TBA
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
                                                            TBA
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            TBA
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
                                                            TBA
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
                                                            Outside Mess
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


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
                                                </Grid.Container>
                                
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
                                    3rd & 4th April 2023 
                                    
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
                                        3rd &
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        4th
                                        
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
                                        2023 
            
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
                                        }} src={SG}  />
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
                                                            Scouting Games
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
                                                            Scouting Games
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
                                                            Have you got what it takes w/ a ball at your feet?
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Have you got what it takes w/ a ball at your feet?
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
                                                            Play hard and you might get a Tier boost!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            Play hard and you might get a Tier boost!
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
                                                            TBA
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
                                                            Football Field
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


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
                                                        color: '#ed0293'
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
                                    5th April 2023 
                                    
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
                                        2023 
            
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
                                        }} src={AuctionPredictions} />
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
                                                            Predictions
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
                                                            Predictions
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
                                                            Most expensive player? Team w highest bid? Come and give your auction predictions.
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Most expensive player? Team w highest bid? Come and give your auction predictions.
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
                                                        color: '#e502f0'
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
                                                            Outside Mess
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


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
                                                        color: '#e502f0'
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
                                                </Grid.Container>
                                
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
                                    10th March 2023 
                                    
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
                                        March
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        2023 
            
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
                                                            borderColor: '#e502f0'
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
                                                            borderColor: '#e502f0'
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
                                                            Ready? Time to make your team!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Ready? Time to make your team!
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
                                                            Hope you've done your research because no time to second guess.
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            Hope you've done your research because no time to second guess.
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
                                                        color: '#e502f0'
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
                                                            TBA
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


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
                                                </Grid.Container>
                                
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
                                    12th April 2023 
                                    
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
                                        12th
                                        
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
                                        2023 
            
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
                                        }} src={GroupsDraw} />
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
                                                            Groups Draw
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
                                                            Groups Draw
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
                                                            Nervous? Anxious? Want an easy draw?
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Nervous? Anxious? Want an easy draw?
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
                                                            Solo
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                
                                        </Col>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                        </Row>

                        {/* Practice Games */}
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
                                    13th To 19th April 2023 
                                    
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
                                        13th To
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        19th
                                        
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
                                        2023 
            
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
                                                            borderColor: '#3300CC'
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
                                                            borderColor: '#3300CC'
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
                                                            Time to train! Book your slot using the slot booking feature before your competitors!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Time to train! Book your slot using the slot booking feature before your competitors!
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
                                                           TBA
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
                                                            TBA
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


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
                                    21st To 23rd April 2023 
                                    
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
                                        21st To
                                        
                                    </Text>
                                    <Text showIn={'sm'}
                                    css={{
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        textAlign: 'center',
                                    }}>
                                        23rd
                                        
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
                                        2023 
            
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
                                                            APL 6.0
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
                                                            APL 6.0
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
                                                           TBA
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
                                                            TBA
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>


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