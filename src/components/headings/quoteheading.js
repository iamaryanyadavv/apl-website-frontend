import React from "react";
import { Grid, Text } from "@nextui-org/react";

export default function QuoteHeading(props){
    return(
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
                                    {props.heading}
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: '$4xl',
                                textAlign: 'center',
                                fontWeight: '$semibold',
                                paddingTop: '10%',
                            }}>
                                    {props.heading}
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
                                paddingBottom: '1.5%',
                                fontFamily: 'DS',
                                fontWeight: 'normal',
                                textAlign: 'center'
                            }}>
                                {props.quote}
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
                                {props.quote}
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
                                width: '60vw'
                            }}>
                                {props.description}
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                fontSize:'$lg',
                                fontWeight: '$medium',
                                textAlign: 'center',
                                width: '60vw'
                            }}>
                                {props.description}
                            </Text>
                        </Grid>
                    </Grid.Container>

                </Grid>
            </Grid.Container>
    )
}