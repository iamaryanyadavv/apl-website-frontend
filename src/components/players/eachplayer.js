import { Button, Input, Text, Image, Grid, Col} from "@nextui-org/react";
import { Loading } from '@nextui-org/react';
import React from "react";
import { useState, useEffect } from "react";
import Black from '../../assets/images/Black.jpeg'
import './eachplayer.css';


export default function EachPlayerCard(){
    const [Fetching, setFetching] = useState(true);
    const [PlayerData, setPlayerData] = useState([]);

    // Player array - 
    // 0: ID
    // 1: Picture
    // 2: Name
    // 3: PrimaryPosition
    // 4: SecondaryPosition
    // 5: Comments
    // 6: Gender
    // 7: Batch
    // 8: Tier
    // 9: Team
    // 10: Price
    const getData = async () => {
        await fetch('http://localhost:3001/seasons/apl5/players')
        .then(response => response.json())
        .then((data)=>{
            setPlayerData(data);
            setFetching(false);
        })
    }

    useEffect( () => {
        getData();
    }, [])

    return(
        <div>   
            {Fetching===true && 
            <Grid.Container
            css={{
                jc: 'center',
                alignItems: 'center',
                height: '60vh'
            }}>
                <Loading
                size="xl"
                color={'white'}
                />
            </Grid.Container>
            }
            {!Fetching && 
            <Grid.Container gap={2}
            css={{
                jc: 'center',
                alignItems: 'center'
            }}>
                {/* Tier 1 Block*/}
                <Grid.Container gap={2}
                css={{
                    jc: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgb(20,20,20)',
                    borderRadius: '20px'
                }}>

                    {/* Heading */}
                    <Grid.Container gap={2}
                    css={{
                        jc: 'center',
                        alignItems: 'center'
                    }}>
                        <Text
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            fontSize: '$5xl',
                            fontWeight: '$semibold',
                            paddingBottom: '40px'
                        }}>
                            TIER 1
                        </Text>
                    </Grid.Container>

                    {/* Content */}
                    <Grid.Container
                    css={{
                        jc: 'center',
                        alignItems: 'center'
                    }}>
                        
                            <Grid
                            css={{
                                padding: '10px 10px 15px 10px',
                                backgroundColor: '#dcdcdc',
                                borderRadius: '10px'
                            }}>
                                {PlayerData.forEach((Player)=>{
                                {console.log(Player[2])}
                                <Col
                                css={{
                                    textAlign: 'center',
                                    alignItems: 'center'
                                }}>
                                <img src={Black} className='player-picture'/>
                                <Text
                                css={{
                                    color: 'Black',
                                    backgroundColor: '#dcdcdc',
                                    fontSize: '$xl',
                                    fontWeight: '$semibold'
                                }}>
                                    {Player[2]}
                                </Text>
                                </Col>
                                })}
                            </Grid>

                    </Grid.Container>
                        {/* <Grid
                        css={{
                            padding: '10px 10px 15px 10px',
                            backgroundColor: '#dcdcdc',
                            borderRadius: '10px'
                        }}>
                            <Col
                            css={{
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                            <img src={Black} className='player-picture'/>
                            <Text
                            css={{
                                color: 'Black',
                                backgroundColor: '#dcdcdc',
                                fontSize: '$xl',
                                fontWeight: '$semibold'
                            }}>
                                First Last
                            </Text>
                            </Col>
                        </Grid> */}

                </Grid.Container>

                {/* Tier 2 Block */}
                <Grid.Container>

                </Grid.Container>

                {/* Tier 3 Block */}
                <Grid.Container>

                </Grid.Container>

                {/* Tier 4 Block */}
                <Grid.Container>

                </Grid.Container>
            </Grid.Container>
            }
        </div>
        
        
    )
}