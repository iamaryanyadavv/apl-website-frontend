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
            <Text showIn={'sm' | 'md'} hideIn={'xs'}
            css={{
                fontSize: "$7xl" ,
                alignItems: 'center',
                textAlign: 'center',
                fontWeight: '$semibold',
                paddingBottom: '20%',
                paddingTop: '15%'
            }}>
                    Ashoka Premier League
            </Text>
            <Text showIn={'xs'} 
            css={{
                fontSize: "$4xl" ,
                textAlign: 'center',
                fontWeight: '$medium',
                paddingBottom: '80%',
                paddingTop: '80%'
            }}>
                    Ashoka Premier League
            </Text>


            {/* <Text h3
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
            </Grid.Container> */}

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

            {/* <Text hideIn={'xs'}
            css={{
                textAlign: 'center',
                jc: 'center',
                fontSize: "$4xl",
                fontWeight: "$semibold"
            }}>
                APL 6.0 REGISTRATIONS HERE!
            </Text>
            <Text showIn={'xs'}
            css={{
                textAlign: 'center',
                jc: 'center',
                fontSize: "$2xl",
                fontWeight: "$semibold",
                paddingBottom: '5%'
            }}>
                APL 6.0 REGISTRATIONS HERE!
            </Text>

            <Grid.Container gap={1}
            css={{
                jc: 'center',
                paddingBottom: '10%'
            }}>
                <Grid>
                    <Button  shadow rounded bordered auto ghost>
                        <a className="h-btn" href="/registration">REGISTRATIONS!</a>
                    </Button>
                </Grid>
            </Grid.Container> */}
            </div>
            </div>
    )
}

export default HomeLanding;