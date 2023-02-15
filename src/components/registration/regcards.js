import { Card, Col, Container, Grid, Text, Button } from "@nextui-org/react";
import React from "react";
import JoseMourinho from './JoseMourinho.jpeg';
import Cristiano from './Cristiano.jpeg';
import Cristiano2 from './Cristiano2.jpeg';
export default function RegCards(){
    return(
        <div>

            <Text h1
            css={{
                textAlign: 'center',
                fontWeight: '$semibold',
                paddingBottom: '1.5%'
            }}>
                    APL 6.0 REGISTRATION
            </Text>

            <Text h3
            css={{
                display: 'flex',
                jc: 'center',
                alignItems: 'center',
                paddingRight: '10%',
                paddingLeft: '10%',
                paddingBottom: '1.5%',
                fontFamily: 'DS',
                fontWeight: 'normal',
                textAlign: 'center'
            }}>
                “You miss 100% of the shots you don't take” -Wayne Getzky
            </Text>

            <Text h2
                css={{
                    display: 'flex',
                    jc: 'center',
                    fontWeight: '$semibold',
                    paddingBottom: '0%',
                    marginBottom: '0%',
                    textAlign: 'center'
                }}>
                    The time has come!
                </Text>

            <Text h2
            css={{
                display: 'flex',
                jc: 'center',
                fontWeight: '$semibold',
                paddingTop: '0%',
                paddingBottom: '0%',
                textAlign: 'center'
            }}>
                Who do you choose to be: Team Owner or Team Player?
            </Text>
            
            
            <Grid.Container gap={8}
            css={{
                jc: 'center',
                alignItems: 'center'
            }}>
                <Grid>
                    <Card css={{ w: "300px", h: "550px" }}>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col css={{
                                alignItems: 'center',
                                jc: 'center'
                            }}>
                                <Text 
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold'
                                }}>Team Owner
                                </Text>
                                <Text
                                css={{
                                    color: '#9E9E9E',
                                    textAlign: 'center',
                                }}>
                                    I'm the next Jose Mourinho.
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src={JoseMourinho}
                                width="100%"
                                height="100%"
                                objectFit="cover"
                                alt="Card example background"
                            />
                        </Card.Body>
                        <Card.Footer isBlurred
                        css={{
                            position: "absolute",
                            bgBlur: "#ffffff05",
                            bottom: 0,
                            zIndex: 1,
                            jc: 'center',
                            alignItems: 'center'
                        }}
                        >
                            <Col>
                                <Text
                                css={{
                                    textAlign: 'center'
                                }}>
                                    Register as a team owner and implement those modern tactics!
                                </Text>
                                <Grid.Container gap={1}
                                css={{
                                    jc: 'center',
                                    paddingBottom: '5%'
                                }}>
                                    <Grid>
                                        <Button  shadow rounded bordered auto ghost>
                                            <a className="h-btn" href="/registration/team">REGISTER</a>
                                        </Button>
                                    </Grid>
                                </Grid.Container>
                            </Col>
                        </Card.Footer>
                    </Card>
                </Grid>
                <Grid>
                    <Card css={{ w: "300px", h: "550px" }}>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col css={{
                                alignItems: 'center',
                                jc: 'center'
                            }}>
                                <Text 
                                css={{
                                    textAlign: 'center',
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold'
                                }}>Team Player
                                </Text>
                                <Text
                                css={{
                                    color: '#9E9E9E',
                                    textAlign: 'center',
                                }}>
                                    I'm the next Cristiano.
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src={Cristiano2}
                                width="100%"
                                height="100%"
                                objectFit="cover"
                                alt="Card example background"
                            />
                        </Card.Body>
                        <Card.Footer isBlurred
                        css={{
                            position: "absolute",
                            bgBlur: "#ffffff05",
                            bottom: 0,
                            zIndex: 1,
                            jc: 'center',
                            alignItems: 'center'
                        }}
                        >
                            <Col>
                                <Text
                                css={{
                                    textAlign: 'center'
                                }}>
                                    Register as a team player and lead your team to victory!
                                </Text>
                                <Grid.Container gap={1}
                                css={{
                                    jc: 'center',
                                    paddingBottom: '5%'
                                }}>
                                    <Grid>
                                        <Button  shadow rounded bordered auto ghost>
                                            <a className="h-btn" href="/registration/player">REGISTER</a>
                                        </Button>
                                    </Grid>
                                </Grid.Container>
                            </Col>
                        </Card.Footer>
                    </Card>
                </Grid>
            </Grid.Container>

            <Text 
                css={{
                    display: 'flex',
                    jc: 'center',
                    fontWeight: '$medium',
                    paddingBottom: '0.5%',
                    textAlign: 'center',
                    fontSize: '$sm',
                    paddingBottom: '2%'
                }}>
                    Please read all registration rules before registering!
            </Text>
        </div>
    )
}