import React from "react";
import { Grid, Card, Col, Text, Button, Link} from "@nextui-org/react";
import './seasons.css';

export default function PlayersCard(props){
    return(
        <Card className="season-item-card">
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col css={{
                    alignItems: 'center',
                    jc: 'center'
                }}>
                    <Text hideIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$4xl',
                        fontWeight: '$bold'
                    }}>
                        PLAYERS
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$2xl',
                        fontWeight: '$semibold'
                    }}>
                        PLAYERS
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
                    <Text
                    css={{
                        textAlign: 'center'
                    }}>
                        Players
                    </Text>
                    <Text
                    css={{
                        textAlign: 'center'
                    }}>
                        Tiers
                    </Text>
                    <Text
                    css={{
                        textAlign: 'center'
                    }}>
                        Prices
                    </Text>
                    
                    <Grid.Container gap={1}
                    css={{
                        jc: 'center',
                    }}>
                
                    
                        <Grid>
                            <Button shadow rounded bordered auto ghost>
                                <Link href={props.href}>
                                    PLAYERS
                                </Link>
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Col>
            </Card.Footer>
        </Card>
    )
}