import React from "react";
import "./homelanding.css";
import { Button, Text, Grid, Link } from "@nextui-org/react";

function HomeLanding() {
    return(
        <div className="homelandingpage">

            <div className="hlbackg">

            {/* <Grid.Container gap={0.5}
            css={{
                jc: 'center',
                paddingRight: '5%',
                paddingLeft: '5%',
                paddingTop: '0%',
                paddingBottom: '2.5%'
            }}>
                <Grid>
                    <Text h1
                    css={{
                        fontWeight: '$medium'
                    }}>
                        Ashoka</Text>
                </Grid>
                <Grid>
                    <Text h1
                    css={{
                        fontWeight: '$medium'
                    }}>
                        Premier</Text>
                </Grid>
                <Grid>
                    <Text h1
                    css={{
                        fontWeight: '$medium'
                    }}>
                        League</Text>
                </Grid>
                <Grid>
                    <Text h1
                    css={{
                        fontWeight: '$medium'
                    }}>
                        Official</Text>
                </Grid>
                <Grid>
                    <Text h1
                    css={{
                        fontWeight: '$medium'
                    }}>
                        Website</Text>
                </Grid>
            </Grid.Container>
             */}
            <Text h1
            css={{
                textAlign: 'center',
                fontWeight: '$semibold',
                paddingBottom: '5%',
                paddingTop: '5%'
            }}>
                    Welcome to APL.
            </Text>
            
            <Text className="hlquote" h2
            css={{
                display: 'flex',
                jc: 'center',
                alignItems: 'center',
                paddingRight: '10%',
                paddingLeft: '10%',
                paddingBottom: '0%',
                fontFamily: 'DS',
                fontWeight: 'normal'
            }}>
                “In football, the result is an impostor. You can do things really, really well but not win. There is something greater than the result, more lasting - a legacy” - Xavi
            </Text>

            <Text h3
            css={{
                display: 'flex',
                jc: 'center',
                fontWeight: '$medium',
                padding: '2%',
                paddingBottom: '0%',
                paddingTop: '5%'
            }}>
                APL 6.0 details below
            </Text>

            <Grid.Container gap={4}
            css={{
                jc: 'center',
                paddingBottom: '7.5%'
            }}>
                <Grid>
                    <Button  shadow rounded bordered auto ghost>
                        <a className="h-btn" href="/">Auction Rules</a>
                    </Button>
                </Grid>
                <Grid>
                    <Button  shadow rounded bordered auto ghost>
                        <a className="h-btn" href="/">Team List</a>
                    </Button>
                </Grid>
                <Grid>
                    <Button  shadow rounded bordered auto ghost>
                        <a className="h-btn" href="/">Schedule</a>
                    </Button>
                </Grid>
                <Grid>
                    <Button  shadow rounded bordered auto ghost>
                        <a className="h-btn" href="/">Player List</a>
                    </Button>
                </Grid>
                <Grid>
                    <Button  shadow rounded bordered auto ghost>
                        <a className="h-btn" href="/">Game Rules</a>
                    </Button>
                </Grid>
            </Grid.Container>

            {/* <Grid.Container gap={0.5}
            css={{
                jc: 'center',
                paddingRight: '5%',
                paddingLeft: '5%',
                paddingTop: '2.5%',
                paddingBottom: '2.5%'
            }}>
                <Grid>
                    <Text h2
                    css={{
                        fontWeight: '$medium'
                    }}>
                        REGISTRATIONS</Text>
                </Grid>
                <Grid>
                    <Text h2
                    css={{
                        fontWeight: '$medium'
                    }}>
                        OPEN</Text>
                </Grid>
                <Grid>
                    <Text h2
                    css={{
                        fontWeight: '$medium'
                    }}>
                        NOW!</Text>
                </Grid>
            </Grid.Container> */}

            <Text h2 
            css={{
                textAlign: 'center',
                jc: 'center',

            }}>
                REGISTRATIONS OPEN NOW!
            </Text>

            <Grid.Container gap={4}
            css={{
                jc: 'center',
                paddingBottom: '5%'
            }}>
                <Grid>
                    <Button  shadow rounded bordered auto ghost>
                        <a className="h-btn" href="/registration">REGISTRATIONS!</a>
                    </Button>
                </Grid>
            </Grid.Container>
            </div>
        </div>
    )
}

export default HomeLanding;