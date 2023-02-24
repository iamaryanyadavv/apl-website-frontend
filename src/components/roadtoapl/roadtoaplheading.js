import { Grid, Text } from "@nextui-org/react";
import React from "react";

export default function RoadToAPLHeading(){
    return(
        <>
            <Grid.Container
            css={{
                jc: 'center',
                textAlign: 'center',
            }}>
                <Grid>
                    <Grid.Container
                    css={{
                        jc: 'center',
                        textAlign: 'center',
                    }}>
                        <Grid>
                            <Text hideIn={'xs'}
                            css={{
                                fontSize: '$7xl',
                                textAlign: 'center',
                                fontWeight: '$semibold',
                                paddingBottom: '1.5%',
                            }}>
                                    ROAD TO APL
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: '$4xl',
                                textAlign: 'center',
                                fontWeight: '$semibold',
                                paddingTop: '10%',
                            }}>
                                    ROAD TO APL
                            </Text>
                        </Grid>
                        
                    </Grid.Container>

                    <Grid.Container
                    css={{
                        jc: 'center',
                        textAlign: 'center'
                    }}>
                        <Grid>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                fontSize: '$3xl',
                                alignItems: 'center',
                                paddingRight: '10%',
                                paddingLeft: '10%',
                                paddingBottom: '2.5%',
                                fontFamily: 'DS',
                                fontWeight: 'normal',
                                textAlign: 'center'
                            }}>
                                "The journey of a thousand miles beings with one step" - Lao Tzu
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                fontSize: '$2xl',
                                alignItems: 'center',
                                padding: '10%',
                                fontFamily: 'DS',
                                fontWeight: 'normal',
                                textAlign: 'center'
                            }}>
                                "The journey of a thousand miles beings with one step" - Lao Tzu
                            </Text>
                        </Grid>
                    </Grid.Container>

                    <Grid.Container
                    css={{
                        jc: 'center',
                        textAlign: 'center'
                    }}>
                        <Grid>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                fontSize:'$2xl',
                                fontWeight: '$medium',
                                textAlign: 'center',
                            }}>
                                Take a look at all events leading up to the coveted APL Tournament.
                            </Text>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                fontSize:'$2xl',
                                fontWeight: '$medium',
                                textAlign: 'center',
                                padding: '0px 0% 10% 0%'
                            }}>
                                You do not want to miss out on any of these, trust us!
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                fontSize:'$xl',
                                fontWeight: '$medium',
                                textAlign: 'center',
                            }}>
                                Take a look at all events leading up to the coveted APL Tournament. 
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                fontSize:'$xl',
                                fontWeight: '$medium',
                                textAlign: 'center',
                                padding: '0px 0% 2.5% 0%'
                            }}>
                                You do not want to miss out on any of these, trust us!
                            </Text>
                        </Grid>
                    </Grid.Container>

                </Grid>
            </Grid.Container>
        </>
    )
}