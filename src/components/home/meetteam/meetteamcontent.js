import { Grid, Col,Image, Text, Button } from "@nextui-org/react";
import React from "react";
import'./meetteam.css';
import P1 from '../../../assets/images/Random2 2.jpeg';
import P2 from '../../../assets/images/Random3 2.jpeg';
import P3 from '../../../assets/images/Random4 2.jpeg';
import P4 from '../../../assets/images/Random5 2.jpeg';

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
                            <Image css={{maxWidth:'250px', maxHeight:'250px'}} src={P1} className='team-pic' />
                        </Grid>
                        <Grid>
                            <Image css={{maxWidth:'250px', maxHeight:'250px'}} src={P2} className='team-pic' />
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
                                to Head of Departments
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: '$lg',
                                fontWeight: '$medium',

                            }}>
                                to Head of Departments
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
                                to Team Members
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: '$lg',
                                fontWeight: '$medium',

                            }}>
                                to Team Members
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
                        <Image css={{maxWidth:'250px', maxHeight:'250px'}} src={P3} className='team-pic' />
                    </Grid>
                </Grid.Container>
                <Grid.Container gap={1}
                css={{
                    jc: 'center',
                    textAlign: 'center'
                }}>
                    <Grid>
                        <Image css={{maxWidth:'250px', maxHeight:'250px'}} src={P4} className='team-pic' />
                    </Grid>
                </Grid.Container>
            </Grid>
        </Grid.Container>
    )
}