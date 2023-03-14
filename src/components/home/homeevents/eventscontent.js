import { Grid, Col, Text, Image, Button } from "@nextui-org/react";
import './homeevents.css';
import React from "react";
import FIFA from '../../../assets/images/PS5Controller2.JPG';
import Nutmeg from '../../../assets/images/FootballFreestyle.jpeg';
import Bin from '../../../assets/images/Bin.png';
import FBowl from '../../../assets/images/FootballBowling 2.jpeg';

export default function EventsContent () {
    return(
        <Grid.Container gap={4}
        css={{
            jc: 'center',
            textAlign: 'center',
            alignItems: 'center'
        }}>
            <Grid.Container gap={4}
            css={{
                jc: 'center',
                textAlign: 'center'
            }}>
                <Grid
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                    <Col 
                    css={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Image 
                        css={{
                            '@xsMin':{
                                width: '300px',
                                height: '300px',
                                borderRadius: '20px'
                            },
                            '@xsMax':{
                                width: '150px',
                                height: '150px',
                                borderRadius: '20px'
                            },
                        }}
                        src={FIFA}/>
                        <Text
                        css={{
                            fontSize: '$3xl',
                            fontWeight: '$bold',
                            borderStyle: 'solid',
                            borderWidth: '0px 0px 2px 0px',
                            borderColor: '$purple600',
                            padding: '2%'
                        }}>
                            FIFA Tournament
                        </Text>
                        <Text
                        css={{
                            fontSize: '$2xl',
                            fontWeight: '$semibold',
                            padding: '2%'
                        }}>
                            18/03/2023
                        </Text>
                    </Col>
                </Grid>


                <Grid
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                    <Col 
                    css={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <Image 
                        css={{
                            '@xsMin':{
                                width: '300px',
                                height: '300px',
                                borderRadius: '20px'
                            },
                            '@xsMax':{
                                width: '150px',
                                height: '150px',
                                borderRadius: '20px'
                            },
                        }}
                        src={Nutmeg}/>
                        <Text
                        css={{
                            fontSize: '$3xl',
                            fontWeight: '$bold',
                            borderStyle: 'solid',
                            borderWidth: '0px 0px 2px 0px',
                            borderColor: '$purple600',
                            padding: '2%'
                        }}>
                            1v1 Challenge
                        </Text>
                        <Text
                        css={{
                            fontSize: '$2xl',
                            fontWeight: '$semibold',
                            padding: '2%'
                        }}>
                            19/03/2023
                        </Text>
                    </Col>
                </Grid>

                
                <Grid
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                    <Col 
                    css={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Image 
                        css={{
                            '@xsMin':{
                                width: '300px',
                                height: '300px',
                                borderRadius: '20px'
                            },
                            '@xsMax':{
                                width: '150px',
                                height: '150px',
                                borderRadius: '20px'
                            },
                        }}
                        src={Bin}/>
                        <Text
                        css={{
                            fontSize: '$3xl',
                            fontWeight: '$bold',
                            borderStyle: 'solid',
                            borderWidth: '0px 0px 2px 0px',
                            borderColor: '$purple600',
                            padding: '2%'
                        }}>
                            Bin Challenge
                        </Text>
                        <Text
                        css={{
                            fontSize: '$2xl',
                            fontWeight: '$semibold',
                            padding: '2%'
                        }}>
                            20/03/2023
                        </Text>
                    </Col>
                </Grid>

                        
                <Grid
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                    <Col 
                    css={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Image 
                        css={{
                            '@xsMin':{
                                width: '300px',
                                height: '300px',
                                borderRadius: '20px'
                            },
                            '@xsMax':{
                                width: '150px',
                                height: '150px',
                                borderRadius: '20px'
                            },
                        }}
                        src={FBowl}/>
                        <Text
                        css={{
                            fontSize: '$3xl',
                            fontWeight: '$bold',
                            borderStyle: 'solid',
                            borderWidth: '0px 0px 2px 0px',
                            borderColor: '$purple600',
                            padding: '2%'
                        }}>
                            Foot Bowling
                        </Text>
                        <Text
                        css={{
                            fontSize: '$2xl',
                            fontWeight: '$semibold',
                            padding: '2%'
                        }}>
                            21/03/2023
                        </Text>
                    </Col>
                </Grid>


            </Grid.Container>


            <Grid.Container gap={4}
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                paddingTop: '40px'
            }}>
                <Grid>
                    <Button className="mini-events-btn"
                    auto shadow rounded>
                        <a href="/events" className="mini-events-btn-2">Promo Events </a> 
                    </Button>
                </Grid>
            </Grid.Container>
        </Grid.Container>
    )
}