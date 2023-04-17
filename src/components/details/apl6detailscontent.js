import React from "react";
import { useState, useEffect } from "react";
import { Table, Grid, Loading, Avatar, Text, Col, Button, Spacer } from "@nextui-org/react";
import APL6AuctionRules from "./apl6auctionrules";
import APL6TournamentRules from "./apl6tournamentrules";
import ComingSoon from '../comingsoon/comingsoon'
import APL6Games from './apl6games'
import Pool1 from "./apl6pool1";
import Pool2 from "./apl6pool2";
import Pool3 from "./apl6pool3";
import Pool4 from "./apl6pool4";
import Pool5 from "./apl6pool5";
import Pool6 from "./apl6pool6";
import BOT from "./apl6BOT";
import APL6StandingsFAQs from "./apl6StandingsFAQs";

export default function APL6DetailsContent() {
    const [Fetching, setFetching] = useState(false);
    const [Games, setGames] = useState(true);
    const [Standings, setStandings] = useState(false)
    const [Rules, setRules] = useState(false)

    async function getStandings(){
        await fetch('https://aplapi.onrender.com/seasons/apl6/standings')
        .then(response=>response.json())
        .then(data=>{
            setFetching(false)
        })
    }

                    
    useEffect(()=>{
        setFetching(true)
        getStandings();
    }, [])

    return(
        <div>
            {Fetching===true && 
            <Grid.Container gap={4}
            css={{
                jc: 'center',
                alignItems: 'center',
                height: '60vh',
            }}>
                <Loading
                size="xl"
                color={'white'}
                />
            </Grid.Container>
            }
            {!Fetching &&
            <div>
                <Grid.Container
                css={{
                    jc: 'center',
                    alignItems: 'center',
                }}>
                    <Grid 
                    css={{
                        padding: '10px'
                    }}>
                        <Button auto color="secondary" rounded flat
                        onClick={()=>{
                            setGames(true)
                            setStandings(false)
                            setRules(false)
                        }}>
                            Games
                        </Button>
                    </Grid>
                    <Grid 
                    css={{
                        padding: '10px'
                    }}>
                        <Button auto color="secondary" rounded flat
                        onClick={()=>{
                            setGames(false)
                            setStandings(true)
                            setRules(false)
                        }}>
                            Standings
                        </Button>
                    </Grid>
                    <Grid 
                    css={{
                        padding: '10px'
                    }}>
                        <Button auto color="secondary" rounded flat
                        onClick={()=>{
                            setGames(false)
                            setStandings(false)
                            setRules(true)
                        }}>
                            Rules
                        </Button>
                    </Grid>
                </Grid.Container>

                {Games && !Standings && !Rules &&
                <>
                    <Text hideIn={'xs'}
                    css={{
                        textAlign: 'center',
                        padding: '20px 0px 0px 0px',
                        fontSize: '$6xl',
                        fontWeight: '$semibold',
                    }}>
                        Games
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        padding: '20px 0px 0px 0px',
                        fontSize: '$3xl',
                        fontWeight: '$semibold',
                    }}>
                        Games
                    </Text>
                    <APL6Games/>
                </>
                }

                {!Games && Standings && !Rules &&
                <>
                    <Text hideIn={'xs'}
                    css={{
                        textAlign: 'center',
                        padding: '20px 0px 0px 0px',
                        fontSize: '$6xl',
                        fontWeight: '$semibold',
                    }}>
                        Standings
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        padding: '20px 0px 0px 0px',
                        fontSize: '$3xl',
                        fontWeight: '$semibold',
                    }}>
                        Standings
                    </Text>
                    <APL6StandingsFAQs/>
                    <Pool1/>
                    <Pool2/>
                    <Pool3/>
                    <Pool4/>
                    <Pool5/>
                    <Pool6/>
                    <BOT/>
                </>
                }

                {!Games && !Standings && Rules &&
                <>
                    <Text hideIn={'xs'}
                    css={{
                        textAlign: 'center',
                        padding: '20px 0px 0px 0px',
                        fontSize: '$6xl',
                        fontWeight: '$semibold',
                    }}>
                        Rules
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        padding: '20px 0px 0px 0px',
                        fontSize: '$3xl',
                        fontWeight: '$semibold',
                    }}>
                        Rules
                    </Text>
                    <Col>
                        <APL6AuctionRules/>
                        <APL6TournamentRules/>
                        {/* Uncomment this component when done with it^ */}
                    </Col>
                </>
                }

            </div>}

        </div>
    )
}