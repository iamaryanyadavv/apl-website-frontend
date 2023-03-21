import React from "react";
import { useState, useEffect } from "react";
import { Table, Grid, Loading, Avatar, Text, Col, Button } from "@nextui-org/react";
import Pool1 from "./apl5pool1";
import Pool2 from "./apl5pool2";
import Pool3 from "./apl5pool3";
import Pool4 from "./apl5pool4";
import AuctionRules from "./auctionrules";
import TournamentRules from "./tournamentrules";
import UnderDev from "../underdevelopment/underdev";

export default function APL5DetailsContent() {
    const [Fetching, setFetching] = useState();
    const [Games, setGames] = useState(true);
    const [Standings, setStandings] = useState(false)
    const [Rules, setRules] = useState(false)
    async function getStandings(){
        await fetch('https://ashoka-premier-league-api.onrender.com/seasons/apl5/standings')
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
                        <Button rounded light auto
                        css={{
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderColor: 'White'
                        }}
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
                        <Button rounded light auto 
                        css={{
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderColor: 'White'
                        }}
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
                        <Button rounded light auto 
                        css={{
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderColor: 'White'
                        }}
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
                        color: '$purple700'
                    }}>
                        Games
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        padding: '20px 0px 0px 0px',
                        fontSize: '$3xl',
                        fontWeight: '$semibold',
                        color: '$purple700'
                    }}>
                        Games
                    </Text>
                    <UnderDev/>
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
                        color: '#C86BDC'
                    }}>
                        Standings
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        padding: '20px 0px 0px 0px',
                        fontSize: '$3xl',
                        fontWeight: '$semibold',
                        color: '#C86BDC'
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
                        color: '#ec51c0'
                    }}>
                        Rules
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        padding: '20px 0px 0px 0px',
                        fontSize: '$3xl',
                        fontWeight: '$semibold',
                        color: '#ec51c0'
                    }}>
                        Rules
                    </Text>
                    <Col>
                        <AuctionRules/>
                        {/* <TournamentRules/> */}
                        {/* Uncomment this component when done with it^ */}
                    </Col>
                </>
                }

            </div>}

        </div>
    )
}