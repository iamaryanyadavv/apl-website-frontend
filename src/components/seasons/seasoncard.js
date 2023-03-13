import React from "react";
import { Grid, Card, Col, Text, Button, Link} from "@nextui-org/react";
import './seasons.css';

export default function SeasonCard(props){
    return(
        <Grid.Container gap={8}
            css={{
                jc: 'center',
                alignItems: 'center'
            }}>
                <Grid>
        <Card className="season-card" css={{ w: "300px", h: "550px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col css={{
                    alignItems: 'center',
                    jc: 'center'
                }}>
                    <Text hideIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$4xl',
                        fontWeight: '$semibold'
                    }}>
                        APL {props.season}
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$2xl',
                        fontWeight: '$semibold'
                    }}>
                        APL {props.season}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src={props.src}
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
                    <Text hideIn={'xs'}
                    css={{
                        color: 'white',
                        fontSize: '$md',
                        fontWeight: '$medium',
                        textAlign: 'center',
                    }}>
                        {props.semester}
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        color: 'white',
                        fontSize: '$md',
                        fontWeight: '$medium',
                        textAlign: 'center',
                    }}>
                        {props.semester}
                    </Text>
                    <Grid.Container gap={1}
                    css={{
                        jc: 'center',
                        alignItems: 'center'
                    }}>
                        <Grid>
                            <Button shadow rounded bordered auto ghost>
                                <Link href={props.href}>
                                    FEATURES
                                </Link>
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Col>
            </Card.Footer>
        </Card>
        </Grid>
        </Grid.Container>
    )
}