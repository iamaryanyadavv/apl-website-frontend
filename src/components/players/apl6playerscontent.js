import {Text, Grid, Col, Avatar, Row, Spacer, Link, Input, Image} from "@nextui-org/react";
import { Loading } from '@nextui-org/react';
import React from "react";
import { useState, useEffect } from "react";
import User from '../../assets/images/User.png';
import './playerscontent.css';
import { AiOutlineDollar } from 'react-icons/ai';
import { TbSoccerField } from "react-icons/tb";
import {BsBook, BsGenderAmbiguous} from "react-icons/bs";
import Search from '../../assets/images/search.png'


export default function APL6PlayersContent(){
    const [Fetching, setFetching] = useState(true);
    const [PreTierAllotmentPlayers, setPreTierAllotmentPlayers] = useState([]);
    const [Tier1PlayerData, setTier1PlayerData] = useState([]);
    const [Tier2PlayerData, setTier2PlayerData] = useState([]);
    const [Tier3PlayerData, setTier3PlayerData] = useState([]);
    const [Tier4PlayerData, setTier4PlayerData] = useState([]);
    const [OneReady, setOneReady] = useState(true);
    const [TwoReady, setTwoReady] = useState(false);
    const [ThreeReady, setThreeReady] = useState(false);
    const [FourReady, setFourReady] = useState(false);
    const [Search, setSearch] = useState('');

    // Player array - 
    // 0: Picture
    // 1: Name
    // 2: PrimaryPosition
    // 3: SecondaryPosition
    // 4: Comments
    // 5: Tier
    // 6: Price
    // 7: Team
    // 8: Team Logo
    // 9: Gender
    // 10: Batch

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

    const getTeamData = async () =>{
        await fetch('https://aplapi.onrender.com/seasons/apl6/teamdata')
        .then(response => response.json())
        .then((data)=>{
            OnceTeamData(data)
        })
    }

    const OnceTeamData = async (teams) => {
        await fetch('https://aplapi.onrender.com/seasons/apl6/playerdata')
        .then(response => response.json())
        .then((data)=>{
            console.log(data)
            preparePlayerTierData(data, teams);
            setFetching(false);
        })
    }

    const TierLessCards = PreTierAllotmentPlayers.map((player,index)=>(
        
        <Grid key={index}
        css={{
            margin: '20px',
            padding: '12px',
            backgroundColor: 'rgb(5,5,5)',
            borderRadius: '20px',
            boxShadow: '10px 10px 10px rgb(5,5,5)',
            // borderStyle: 'ridge',
            // borderWidth: '20px',
            // borderColor: '#C4B454'
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
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <BsGenderAmbiguous size={'20px'} className='user' />
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                                padding: '0px 0px 0px 5px'
                            }}>
                                {/* Gender */}
                                {player[9]} 
                            </Text>    
                        </Row>
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <BsBook size={'20px'} className='book' />
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                                padding: '0px 0px 0px 5px'
                            }}>
                                {/* Batch */}
                                {player[10]}
                            </Text>    
                        </Row>
                        
                        {/* Tier + Price */}
                        <Row 
                        css={{
                            display: 'flex',
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <AiOutlineDollar size={'20px'} className='dollar'/>
                            
                            <Text 
                            css={{
                                color: '$gray500',
                                padding: ' 0px 0px 0px 2px',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                            }}>
                                {/* available after auction */}
                                -
                            </Text>
                            
                        </Row>
                        

                    </Col>
                    {player[0] && 
                    <img src={player[0]} className='player-picture' />
                    }
                    {!player[0] && 
                    <img src={User} className="player-picture" />
                    }
                </Row>

                {/* Name */}
                <Text 
                css={{
                    textAlign: 'center',
                    color: 'White',
                    // borderStyle: 'solid',
                    // borderWidth: '0px 0px 2px 0px',
                    // borderColor: '#C4B454',
                    padding: '5px 5px 0px 5px',
                    fontSize: '$3xl',
                    fontWeight: '$medium'
                }}>
                    {player[1]}
                </Text>

                {/* Bottom Info */}
                <Col 
                css={{
                    textAlign: 'center',
                }}>
                        
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '0px 0px 5px 0px'
                        }}>
                            {/* <GiSoccerBall size={'20px'} className='team' /> */}
                            {/* Team Logo */}
                            <Avatar size={'sm'} bordered src={player[8]} />
                            <Text 
                            css={{
                                color: '$gray500',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                                padding: '0px 0px 0px 5px'
                            }}>
                                {/*Team Name */}
                                -
                            </Text>    
                        </Row>
                    
                    {/* Positions p + s */}
                    <Row 
                    css={{
                        jc: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <TbSoccerField size={'25px'} className='soccerball'/>
                        {player[2] && player[3] && player[2]!=player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            padding: ' 0px 0px 0px 2px',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}, {player[3]}
                        </Text>
                        }
                        {player[2] && player[3] && player[2]==player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}
                        </Text>
                        }
                        {player[2] && !player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}
                        </Text>
                        }
                    </Row>
                </Col>

            </Col>
        </Grid> 
    ))

    const Tier1Cards = Tier1PlayerData.map((player,index)=>(
        
        <Grid key={index}
        css={{
            margin: '20px',
            padding: '12px',
            backgroundColor: 'rgb(5,5,5)',
            borderRadius: '20px',
            boxShadow: '10px 10px 10px rgb(5,5,5)',
            // borderStyle: 'ridge',
            // borderWidth: '20px',
            // borderColor: '#C4B454'
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
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <BsGenderAmbiguous size={'20px'} className='user' />
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                                padding: '0px 0px 0px 5px'
                            }}>
                                {/* Gender */}
                                {player[9]} 
                            </Text>    
                        </Row>
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <BsBook size={'20px'} className='book' />
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                                padding: '0px 0px 0px 5px'
                            }}>
                                {/* Batch */}
                                {player[10]}
                            </Text>    
                        </Row>
                        
                        {/* Tier + Price */}
                        <Row 
                        css={{
                            display: 'flex',
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <AiOutlineDollar size={'20px'} className='dollar'/>
                            { player[6]!='0' && 
                            <Text 
                            css={{
                                color: 'White',
                                padding: ' 0px 0px 0px 2px',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                            }}>
                                {player[6]}M
                            </Text>
                            }
                        </Row>
                        

                    </Col>
                    {player[0] && 
                    <img src={player[0]} className='player-picture' />
                    }
                    {!player[0] && 
                    <img src={User} className="player-picture" />
                    }
                </Row>

                {/* Name */}
                <Text 
                css={{
                    textAlign: 'center',
                    color: 'White',
                    // borderStyle: 'solid',
                    // borderWidth: '0px 0px 2px 0px',
                    // borderColor: '#C4B454',
                    padding: '5px 5px 0px 5px',
                    fontSize: '$3xl',
                    fontWeight: '$medium'
                }}>
                    {player[1]}
                </Text>

                {/* Bottom Info */}
                <Col 
                css={{
                    textAlign: 'center',
                }}>
                        
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '0px 0px 5px 0px'
                        }}>
                            {/* <GiSoccerBall size={'20px'} className='team' /> */}
                            {/* Team Logo */}
                            
                            <Avatar size={'sm'} bordered src={player[8]} />
                            {player[7]!='0' &&
                                <Text 
                                css={{
                                    color: 'White',
                                    fontSize: '$lg',
                                    fontWeight: '$medium',
                                    padding: '0px 0px 0px 5px'
                                }}>
                                    {/*Team Name */}
                                    {player[7]}
                                </Text>    
                            }
                        </Row>
                    
                    {/* Positions p + s */}
                    <Row 
                    css={{
                        jc: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <TbSoccerField size={'25px'} className='soccerball'/>
                        {player[2] && player[3] && player[2]!=player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            padding: ' 0px 0px 0px 2px',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}, {player[3]}
                        </Text>
                        }
                        {player[2] && player[3] && player[2]==player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}
                        </Text>
                        }
                        {player[2] && !player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}
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
            boxShadow: '10px 10px 10px rgb(5,5,5)',
            // borderStyle: 'solid',
            // borderWidth: '2.5px',
            // borderColor: '#C4B454'
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
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <BsGenderAmbiguous size={'20px'} className='user' />
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                                padding: '0px 0px 0px 5px'
                            }}>
                                {/* Gender */}
                                {player[9]} 
                            </Text>    
                        </Row>
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <BsBook size={'20px'} className='book' />
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                                padding: '0px 0px 0px 5px'
                            }}>
                                {/* Batch */}
                                {player[10]}
                            </Text>    
                        </Row>
                        
                        {/* Tier + Price */}
                        <Row 
                        css={{
                            display: 'flex',
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <AiOutlineDollar size={'20px'} className='dollar'/>
                            { player[6]!='0' && 
                            <Text 
                            css={{
                                color: 'White',
                                padding: ' 0px 0px 0px 2px',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                            }}>
                                {player[6]}M
                            </Text>
                            }
                        </Row>
                        

                    </Col>
                    {player[0] && 
                    <img src={player[0]} className='player-picture' />
                    }
                    {!player[0] && 
                    <img src={User} className="player-picture" />
                    }
                </Row>

                {/* Name */}
                <Text 
                css={{
                    textAlign: 'center',
                    color: 'White',
                    // borderStyle: 'solid',
                    // borderWidth: '0px 0px 2px 0px',
                    // borderColor: '#C4B454',
                    padding: '5px 5px 0px 5px',
                    fontSize: '$3xl',
                    fontWeight: '$medium'
                }}>
                    {player[1]}
                </Text>

                {/* Bottom Info */}
                <Col 
                css={{
                    textAlign: 'center',
                }}>
                        
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '0px 0px 5px 0px'
                        }}>
                            {/* <GiSoccerBall size={'20px'} className='team' /> */}
                            {/* Team Logo */}
                            <Avatar size={'sm'} bordered src={player[8]} />
                            {player[7]!='0' &&
                                <Text 
                                css={{
                                    color: 'White',
                                    fontSize: '$lg',
                                    fontWeight: '$medium',
                                    padding: '0px 0px 0px 5px'
                                }}>
                                    {/*Team Name */}
                                    {player[7]}
                                </Text>    
                            } 
                        </Row>
                    
                    {/* Positions p + s */}
                    <Row 
                    css={{
                        jc: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <TbSoccerField size={'25px'} className='soccerball'/>
                        {player[2] && player[3] && player[2]!=player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            padding: ' 0px 0px 0px 2px',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}, {player[3]}
                        </Text>
                        }
                        {player[2] && player[3] && player[2]==player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}
                        </Text>
                        }
                        {player[2] && !player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}
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
            boxShadow: '10px 10px 10px rgb(5,5,5)',
            // borderStyle: 'solid',
            // borderWidth: '2.5px',
            // borderColor: '#C4B454'
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
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <BsGenderAmbiguous size={'20px'} className='user' />
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                                padding: '0px 0px 0px 5px'
                            }}>
                                {/* Gender */}
                                {player[9]} 
                            </Text>    
                        </Row>
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <BsBook size={'20px'} className='book' />
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                                padding: '0px 0px 0px 5px'
                            }}>
                                {/* Batch */}
                                {player[10]}
                            </Text>    
                        </Row>
                        
                        {/* Tier + Price */}
                        <Row 
                        css={{
                            display: 'flex',
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <AiOutlineDollar size={'20px'} className='dollar'/>
                            { player[6]!="0" && 
                            <Text 
                            css={{
                                color: 'White',
                                padding: ' 0px 0px 0px 2px',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                            }}>
                                {player[6]}M
                            </Text>
                            }
                        </Row>
                        

                    </Col>
                    {player[0] && 
                    <img src={player[0]} className='player-picture' />
                    }
                    {!player[0] && 
                    <img src={User} className="player-picture" />
                    }
                </Row>

                {/* Name */}
                <Text 
                css={{
                    textAlign: 'center',
                    color: 'White',
                    // borderStyle: 'solid',
                    // borderWidth: '0px 0px 2px 0px',
                    // borderColor: '#C4B454',
                    padding: '5px 5px 0px 5px',
                    fontSize: '$3xl',
                    fontWeight: '$medium'
                }}>
                    {player[1]}
                </Text>

                {/* Bottom Info */}
                <Col 
                css={{
                    textAlign: 'center',
                }}>
                        
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '0px 0px 5px 0px'
                        }}>
                            {/* <GiSoccerBall size={'20px'} className='team' /> */}
                            {/* Team Logo */}
                            <Avatar size={'sm'} bordered src={player[8]} />
                            {player[7]!='0' &&
                                <Text 
                                css={{
                                    color: 'White',
                                    fontSize: '$lg',
                                    fontWeight: '$medium',
                                    padding: '0px 0px 0px 5px'
                                }}>
                                    {/*Team Name */}
                                    {player[7]}
                                </Text>    
                            }  
                        </Row>
                    
                    {/* Positions p + s */}
                    <Row 
                    css={{
                        jc: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <TbSoccerField size={'25px'} className='soccerball'/>
                        {player[2] && player[3] && player[2]!=player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            padding: ' 0px 0px 0px 2px',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}, {player[3]}
                        </Text>
                        }
                        {player[2] && player[3] && player[2]==player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}
                        </Text>
                        }
                        {player[2] && !player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}
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
            boxShadow: '10px 10px 10px rgb(5,5,5)',
            // borderStyle: 'solid',
            // borderWidth: '2.5px',
            // borderColor: '#C4B454'
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
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <BsGenderAmbiguous size={'20px'} className='user' />
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                                padding: '0px 0px 0px 5px'
                            }}>
                                {/* Gender */}
                                {player[9]} 
                            </Text>    
                        </Row>
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <BsBook size={'20px'} className='book' />
                            <Text 
                            css={{
                                color: 'White',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                                padding: '0px 0px 0px 5px'
                            }}>
                                {/* Batch */}
                                {player[10]}
                            </Text>    
                        </Row>
                        
                        {/* Tier + Price */}
                        <Row 
                        css={{
                            display: 'flex',
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '5px 0px 5px 0px'
                        }}>
                            <AiOutlineDollar size={'20px'} className='dollar'/>
                            { player[6]!='0' && 
                            <Text 
                            css={{
                                color: 'White',
                                padding: ' 0px 0px 0px 2px',
                                fontSize: '$lg',
                                fontWeight: '$medium',
                            }}>
                                {player[6]}M
                            </Text>
                            }
                        </Row>
                        

                    </Col>
                    {player[0] && 
                    <img src={player[0]} className='player-picture' />
                    }
                    {!player[0] && 
                    <img src={User} className="player-picture" />
                    }
                </Row>

                {/* Name */}
                <Text 
                css={{
                    textAlign: 'center',
                    color: 'White',
                    // borderStyle: 'solid',
                    // borderWidth: '0px 0px 1px 0px',
                    // borderColor: '$gray200',
                    // marginBottom: '10px',
                    padding: '5px 5px 0px 5px',
                    fontSize: '$3xl',
                    fontWeight: '$medium'
                }}>
                    {player[1]}
                </Text>

                {/* Bottom Info */}
                <Col 
                css={{
                    textAlign: 'center',
                }}>
                        
                        <Row 
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '0px 0px 5px 0px'
                        }}>
                            {/* <GiSoccerBall size={'20px'} className='team' /> */}
                            {/* Team Logo */}
                            <Avatar size={'sm'} bordered src={player[8]} />
                            {player[7]!='0' &&
                                <Text 
                                css={{
                                    color: 'White',
                                    fontSize: '$lg',
                                    fontWeight: '$medium',
                                    padding: '0px 0px 0px 5px'
                                }}>
                                    {/*Team Name */}
                                    {player[7]}
                                </Text>    
                            }  
                        </Row>
                    
                    {/* Positions p + s */}
                    <Row 
                    css={{
                        jc: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <TbSoccerField size={'25px'} className='soccerball'/>
                        {player[2] && player[3] && player[2]!=player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            padding: ' 0px 0px 0px 2px',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}, {player[3]}
                        </Text>
                        }
                        {player[2] && player[3] && player[2]==player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}
                        </Text>
                        }
                        {player[2] && !player[3] &&
                        <Text 
                        css={{
                            color: 'White',
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }}>
                            {player[2]}
                        </Text>
                        }
                    </Row>
                </Col>

            </Col>
        </Grid>
    ))

    const preparePlayerTierData = (players, teams) => {
        const pretierallotmentplayers = []
        const tier1players = []
        const tier2players = []
        const tier3players = []
        const tier4players = []
        if(players.values.length>1){
            for(var i=1; i< players.values.length; i++){
                for(var j=0; j<teams.length; j++){    
                    if(teams[j][2]==players.values[i][7]){
                        players.values[i][8]=teams[j][0]
                    }
                }
                if(players.values[i][5]=='0'){
                    if(players.values[i][5]=='0'){
                        pretierallotmentplayers.push(players.values[i])
                    }  
                }
                else if(players.values[i][5]!='0'){
                    if(players.values[i][5]=='1'){
                        tier1players.push(players.values[i])
                    }
                    if(players.values[i][5]=='2'){
                        tier2players.push(players.values[i])
                    }
                    if(players.values[i][5]=='3'){
                        tier3players.push(players.values[i])
                    }
                    if(players.values[i][5]=='4'){
                        tier4players.push(players.values[i])
                    }
                }
            }
        }
        setPreTierAllotmentPlayers(pretierallotmentplayers)
        setTier1PlayerData(tier1players)
        setTier2PlayerData(tier2players)
        setTier3PlayerData(tier3players)
        setTier4PlayerData(tier4players)
        
        //loop at t0 update each player with their team logo
        for (var i=0;i<players.values.length;i++){
            for(var j=0; j<teams.length; j++){    
                if(teams[j][2]==players.values[i][7]){
                    players.values[i][8]=teams[j][0]
                }
            }
        }

        
        
    }

    useEffect( () => {
        getTeamData();
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

                {/* Navigation Buttons */}
                <Grid.Container
                css={{
                    jc: 'center',
                    alignItems: 'center',
                }}>
                    <Grid 
                    css={{
                        '@xsMin':{
                            padding: '16px'
                        },
                        '@xsMax':{
                            padding: '16px 42px'
                        }
                    }}>
                        <Text id='tier1btn'
                        css={{
                            fontSize: '$lg',
                            color: '#C4B454',
                            fontWeight: '$semibold',
                            borderRadius: '20px',
                            backgroundColor: 'rgba(196, 180, 84, 0.2)',
                            textAlign: 'center',
                            padding: '2px 24px',
                            transition: 'padding 0.5s',
                            '&:hover':{
                                cursor: 'pointer',
                                backgroundColor: 'rgba(196, 180, 84, 0.25)',
                                padding: '2px 24px',
                            }
                        }}
                        onClick={()=>{
                            setOneReady(true)
                            setTwoReady(false)
                            setThreeReady(false)
                            setFourReady(false)
                            document.getElementById('tier1btn').style.transform='scale(0.95)'
                            window.setTimeout(()=>{
                                document.getElementById('tier1btn').style.transform='scale(1)'
                            }, 150)
                        }}
                        >
                            Tier 1
                        </Text>
                    </Grid>

                    <Grid 
                    css={{
                        '@xsMin':{
                            padding: '16px'
                        },
                        '@xsMax':{
                            padding: '16px 42px'
                        }
                    }}>
                        <Text id='tier2btn'
                        css={{
                            fontSize: '$lg',
                            color: 'rgb(157, 171, 187)',
                            fontWeight: '$semibold',
                            borderRadius: '20px',
                            backgroundColor: 'rgba(157, 171, 187, 0.2)',
                            textAlign: 'center',
                            padding: '2px 24px',
                            transition: 'padding 0.5s',
                            '&:hover':{
                                cursor: 'pointer',
                                backgroundColor: 'rgba(157, 171, 187, 0.25)',
                                padding: '2px 24px',
                            }
                        }}
                        onClick={()=>{
                            setOneReady(false)
                            setTwoReady(true)
                            setThreeReady(false)
                            setFourReady(false)
                            document.getElementById('tier2btn').style.transform='scale(0.95)'
                            window.setTimeout(()=>{
                                document.getElementById('tier2btn').style.transform='scale(1)'
                            }, 150)
                        }}
                        >
                            Tier 2
                        </Text>
                    </Grid>

                    <Grid 
                    css={{
                        '@xsMin':{
                            padding: '16px'
                        },
                        '@xsMax':{
                            padding: '16px 42px'
                        }
                    }}>
                        <Text id='tier3btn'
                        css={{
                            fontSize: '$lg',
                            color: 'rgba(190, 159, 103, 1)',
                            fontWeight: '$semibold',
                            borderRadius: '20px',
                            backgroundColor: 'rgba(190, 159, 103, 0.2)',
                            textAlign: 'center',
                            padding: '2px 24px',
                            transition: 'padding 0.5s',
                            '&:hover':{
                                cursor: 'pointer',
                                backgroundColor: 'rgba(190, 159, 103, 0.25)',
                                padding: '2px 24px',
                            }
                        }}
                        onClick={()=>{
                            setOneReady(false)
                            setTwoReady(false)
                            setThreeReady(true)
                            setFourReady(false)
                            document.getElementById('tier3btn').style.transform='scale(0.95)'
                            window.setTimeout(()=>{
                                document.getElementById('tier3btn').style.transform='scale(1)'
                            }, 150)
                        }}
                        >
                            Tier 3
                        </Text>
                    </Grid>

                    <Grid 
                    css={{
                        '@xsMin':{
                            padding: '16px'
                        },
                        '@xsMax':{
                            padding: '16px 42px'
                        }
                    }}>
                        <Text id='tier4btn'
                        css={{
                            fontSize: '$lg',
                            color: 'rgb(183, 110, 121)',
                            fontWeight: '$semibold',
                            borderRadius: '20px',
                            backgroundColor: 'rgba(183, 110, 121, 0.2)',
                            textAlign: 'center',
                            padding: '2px 24px',
                            transition: 'padding 0.5s',
                            '&:hover':{
                                cursor: 'pointer',
                                backgroundColor: 'rgba(183, 110, 121, 0.25)',
                                padding: '2px 24px',
                            }
                        }}
                        onClick={()=>{
                            setOneReady(false)
                            setTwoReady(false)
                            setThreeReady(false)
                            setFourReady(true)
                            document.getElementById('tier4btn').style.transform='scale(0.95)'
                            window.setTimeout(()=>{
                                document.getElementById('tier4btn').style.transform='scale(1)'
                            }, 150)
                        }}
                        >
                            Tier 4
                        </Text>
                    </Grid>

                    <Grid 
                    css={{
                        '@xsMin':{
                            padding: '16px'
                        },
                        '@xsMax':{
                            padding: '16px 42px'
                        }
                    }}>
                        <Link id='sheetsbtn'
                        css={{
                            fontSize: '$lg',
                            color: 'White',
                            fontWeight: '$semibold',
                            borderRadius: '20px',
                            backgroundColor: 'rgba(15, 157, 88, 0.6)',
                            textAlign: 'center',
                            padding: '2px 24px',
                            transition: 'padding 0.5s',
                            '&:hover':{
                                cursor: 'pointer',
                                backgroundColor: 'rgba(15, 157, 88, 0.7)',
                                padding: '2px 24px',
                            }
                        }}
                        onClick={()=>{
                            document.getElementById('sheetsbtn').style.transform='scale(0.95)'
                            window.setTimeout(()=>{
                                document.getElementById('sheetsbtn').style.transform='scale(1)'
                            }, 150)
                        }}
                        href='https://docs.google.com/spreadsheets/d/1Jl4oSC0BPjafsaBesmxV_vpcAvjiYrVxFiOhlk6_dZo/edit#gid=0'
                        target='_blank'
                        rel='noreferrer'
                        >
                            View in Sheets
                        </Link>
                    </Grid>
                </Grid.Container>

                {/* Tier 1 Block*/}
                {Tier1Cards.length != 0 && OneReady && !TwoReady && !ThreeReady && !FourReady &&
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
                            marginTop: '20px'
                        }}>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$6xl',
                                fontWeight: '$semibold',
                                paddingBottom: '20px',
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
                                paddingBottom: '20px',
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
                }
                
                {/* Tier 2 Block */}
                {Tier2Cards.length != 0 && !OneReady && TwoReady && !ThreeReady && !FourReady &&
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
                            marginTop: '20px'
                        }}>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$6xl',
                                fontWeight: '$semibold',
                                paddingBottom: '20px',
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
                                paddingBottom: '20px',
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
                }

                {/* Tier 3 Block */}
                {Tier3Cards.length != 0 && !OneReady && !TwoReady && ThreeReady && !FourReady &&
                <Grid.Container 
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    margin: '30px 0px 60px 0px',
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
                            marginTop: '20px'
                        }}>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$6xl',
                                fontWeight: '$semibold',
                                paddingBottom: '20px',
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
                                paddingBottom: '20px',
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
                }

                {/* Tier 4 Block */}
                {Tier4Cards.length != 0 && !OneReady && !TwoReady && !ThreeReady && FourReady && 
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
                            marginTop: '20px'
                        }}>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$6xl',
                                fontWeight: '$semibold',
                                paddingBottom: '20px',
                                color: '#B76E79'
                            }}>
                                TIER 4
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$2xl',
                                fontWeight: '$semibold',
                                paddingBottom: '20px',
                                color: '#B76E79'
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
                }

                {/* Pre Tier Allotment Block */}
                {TierLessCards.length != 0 && 
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
                            marginTop: '20px'
                        }}>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$6xl',
                                fontWeight: '$semibold',
                                paddingBottom: '20px',
                                color: 'White'
                            }}>
                                Registered
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$2xl',
                                fontWeight: '$semibold',
                                paddingBottom: '20px',
                                color: 'White'
                            }}>
                                Registered
                            </Text>
                        </Grid.Container>

                        {/* Content */}
                        <Grid.Container
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                        }}>
                            
                            {TierLessCards}
                            
                        </Grid.Container>

                    </Grid>

                </Grid.Container>
                }

                {TierLessCards.length==0 && Tier1Cards.length==0 && Tier2Cards.length==0 && Tier3Cards.length==0 && Tier4Cards.length==0 &&
                    <div>
                        <Text hideIn={'xs'}
                        css={{
                            fontSize: '$4xl',
                            fontWeight: '$semibold',
                            padding: '40px 10% 0px 10%',
                            textAlign: 'center',
        
                        }}>
                            No Players yet... Check again after player registration starts!
                        </Text>
                        <Text showIn={'xs'}
                        css={{
                            fontSize: '$2xl',
                            fontWeight: '$semibold',
                            padding: '40px 10% 0px 10%',
                            textAlign: 'center',
        
                        }}>
                            No Players yet... Check again after player registration starts!
                        </Text>
                        <Spacer y={15}/>
                    </div>
                }
            </div>
            }
        </div>
        
        
    )
}