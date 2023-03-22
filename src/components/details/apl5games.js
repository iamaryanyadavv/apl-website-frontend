import React, { useState, useEffect } from "react";
import { Grid, Loading, Card, Text, Row, Col, Avatar } from "@nextui-org/react";

export default function Games(){
    const [Fetching, setFetching] = useState();
    const [Teams, setTeams] = useState();
    const [Day1Games, setDay1Games] = useState([]);
    const [Day2Games, setDay2Games] = useState([]);
    const [Day3Games, setDay3Games] = useState([]);

    async function getGames(){
        await fetch('https://ashoka-premier-league-api.onrender.com/seasons/apl5/games')
        .then(response=>response.json())
        .then(data=>{
            const day1games=[]
            const day2games=[]
            const day3games=[]
            for(var i=1; i<21;i++)
            {
                day1games.push(data.values[i])
            }
            for(var i=22; i<42;i++)
            {
                day2games.push(data.values[i])
            }
            for(var i=43; i<=54;i++)
            {
                day3games.push(data.values[i])
            }
            setDay1Games(day1games)
            setDay2Games(day2games)
            setDay3Games(day3games.reverse())
            setFetching(false)
        })
    }

    async function getTeams(){
        await fetch('http://localhost:3001/seasons/apl5/teamdata')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setTeams(data)
        })
    }

    useEffect(()=>{
        setFetching(true)
        getGames()
        getTeams()
    },[])

    return(
        <>
            {Fetching && 
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
            {!Fetching && Teams && 
                <>
                    {Day3Games.length!=0 &&
                        <Grid.Container 
                        css={{
                            jc: 'center',
                            textAlign: 'center'
                        }}>
                            <Grid>

                                {/* Day 3 Games */}
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                    textAlign: 'center',
                                    margin: '30px 0px 30px 0px',
                                    backgroundColor: 'rgb(20,20,20)',
                                    borderRadius: '20px'
                                }}>
                                    <Grid.Container
                                    css={{
                                        jc: 'center'
                                    }}>
                                        <Text
                                        css={{
                                            fontSize: '$4xl',
                                            fontWeight: '$semibold',
                                            padding: '20px'
                                        }}>
                                            Day 3
                                        </Text>
                                    </Grid.Container>
                                        {Day3Games.map((game,index)=>(
                                            <Grid key={index}
                                            css={{
                                                padding: '10px'
                                            }}>
                                                <Card css={{ mw: "max-content" }}>
                                                    <Card.Header>
                                                        <Text b>{game[4]}</Text>
                                                    </Card.Header>

                                                    <Card.Divider />

                                                    <Card.Body css={{ py: "$10", padding: '20px 10px' }}>
                                                        <Grid.Container
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center'
                                                        }}>
                                                            <Grid
                                                            css={{
                                                                '@xsMax':{
                                                                    width: '100%'
                                                                }
                                                            }}>
                                                                <Row 
                                                                css={{
                                                                    jc: 'center',
                                                                    textAlign: 'center'
                                                                }}>
                                                                    {Teams.map((team,index)=>(
                                                                        team[2]==game[1]? <Avatar src={team[0]}/> : <></>
                                                                    ))}
                                                                    <Text
                                                                    css={{
                                                                        fontSize: '$2xl',
                                                                        fontWeight: '$semibold',
                                                                        padding: '0px 10px'
                                                                    }}>
                                                                        {game[1]}
                                                                    </Text>
                                                                </Row>
                                                            </Grid>

                                                            <Grid 
                                                            css={{
                                                                '@xsMax':{
                                                                    width: '100%'
                                                                }
                                                            }}>
                                                                <Text 
                                                                css={{
                                                                    fontSize: '$2xl',
                                                                    fontWeight: '$semibold',
                                                                    padding: '0px 10px',
                                                                    display: 'inline'
                                                                }}>
                                                                    {game[3]}
                                                                </Text>
                                                            </Grid>

                                                            <Grid 
                                                            css={{
                                                                '@xsMax':{
                                                                    width: '100%'
                                                                }
                                                            }}>
                                                                <Row 
                                                                css={{
                                                                    jc: 'center',
                                                                    textAlign: 'center'
                                                                }}>
                                                                    <Text 
                                                                    css={{
                                                                        fontSize: '$2xl',
                                                                        fontWeight: '$semibold',
                                                                        padding: '0px 10px'
                                                                    }}>
                                                                        {game[2]}
                                                                    </Text>
                                                                    {Teams.map((team,index)=>(
                                                                        team[2]==game[2]? <Avatar src={team[0]}/> : <></>
                                                                    ))}
                                                                </Row>
                                                            </Grid>
                                                        </Grid.Container>
                                                        <Grid.Container
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            alignItems: 'center'
                                                        }}>
                                                            <Text
                                                            css={{
                                                                color:'$gray600'
                                                            }}>
                                                                {game[5]}
                                                            </Text>
                                                        </Grid.Container>


                                                    </Card.Body>
                                                    
                                                    <Card.Divider />
                                                    
                                                    <Card.Footer>
                                                        <Text b>April 16th Sunday {game[0]}</Text>
                                                    </Card.Footer>
                                                </Card>
                                            </Grid>
                                        ))}
                                </Grid.Container>
                            </Grid>
                        </Grid.Container>
                    }

                    {Day2Games.length!=0 &&
                        <Grid.Container 
                        css={{
                            jc: 'center',
                            textAlign: 'center'
                        }}>
                            <Grid>

                                {/* Day 2 Games */}
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                    textAlign: 'center',
                                    margin: '30px 0px 30px 0px',
                                    backgroundColor: 'rgb(20,20,20)',
                                    borderRadius: '20px'
                                }}>
                                    <Grid.Container
                                    css={{
                                        jc: 'center'
                                    }}>
                                        <Text
                                        css={{
                                            fontSize: '$4xl',
                                            fontWeight: '$semibold',
                                            padding: '20px'
                                        }}>
                                            Day 2
                                        </Text>
                                    </Grid.Container>
                                        {Day2Games.map((game,index)=>(
                                            <Grid key={index}
                                            css={{
                                                padding: '10px'
                                            }}>
                                                <Card isHoverable css={{ mw: "max-content" }}>
                                                    <Card.Header>
                                                        <Text b>Game {index+1}</Text>
                                                    </Card.Header>

                                                    <Card.Divider />

                                                    <Card.Body css={{ py: "$10" }}>
                                                        <Grid.Container
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center'
                                                        }}>
                                                            <Grid
                                                            css={{
                                                                '@xsMax':{
                                                                    width: '100%'
                                                                }
                                                            }}>
                                                                <Row 
                                                                css={{
                                                                    jc: 'center',
                                                                    textAlign: 'center'
                                                                }}>
                                                                    {Teams.map((team,index)=>(
                                                                        team[2]==game[1]? <Avatar src={team[0]}/> : <></>
                                                                    ))}
                                                                    <Text
                                                                    css={{
                                                                        fontSize: '$2xl',
                                                                        fontWeight: '$semibold',
                                                                        padding: '0px 10px'
                                                                    }}>
                                                                        {game[1]}
                                                                    </Text>
                                                                </Row>
                                                            </Grid>

                                                            <Grid 
                                                            css={{
                                                                '@xsMax':{
                                                                    width: '100%'
                                                                }
                                                            }}>
                                                                <Text 
                                                                css={{
                                                                    fontSize: '$2xl',
                                                                    fontWeight: '$semibold',
                                                                    padding: '0px 10px',
                                                                    display: 'inline'
                                                                }}>
                                                                    {game[3]}
                                                                </Text>
                                                            </Grid>

                                                            <Grid 
                                                            css={{
                                                                '@xsMax':{
                                                                    width: '100%'
                                                                }
                                                            }}>
                                                                <Row 
                                                                css={{
                                                                    jc: 'center',
                                                                    textAlign: 'center'
                                                                }}>
                                                                    <Text 
                                                                    css={{
                                                                        fontSize: '$2xl',
                                                                        fontWeight: '$semibold',
                                                                        padding: '0px 10px'
                                                                    }}>
                                                                        {game[2]}
                                                                    </Text>
                                                                    {Teams.map((team,index)=>(
                                                                        team[2]==game[2]? <Avatar src={team[0]}/> : <></>
                                                                    ))}
                                                                </Row>
                                                            </Grid>
                                                        </Grid.Container>


                                                    </Card.Body>
                                                    
                                                    <Card.Divider />
                                                    
                                                    <Card.Footer>
                                                        <Text b>April 15th Saturday {game[0]}</Text>
                                                    </Card.Footer>
                                                </Card>
                                            </Grid>
                                        ))}
                                </Grid.Container>
                            </Grid>
                        </Grid.Container>
                    }
                    
                    {Day1Games.length!=0 &&
                        <Grid.Container 
                        css={{
                            jc: 'center',
                            textAlign: 'center'
                        }}>
                            <Grid>

                                {/* Day 1 Games */}
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                    textAlign: 'center',
                                    margin: '30px 0px 30px 0px',
                                    backgroundColor: 'rgb(20,20,20)',
                                    borderRadius: '20px'
                                }}>
                                    <Grid.Container
                                    css={{
                                        jc: 'center'
                                    }}>
                                        <Text
                                        css={{
                                            fontSize: '$4xl',
                                            fontWeight: '$semibold',
                                            padding: '20px'
                                        }}>
                                            Day 1
                                        </Text>
                                    </Grid.Container>
                                        {Day1Games.map((game,index)=>(
                                            <Grid key={index}
                                            css={{
                                                padding: '10px'
                                            }}>
                                                <Card isHoverable css={{ mw: "max-content" }}>
                                                    <Card.Header>
                                                        <Text b>Game {index+1}</Text>
                                                    </Card.Header>

                                                    <Card.Divider />

                                                    <Card.Body css={{ py: "$10" }}>
                                                        <Grid.Container
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center'
                                                        }}>
                                                            <Grid
                                                            css={{
                                                                '@xsMax':{
                                                                    width: '100%'
                                                                }
                                                            }}>
                                                                <Row 
                                                                css={{
                                                                    jc: 'center',
                                                                    textAlign: 'center'
                                                                }}>
                                                                    {Teams.map((team,index)=>(
                                                                        team[2]==game[1]? <Avatar src={team[0]}/> : <></>
                                                                    ))}
                                                                    <Text
                                                                    css={{
                                                                        fontSize: '$2xl',
                                                                        fontWeight: '$semibold',
                                                                        padding: '0px 10px'
                                                                    }}>
                                                                        {game[1]}
                                                                    </Text>
                                                                </Row>
                                                            </Grid>

                                                            <Grid 
                                                            css={{
                                                                '@xsMax':{
                                                                    width: '100%'
                                                                }
                                                            }}>
                                                                <Text 
                                                                css={{
                                                                    fontSize: '$2xl',
                                                                    fontWeight: '$semibold',
                                                                    padding: '0px 10px',
                                                                    display: 'inline'
                                                                }}>
                                                                    {game[3]}
                                                                </Text>
                                                            </Grid>

                                                            <Grid 
                                                            css={{
                                                                '@xsMax':{
                                                                    width: '100%'
                                                                }
                                                            }}>
                                                                <Row 
                                                                css={{
                                                                    jc: 'center',
                                                                    textAlign: 'center'
                                                                }}>
                                                                    <Text 
                                                                    css={{
                                                                        fontSize: '$2xl',
                                                                        fontWeight: '$semibold',
                                                                        padding: '0px 10px'
                                                                    }}>
                                                                        {game[2]}
                                                                    </Text>
                                                                    {Teams.map((team,index)=>(
                                                                        team[2]==game[2]? <Avatar src={team[0]}/> : <></>
                                                                    ))}
                                                                </Row>
                                                            </Grid>
                                                        </Grid.Container>


                                                    </Card.Body>
                                                    
                                                    <Card.Divider />
                                                    
                                                    <Card.Footer>
                                                        <Text b>April 14th Friday {game[0]}</Text>
                                                    </Card.Footer>
                                                </Card>
                                            </Grid>
                                        ))}
                                </Grid.Container>
                            </Grid>
                        </Grid.Container>
                    }
                </>
            }
        </>
    )
}