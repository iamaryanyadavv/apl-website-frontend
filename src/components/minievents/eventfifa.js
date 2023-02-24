import React from "react";
import './minievents.css';
import { Col, Grid, Image, Text } from "@nextui-org/react";
import {
    IoCalendarNumber,
    IoLocation
  } from 'react-icons/io5';
import { AiOutlineTeam, AiOutlineClockCircle } from "react-icons/ai";
import PS5 from '../../assets/images/PS5Controller2.JPG';

export default function EventFifa () {
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
                <Image src={PS5} className="eventpicfifa" />
            </Grid>

            {/* Text side grid */}
            <Grid
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
            }}>
                <Col>
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
                                    FIFA Tournament
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
                                    FIFA Tournament
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
                                    Participate in this FIFA tournament to show you're better than your comptetitors virtually.
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
                                    Stand a chance to win a &#x20B9;2000 cash prize!
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
                                    18th March, 2023
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
                                    Takshila, AC02
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
                                    Solo or Duo
                                </Text>
                            </Grid>
                        </Grid.Container>
           
                </Col>
            </Grid>

        </Grid.Container>
    )
}