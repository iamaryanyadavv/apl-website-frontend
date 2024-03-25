import { Card, Col, Grid, Text, Button, Popover, Link } from "@nextui-org/react";
import React from "react";
import JoseMourinho from './JoseMourinho.jpeg';
import Cristiano2 from './Cristiano2.jpeg';
import QuoteHeading from "../headings/quoteheading";

export default function RegCards() {
    return (
        <div>

            <QuoteHeading
                heading='APL 7.0 REGISTRATION'
                description='The time has come! Who do you choose to be: Team Owner or Team Player?'
            />

            <Grid.Container gap={8}
                css={{
                    jc: 'center',
                    alignItems: 'center'
                }}>
                <Grid>
                    <Card
                        css={{
                            '@xsMin': {
                                width: "350px",
                                height: "600px"
                            },
                            '@xsMax': {
                                width: '300px',
                                height: '550px'
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
                                        fontWeight: '$semibold',
                                        fontFamily:"Maven Pro"
                                    }}>Team Owner
                                </Text>
                                <Text
                                    css={{
                                        color: '#9E9E9E',
                                        textAlign: 'center',
                                        fontFamily:"Maven Pro"
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
                                        textAlign: 'center',
                                        fontFamily:"Maven Pro"
                                    }}>
                                    Register as a team owner and implement those modern tactics!
                                </Text>
                                <Grid.Container gap={1}
                                    css={{
                                        jc: 'center',
                                        paddingBottom: '5%'
                                    }}>
                                    <Grid>
                                        {/* <Popover>
                                            <Popover.Trigger> */}
                                        <Button href="/registration/team" css={{ color: 'White' }} shadow rounded bordered auto ghost>
                                            <Link href={"/registration/team"}>
                                                REGISTER
                                            </Link>
                                        </Button>
                                        {/* </Popover.Trigger>
                                            <Popover.Content> */}
                                        {/* <Text
                                                css={{
                                                    padding: '12px'
                                                }}>Registrations will open next year!</Text>
                                            </Popover.Content>
                                        </Popover> */}
                                    </Grid>
                                </Grid.Container>
                            </Col>
                        </Card.Footer>
                    </Card>
                </Grid>
                <Grid>
                    <Card
                        css={{
                            '@xsMin': {
                                width: "350px",
                                height: "600px"
                            },
                            '@xsMax': {
                                width: '300px',
                                height: '550px'
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
                                        fontWeight: '$semibold',
                                        fontFamily:"Maven Pro"
                                    }}>Team Player
                                </Text>
                                <Text
                                    css={{
                                        color: '#9E9E9E',
                                        textAlign: 'center',
                                        fontFamily:"Maven Pro"
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
                                        textAlign: 'center',
                                        fontFamily:"Maven Pro"
                                    }}>
                                    Register as a team player and lead your team to victory!
                                </Text>
                                <Grid.Container gap={1}
                                    css={{
                                        jc: 'center',
                                        paddingBottom: '5%'
                                    }}>
                                    <Grid>
                                        {/* <Popover> */}
                                        {/* <Popover.Trigger> */}
                                        <Button css={{ color: 'White' }} shadow rounded bordered auto ghost>
                                            <Link href={"/registration/player"}>REGISTER</Link>
                                        </Button>
                                        {/* </Popover.Trigger> */}
                                        {/* <Popover.Content>
                                                <Text
                                                css={{
                                                    padding: '12px'
                                                }}>Registrations will open next year!</Text>
                                            </Popover.Content> */}
                                        {/* </Popover> */}
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
                }}>
                Please read all registration rules before registering!
            </Text>
        </div>
    )
}
