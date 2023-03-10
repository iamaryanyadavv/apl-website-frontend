import { Button, Input, Text, Image, Grid, Col, Avatar, Row} from "@nextui-org/react";
import { Loading } from '@nextui-org/react';
import React from "react";
import { useState, useEffect } from "react";
import Black from '../../assets/images/Black.jpeg'
import Grey from '../../assets/images/Grey.jpeg';
import './eachplayer.css';
import informCard from '../../assets/images/FIFACards/InFormGold.jpeg';


export default function EachPlayerCard(){
    const [Fetching, setFetching] = useState(true);
    const [PlayerData, setPlayerData] = useState([]);
    const [TeamData, setTeamData] = useState([]);

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
    // 10: Team Logo
    // 11: Price

    //Team array - 
    // 0: team logo image base64
    // 1: team logo colour text
    // 2: manager email
    // 3: team name
    // 4: payment mode
    // 5: manager name
    // 6: owners name
    // 7: manager email
    // 8: manager phone

    const getData = async () =>{
        await fetch('http://localhost:3001/seasons/apl5/players/playerdata')
        .then(response => response.json())
        .then((data)=>{
            setPlayerData(data);
        })
        await fetch('http://localhost:3001/seasons/apl5/players/teamdata')
        .then(response => response.json())
        .then((data)=>{
            setTeamData(data);
        })
        setFetching(false)
    }
    const Tier1Cards = PlayerData.map((player,index)=>(
            
            <Grid key={index}
            css={{
                margin: '20px',
                padding: '12px',
                backgroundColor: 'Black',
                borderRadius: '20px',
                borderStyle: 'solid',
                borderWidth: '2px',
                borderColor: '#C4B454'
            }}>
                {/* Card Column */}
                <Col>
                    {/* Top Left Info + img ROW */}
                    <Row
                    css={{
                        jc: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                        {/* Top Left Info */}
                        <Col>
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium'
                            }}>
                                {player[7]}
                            </Text>
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium'
                            }}>
                                {player[6]}
                            </Text>
                            <Grid.Container
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                padding: '5px 0px'
                            }}>
                                <Avatar bordered color='gradient' src={player[10]} />
                            </Grid.Container>
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium'
                            }}>
                                {player[9]}
                            </Text>
                            

                        </Col>
                        <img src={player[1]} className='player-picture' />
                    </Row>

                    {/* Name */}
                    <Text 
                    css={{
                        textAlign: 'center',
                        color: 'White',
                        borderStyle: 'solid',
                        borderWidth: '0px 0px 2px 0px',
                        borderColor: '#C4B454',
                        padding: '5px 5px 0px 5px',
                        fontSize: '$2xl',
                        fontWeight: '$medium'
                    }}>
                        {player[2]}
                    </Text>

                    {/* Bottom Info */}
                    <Col 
                    css={{
                        textAlign: 'center'
                    }}>
                        {/* Tier + Price */}
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <Text 
                            css={{
                                color: 'White',
                                padding: ' 5px 5px 0px 5px',
                                fontSize: '$lg',
                                fontWeight: '$medium'
                            }}>
                                Tier {player[8]}, {player[11]}M
                            </Text>
                        </Row>
                        {/* Positions p + s */}
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}>
                            {player[3] && player[4] && player[3]!=player[4] &&
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium'
                            }}>
                                {player[3]}, {player[4]}
                            </Text>
                            }
                            {player[3] && player[4] && player[3]==player[4] &&
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium'
                            }}>
                                {player[3]}
                            </Text>
                            }
                            {player[3] && !player[4] &&
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium'
                            }}>
                                {player[3]}
                            </Text>
                            }
                        </Row>
                    </Col>

                </Col>
            </Grid> 
    ))

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
            <div>
                {/* Tier 1 Block*/}
                <Grid.Container 
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    margin: '30px 0px 30px 0px',
                    backgroundColor: 'rgb(20,20,20)',
                    borderRadius: '20px'
                }}>
                    <Grid
                    css={{
                        jc: 'center',
                        alignItems:'center'
                    }}>


                        {/* Heading */}
                        <Grid.Container 
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                        }}>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$5xl',
                                fontWeight: '$semibold',
                                paddingBottom: '40px'
                            }}>
                                TIER 1
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$2xl',
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
                            textAlign: 'center',
                        }}>
                            
                            {Tier1Cards}
                            
                        </Grid.Container>

                    </Grid>

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
            </div>
            }
        </div>
        
        
    )
}