import React from "react";
import FanUpLogo from '../../assets/images/FanUpLogo.png';
import Jersey from '../../assets/images/APLTee_Blue.png';
import { Container, Grid, Row, Text, Image, Col, Button } from "@nextui-org/react";
import {FaApple,FaFacebookF,FaInstagram,FaTwitter,} from 'react-icons/fa';
import { AiOutlineForm } from "react-icons/ai";
import './fanuppage.css'

export default function FanUpPage() {
    return (
        <div>
            <div className="desktop">
                <Grid.Container
                    css={{
                        jc: 'center',
                        alignItems: 'center',
                        '@xsMin':{
                            margin: '100px 0px',
                        },
                        '@xsMax':{
                            padding: '40px 0px',
                        }
                    }}>
                    <Grid >
                        <Container 
                            css={{
                                display: 'flex',
                                flexDirection: 'column',
                                maxWidth: '500px'
                            }}>
                            <Row
                                css={{
                                    alignItems: 'center'
                                }}>
                                <Text
                                    css={{
                                        fontSize: '$4xl',
                                        '@xsMin':{
                                            fontWeight: '$bold'
                                        },
                                        '@xsMax':{
                                            fontWeight: '$semibold'
                                        },
                                        padding: '0px 8px 0px 0px'
                                    }}>
                                    APL x
                                </Text>
                                <img src={FanUpLogo} height={50} />
                            </Row>
                            <Text
                                css={{
                                    fontSize: '$xl',
                                    fontWeight: '$semibold',
                                    padding: '12px 0px'
                                }}>
                                APL 6.0 is sponsored by FanUp Inc.!
                            </Text>
                            <Text
                                css={{
                                    fontSize: '$xl',
                                    fontWeight: '$normal',
                                    padding: '12px 0px'
                                }}>
                                FanUp Inc. is the first globally connected, skill-based fantasy platform for every type of fan - sports, esports and pop culture. 
                                They conduct various types of tournaments and league competitions with loads of exciting prizes for winners. 
                                You can learn more about them through their <a target='_blank' rel="noreferrer" style={{color: '#4DFFA8'}} href="https://fanup.app/">website</a> or via <a target='_blank' rel="noreferrer" style={{color: '#4DFFA8'}} href="https://www.instagram.com/fanup_inc/"> Instagram </a>.
                            </Text>
                            <Text
                                css={{
                                    fontSize: '$xl',
                                    fontWeight: '$normal',
                                    padding: '12px 0px'
                                }}>
                                    Thanks to FanUp, every single player in APL 6.0 will be getting a <span style={{color: '#4DFFA8', fontWeight: '500'}}>free jersey</span> with their team logo! How cool is that?
                            </Text>
                            <Row
                            css={{
                                '@xsMin':{
                                    width: '200px'
                                },
                                '@xsMax':{
                                    width: '200px',
                                },
                                padding: '6px 12px',
                                backgroundColor: '#4DFFA8',
                                borderRadius: '10px',
                                alignItems: 'center',
                                marginTop: '16px',
                                '&:hover':{
                                    cursor: 'pointer'
                                }
                            }}
                            onClick={()=>{
                                window.location='https://docs.google.com/forms/d/e/1FAIpQLSdjFlqwnkJ6sNRR810OXpQgo5Q-3AQyjQ-5djFy4V4JWfQXvQ/viewform'
                            }}
                            >
                                <AiOutlineForm color="#000000" size={'30px'}/>
                                <Col>
                                    <Text
                                    css={{
                                        fontWeight: '$semibold',
                                        color: 'Black',
                                        paddingLeft: '6px',
                                        fontSize: '$md'
                                    }}>
                                        Join The VIP Waitlist
                                    </Text>
                                </Col>
                            </Row>
                            <Row
                            css={{
                                margin: '40px 0px 40px 0px'
                            }}>
                                <FaFacebookF onClick={()=>{window.location="https://www.facebook.com/FanUpInc/"}}className="fb-icon" size={'30px'} />
                                <FaInstagram onClick={()=>{window.location="https://www.instagram.com/fanup_inc/?hl=en"}} className="ig-icon" size={'30px'}/>
                                <FaTwitter onClick={()=>{window.location="https://twitter.com/fanup_inc?s=20"}} className="t-icon" size={'30px'}/>
                            </Row>
                        </Container>
                    </Grid>
                    <Grid>
                        <Image
                            css={{
                                '@xsMax': {
                                    width: '275px',
                                    margin: '48px 48px 48px 48px'
                                },
                                '@xsMin': {
                                    width: '500px',
                                    margin: '48px 48px 48px 96px'
                                },
                                
                            }} src={Jersey} />
                    </Grid>
                </Grid.Container>
            </div>
            <div className="mobile">
                <Grid.Container
                css={{
                    jc: 'center',
                    alignItems: 'center',
                    '@xsMin':{
                        margin: '100px 0px',
                    },
                    '@xsMax':{
                        padding: '40px 0px',
                    }
                }}>
                    <Grid>
                        <Col>
                            <Row
                            css={{
                                alignItems: 'center',
                                textAlign: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text
                                    css={{
                                        fontSize: '$4xl',
                                        '@xsMin':{
                                            fontWeight: '$bold'
                                        },
                                        '@xsMax':{
                                            fontWeight: '$semibold'
                                        },
                                        padding: '0px 8px 0px 0px'
                                    }}>
                                    APL x
                                </Text>
                                <img src={FanUpLogo} height={50} />
                            </Row>
                            <Image
                                css={{
                                    '@xsMax': {
                                        width: '275px',
                                        margin: '48px 48px 48px 48px'
                                    },
                                    '@xsMin': {
                                        width: '500px',
                                        margin: '48px 48px 48px 96px'
                                    },
                                    
                                }} src={Jersey} />
                        </Col>
                    </Grid>
                    <Grid >
                        <Container 
                            css={{
                                display: 'flex',
                                flexDirection: 'column',
                                maxWidth: '500px',
                                jc: 'center',
                                textAlign: 'center'
                            }}>
                            <Text
                                css={{
                                    fontSize: '$xl',
                                    fontWeight: '$semibold',
                                    padding: '12px 0px'
                                }}>
                                APL 6.0 is sponsored by FanUp Inc.!
                            </Text>
                            <Text
                                css={{
                                    fontSize: '$xl',
                                    fontWeight: '$normal',
                                    padding: '12px 0px'
                                }}>
                                FanUp Inc. is the first globally connected, skill-based fantasy platform for every type of fan - sports, esports and pop culture. 
                                They conduct various types of tournaments and league competitions with loads of exciting prizes for winners. 
                                You can learn more about them through their <a target='_blank' rel="noreferrer" style={{color: '#4DFFA8'}} href="https://fanup.app/">website</a> or via <a target='_blank' rel="noreferrer" style={{color: '#4DFFA8'}} href="https://www.instagram.com/fanup_inc/"> Instagram </a>.
                            </Text>
                            <Text
                                css={{
                                    fontSize: '$xl',
                                    fontWeight: '$normal',
                                    padding: '12px 0px'
                                }}>
                                    Thanks to FanUp, every single player in APL 6.0 will be getting a <span style={{color: '#4DFFA8', fontWeight: '500'}}>free jersey</span> with their team logo! How cool is that?
                            </Text>
                            <Container
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                                <Row
                                css={{
                                    '@xsMin':{
                                        width: '200px'
                                    },
                                    padding: '6px 12px',
                                    backgroundColor: '#4DFFA8',
                                    borderRadius: '10px',
                                    alignItems: 'center',
                                    marginTop: '16px',
                                    '&:hover':{
                                        cursor: 'pointer'
                                    },
                                    jc: 'center',
                                    textAlign: 'center'
                                }}
                                onClick={()=>{
                                    window.location='https://docs.google.com/forms/d/e/1FAIpQLSdjFlqwnkJ6sNRR810OXpQgo5Q-3AQyjQ-5djFy4V4JWfQXvQ/viewform'
                                }}
                                >
                                    <AiOutlineForm color="#000000" size={'30px'}/>
                                    <Col>
                                        <Text
                                        css={{
                                            fontWeight: '$semibold',
                                            color: 'Black',
                                            paddingLeft: '6px',
                                            fontSize: '$md'
                                        }}>
                                            Join The VIP Waitlist
                                        </Text>
                                    </Col>
                                </Row>
                                <Row
                                css={{
                                    margin: '40px 0px 40px 0px',
                                    jc: 'center',
                                    textAlign: 'center',
                                    alignItems: 'center'
                                }}>
                                    <FaFacebookF onClick={()=>{window.location="https://www.facebook.com/FanUpInc/"}}className="fb-icon" size={'30px'} />
                                    <FaInstagram onClick={()=>{window.location="https://www.instagram.com/fanup_inc/?hl=en"}} className="ig-icon" size={'30px'}/>
                                    <FaTwitter onClick={()=>{window.location="https://twitter.com/fanup_inc?s=20"}} className="t-icon" size={'30px'}/>
                                </Row>

                            </Container>
                        </Container>
                    </Grid>
                    
                </Grid.Container>
            </div>
        </div>


    )
}