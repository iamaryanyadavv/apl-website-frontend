import { Grid, Image, Text, Col } from "@nextui-org/react";
import React from "react";
import './minievents.css';
import {
    IoCalendarNumber,
    IoLocation
  } from 'react-icons/io5';
  import { AiOutlineTeam, AiOutlineClockCircle } from "react-icons/ai";
import FBowl from '../../assets/images/FootballBowling 2.jpeg';

export default function EventBowling () {
    return(

        <Grid.Container gap={5}
        css={{
            jc: 'center',
            textAlign: 'center',
            alignItems: 'center',
        }}>


            {/* Text side grid */}
            <Grid
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center'
            }}>
                <Col>
                        <Grid.Container gap={1}
                        css={{
                            jc: 'center',
                            maxWidth: 'fit-content',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            <Grid>
                                <Text hideIn={'xs'}
                                css={{
                                    jc: 'center',
                                    textAlign: 'center',
                                    fontSize: '$4xl',
                                    fontWeight: '$bold',
                                    borderStyle: 'solid',
                                    borderWidth: '0px 0px 2px 0px',
                                    borderColor: '$purple600'
                                }}>
                                    Football Bowling
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    jc: 'center',
                                    textAlign: 'center',
                                    fontSize: '$2xl',
                                    fontWeight: '$bold',
                                    borderStyle: 'solid',
                                    borderWidth: '0px 0px 2px 0px',
                                    borderColor: '$purple600'
                                }}>
                                    Football Bowling
                                </Text>
                            </Grid>
                        </Grid.Container>
                        
                        <Grid.Container gap={1}
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
                                    Participate in the football bowling and see how high you can score!
                                </Text>
                            </Grid>
                        </Grid.Container>

                        <Grid.Container gap={1}
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
                                    One with most points after 3 turns gets &#x20B9;50 off their registration fee!
                                </Text>
                            </Grid>
                        </Grid.Container>

                        <Grid.Container gap={1}
                        css={{
                            maxWidth: 'fit-content',
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                        }}>
                            <Grid>
                                <AiOutlineClockCircle/>
                            </Grid>
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

                        <Grid.Container gap={1}
                        css={{
                            maxWidth: 'fit-content',
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                        }}>
                            <Grid>
                                <IoCalendarNumber/>
                            </Grid>
                            <Grid>
                                <Text
                                css={{
                                    jc: 'center',
                                    fontWeight: '$medium',
                                    textAlign: 'left',
                                }}>
                                    22nd March, 2023
                                </Text>
                            </Grid>
                        </Grid.Container>

                        <Grid.Container gap={1}
                        css={{
                            maxWidth: 'fit-content',
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                        }}>
                            <Grid>
                                <IoLocation/>
                            </Grid>
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

                        <Grid.Container gap={1}
                        css={{
                            maxWidth: 'fit-content',
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                        }}>
                            <Grid>
                                <AiOutlineTeam/>
                            </Grid>
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

            {/* Image side grid */}
            <Grid
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center'
            }}>
                <Image src={FBowl} className="eventpics" />
            </Grid>


        </Grid.Container>
    )
}