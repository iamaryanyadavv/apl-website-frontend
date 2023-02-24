import { Grid, Image, Text, Col } from "@nextui-org/react";
import React from "react";
import './minievents.css';
import {
    IoCalendarNumber,
    IoLocation
  } from 'react-icons/io5';
  import { AiOutlineTeam, AiOutlineClockCircle } from "react-icons/ai";
import Nutmeg from '../../assets/images/FootballFreestyle.jpeg';

export default function EventNutmeg () {
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
                                    1v1 Challenge
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
                                    1v1 Challenge
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
                                    Participate in the 1v1 challenge and show them what you can do with an actual ball at your feet!
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
                                    Every nutmeg gets you &#x20B9;50 off your registration fee!
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
                                    19th March, 2023
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
                <Image src={Nutmeg} className="eventpics" />
            </Grid>


        </Grid.Container>
    )
}