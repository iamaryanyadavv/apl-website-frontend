import { Col, Grid, Image, Text } from "@nextui-org/react";
import React from "react";
import './minievents.css';
import {
    IoCalendarNumber,
    IoLocation
  } from 'react-icons/io5';
  import { AiOutlineTeam, AiOutlineClockCircle } from "react-icons/ai";
import Bin from '../../assets/images/Bin.png';

export default function EventBin () {
    return(

        <Grid.Container gap={5}
        css={{
            jc: 'center',
            textAlign: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(20,20,20)',
        }}>
            {/* Image side grid */}
            <Grid
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center'
            }}>
                <Image src={Bin} className="eventpics" />
            </Grid>

            {/* Text side grid */}
            <Grid
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
            }}>
                <Col
                css={{
                    padding: '20px',
                }}>
                        <Grid.Container gap={1}
                        css={{
                            jc: 'center',
                            maxWidth: 'fit-content',
                            textAlign: 'center',
                            alignItems: 'center',
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
                                    Bin Challenge
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
                                    Bin Challenge
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
                                    Feel like you're more of a Beckham than Messi? This is your chance to prove it!
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
                                    The one with the most bin shots out of 10 attempts wins a &#x20B9;2000 cash prize!
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
                                    21st March, 2023
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
                                    Mess Lawns
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

        </Grid.Container>
    )
}