import React from "react";
import './prizes.css';
import { Row, Col, Text, Grid, Image, Spacer } from "@nextui-org/react";
import goldmedal from "./gold-medal.png";
import silvermedal from "./silver-medal.png";
import bronzemedal from "./bronze-medal.png";
import { FaRupeeSign } from 'react-icons/fa';

export default function Prizes () {

    const observer = new IntersectionObserver((entries)=>{
        // console.log(entries)
        entries.forEach((entry)=>{
            if (entry.isIntersecting){
                entry.target.classList.add('show')
                entry.target.classList.remove('hidden')
            } else {
                entry.target.classList.remove('show')
                entry.target.classList.add('hidden')
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=> observer.observe(el))

    return(
        <Col 
        css={{
            jc: 'center',
            textAlign: 'center'
        }}>

            {/* Heading */}
            <Row className="hidden"
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
                                padding: '15% 10px 0px 10px',
                                color: "$yellow600"
                            }}>
                                    Prizes
                            </Text>
            </Row>
            
            {/* Heading Description */}
            <Row className="hidden"
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
            }}>
                <Text hideIn={'xs'}
                css={{
                    fontSize: '$lg',
                    color: '$gray800',
                    paddingBottom: '50px'
                }}>
                    Win these cash prizes at APL 6.0!
                </Text>
                <Text showIn={'xs'}
                css={{
                    fontSize: '$lg',
                    color: '$gray800',
                    paddingBottom: '40px'
                }}>
                    Win these cash prizes at APL 6.0!
                </Text>
            </Row>

            {/* Medals */}
            <Grid.Container 
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                paddingBottom: '50px',
            }}>
                <Grid 
                css={{
                    padding: '24px'
                }}>
                    <Col className="hidden">
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
                                    60,000
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


                <Grid 
                css={{
                    padding: '24px'
                }}>
                    <Col className="hidden">
                        <Spacer y={2.25} />
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
                                    25,000
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
                            

                <Grid 
                css={{
                    padding: '24px'
                }}>
                    <Col className="hidden">
                        <Text
                        css={{
                            fontSize: '$md',
                            color: 'White',
                            fontWeight: '$medium',
                            paddingBottom: '10px'
                        }}>
                            Rager Worthy
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
                                    10,000
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

            
        </Col>
    )
}