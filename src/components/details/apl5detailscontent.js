import React from "react";
import { useState, useEffect } from "react";
import { Table, Grid, Loading, Avatar, Text, Col, Button } from "@nextui-org/react";
import Pool1 from "./apl5pool1";
import Pool2 from "./apl5pool2";
import Pool3 from "./apl5pool3";
import Pool4 from "./apl5pool4";
import APL5AuctionRules from "./apl5auctionrules";
import APL5TournamentRules from "./apl5tournamentrules";
import APL5Games from "./apl5games";
import UnderDev from "../underdevelopment/underdev";

export default function APL5DetailsContent() {
    const [Fetching, setFetching] = useState();
    const [Games, setGames] = useState(true);
    const [Standings, setStandings] = useState(false)
    const [Rules, setRules] = useState(false)
    async function getStandings(){
        await fetch('https://aplapi.onrender.com/seasons/apl5/standings')
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
                    <APL5Games/>
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
                    <Col
                    css={{
                        padding: '0px 15px'
                    }}>
                        <Pool1/>
                        <Pool2/>
                        <Pool3/>
                        <Pool4/>
                    </Col>
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
                        <APL5AuctionRules/>
                        <APL5TournamentRules/>
                        {/* Uncomment this component when done with it^ */}
                    </Col>
                </>
                }

            </div>}

        </div>
    )
}