import { Grid, Image, Row, Link } from "@nextui-org/react";
import './footnavbar.css';
import React from "react";
import Grey from '../../assets/images/Grey.jpeg';
import APLLogo from '../../assets/images/Logo.jpeg';

export default function FootNavbar () {
    return(
        <Grid.Container 
        css={{
            jc: 'center',
            textAlign: 'center',
            alignItems: 'center',
        }}>

            <Grid.Container gap={1}
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                marginTop: '15px',
            }}>
                <Grid>
                    <Image src={APLLogo} width={'90px'} height={'90px'} />
                </Grid>
            </Grid.Container>

            <Grid.Container gap={4}
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
                    <Grid.Container gap={2}
                    css={{
                        jc: 'center',
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>
                        <Grid>
                            <Link className="footnavbar-item" href="/">
                                Home
                            </Link>
                        </Grid>
                        <Grid>
                            <Link className="footnavbar-item" href="/registration" >
                                Registration
                            </Link>
                        </Grid>
                        <Grid>
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
                    <Grid.Container gap={2}
                    css={{
                        jc: 'center',
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>
                        <Grid>
                            <Link className="footnavbar-item" href="/slots" >
                                Slots
                            </Link>
                        </Grid>
                        <Grid>
                            <Link className="footnavbar-item" href="/seasons">
                                Seasons
                            </Link>
                        </Grid>
                        <Grid>
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