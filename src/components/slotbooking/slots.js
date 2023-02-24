import React from "react";
import { InlineWidget } from "react-calendly";
import { Grid, Text } from "@nextui-org/react";
import './slotbooking.css';

export default function Slots(){
    return(
        <>
            <Grid.Container gap={4}
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center'
            }}>
                {/* Heading */}

                <Grid>
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
                                            SLOT BOOKING
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$4xl',
                                        textAlign: 'center',
                                        fontWeight: '$semibold',
                                        paddingTop: '10%',
                                    }}>
                                            SLOT BOOKING
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
                                        "In football, there's something greater than the result, more lasting - a legacy” - Xavi
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
                                        "In football, there's something greater than the result, more lasting - a legacy” - Xavi
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
                                        padding: '0px 20% 2.5% 20%'
                                    }}>
                                        Using the feature below book your timed training slots before your competitors and show them what you're made of!
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        jc: 'center',
                                        fontSize:'$xl',
                                        fontWeight: '$medium',
                                        textAlign: 'center',
                                        padding: '0px 10% 2.5% 10%'
                                    }}>
                                        Using the feature below book your timed training slots before your competitors and show them what you're made of!
                                    </Text>
                                </Grid>
                            </Grid.Container>

                        </Grid>
                    </Grid.Container>
                </Grid>
                
                {/* Content */}

                <Grid.Container
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                    <InlineWidget
                    styles={{
                        width: '500px',
                        height: '800px',
                        margin: '5%'
                    }}
                    url="https://calendly.com/apl-4/main-field-w-goals-half-field-booking?background_color=1a1a1a&text_color=ffffff&primary_color=43cea2"
                    />

                    <InlineWidget
                    styles={{
                        width: '500px',
                        height: '800px',
                        margin: '5%'
                    }}
                    url="https://calendly.com/apl-4/main-field-w-goals-half-field-booking-1?background_color=1a1a1a&text_color=ffffff&primary_color=43cea2"
                    />
                    <InlineWidget
                    styles={{
                        width: '500px',
                        height: '800px',
                        margin: '5%'
                    }}
                    url="https://calendly.com/apl-4/side-field-w-cones-one-half-field-booking?background_color=1a1a1a&text_color=ffffff&primary_color=43cea2"
                    />

                    <InlineWidget
                    styles={{
                        width: '500px',
                        height: '800px',
                        margin: '5%'
                    }}
                    url="https://calendly.com/apl-4/side-field-w-cones-other-half-field-booking?background_color=1a1a1a&text_color=ffffff&primary_color=43cea2"
                    />
                    
                </Grid.Container>
                

            </Grid.Container>
        </>
    )
}