import {Text, Grid, Col, Avatar, Row} from "@nextui-org/react";
import { Loading } from '@nextui-org/react';
import React from "react";
import { useState, useEffect } from "react";
import Black from '../../assets/images/Black.jpeg';
import Grey from '../../assets/images/Grey.jpeg';
import './apl5playerscontent.css';
import { AiOutlineDollar } from 'react-icons/ai'


export default function APL5PlayersContent(){
    const [Fetching, setFetching] = useState(true);
    const [Tier1PlayerData, setTier1PlayerData] = useState([]);
    const [Tier2PlayerData, setTier2PlayerData] = useState([]);
    const [Tier3PlayerData, setTier3PlayerData] = useState([]);
    const [Tier4PlayerData, setTier4PlayerData] = useState([]);

    // Player array - 
    // 0: ID
    // 1: Picture
    // 2: Name
    // 3: PrimaryPosition
    // 4: SecondaryPosition
    // 5: Comments
    // 6: Tier
    // 7: Team
    // 8: Team logo
    // 9: Price
    // 10: Gender
    // 11: Batch

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
            preparePlayerTierData(data);
            setFetching(false);
        })
    }

    const Tier1Cards = Tier1PlayerData.map((player,index)=>(
            
            <Grid key={index}
            css={{
                margin: '20px',
                padding: '12px',
                backgroundColor: 'Black',
                borderRadius: '20px',
                borderStyle: 'solid',
                borderWidth: '2.5px',
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
                                {player[10]}
                            </Text>
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium'
                            }}>
                                {player[11]}
                            </Text>
                            <Grid.Container
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                padding: '5px 0px'
                            }}>
                                <Avatar size={'lg'} bordered src={player[8]} />
                            </Grid.Container>
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium'
                            }}>
                                {player[7]}
                            </Text>
                            

                        </Col>
                        {player[1] && 
                        <img src={player[1]} className='player-picture' />
                        }
                        {!player[1] && 
                        <img src={Grey} className="player-picture" />
                        }
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
                            <AiOutlineDollar size={'20px'}/> 
                            <Text 
                            css={{
                                color: 'White',
                                padding: ' 0px 5px 0px 5px',
                                fontSize: '$lg',
                                fontWeight: '$medium'
                            }}>
                                {player[9]}M
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

    const Tier2Cards = Tier2PlayerData.map((player,index)=>(
            
        <Grid key={index}
        css={{
            margin: '20px',
            padding: '12px',
            backgroundColor: 'Black',
            borderRadius: '20px',
            borderStyle: 'solid',
            borderWidth: '2.5px',
            borderColor: 'rgb(157, 171, 187)'
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
                            {player[10]}
                        </Text>
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[11]}
                        </Text>
                        <Grid.Container
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            padding: '5px 0px'
                        }}>
                            <Avatar size={'lg'} bordered src={player[8]} />
                        </Grid.Container>
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[7]}
                        </Text>
                        

                    </Col>
                    {player[1] && 
                    <img src={player[1]} className='player-picture' />
                    }
                    {!player[1] && 
                    <img src={Grey} className="player-picture" />
                    }
                </Row>

                {/* Name */}
                <Text 
                css={{
                    textAlign: 'center',
                    color: 'White',
                    borderStyle: 'solid',
                    borderWidth: '0px 0px 2px 0px',
                    borderColor: 'rgb(157, 171, 187)',
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
                        <AiOutlineDollar size={'20px'}/> 
                        <Text 
                        css={{
                            color: 'White',
                            padding: ' 0px 5px 0px 5px',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[9]}M
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

    const Tier3Cards = Tier3PlayerData.map((player,index)=>(
            
        <Grid key={index}
        css={{
            margin: '20px',
            padding: '12px',
            backgroundColor: 'Black',
            borderRadius: '20px',
            borderStyle: 'solid',
            borderWidth: '2.5px',
            borderColor: 'rgb(190, 159, 103)'
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
                            {player[10]}
                        </Text>
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[11]}
                        </Text>
                        <Grid.Container
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            padding: '5px 0px'
                        }}>
                            <Avatar size={'lg'} bordered  src={player[10]} />
                        </Grid.Container>
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[7]}
                        </Text>
                        

                    </Col>
                        {player[1] && 
                        <img src={player[1]} className='player-picture' />
                        }
                        {!player[1] && 
                        <img src={Grey} className="player-picture" />
                        }
                </Row>

                {/* Name */}
                <Text 
                css={{
                    textAlign: 'center',
                    color: 'White',
                    borderStyle: 'solid',
                    borderWidth: '0px 0px 2px 0px',
                    borderColor: 'rgb(190, 159, 103)',
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

                        <AiOutlineDollar size={'20px'}/> 
                        <Text 
                        css={{
                            color: 'White',
                            padding: ' 0px 5px 0px 5px',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[9]}M
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

    const Tier4Cards = Tier4PlayerData.map((player,index)=>(
            
        <Grid key={index}
        css={{
            margin: '20px',
            padding: '12px',
            backgroundColor: 'Black',
            borderRadius: '20px',
            borderStyle: 'solid',
            borderWidth: '2.5px',
            borderColor: 'rgb(125 17 125)'
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
                            {player[10]}
                        </Text>
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[11]}
                        </Text>
                        <Grid.Container
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            padding: '5px 0px'
                        }}>
                            <Avatar size={'lg'} bordered src={player[10]} />
                        </Grid.Container>
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[7]}
                        </Text>
                        

                    </Col>
                        {player[1] && 
                        <img src={player[1]} className='player-picture' />
                        }
                        {!player[1] && 
                        <img src={Grey} className="player-picture" />
                        }
                </Row>

                {/* Name */}
                <Text 
                css={{
                    textAlign: 'center',
                    color: 'White',
                    borderStyle: 'solid',
                    borderWidth: '0px 0px 2px 0px',
                    borderColor: 'rgb(125 17 125)',
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

                        <AiOutlineDollar size={'20px'}/>    
                        <Text 
                        css={{
                            color: 'White',
                            padding: ' 0px 5px 0px 5px',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[9]}M
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

    const preparePlayerTierData = (players) => {
        const tier1players = []
        for(var i=0; i< players.length; i++){
            if(players[i][6]=='1'){
                tier1players.push(players[i])
            }
        }
        setTier1PlayerData(tier1players)

        const tier2players = []
        for(var i=0; i< players.length; i++){
            if(players[i][6]=='2'){
                tier2players.push(players[i])
            }
        }
        setTier2PlayerData(tier2players)

        const tier3players = []
        for(var i=0; i< players.length; i++){
            if(players[i][6]=='3'){
                tier3players.push(players[i])
            }
        }
        setTier3PlayerData(tier3players)

        const tier4players = []
        for(var i=0; i< players.length; i++){
            if(players[i][6]=='4'){
                tier4players.push(players[i])
            }
        }
        setTier4PlayerData(tier4players)
        
    }

    useEffect( () => {
        getData();
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
                            marginTop: '40px'
                        }}>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$6xl',
                                fontWeight: '$semibold',
                                paddingBottom: '40px',
                                color: '#C4B454'
                            }}>
                                TIER 1
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$2xl',
                                fontWeight: '$semibold',
                                paddingBottom: '40px',
                                color: '#C4B454'
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
                <Grid.Container 
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    margin: '30px 0px 30px 0px',
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
                            marginTop: '40px'
                        }}>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$6xl',
                                fontWeight: '$semibold',
                                paddingBottom: '40px',
                                color: 'rgb(157, 171, 187)'
                            }}>
                                TIER 2
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$2xl',
                                fontWeight: '$semibold',
                                paddingBottom: '40px',
                                color: 'rgb(157, 171, 187)'
                            }}>
                                TIER 2
                            </Text>
                        </Grid.Container>

                        {/* Content */}
                        <Grid.Container
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                        }}>
                            
                            {Tier2Cards}
                            
                        </Grid.Container>

                    </Grid>

                </Grid.Container>

                {/* Tier 3 Block */}
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
                            marginTop: '40px'
                        }}>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$6xl',
                                fontWeight: '$semibold',
                                paddingBottom: '40px',
                                color: 'rgb(190, 159, 103)'
                            }}>
                                TIER 3
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$2xl',
                                fontWeight: '$semibold',
                                paddingBottom: '40px',
                                color: 'rgb(190, 159, 103)'
                            }}>
                                TIER 3
                            </Text>
                        </Grid.Container>

                        {/* Content */}
                        <Grid.Container
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                        }}>
                            
                            {Tier3Cards}
                            
                        </Grid.Container>

                    </Grid>

                </Grid.Container>

                {/* Tier 4 Block */}
                <Grid.Container 
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    margin: '30px 0px 30px 0px',
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
                            marginTop: '40px'
                        }}>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$6xl',
                                fontWeight: '$semibold',
                                paddingBottom: '40px',
                                color: 'rgb(125 17 125)'
                            }}>
                                TIER 4
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$2xl',
                                fontWeight: '$semibold',
                                paddingBottom: '40px',
                                color: 'rgb(125 17 125)'
                            }}>
                                TIER 4
                            </Text>
                        </Grid.Container>

                        {/* Content */}
                        <Grid.Container
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                        }}>
                            
                            {Tier4Cards}
                            
                        </Grid.Container>

                    </Grid>

                </Grid.Container>
            </div>
            }
        </div>
        
        
    )
}