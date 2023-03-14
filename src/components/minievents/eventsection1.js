import React from "react";
import './minievents.css';
import { Col, Grid, Image, Text } from "@nextui-org/react";
import {
    IoCalendarNumber,
    IoLocation,
    IoGameController
  } from 'react-icons/io5';
import { AiOutlineTeam, AiOutlineClockCircle } from "react-icons/ai";

export default function eventsection1(props){
    const backgroundcolor = props.backgroundcolor
    return(
        <Grid.Container gap={5}
        css={{
            jc: 'center',
            textAlign: 'center',
            alignItems: 'center',
            paddingBottom: '60px',
            backgroundColor: backgroundcolor,
        }}>
            {/* Image side grid */}
            <Grid
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center'
            }}>
                <Image 
                css={{
                    '@xsMax':{
                        width: '300px',
                        height: '300px',
                        borderRadius: '20px'
                    },
                    '@xsMin':{
                        width: '400px',
                        height: '400px',
                        borderRadius: '20px'
                    }
                }} src={props.src} />
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
                                    {props.heading}
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
                                    {props.heading}
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
                                    {props.desc1}
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
                                    {props.desc2}
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
                                    {props.time}
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
                                    {props.date}
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
                                    {props.location}
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
                                    {props.team}
                                </Text>
                            </Grid>
                        </Grid.Container>

                        {props.link=='yes' && 
                        <Grid.Container gap={1}
                        css={{
                            maxWidth: 'fit-content',
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                        }}>
                            <Grid>
                                <IoGameController/>
                            </Grid>
                            <Grid>
                                <Text 
                                css={{
                                    jc: 'center',
                                    fontWeight: '$medium',
                                    textAlign: 'left',
                                    paddingRight: '5px'
                                }}>
                                    <a href={props.linkref} >Regiser here!</a>
                                </Text>
                            </Grid>
                        </Grid.Container>
                        }

                        
           
                </Col>
            </Grid>

        </Grid.Container>
    )
}