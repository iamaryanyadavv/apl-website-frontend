import { Grid, Col, Text, Image, Button } from "@nextui-org/react";
import './homeevents.css';
import React from "react";
import FIFA from '../../../assets/images/PS5Controller2.JPG';
import Foosball from '../../../assets/images/Foosball1.jpg';
import Inclusivity from '../../../assets/images/Inclusivity.jpg';
import AuctionPredictions from '../../../assets/images/AuctionPredictions.jpg';

export default function EventsContent () {
    return(
        <Grid.Container gap={4}
        css={{
            jc: 'center',
            textAlign: 'center',
            alignItems: 'center'
        }}>
            <Grid.Container 
            css={{
                jc: 'center',
                textAlign: 'center'
            }}>
                <Grid
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    padding: '24px'
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
                            objectFit: 'cover'
                        }}
                        src={Foosball}/>
                        <Text
                        css={{
                            fontSize: '$3xl',
                            fontWeight: '$bold',
                            borderStyle: 'solid',
                            borderWidth: '0px 0px 2px 0px',
                            borderColor: '$purple600',
                            padding: '2%'
                        }}>
                            Foosball
                        </Text>
                        <Text
                        css={{
                            fontSize: '$2xl',
                            fontWeight: '$semibold',
                            padding: '2%'
                        }}>
                            16th March, 2023
                        </Text>
                    </Col>
                </Grid>


                <Grid
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    padding: '24px'
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
                            objectFit: 'cover'
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
                            FIFA 2v2s
                        </Text>
                        <Text
                        css={{
                            fontSize: '$2xl',
                            fontWeight: '$semibold',
                            padding: '2%'
                        }}>
                            22nd March, 2023
                        </Text>
                    </Col>
                </Grid>

                
                <Grid
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    padding: '24px'
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
                            objectFit: 'cover'
                        }}
                        src={Inclusivity}/>
                        <Text
                        css={{
                            fontSize: '$3xl',
                            fontWeight: '$bold',
                            borderStyle: 'solid',
                            borderWidth: '0px 0px 2px 0px',
                            borderColor: '$purple600',
                            padding: '2%'
                        }}>
                            Inclusivity
                        </Text>
                        <Text
                        css={{
                            fontSize: '$2xl',
                            fontWeight: '$semibold',
                            padding: '2%'
                        }}>
                            30th March, 2023
                        </Text>
                    </Col>
                </Grid>

                        
                <Grid
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    padding: '24px'
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
                            objectFit: 'cover'
                        }}
                        src={AuctionPredictions}/>
                        <Text
                        css={{
                            fontSize: '$3xl',
                            fontWeight: '$bold',
                            borderStyle: 'solid',
                            borderWidth: '0px 0px 2px 0px',
                            borderColor: '$purple600',
                            padding: '2%'
                        }}>
                            Predictions
                        </Text>
                        <Text
                        css={{
                            fontSize: '$2xl',
                            fontWeight: '$semibold',
                            padding: '2%'
                        }}>
                            5th April, 2023
                        </Text>
                    </Col>
                </Grid>


            </Grid.Container>


            <Grid.Container gap={0}
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                padding: '20px 0px 40px 0px'
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