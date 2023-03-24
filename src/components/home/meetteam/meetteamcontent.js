import { Grid, Col,Image, Text, Button } from "@nextui-org/react";
import React from "react";
import'./meetteam.css';
import AryanYadav from '../../../assets/avatars/AdminTeam/webteam_aryanyadav.jpeg';
import DhrthiBhat from '../../../assets/avatars/AdminTeam/director_dhrthibhat.jpg';
import Uday from '../../../assets/avatars/AdminTeam/director_uday.jpg'
import Zahaan from '../../../assets/avatars/AdminTeam/webteam_zahaan.jpg'

export default function MeetTeamContent () {
    return(
        <Grid.Container
        css={{
            jc: 'center',
            textAlign: 'center',
            paddingBottom: '30px'
        }}>
            <Grid>
                <Col>
                    <Grid.Container gap={2}
                    css={{
                        jc: 'center',
                        textAlign: 'center'
                    }}>
                        <Grid>
                        <Image 
                            css={{
                                '@xsMin':{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '125px'
                                },
                                '@xsMax':{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '75px'
                                },
                                objectFit: 'cover'
                            }}  src={DhrthiBhat} />
                        </Grid>
                        <Grid>
                        <Image 
                            css={{
                                '@xsMin':{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '125px'
                                },
                                '@xsMax':{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '75px'
                                },
                                objectFit: 'cover'
                            }}  src={Uday} />
                        </Grid>
                    </Grid.Container>
                    <Grid.Container gap={0}
                    css={{
                        jc: 'center',
                        textAlign: 'center'
                    }}>
                        <Grid>
                            <Text hideIn={'xs'}
                            css={{
                                fontSize: '$2xl',
                                fontWeight: '$medium',

                            }}>
                                From APL Directors
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: '$lg',
                                fontWeight: '$medium',

                            }}>
                                From APL Directors
                            </Text>
                        </Grid>
                    </Grid.Container>

                    <Grid.Container gap={0}
                    css={{
                        jc: 'center',
                        textAlign: 'center'
                    }}>
                        <Grid>
                            <Text hideIn={'xs'}
                            css={{
                                fontSize: '$2xl',
                                fontWeight: '$medium',

                            }}>
                                to Organising Committee
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: '$lg',
                                fontWeight: '$medium',

                            }}>
                                to Organising Committee
                            </Text>
                        </Grid>
                    </Grid.Container>

                    <Grid.Container gap={0}
                    css={{
                        jc: 'center',
                        textAlign: 'center'
                    }}>
                        <Grid>
                            <Text hideIn={'xs'}
                            css={{
                                fontSize: '$2xl',
                                fontWeight: '$medium',

                            }}>
                                to Website Develepors.
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: '$lg',
                                fontWeight: '$medium',

                            }}>
                                to Website Develepors.
                            </Text>
                        </Grid>
                    </Grid.Container>

                    <Grid.Container gap={0}
                    css={{
                        jc: 'center',
                        textAlign: 'center'
                    }}>
                        <Grid>
                            <Text hideIn={'xs'}
                            css={{
                                fontSize: '$2xl',
                                fontWeight: '$medium',

                            }}>
                                We have everyone here!
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: '$lg',
                                fontWeight: '$medium',

                            }}>
                                We have everyone here!
                            </Text>
                        </Grid>
                    </Grid.Container>

                    <Grid.Container gap={2}
                    css={{
                        jc: 'center',
                        textAlign: 'center'
                    }}>
                        <Grid>
                            <Button className="team-btn"
                            auto shadow rounded >
                                <a href="/team" className="team-btn-2"> Team </a> 
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Col>
            </Grid>
            <Grid>
                
                <Grid.Container gap={2}
                css={{
                    jc: 'center',
                    textAlign: 'center'
                }}>
                    <Grid>
                    <Image
                        css={{
                            '@xsMin':{
                                width: '200px',
                                height: '200px',
                                borderRadius: '125px'
                            },
                            '@xsMax':{
                                width: '150px',
                                height: '150px',
                                borderRadius: '75px'
                            },
                            objectFit: 'cover'
                        }}  src={AryanYadav} />
                    </Grid>
                </Grid.Container>
                <Grid.Container gap={1}
                css={{
                    jc: 'center',
                    textAlign: 'center'
                }}>
                    <Grid>
                    <Image 
                        css={{
                            '@xsMin':{
                                width: '200px',
                                height: '200px',
                                borderRadius: '125px'
                            },
                            '@xsMax':{
                                width: '150px',
                                height: '150px',
                                borderRadius: '75px'
                            },
                            objectFit: 'cover'
                        }}  src={Zahaan}  />
                    </Grid>
                </Grid.Container>
            </Grid>
        </Grid.Container>
    )
}