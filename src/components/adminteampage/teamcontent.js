import { Col, Grid, Image, Text, Link, Row } from "@nextui-org/react";
import React from "react";
import Grey from '../../assets/images/Grey.jpeg';
import './teamcontent.css';
import AryanYadav from '../../assets/avatars/AdminTeam/webteam_aryanyadav.jpeg';
import DhrthiBhat from '../../assets/avatars/AdminTeam/director_dhrthibhat.jpg'
import RahulAgarwal from '../../assets/avatars/AdminTeam/oc_rahulagarwal.jpeg'
import PrathamSingh from '../../assets/avatars/AdminTeam/oc_prathamsingh.jpg'
import RohanAgarwal from '../../assets/avatars/AdminTeam/oc_rohanagarwal.jpg'
import KavyaSatish from '../../assets/avatars/AdminTeam/oc_kavyasatish.jpg'
import Uday from '../../assets/avatars/AdminTeam/director_uday.jpg'
import Zahaan from '../../assets/avatars/AdminTeam/webteam_zahaan.jpg'
import IryaKhanna from '../../assets/avatars/AdminTeam/oc_iryakhanna.jpg'
import Abhay from '../../assets/avatars/AdminTeam/oc_abhay.jpeg'
import Manya from '../../assets/avatars/AdminTeam/manya.jpg'
import Vansh from '../../assets/avatars/AdminTeam/Vansh.jpg'
import Angira from '../../assets/avatars/AdminTeam/Angira.jpg'
import Adviti from '../../assets/avatars/AdminTeam/Adviti.jpg'
import Aman from '../../assets/avatars/AdminTeam/Aman.jpeg'
import Athu from '../../assets/avatars/AdminTeam/Athu.jpg'


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
                        <Col 
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            jc: 'center',
                            alignItems: 'center'
                        }}>
                            <Image
                            css={{
                                '@xsMin':{
                                    width: '300px',
                                    height: '300px',
                                    borderRadius: '200px',
                                },
                                '@xsMax':{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '100px'
                                },
                                objectFit: 'cover'
                            }}  src={IryaKhanna}  />
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$3xl',
                                fontWeight: '$semibold',
                                paddingTop: '5px'
                            }}> 
                                Irya Khanna
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$xl',
                                fontWeight: '$semibold',
                                paddingTop: '5px'
                            }}> 
                                Irya Khanna 
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
                                <a href="https://www.instagram.com/iryakhanna/">@iryakhanna</a>
                            </Text>
                            
                        </Col>
                    </Grid>

                    <Grid>
                        <Col 
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            jc: 'center',
                            alignItems: 'center'
                        }}>
                            <Image 
                            css={{
                                '@xsMin':{
                                    width: '300px',
                                    height: '300px',
                                    borderRadius: '200px',
                                },
                                '@xsMax':{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '100px'
                                },
                                objectFit: 'cover'
                            }}   src={Manya}/>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$3xl',
                                fontWeight: '$semibold',
                                paddingTop: '5px'
                            }}> 
                                Manya Malhotra
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$xl',
                                fontWeight: '$semibold',
                                paddingTop: '5px'
                            }}> 
                                Manya Malhotra
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
                                <a target="_blank" href="https://www.instagram.com/malhotra._.manya/">@malhotra._.manya</a>
                            </Text>
                        </Col>
                    </Grid>

                </Grid.Container>

                {/* Core Team */}
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
                                    Organising Committee
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold',
                                    textGradient: "45deg, $green600 40%, $green800 100%",
                                }}>
                                    Organising Committee
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
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image 
                                    css={{
                                        '@xsMin':{
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '100px'
                                        },
                                        '@xsMax':{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '75px'
                                        },
                                        objectFit: 'cover'
                                    }}  src={Uday} />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$2xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Uday M Srivastava
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Uday M Srivastava
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        color: '$gray800'
                                    }}>
                                        OC Member
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        OC Member
                                    </Text>
                                    <Text>
                                        <a target="_blank" href="https://www.instagram.com/uday_0901/">@uday_0901</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image 
                                    css={{
                                        '@xsMin':{
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '100px'
                                        },
                                        '@xsMax':{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '75px'
                                        },
                                        objectFit: 'cover'
                                    }}  src={DhrthiBhat} />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$2xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Dhrthi Bhat
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
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
                                        OC Member
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        OC Member
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/dhrthi.bhat/">@dhrthi.bhat</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image 
                                    css={{
                                        '@xsMin':{
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '100px'
                                        },
                                        '@xsMax':{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '75px'
                                        },
                                        objectFit: 'cover'
                                    }}  src={Adviti}/>
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$2xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Adviti Gautam
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Adviti Gautam
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        color: '$gray800'
                                    }}>
                                        OC Member
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        OC Member
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/itivda/">@itivda</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image 
                                    css={{
                                        '@xsMin':{
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '100px'
                                        },
                                        '@xsMax':{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '75px'
                                        },
                                        objectFit: 'cover'
                                    }}  src={Vansh} />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$2xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Vansh Jogani
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Vansh Jogani
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        color: '$gray800'
                                    }}>
                                        OC Member
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        OC Member
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/vanshjogani/">@vanshjogani</a>
                                    </Text>
                                </Col>
                            </Grid>
                            
                            <Grid>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image 
                                    css={{
                                        '@xsMin':{
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '100px'
                                        },
                                        '@xsMax':{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '75px'
                                        },
                                        objectFit: 'cover'
                                    }}  src={Aman}/>
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$2xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Aman Sharma
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Aman Sharma
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        color: '$gray800'
                                    }}>
                                        OC Member
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        OC Member
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/aman_sharma_2349/">@aman_sharma_2349</a>
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid>
                                <Col 
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image 
                                    css={{
                                        '@xsMin':{
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '100px'
                                        },
                                        '@xsMax':{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '75px'
                                        },
                                        objectFit: 'cover'
                                    }}  src={Athu} />
                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$2xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Atharva Dawar
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        fontWeight: '$semibold',
                                        paddingTop: '5px'
                                    }}> 
                                        Atharva Dawar
                                    </Text>

                                    <Text hideIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        color: '$gray800'
                                    }}>
                                        OC Member
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        fontSize: '$sm',
                                        color: '$gray800'
                                    }}>
                                        OC Member
                                    </Text>
                                    <Text>
                                        <a href="https://www.instagram.com/atharvadawar/">@atharvadawar</a>
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
                            <Col >
                                <Text hideIn={'xs'}
                                css={{
                                    fontSize: '$6xl',
                                    fontWeight: '$semibold',
                                    textGradient: "45deg, $cyan600 40%, $cyan800 100%",
                                }}>
                                    Web Team
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold',
                                    textGradient: "45deg, $cyan600 40%, $cyan800 100%",
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
                                    Making sure APL is on the Web!
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
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image 
                                    css={{
                                        '@xsMin':{
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '100px'
                                        },
                                        '@xsMax':{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '75px'
                                        },
                                        objectFit: 'cover'
                                    }} src={AryanYadav}/>
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
                                        fontSize: '$md',
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
                                        <a target="_blank" href="https://iamaryanyadavv.github.io/personal-website/">iamaryanyadavv.github.io</a>
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
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Image 
                                    css={{
                                        '@xsMin':{
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '100px'
                                        },
                                        '@xsMax':{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '75px'
                                        },
                                        objectFit: 'cover'
                                    }}  src={Zahaan} />
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
                                        fontSize: '$md',
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