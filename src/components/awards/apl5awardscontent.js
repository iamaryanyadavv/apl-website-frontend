import React from "react";
import { useState, useEffect } from "react";
import { Card, Col, Grid, Text, Button, keyframes, styled } from "@nextui-org/react";
export default function APL5AwardsContent() {

    const burn = keyframes({
        '0%': {
            textShadow: '0 0 20px #f9d71c, 0 0 30px #f9d71c, 0 0 40px #f9d71c, 0 0 50px #f9d71c, 0 0 60px #f9d71c, 0 0 70px #f9d71c, 0 0 80px #f9d71c'
          },
          '100%' : {
            textShadow: '0 0 20px #f9d71c, 0 0 30px #f9d71c, 0 0 40px #f9d71c, 0 0 50px #e5c10f,0 0 60px #e5c10f, 0 0 70px #e5c10f, 0 0 80px #e5c10f'
          },
    })

    const Button = styled('button', {
        // base styles
      
        '&:hover': {
          animation: {burn},
        },
      });

    return (
        <div>
            <Grid.Container css={{
                jc:'center',
                alignItems:'center'
            }}>
            <Text hideIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$6xl',
                        fontWeight: '$semibold',
                        paddingBottom: '1.5%',
                        textGradient: "45deg, $red600 -20%, $yellow600 100%"
                    }}>
                       Team Awards
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$6xl',
                        fontWeight: '$semibold',
                        padding: '10% 5% 0% 5%',
                        textGradient: "45deg, $red600 -20%, $yellow600 100%"
                    }}>
                        Team Awards
                    </Text>
            <Grid.Container
            css={{
                jc: 'center',
                alignItems: 'center',
                marginBottom:'3%'
            }} gap={2}>
                <Grid>
                        <Card 
                    css={{ 
                        border: '2px solid #FFD700',
                        '@xsMin':{
                            width: "350px",
                            height: "530px"
                        },
                        '@xsMax':{
                            width: '300px',
                            height: '530px'
                        } 
                        
                        }}>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col css={{
                                alignItems: 'center',
                                jc: 'center'
                            }}>
                                <Text 
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$4xl',
                                    color: '#FFD700',
                                    fontWeight: '$semibold',
                                    textDecoration:'underline'
                                }}>Winner
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    color: '#FFD700',
                                    fontSize: '$2xl',
                                    fontWeight:'bold',
                                }}>
                                    A-Z
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #FF3, 0px 0px 20px         #F90, 0px 0px 20px #FFD700'
                                }}>
                                    1. Radha Gupta 
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #FF3, 0px 0px 20px         #F90, 0px 0px 20px #FFD700'
                                }}>
                                    2. Aryan Rama
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #FF3, 0px 0px 20px         #F90, 0px 0px 20px #FFD700'
                                }}>
                                    3. San Win
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #FF3, 0px 0px 20px         #F90, 0px 0px 20px #FFD700'
                                }}>
                                    4. Ayushman Roy
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #FF3, 0px 0px 20px         #F90, 0px 0px 20px #FFD700'
                                }}>
                                    5. Aritro Sarkar
                                </Text>
                              
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #FF3, 0px 0px 20px         #F90, 0px 0px 20px #FFD700'
                                }}>
                                    6. Karishni Puri
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #FF3, 0px 0px 20px         #F90, 0px 0px 20px #FFD700'
                                }}>
                                    7. Sankalp Dasmohaptra
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #FF3, 0px 0px 20px         #F90, 0px 0px 20px #FFD700'
                                }}>
                                    8. Vansh Jogani
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #FF3, 0px 0px 20px         #F90, 0px 0px 20px #FFD700'
                                }}>
                                    9. Purujit B
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #FF3, 0px 0px 20px         #F90, 0px 0px 20px #FFD700'
                                }}>
                                    10. Krish Shah
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Body css={{ p: 0 }}>
                        </Card.Body>
                        </Card>
                        </Grid>
                <Grid>
            <Card 
                    css={{ 
                        border: '2px solid #C0C0C0',
                        '@xsMin':{
                            width: "350px",
                            height: "530px"
                        },
                        '@xsMax':{
                            width: '300px',
                            height: '530px'
                        } 
                        
                        }}>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col css={{
                                alignItems: 'center',
                                jc: 'center'
                            }}>
                                <Text 
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$4xl',
                                    color: '#C0C0C0',
                                    fontWeight: '$semibold',
                                    textDecoration:'underline'
                                }}>2nd Place
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$2xl',
                                    color: '#C0C0C0',
                                    fontWeight:'bold'
                                }}>
                                    Chakravyuh
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #C0C0C0, 0px 0px 20px         #F90, 0px 0px 20px #C0C0C0'
                                }}>
                                    1. Ganeev Chadha
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #C0C0C0, 0px 0px 20px         #F90, 0px 0px 20px #C0C0C0'
                                }}>
                                    2. Sameer Rana
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #C0C0C0, 0px 0px 20px         #F90, 0px 0px 20px #C0C0C0'
                                }}>
                                    3. Sonam
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #C0C0C0, 0px 0px 20px         #F90, 0px 0px 20px #C0C0C0'
                                }}>
                                    4. Ritvik
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #C0C0C0, 0px 0px 20px         #F90, 0px 0px 20px #C0C0C0'
                                }}>
                                    5. Biplob Das
                                </Text>
                              
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #C0C0C0, 0px 0px 20px         #F90, 0px 0px 20px #C0C0C0'
                                }}>
                                    6. Atharv Bokil
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #C0C0C0, 0px 0px 20px         #F90, 0px 0px 20px #C0C0C0'
                                }}>
                                    7. Hemasimha
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #C0C0C0, 0px 0px 20px         #F90, 0px 0px 20px #C0C0C0'
                                }}>
                                    8. Rutupurna Debalina Naik
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #C0C0C0, 0px 0px 20px         #F90, 0px 0px 20px #C0C0C0'
                                }}>
                                    9. Kriti
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Body css={{ p: 0 }}>
                        </Card.Body>
                        </Card>
                        </Grid>
                        <Grid>
                        <Card 
                    css={{ 
                        border: '2px solid #CD7F32',
                        '@xsMin':{
                            width: "350px",
                            height: "530px"
                        },
                        '@xsMax':{
                            width: '300px',
                            height: '530px'
                        } 
                        
                        }}>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col css={{
                                alignItems: 'center',
                                jc: 'center'
                            }}>
                                <Text 
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$4xl',
                                    color: '#CD7F32',
                                    fontWeight: '$semibold',
                                    textDecoration:'underline'
                                }}>3rd Place
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    color: '#CD7F32',
                                    fontWeight:'bold'
                                }}>
                                    Suiiicide Squad
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #CD7F32, 0px 0px 20px         #F90, 0px 0px 40px #CD7F32'
                                }}>
                                    1. Dhrhi Bhat
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #CD7F32, 0px 0px 20px         #F90, 0px 0px 40px #CD7F32'
                                }}>
                                    2. Siddh Veer Bakshi
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #CD7F32, 0px 0px 20px         #F90, 0px 0px 40px #CD7F32'
                                }}>
                                    3. Aryan Yadav
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #CD7F32, 0px 0px 20px         #F90, 0px 0px 40px #CD7F32'
                                }}>
                                    4. Arnav Kundra
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #CD7F32, 0px 0px 20px         #F90, 0px 0px 40px #CD7F32'
                                }}>
                                    5. Ayush Soni
                                </Text>
                              
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #CD7F32, 0px 0px 20px         #F90, 0px 0px 40px #CD7F32'
                                }}>
                                    6. Krishna Rengraj
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #CD7F32, 0px 0px 20px         #F90, 0px 0px 40px #CD7F32'
                                }}>
                                    7. Aryan Mehta
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #CD7F32, 0px 0px 20px         #F90, 0px 0px 40px #CD7F32'
                                }}>
                                    8. Vanshika Patel
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #CD7F32, 0px 0px 20px         #F90, 0px 0px 40px #CD7F32'
                                }}>
                                    9. Wako Liban
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #CD7F32, 0px 0px 20px         #F90, 0px 0px 40px #CD7F32'
                                }}>
                                    10. Nishant Mahesh
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #CD7F32, 0px 0px 20px         #F90, 0px 0px 40px #CD7F32'
                                }}>
                                    11. Arjun Khanna
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Body css={{ p: 0 }}>
                        </Card.Body>
                        </Card>
                        </Grid>
                        </Grid.Container>
                
                        <Text hideIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$6xl',
                        fontWeight: '$semibold',
                        paddingBottom: '1.5%',
                        textGradient: "45deg, $yellow600 -20%, $red600 100%"
                    }}>
                       Individual Awards
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$6xl',
                        fontWeight: '$semibold',
                        padding: '10% 5% 0% 5%',
                        textGradient: "45deg, $yellow600 -20%, $red600 100%"
                    }}>
                        Individual Awards
                    </Text>
                    <Grid.Container
            css={{
                jc: 'center',
                alignItems: 'center'
            }} gap={2}>
                
                
                        <Grid>
                        <Card 
                    css={{ 
                        border: '2px solid #FFD700',
                        '@xsMin':{
                            width: "350px",
                            height: "320px"
                        },
                        '@xsMax':{
                            width: '300px',
                            height: '320px'
                        } 
                        
                        }}>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col css={{
                                alignItems: 'center',
                                jc: 'center'
                            }}>
                                <Text 
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$4xl',
                                    color: '#FFD700',
                                    fontWeight: '$semibold'
                                }}>Top Scorers:
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #735A21, 0px 0px 20px #735A21, 0px 0px 20px         #F90, 0px 0px 20px #735A21'
                                }}>
                                    Vansh Jogani 
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #735A21, 0px 0px 20px #735A21, 0px 0px 20px         #F90, 0px 0px 20px #735A21'
                                }}>
                                    Sankalp Dasmohaptra
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #735A21, 0px 0px 20px #735A21, 0px 0px 20px         #F90, 0px 0px 20px #735A21'
                                }}>
                                    Sonam
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #735A21, 0px 0px 20px #735A21, 0px 0px 20px         #F90, 0px 0px 20px #735A21'
                                }}>
                                    Ahmed Mohamoud
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #735A21, 0px 0px 20px #735A21, 0px 0px 20px         #F90, 0px 0px 20px #735A21'
                                }}>
                                    Siddh Veer Bakshi
                                </Text>
                              
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    textShadow:'0px 0px 20px #735A21, 0px 0px 20px #735A21, 0px 0px 20px         #F90, 0px 0px 20px #735A21'
                                }}>
                                    Abhay Hari
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Body css={{ p: 0 }}>
                        </Card.Body>
                        </Card>
                        </Grid>
                        <Grid>
                        <Card 
                    css={{ 
                        border: '2px solid #FFD700',
                        '@xsMin':{
                            width: "350px",
                            height: "320px"
                        },
                        '@xsMax':{
                            width: '300px',
                            height: '320px'
                        } 
                        
                        }}>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col css={{
                                alignItems: 'center',
                                jc: 'center'
                            }}>
                                <Text 
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$4xl',
                                    color: '#FFD700',
                                    fontWeight: '$semibold',
                                    jc:'center'
                                }}>Most Valuable Player
                                </Text>
                                <Text
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$3xl',
                                    jc:'center',
                                    textShadow:'0px 0px 20px #fff, 0px 0px 20px #FF3, 0px -10px 20px         #F90, 0px 0px 20px #FFD700'
                                }}>
                                    Pranav Wali
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Body css={{ p: 0 }}>
                        </Card.Body>
                        </Card>
                        </Grid>
                        
                        </Grid.Container>
                    

                    </Grid.Container>
        </div>
    )
    
}