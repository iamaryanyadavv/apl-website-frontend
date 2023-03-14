import { Grid, Text, Col, Image, Row } from "@nextui-org/react";
import './roadtoapl.css';
import React from "react";
import {IoLocation, IoGameController} from 'react-icons/io5';
import { AiOutlineTeam, AiOutlineClockCircle } from "react-icons/ai";
// Fifa
import PS5 from '../../assets/images/PS5Controller2.JPG'; 
// 1v1
import Nutmeg from '../../assets/images/FootballFreestyle.jpeg';
// Bin
import Bin from '../../assets/images/Bin.png';
// Foot Bowling
import FBowling from '../../assets/images/FootballBowling 2.jpeg';
// Player Registration
import PReg from '../../assets/images/PlayerReg.jpeg';
// Team Registration
import TReg from '../../assets/images/TeamReg.jpeg';
// Scouting Games
import SG from '../../assets/images/ScoutingGame2.jpg';
// Auction 
import Auction from '../../assets/images/Auction.jpeg';
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
                    <Grid.Container gap={2}
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
                            <Grid
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    13th March 2023 
                                    
                                </Text>
                                <Text showIn={'sm'}
                                css={{
                                    fontSize: '$md',
                                    fontWeight: '$semibold'
                                }}>
                                    13th March 2023
                                </Text>
                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderRadius: '0px 0px 0px 0px',
                                borderColor: '#CC0033'
                            }}>
                                <Grid.Container gap={1}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center'
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
                                        }}src={PReg} className="rtAPLpics" />
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
                                                            Upto 160 Registrations
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
                                                            <Text
                                                            css={{
                                                                jc: 'center',
                                                                fontWeight: '$medium',
                                                                textAlign: 'left',
                                                            }}>
                                                                or Mess
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
                            <Grid
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    13th March 2023 
                                    
                                </Text>
                                <Text showIn={'sm'}
                                css={{
                                    fontSize: '$md',
                                    fontWeight: '$semibold'
                                }}>
                                    13th March 2023
                                </Text>
                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#CC0033'
                            }}>
                                <Grid.Container gap={1}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center'
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
                                        }} src={TReg} className="rtAPLpics" />
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
                                                            Upto 16 Registrations
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
                                                            <Text
                                                            css={{
                                                                jc: 'center',
                                                                fontWeight: '$medium',
                                                                textAlign: 'left',
                                                            }}>
                                                                or Mess
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

                        {/* Fifa Event */}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    18th March 2023 
                                    
                                </Text>
                                <Text showIn={'sm'}
                                css={{
                                    fontSize: '$md',
                                    fontWeight: '$semibold'
                                }}>
                                    18th March 2023
                                </Text>
                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#990066'
                            }}>
                                <Grid.Container gap={1}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center'
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
                                        }} src={PS5} className="rtAPLpics" />
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
                                                            borderColor: '#990066'
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
                                                            borderColor: '#990066'
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
                                                            Chance for you to showcase your FIFA skills.
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Chance for you to showcase your FIFA skills.
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
                                                            Winner takes a &#x20B9;2000 cash prize!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            Winner takes a &#x20B9;2000 cash prize!
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
                                                        color: 'rgb(221 0 147)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            12pm to 4pm
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
                                                        color: 'rgb(221 0 147)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Takshila, AC02
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
                                                        color: 'rgb(221 0 147)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            Duo 
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
                                                        color: 'rgb(221 0 147)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            <a href="/registration/fifa" >Register here</a> 
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                
                                        </Col>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                        </Row>
                        
                        {/* 1v1 Event */}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    19th March 2023 
                                    
                                </Text>
                                <Text showIn={'sm'}
                                css={{
                                    fontSize: '$md',
                                    fontWeight: '$semibold'
                                }}>
                                    19th March 2023
                                </Text>
                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#990066'
                            }}>
                                <Grid.Container gap={1}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center'
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
                                        }} src={Nutmeg} className="rtAPLpics" />
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
                                                            borderColor: '#990066'
                                                        }}>
                                                            1v1 Challenge
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$2xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#990066'
                                                        }}>
                                                            1v1 Challenge
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
                                                            Street Ball? Street Ball.
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Street Ball? Street Ball.
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
                                                            Every Nutmeg gets &#x20B9;50 off registration fee!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            Every Nutmeg gets &#x20B9;50 off registration fee!
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
                                                        color: 'rgb(221 0 147)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            12pm to 4pm
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
                                                        color: 'rgb(221 0 147)'
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
                                                        color: 'rgb(221 0 147)'
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
                            <Grid
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    20th March 2023 
                                    
                                </Text>
                                <Text showIn={'sm'}
                                css={{
                                    fontSize: '$md',
                                    fontWeight: '$semibold'
                                }}>
                                    20th March 2023
                                </Text>
                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#660099'
                            }}>
                                <Grid.Container gap={1}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center'
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
                                        }} src={SG} className="rtAPLpics" />
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
                                                            borderColor: '#660099'
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
                                                            borderColor: '#660099'
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
                                                        color: 'rgb(155 0 232)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            5pm to 9pm
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
                                                        color: 'rgb(155 0 232)'
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
                                                        color: 'rgb(155 0 232)'
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

                        {/* Bin Event */}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    21st March 2023 
                                    
                                </Text>
                                <Text showIn={'sm'}
                                css={{
                                    fontSize: '$md',
                                    fontWeight: '$semibold'
                                }}>
                                    21st March 2023
                                </Text>
                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#660099'
                            }}>
                                <Grid.Container gap={1}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center'
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
                                        }} src={Bin} className="rtAPLpics" />
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
                                                            borderColor: '#660099'
                                                        }}>
                                                            Bin Challenge
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            fontSize: '$2xl',
                                                            fontWeight: '$bold',
                                                            borderStyle: 'solid',
                                                            borderWidth: '0px 0px 2px 0px',
                                                            borderColor: '#660099'
                                                        }}>
                                                            Bin Challenge
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
                                                            Feel like you're Beckham rather than Messi? Show it.
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Feel like you're Beckham rather than Messi? Show it.
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
                                                            Most bin shots /10 gets a &#x20B9;2000 cash prize!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            Most bin shots /10 gets a &#x20B9;2000 cash prize!
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
                                                        color: 'rgb(155 0 232)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            12pm to 4pm
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
                                                        color: 'rgb(155 0 232)'
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
                                                        color: 'rgb(155 0 232)'
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

                        {/* FBowling Event */}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    22nd March 2023 
                                    
                                </Text>
                                <Text showIn={'sm'}
                                css={{
                                    fontSize: '$md',
                                    fontWeight: '$semibold'
                                }}>
                                    22nd March 2023
                                </Text>
                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#3300CC'
                            }}>
                                <Grid.Container gap={1}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center'
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
                                        }} src={FBowling} className="rtAPLpics" />
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
                                                            Foot Bowling
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
                                                            Foot Bowling
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
                                                            Good at bowling? Try w/ your feet.
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontSize: '$md',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            width: '250px'
                                                        }}>
                                                            Good at bowling? Try w/ your feet.
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
                                                            Most points after 3 turns gets &#x20B9;50 off registration fee!
                                                        </Text>
                                                        <Text showIn={'sm'}
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                            fontSize: '$md',
                                                            width: '250px'
                                                        }}>
                                                            Most points after 3 turns gets &#x20B9;50 off registration fee!
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
                                                            12pm to 4pm
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

                        {/* Auction */}
                        <Row
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            {/* Date-Timeline */}
                            <Grid
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                                <Text hideIn={'sm'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    alignItems: 'baseline',
                                    width: '180px'
                                }}>
                                    23rd March 2023 
                                    
                                </Text>
                                <Text showIn={'sm'}
                                css={{
                                    fontSize: '$md',
                                    fontWeight: '$semibold'
                                }}>
                                    23rd March 2023
                                </Text>
                            </Grid>

                            {/* Content Card */}
                            <Grid
                            css={{
                                borderStyle: 'solid',
                                borderWidth: '0px 0px 0px 2px',
                                borderColor: '#3300CC'
                            }}>
                                <Grid.Container gap={1}
                                css={{
                                    jc: 'flex-start',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {/* Image side grid */}
                                    <Grid
                                    css={{
                                        alignItems: 'center'
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
                                        }} src={Auction} className="rtAPLpics" />
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
                                                            borderColor: '#3300CC'
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
                                                        color: 'rgb(86 30 255)'
                                                    }}/>
                                                    <Grid>
                                                        <Text
                                                        css={{
                                                            jc: 'center',
                                                            fontWeight: '$medium',
                                                            textAlign: 'left',
                                                        }}>
                                                            7pm to 10pm
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
                                                            MPH, Sports Block
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