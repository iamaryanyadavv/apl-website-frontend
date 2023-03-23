import React from "react";
import { useState, useEffect } from "react";
import { Grid, Text, Loading, Col, Image, Avatar } from "@nextui-org/react";
import AZ from '../../assets/images/APL5/A-Z.jpg'
import Chakravyuh from '../../assets/images/APL5/Chakravyuh.jpeg'
import SSquad from '../../assets/images/APL5/SuiiicideSquad.jpg'
import Radha from '../../assets/images/APL5/RadhaLathGupta.png'
import PranavWali from '../../assets/images/APL5/PranavWali2.jpeg'
import Grey from '../../assets/images/Grey.jpeg'


export default function APL5AwardsContent() {
    const [Fetching, setFetching] = useState();
    const [Awards, setAwards] = useState();

    async function getAwards(){
        await fetch('https://ashoka-premier-league-api.onrender.com/seasons/apl5/awards')
        .then(response=>response.json())
        .then(data=>{
            setAwards(data.values)
            setFetching(false)
        })
    }

    useEffect(()=>{
        setFetching(true)
        getAwards()
    }, [])

    return (
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

            {!Fetching && Awards &&
                <Grid.Container 
                css={{
                    jc: 'center',
                    textAlign: 'center'
                }}>
                    <Grid>
                        <Grid.Container 
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            margin: '30px 0px 30px 0px',
                            backgroundColor: 'rgb(20,20,20)',
                            borderRadius: '20px'
                        }}>
                            {/* Winners */}
                            <Grid
                            css={{
                                padding: '40px 0px'
                            }}>
                                <Grid.Container
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text 
                                    css={{
                                        fontSize: '$4xl',
                                        fontWeight: '$semibold',
                                        color: '#FAE481'
                                    }}>
                                        {Awards[0][0]}
                                    </Text>
                                </Grid.Container>
                                <Grid.Container
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text 
                                    css={{
                                        '@xsMin':{
                                            fontSize: '$6xl'
                                        },
                                        '@xsMax':{
                                            fontSize: '$4xl'
                                        },
                                        fontWeight: '$semibold',
                                        color: 'White'
                                    }}>
                                        {Awards[0][1]}
                                    </Text>
                                </Grid.Container>
                                <Grid.Container
                                css={{
                                    jc: 'center',
                                    '@xsMin':{
                                        width: '1000px'
                                    }
                                }}>
                                    <Text 
                                    css={{
                                        color: '$gray600',
                                        '@xsMin':{
                                            padding: '0px 200px'
                                        },
                                    }}>
                                        Team Owners - {Awards[0][2]}
                                    </Text>
                                </Grid.Container>
                                <Grid.Container
                                css={{
                                    jc: 'center',
                                    '@xsMin':{
                                        width: '1000px'
                                    }
                                }}>
                                    <Text
                                    css={{
                                        color: '$gray600',
                                        '@xsMin':{
                                            padding: '0px 200px'
                                        },
                                    }}>
                                        Team Players - {Awards[0][3]}
                                    </Text>
                                </Grid.Container>
                                <Grid.Container>
                                    <Image
                                    css={{
                                        '@xsMin':{
                                            width: '500px',
                                            height: '300px',
                                            borderRadius: '20px',
                                            objectFit: 'cover'
                                        },
                                        '@xsMax':{
                                            width: '300px',
                                            height: '180px',
                                            borderRadius: '20px',
                                            objectFit: 'cover'
                                        },
                                        marginTop: '20px'
                                    }} src={AZ} />
                                </Grid.Container>

                            </Grid>
                            
                            {/* 2nd Place */}
                            <Grid 
                            css={{
                                padding: '40px 05%'
                            }}>
                                <Col
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center'
                                }}>
                                    <Grid.Container
                                    css={{
                                        jc: 'center',
                                    }}>
                                        <Text 
                                        css={{
                                            fontSize: '$4xl',
                                            fontWeight: '$semibold',
                                            color: 'rgb(157 171 187)'
                                        }}>
                                            {Awards[1][0]}
                                        </Text>
                                    </Grid.Container>
                                    <Grid.Container
                                    css={{
                                        jc: 'center',
                                    }}>
                                        <Text 
                                        css={{
                                            '@xsMin':{
                                                fontSize: '$6xl'
                                            },
                                            '@xsMax':{
                                                fontSize: '$4xl'
                                            },
                                            fontWeight: '$semibold',
                                            color: 'White'
                                        }}>
                                            {Awards[1][1]}
                                        </Text>
                                    </Grid.Container>
                                    <Grid.Container
                                    css={{
                                        jc: 'center',
                                        '@xsMin':{
                                            width: '500px'
                                        }
                                    }}>
                                        <Text 
                                        css={{
                                            color: '$gray600',
                                            height: '30px'
                                        }}>
                                            Team Owners - {Awards[1][2]}
                                        </Text>
                                    </Grid.Container>
                                    <Grid.Container
                                    css={{
                                        jc: 'center',
                                        '@xsMin':{
                                            width: '500px'
                                        }
                                    }}>
                                        <Text
                                        css={{
                                            color: '$gray600',
                                            height: '90px'
                                        }}>
                                            Team Players - {Awards[1][3]}
                                        </Text>
                                    </Grid.Container>
                                    <Image
                                    css={{
                                        '@xsMin':{
                                            width: '500px',
                                            height: '300px',
                                            borderRadius: '20px',
                                            objectFit: 'cover'
                                        },
                                        '@xsMax':{
                                            width: '300px',
                                            height: '180px',
                                            borderRadius: '20px',
                                            objectFit: 'cover'
                                        },
                                        marginTop: '20px'
                                    }} src={Chakravyuh} />
                                </Col>
                            </Grid>

                            {/* 3rd Place */}
                            <Grid 
                            css={{
                                padding: '40px 5%'
                            }}>
                                <Col
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center'
                                }}>
                                    <Grid.Container
                                    css={{
                                        jc: 'center',
                                    }}>
                                        <Text 
                                        css={{
                                            fontSize: '$4xl',
                                            fontWeight: '$semibold',
                                            color: 'rgb(190 159 103)'
                                        }}>
                                            {Awards[2][0]}
                                        </Text>
                                    </Grid.Container>
                                    <Grid.Container
                                    css={{
                                        jc: 'center',
                                    }}>
                                        <Text 
                                        css={{
                                            '@xsMin':{
                                                fontSize: '$6xl'
                                            },
                                            '@xsMax':{
                                                fontSize: '$4xl'
                                            },
                                            fontWeight: '$semibold',
                                            color: 'White'
                                        }}>
                                            {Awards[2][1]}
                                        </Text>
                                    </Grid.Container>
                                    <Grid.Container
                                    css={{
                                        jc: 'center',
                                        '@xsMin':{
                                            width: '500px'
                                        }
                                    }}>
                                        <Text 
                                        css={{
                                            color: '$gray600',
                                            height: '30px'
                                        }}>
                                            Team Owners - {Awards[2][2]}
                                        </Text>
                                    </Grid.Container>
                                    <Grid.Container
                                    css={{
                                        jc: 'center',
                                        '@xsMin':{
                                            width: '500px'
                                        }
                                    }}>
                                        <Text
                                        css={{
                                            color: '$gray600',
                                            height: '90px'
                                        }}>
                                            Team Players - {Awards[2][3]}
                                        </Text>
                                    </Grid.Container>
                                    <Image
                                    css={{
                                        '@xsMin':{
                                            width: '500px',
                                            height: '300px',
                                            borderRadius: '20px',
                                            objectFit: 'cover'
                                        },
                                        '@xsMax':{
                                            width: '300px',
                                            height: '180px',
                                            borderRadius: '20px',
                                            objectFit: 'cover'
                                        },
                                        marginTop: '20px'
                                    }} src={SSquad} />
                                </Col>
                            </Grid>

                            {/* Female MVP */}
                            <Grid 
                            css={{
                                padding: '40px 05%'
                            }}>
                                <Col
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center'
                                }}>
                                    <Grid.Container
                                    css={{
                                        jc: 'center',
                                    }}>
                                        <Text 
                                        css={{
                                            fontSize: '$4xl',
                                            fontWeight: '$semibold',
                                            color: '#FAE481'
                                        }}>
                                            {Awards[3][0]}
                                        </Text>
                                    </Grid.Container>
                                    <Grid.Container
                                    css={{
                                        jc: 'center',
                                    }}>
                                        <Text 
                                        css={{
                                            '@xsMin':{
                                                fontSize: '$6xl'
                                            },
                                            '@xsMax':{
                                                fontSize: '$4xl'
                                            },
                                            fontWeight: '$semibold',
                                            color: 'White'
                                        }}>
                                            {Awards[3][1]}
                                        </Text>
                                    </Grid.Container>
                                    <Grid.Container
                                    css={{
                                        jc: 'center',
                                        '@xsMin':{
                                            width: '500px'
                                        },
                                        alignItems: 'center'
                                    }}>
                                        <Avatar bordered src={Awards[3][3]} />
                                        <Text 
                                        css={{
                                            display: 'flex',
                                            color: '$gray800',
                                            fontSize: '$2xl',
                                            height: '30px',
                                            alignItems: 'center',
                                            jc: 'center',
                                            paddingLeft: '10px'
                                        }}>
                                            {Awards[3][2]}
                                        </Text>
                                    </Grid.Container>
                                    <Image
                                    css={{
                                        '@xsMin':{
                                            width: '500px',
                                            height: '300px',
                                            borderRadius: '20px',
                                            objectFit: 'cover'
                                        },
                                        '@xsMax':{
                                            width: '300px',
                                            height: '180px',
                                            borderRadius: '20px',
                                            objectFit: 'cover'
                                        },
                                        marginTop: '20px'
                                    }} src={Radha} />
                                </Col>
                            </Grid>

                            {/* Male MVP */}
                            <Grid 
                            css={{
                                padding: '40px 05%'
                            }}>
                                <Col
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    jc: 'center'
                                }}>
                                    <Grid.Container
                                    css={{
                                        jc: 'center',
                                    }}>
                                        <Text 
                                        css={{
                                            fontSize: '$4xl',
                                            fontWeight: '$semibold',
                                            color: '#FAE481'
                                        }}>
                                            {Awards[4][0]}
                                        </Text>
                                    </Grid.Container>
                                    <Grid.Container
                                    css={{
                                        jc: 'center',
                                    }}>
                                        <Text 
                                        css={{
                                            '@xsMin':{
                                                fontSize: '$6xl'
                                            },
                                            '@xsMax':{
                                                fontSize: '$4xl'
                                            },
                                            fontWeight: '$semibold',
                                            color: 'White'
                                        }}>
                                            {Awards[4][1]}
                                        </Text>
                                    </Grid.Container>
                                    <Grid.Container
                                    css={{
                                        jc: 'center',
                                        '@xsMin':{
                                            width: '500px'
                                        },
                                        alignItems: 'center'
                                    }}>
                                        <Avatar bordered src={Awards[4][3]} />
                                        <Text 
                                        css={{
                                            display: 'flex',
                                            color: '$gray800',
                                            fontSize: '$2xl',
                                            height: '30px',
                                            alignItems: 'center',
                                            jc: 'center',
                                            paddingLeft: '10px'
                                        }}>
                                            {Awards[4][2]}
                                        </Text>
                                    </Grid.Container>
                                    <Image
                                    css={{
                                        '@xsMin':{
                                            width: '500px',
                                            height: '300px',
                                            borderRadius: '20px',
                                            objectFit: 'cover'
                                        },
                                        '@xsMax':{
                                            width: '300px',
                                            height: '180px',
                                            borderRadius: '20px',
                                            objectFit: 'cover'
                                        },
                                        marginTop: '20px'
                                    }} src={PranavWali} />
                                </Col>
                            </Grid>

                            {/* Top Scorers */}
                            <Grid
                            css={{
                                padding: '40px 0px'
                            }}>
                                <Grid.Container
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text 
                                    css={{
                                        fontSize: '$4xl',
                                        fontWeight: '$semibold',
                                        color: '#FAE481'
                                    }}>
                                        {Awards[5][0]}
                                    </Text>
                                </Grid.Container>
                                <Grid.Container
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text 
                                    css={{
                                        '@xsMin':{
                                            fontSize: '$4xl'
                                        },
                                        '@xsMax':{
                                            fontSize: '$2xl'
                                        },
                                        fontWeight: '$semibold',
                                        color: 'White'
                                    }}>
                                        {Awards[5][1]}
                                    </Text>
                                </Grid.Container>
                                <Grid.Container>
                                    <Image
                                    css={{
                                        '@xsMin':{
                                            width: '500px',
                                            height: '300px',
                                            borderRadius: '20px',
                                            objectFit: 'cover'
                                        },
                                        '@xsMax':{
                                            width: '300px',
                                            height: '180px',
                                            borderRadius: '20px',
                                            objectFit: 'cover'
                                        },
                                        marginTop: '20px'
                                    }} src={Grey} />
                                </Grid.Container>

                            </Grid>
                        </Grid.Container>
                    </Grid>
                </Grid.Container>
            }
        </>
    )
    
}