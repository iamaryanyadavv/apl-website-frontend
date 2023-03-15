import { Grid, Image, Row, Link } from "@nextui-org/react";
import './footnavbar.css';
import React from "react";
import BlueLogo from '../../assets/images/BlueLogo.png';

export default function FootNavbar () {
    return(
        <Grid.Container 
        css={{
            jc: 'center',
            textAlign: 'center',
            alignItems: 'center',
        }}>

            <Grid.Container gap={0}
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                marginTop: '15px',
            }}>
                <Grid
                css={{
                    padding: '12px'
                }}>
                    <Image 
                    css={{
                        borderRadius: '10px'
                    }} src={BlueLogo} width={'90px'} height={'90px'} />
                </Grid>
            </Grid.Container>

            <Grid.Container gap={0}
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                
            }}>
                <Row
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                    <Grid.Container gap={0}
                    css={{
                        jc: 'center',
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>
                        <Grid 
                        css={{
                            padding: '12px'
                        }}>
                            <Link className="footnavbar-item" href="/">
                                Home
                            </Link>
                        </Grid>
                        <Grid 
                        css={{
                            padding: '12px'
                        }}>
                            <Link className="footnavbar-item" href="/registration" >
                                Registration
                            </Link>
                        </Grid>
                        <Grid 
                        css={{
                            padding: '12px'
                        }}>
                            <Link className="footnavbar-item" href="/events" >
                                Events
                            </Link>
                        </Grid>
                    </Grid.Container>
                </Row>
                <Row
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                    <Grid.Container gap={0}
                    css={{
                        jc: 'center',
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>
                        <Grid 
                        css={{
                            padding: '12px'
                        }}>
                            <Link className="footnavbar-item" href="/slots" >
                                Slots
                            </Link>
                        </Grid>
                        <Grid 
                        css={{
                            padding: '12px'
                        }}>
                            <Link className="footnavbar-item" href="/seasons">
                                Seasons
                            </Link>
                        </Grid>
                        <Grid 
                        css={{
                            padding: '12px'
                        }}>
                            <Link className="footnavbar-item" href="/team">
                                Team
                            </Link>
                        </Grid>
                    </Grid.Container>
                </Row>
            </Grid.Container>

        </Grid.Container>
    )
}