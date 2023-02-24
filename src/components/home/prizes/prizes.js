import React from "react";
import './prizes.css';
import { Row, Col, Text, Grid, Image } from "@nextui-org/react";
import goldmedal from "./gold-medal.png";
import silvermedal from "./silver-medal.png";
import bronzemedal from "./bronze-medal.png";
import { FaRupeeSign } from 'react-icons/fa';

export default function Prizes () {
    return(
        <Col
        css={{
            jc: 'center',
            textAlign: 'center'
        }}>

            {/* Heading */}
            <Row 
            css={{
                jc: 'center',
                textAlign: 'center'
            }}>
                            <Text hideIn={'xs'}
                            css={{
                                fontSize: "$7xl" ,
                                textAlign: 'center',
                                fontWeight: '$semibold',
                                padding: '4% 10px 0px 10px',
                                color: "$yellow600"
                            }}>
                                    Prizes
                            </Text>
                            <Text showIn={'xs'} 
                            css={{
                                fontSize: "$5xl" ,
                                textAlign: 'center',
                                fontWeight: '$semibold',
                                padding: '4% 10px 0px 10px',
                                color: "$yellow600"
                            }}>
                                    Prizes
                            </Text>
            </Row>
            
            {/* Heading Description */}
            <Row
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                paddingBottom: '70px'
            }}>
                <Text
                css={{
                    fontSize: '$lg',
                    color: '$gray800'
                }}>
                    Win these cash prizes at APL 6.0!
                </Text>
            </Row>

            {/* Medals */}

                <Grid.Container gap={3}
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    paddingBottom: '50px'
                }}>
                    <Grid>
                        <Col>
                            <Text
                            css={{
                                fontSize: '$2xl',
                                color: 'White',
                                fontWeight: '$medium',
                                paddingBottom: '10px'
                            }}>
                                The Big One
                            </Text>
                            <Col
                            css={{
                                padding: '30px',
                                borderStyle: 'solid',
                                borderRadius: '20px',
                                borderColor: '#FAE481',
                                borderWidth: '5px'
                            }}>
                                <Row
                                css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }}>
                                    <div className="rupee-icon">
                                        <FaRupeeSign color="white" size={'20px'}/>
                                    </div>
                                    <Text
                                    css={{
                                        fontSize: '$6xl',
                                        fontWeight: '$bold'
                                    }}>
                                        30,000
                                    </Text>
                                </Row>
                                <Text
                                css={{
                                    fontSize: '$md',
                                    fontWeight: '$medium',
                                    color: '#FAE481',
                                    paddingBottom: '10%',
                                }}>
                                    & Bragging Rights
                                </Text>
                                <Image src={goldmedal} width={'60px'} height={'60px'}/>
                            </Col>
                        </Col>
                    </Grid>


                    <Grid>
                        <Col>
                            <Text
                            css={{
                                fontSize: '$xl',
                                color: 'White',
                                fontWeight: '$medium',
                                paddingBottom: '10px'
                            }}>
                                Worth It
                            </Text>
                            <Col
                            css={{
                                padding: '25px',
                                borderStyle: 'solid',
                                borderRadius: '20px',
                                borderColor: 'rgb(157 171 187)',
                                borderWidth: '5px'
                            }}>
                                <Row
                                css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }}>
                                    <div className="rupee-icon">
                                        <FaRupeeSign color="white" size={'17.50px'}/>
                                    </div>
                                    <Text
                                    css={{
                                        fontSize: '$5xl',
                                        fontWeight: '$bold'
                                    }}>
                                        10,000
                                    </Text>
                                </Row>
                                <Text
                                css={{
                                    fontSize: '$md',
                                    fontWeight: '$medium',
                                    color: 'rgb(157 171 187)',
                                    paddingBottom: '10%',
                                }}>
                                    & Social Media Followers
                                </Text>
                                <Image src={silvermedal} width={'50px'} height={'50px'}/>
                            </Col>
                        </Col>
                    </Grid>
                                

                    <Grid>
                        <Col>
                            <Text
                            css={{
                                fontSize: '$md',
                                color: 'White',
                                fontWeight: '$medium',
                                paddingBottom: '10px'
                            }}>
                                Can Rager
                            </Text>
                            <Col
                            css={{
                                padding: '15px 25px 15px 25px',
                                borderStyle: 'solid',
                                borderRadius: '20px',
                                borderColor: 'rgb(190 159 103)',
                                borderWidth: '5px'
                            }}>
                                <Row
                                css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }}>
                                    <div className="rupee-icon">
                                        <FaRupeeSign color="white" size={'15px'}/>
                                    </div>
                                    <Text
                                    css={{
                                        fontSize: '$4xl',
                                        fontWeight: '$bold'
                                    }}>
                                        5,000
                                    </Text>
                                </Row>
                                <Text
                                css={{
                                    fontSize: '$md',
                                    fontWeight: '$medium',
                                    color: 'rgb(190 159 103)',
                                    paddingBottom: '10%',
                                }}>
                                    & Respect
                                </Text>
                                <Image src={bronzemedal} width={'40px'} height={'40px'}/>
                            </Col>
                        </Col>
                    </Grid>

                </Grid.Container>

            {/* <Row> 
                <Col>
                    <Grid.Container 
                    css={{
                        jc: 'center',
                        textAlign: 'center',
                        paddingBottom: '1.75%'
                    }}>

                        <Col
                        css={{
                            width: '280px',
                            height: '220px',
                            borderStyle: "solid",
                            borderColor: '#FAE481',
                            borderWidth: '4px',
                            borderRadius: '30px',
                            backgroundColor: '#C5B358',
                        }}
                        >
                            <Row
                            css={{
                                jc: 'center',
                                
                            }}> 
                                <div className="rupee-icon">
                                    <FaRupeeSign color="black" size={'20px'}/>
                                </div>
                                <Text
                                css={{
                                    jc: 'center',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    fontSize: '4rem',
                                    fontWeight: '$bold',
                                    color: 'Black',
                                    padding: '0% 0% 0% 0%'
                                }}>
                                    30,000 
                                </Text>
                            </Row>
                        
                            <Row
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}>
                                    <Image width={'80px'} height={'80px'} src={goldmedal}/>
                            </Row>
                            
                        </Col>

                    </Grid.Container>
                    <Grid.Container gap={1}
                    css={{
                        jc: 'center',
                        textAlign: 'center',
                    }}>
                            <Grid
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center',
                                padding: '3% 2% 2% 3%',
                            }}>
                                    <Col
                                    css={{
                                        width: '240px',
                                        height: '190px',
                                        borderStyle: "solid",
                                        borderColor: 'rgb(200 205 211)',
                                        borderWidth: '4px',
                                        borderRadius: '30px',
                                        backgroundColor: 'rgb(150 168 177)'
                                    }}
                                    >
                                        <Row
                                        css={{
                                            jc: 'center',
                                            
                                        }}> 
                                            <div className="rupee-icon">
                                                <FaRupeeSign color="black" size={'17.5px'}/>
                                            </div>
                                            <Text>
                                            </Text>
                                            <Text
                                            css={{
                                                jc: 'center',
                                                textAlign: 'center',
                                                alignItems: 'center',
                                                fontSize: '3rem',
                                                fontWeight: '$bold',
                                                color: 'Black',
                                                padding: '0% 0% 0% 0%'
                                            }}>
                                                15,000 
                                            </Text>
                                        </Row>
                                        <Row
                                        css={{
                                            jc: 'center',
                                            textAlign: 'center',
                                            alignItems: 'center',
                                        }}>
                                                <Image width={'70px'} height={'70px'} src={silvermedal}/>
                                        </Row>   
                                    </Col>
                            </Grid>
                            <Grid
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                alignItems: 'center',
                                padding: '5% 5% 5% 3%',
                            }}>
                                    <Col
                                    css={{
                                        width: '190px',
                                        height: '160px',
                                        borderStyle: "solid",
                                        borderColor: 'rgb(213 191 150)',
                                        borderWidth: '4px',
                                        borderRadius: '30px',
                                        backgroundColor: 'rgb(175 153 112)',
                                    }}
                                    >
                                        <Row
                                        css={{
                                            jc: 'center',
                                            
                                        }}> 
                                            <div className="rupee-icon">
                                                <FaRupeeSign color="black" size={'15px'}/>
                                            </div>
                                            <Text
                                            css={{
                                                jc: 'center',
                                                textAlign: 'center',
                                                alignItems: 'center',
                                                fontSize: '2.5rem',
                                                fontWeight: '$bold',
                                                color: 'Black',
                                                padding: '0% 0% 0% 0%'
                                            }}>
                                                5,000 
                                            </Text>
                                        </Row>
                                        <Row
                                        css={{
                                            jc: 'center',
                                            textAlign: 'center',
                                            alignItems: 'center',
                                        }}>
                                                <Image width={'60px'} height={'60px'} src={bronzemedal}/>
                                        </Row>   
                                    </Col>
                            </Grid>
                    </Grid.Container>
                </Col>
            </Row> */}
        </Col>
    )
}