import { Col, Grid, Image, Text, Link, Row } from "@nextui-org/react";
import React from "react";
import Grey from '../../assets/images/Grey.jpeg';
import './teamcontent.css';
import { FaInstagram } from "react-icons/fa";
import AryanYadav from '../../assets/avatars/AdminTeam/webteam_aryanyadav.jpeg';

export default function TeamContent(){
    return(
        <Grid.Container gap={2}
        css={{
            jc: 'center',
            textAlign: 'center'
        }}>
            <Grid>


                {/* APL Directors */}
                <Grid.Container gap={4}
                css={{
                    jc: 'center',
                    textAlign: 'center',
                }}>
                    <Grid>
                        <Col>
                            <Image src={Grey} className='directors' />
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$3xl',
                                fontWeight: '$semibold',
                                paddingTop: '5px'
                            }}> 
                                Dhrthi Bhat
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$xl',
                                fontWeight: '$semibold',
                                paddingTop: '5px'
                            }}> 
                                Dhrthi Bhat
                            </Text>

                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$xl',
                                color: '$gray800'
                            }}>
                                Director
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$md',
                                color: '$gray800'
                            }}>
                                Director
                            </Text>
                            <Text
                            css={{
                                padding: '0% 2.5%'
                            }}>
                                <a target="_blank" href="https://www.instagram.com/dhrthi.bhat/">@dhrthi.bhat</a>
                            </Text>
                            
                        </Col>
                    </Grid>

                    <Grid>
                        <Col>
                            <Image src={Grey} className='directors' />
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$3xl',
                                fontWeight: '$semibold',
                                paddingTop: '5px'
                            }}> 
                                Uday Srivastava
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$xl',
                                fontWeight: '$semibold',
                                paddingTop: '5px'
                            }}> 
                                Uday Srivastava
                            </Text>

                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$xl',
                                color: '$gray800'
                            }}>
                                Director
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$md',
                                color: '$gray800'
                            }}>
                                Director
                            </Text>
                            <Text>
                                <a target="_blank" href="https://www.instagram.com/uday_0901/">@uday_0901</a>
                            </Text>
                        </Col>
                    </Grid>

                </Grid.Container>



                {/* Finance Team */}
                <Grid.Container 
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    margin: '30px 0px 30px 0px',
                    backgroundColor: 'rgb(20,20,20)',
                    borderRadius: '20px'
                }}>
                    <Grid>

                        {/* Team Heading */}
                        <Grid.Container 
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                        }}>
                            <Col>
                                <Text hideIn={'xs'}
                                css={{
                                    fontSize: '$6xl',
                                    fontWeight: '$semibold',
                                    textGradient: "45deg, $green600 40%, $green800 100%",
                                }}>
                                    Finance Team
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold',
                                    textGradient: "45deg, $green600 40%, $green800 100%",
                                }}>
                                    Finance Team
                                </Text>

                                <Text hideIn={'xs'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$normal',
                                    color: '$gray800'
                                }}>
                                    Making sure your money is well spent!
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    fontSize: '$lg',
                                    fontWeight: '$normal',
                                    color: '$gray800'
                                }}>
                                    Making sure your money is well spent!
                                </Text>
                            </Col>
                            
                        </Grid.Container>

                        {/* HOD */}
                        <Grid.Container gap={3}
                        css={{
                            jc: 'center',
                            textAlign: 'center'
                        }}>
                            <Grid>
                                <Col>
                                    <Image src={Grey} className='hods' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$2xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Abhay Hari
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Abhay Hari
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        color: '$gray800'
                                    }}>
                                        Head of Department
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        color: '$gray800'
                                    }}>
                                        Head of Department
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/abeyy_hari/">@abeyy_hari</a>
                                    </Text>
                                </Col>
                            </Grid>
                        </Grid.Container>

                        {/* Team Members */}
                        <Grid.Container gap={2}
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            marginBottom: '10px'
                        }}>
                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Finance Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Finance Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Finance Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Finance Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Finance Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Finance Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Finance Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Finance Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Finance Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Finance Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>
                        </Grid.Container>

                    </Grid>

                </Grid.Container>

                {/* Marketing Team */}
                <Grid.Container 
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    margin: '30px 0px 30px 0px',
                    backgroundColor: 'rgb(20,20,20)',
                    borderRadius: '20px'
                }}>
                    <Grid>

                        {/* Team Heading */}
                        <Grid.Container 
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                        }}>
                            <Col>
                                <Text hideIn={'xs'}
                                css={{
                                    fontSize: '$6xl',
                                    fontWeight: '$semibold',
                                    textGradient: "45deg, $cyan600 40%, $cyan800 100%",
                                }}>
                                    Marketing Team
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold',
                                    textGradient: "45deg, $cyan600 40%, $cyan800 100%",
                                }}>
                                    Marketing Team
                                </Text>

                                <Text hideIn={'xs'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$normal',
                                    color: '$gray800'
                                }}>
                                    Making sure you know all about it!
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    fontSize: '$lg',
                                    fontWeight: '$normal',
                                    color: '$gray800'
                                }}>
                                    Making sure you know all about it!
                                </Text>
                            </Col>
                            
                        </Grid.Container>

                        {/* HOD */}
                        <Grid.Container gap={3}
                        css={{
                            jc: 'center',
                            textAlign: 'center'
                        }}>
                            <Grid>
                                <Col>
                                    <Image src={Grey} className='hods' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$2xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Pratham Singh
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Pratham Singh
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        color: '$gray800'
                                    }}>
                                        Head of Department
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        color: '$gray800'
                                    }}>
                                        Head of Department
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/_prathamsingh/">@_prathamsingh</a>
                                    </Text>
                                </Col>
                            </Grid>
                        </Grid.Container>

                        {/* Team Members */}
                        <Grid.Container gap={2}
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            marginBottom: '10px'
                        }}>
                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Marketing Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Marketing Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Marketing Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Marketing Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Marketing Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Marketing Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Marketing Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Marketing Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Marketing Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Marketing Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>

                        </Grid.Container>

                    </Grid>

                </Grid.Container>

                {/* Logistics Team */}
                <Grid.Container 
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    margin: '30px 0px 30px 0px',
                    backgroundColor: 'rgb(20,20,20)',
                    borderRadius: '20px'
                }}>
                    <Grid>

                        {/* Team Heading */}
                        <Grid.Container 
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                        }}>
                            <Col>
                                <Text hideIn={'xs'}
                                css={{
                                    fontSize: '$6xl',
                                    fontWeight: '$semibold',
                                    textGradient: "45deg, $yellow600 40%, $yellow800 100%",
                                }}>
                                    Logistics Team
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold',
                                    textGradient: "45deg, $yellow600 40%, $yellow800 100%",
                                }}>
                                    Logistics Team
                                </Text>

                                <Text hideIn={'xs'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$normal',
                                    color: '$gray800'
                                }}>
                                    Making sure nothing hinders the flow!
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    fontSize: '$lg',
                                    fontWeight: '$normal',
                                    color: '$gray800'
                                }}>
                                    Making sure nothing hinders the flow!
                                </Text>
                            </Col>
                            
                        </Grid.Container>

                        {/* HOD */}
                        <Grid.Container gap={3}
                        css={{
                            jc: 'center',
                            textAlign: 'center'
                        }}>
                            <Grid
                            css={{
                                jc: 'center',
                                textAlign: 'center'
                            }}>
                                <Col
                                css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Image src={Grey} className='hods' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$2xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Rahul Agarwal
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Rahul Agarwal
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        color: '$gray800'
                                    }}>
                                        Head of Department
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        color: '$gray800'
                                    }}>
                                        Head of Department
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/__raaahul__/">@__raaahul__</a>
                                    </Text>
                                </Col>
                            </Grid>
                        </Grid.Container>

                        {/* Team Members */}
                        <Grid.Container gap={2}
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            marginBottom: '10px'
                        }}>
                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Logistics Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Logistics Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Logistics Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Logistics Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Logistics Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Logistics Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Logistics Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Logistics Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col>
                                    <Image src={Grey} className='member' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Random Person
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        color: '$gray800'
                                    }}>
                                        Logistics Team
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        Logistics Team
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@randomperson</a>
                                    </Text>
                                </Col>
                            </Grid>
                            
                        </Grid.Container>

                    </Grid>

                </Grid.Container>




                {/* APL Website Developer */}
                <Grid.Container
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    margin: '30px 0px 30px 0px',
                    backgroundColor: 'rgb(20,20,20)',
                    borderRadius: '20px'
                }}>
                    <Grid>

                        {/* Team Heading */}
                        <Grid.Container 
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                        }}>
                            <Col>
                                <Text hideIn={'xs'}
                                css={{
                                    fontSize: '$6xl',
                                    fontWeight: '$semibold',
                                    textGradient: "45deg, $red600 50%, $red800 100%",
                                }}>
                                    Web Team
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold',
                                    textGradient: "45deg, $red600 50%, $red800 100%",
                                }}>
                                    Web Team
                                </Text>

                                <Text hideIn={'xs'}
                                css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$normal',
                                    color: '$gray800'
                                }}>
                                    Making sure APL is on the Web!
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    fontSize: '$lg',
                                    fontWeight: '$normal',
                                    color: '$gray800'
                                }}>
                                    Making sure APl is on the Web!
                                </Text>
                            </Col>
                            
                        </Grid.Container>

                        
                        {/* Members */}
                        <Grid.Container gap={4}
                        css={{
                            jc: 'center',
                            textAlign: 'center'
                        }}>
                            <Grid
                            css={{
                                jc: 'center',
                                textAlign: 'center'
                            }}>
                                <Col
                                css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Image src={AryanYadav} className='hods' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$2xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Aryan Yadav
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Aryan Yadav
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        color: '$gray800'
                                    }}>
                                        Developer
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        color: '$gray800'
                                    }}>
                                        Developer
                                    </Text>
                                    <Text>
                                        <a target="_blank" href="https://aryanyadav.com/">aryanyadav.com</a>
                                    </Text>
                                </Col>
                            </Grid>


                            <Grid
                            css={{
                                jc: 'center',
                                textAlign: 'center'
                            }}>
                                <Col
                                css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Image src={Grey} className='hods' />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$2xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Zahaan Shapoorjee
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$lg',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Zahaan Shapoorjee
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        color: '$gray800'
                                    }}>
                                        Developer
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$md',
                                        color: '$gray800'
                                    }}>
                                        Developer
                                    </Text>
                                    <Text>
                                        <a target="_blank" href="https://zahaanshapoorjee.netlify.app/">zahaanshaporjee.netlify.app</a>
                                    </Text>
                                </Col>
                            </Grid>

                        </Grid.Container>        
                        

                    </Grid>
                </Grid.Container>



            </Grid>
        </Grid.Container>
    )
}