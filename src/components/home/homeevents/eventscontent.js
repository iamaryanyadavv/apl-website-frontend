import { Grid, Col, Text, Image, Button } from "@nextui-org/react";
import './homeevents.css';
import React from "react";
import FIFA from '../../../assets/images/PS5Controller2.JPG';
import Nutmeg from '../../../assets/images/FootballFreestyle.jpeg';
import Bin from '../../../assets/images/Bin.png';
import FBowl from '../../../assets/images/FootballBowling 2.jpeg';

export default function EventsContent () {
    return(
        <Grid.Container gap={4}
        css={{
            jc: 'center',
            textAlign: 'center',
            alignItems: 'center'
        }}>
            <Grid.Container gap={4}
            css={{
                jc: 'center',
                textAlign: 'center'
            }}>
                <Grid
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                    <Col>
                        <Image src={FIFA} className='homeeventspics'/>
                        <Text
                        css={{
                            fontSize: '$3xl',
                            fontWeight: '$bold',
                            borderStyle: 'solid',
                            borderWidth: '0px 0px 2px 0px',
                            borderColor: '$purple600',
                            padding: '2%'
                        }}>
                            FIFA Tournament
                        </Text>
                    </Col>
                </Grid>


                <Grid
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                    <Col>
                        <Image src={Nutmeg} className='homeeventspics'/>
                        <Text
                        css={{
                            fontSize: '$3xl',
                            fontWeight: '$bold',
                            borderStyle: 'solid',
                            borderWidth: '0px 0px 2px 0px',
                            borderColor: '$purple600',
                            padding: '2%'
                        }}>
                            1v1 Challenge
                        </Text>
                    </Col>
                </Grid>

                
                <Grid
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                    <Col>
                        <Image src={Bin} className='homeeventspics'/>
                        <Text
                        css={{
                            fontSize: '$3xl',
                            fontWeight: '$bold',
                            borderStyle: 'solid',
                            borderWidth: '0px 0px 2px 0px',
                            borderColor: '$purple600',
                            padding: '2%'
                        }}>
                            "Bins Only" Challenge
                        </Text>
                    </Col>
                </Grid>

                        
                <Grid
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                    <Col>
                        <Image src={FBowl} className='homeeventspics'/>
                        <Text
                        css={{
                            fontSize: '$3xl',
                            fontWeight: '$bold',
                            borderStyle: 'solid',
                            borderWidth: '0px 0px 2px 0px',
                            borderColor: '$purple600',
                            padding: '2%'
                        }}>
                            Foot Bowling
                        </Text>
                    </Col>
                </Grid>


            </Grid.Container>


            <Grid.Container gap={4}
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                paddingTop: '40px'
            }}>
                <Grid>
                    <Button className="mini-events-btn"
                    auto shadow rounded>
                        <a href="/events" className="mini-events-btn-2"> Mini Events </a> 
                    </Button>
                </Grid>
            </Grid.Container>
        </Grid.Container>
    )
}