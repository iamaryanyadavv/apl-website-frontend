import React from "react";
import FanUpLogo from '../../assets/images/FanUpLogo.png';
import Jersey from '../../assets/images/APLTee_Blue.png';
import { Container, Grid, Row, Text, Image, Col, Button } from "@nextui-org/react";
import {FaApple,FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa';
import './fanuppage.css'

export default function FanUpPage() {
    return (
        <Grid.Container
            css={{
                jc: 'center',
                alignItems: 'center',
                '@xsMin':{
                    margin: '100px 0px'
                },
                '@xsMax':{
                    padding: '40px 0px'
                }
            }}>
            <Grid>
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
                                fontWeight: '$bold',
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
                            width: '160px'
                        },
                        '@xsMax':{
                            width: '150px',
                        },
                        padding: '6px 12px',
                        backgroundColor: 'White',
                        borderRadius: '10px',
                        alignItems: 'center',
                        marginTop: '16px',
                        '&:hover':{
                            cursor: 'pointer'
                        }
                    }}
                    onClick={()=>{
                        window.location='https://apps.apple.com/in/app/fanup-daily-fantasy-sports/id1523689182'
                    }}
                    >
                        <FaApple color="#000000" size={'45px'}/>
                        <Col>
                            <Text
                            css={{
                                fontWeight: '$normal',
                                color: 'Black',
                                paddingLeft: '12px',
                                lineHeight: '0.95'
                            }}>
                                Get it on the
                            </Text>
                            <Text
                            css={{
                                fontWeight: '$bold',
                                color: 'Black',
                                paddingLeft: '12px',
                                lineHeight: '0.95'
                            }}>
                                App Store
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
                        },
                        '@xsMin': {
                            width: '500px'
                        },
                        margin: '48px'
                    }} src={Jersey} />
            </Grid>
        </Grid.Container>
    )
}