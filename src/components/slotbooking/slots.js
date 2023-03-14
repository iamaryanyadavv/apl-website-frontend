import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";
import { Grid, Text, Row, Col } from "@nextui-org/react";
import QuoteHeading from "../headings/quoteheading";
import './slotbooking.css';
import { useTicker } from "../../hooks";

export default function Slots(){
    //10:30am on 11th April, 2023 GMT or 4pm on 11th April, 2023 IST
    const endDate = "2023-04-11T10:30:00.000Z"; 

    const { days, hours, minutes, seconds, isTimeUp } = useTicker(endDate);

    useEffect(()=>{
        console.log('Timer done?')
    },[isTimeUp])

    return(
        <>
            {!isTimeUp && 
            <div>
                <Grid.Container  gap={0}
                css={{
                    jc: 'center',
                    alignItems: 'center',
                }}>
                
                <Grid.Container
                css={{
                    jc: 'center',
                    alignItems: 'center'
                }}>
                    <Text hideIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$7xl',
                        fontWeight: '$semibold',
                        paddingBottom: '1.5%'
                    }}>
                        Slot Booking
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$5xl',
                        fontWeight: '$semibold',
                        padding: '10% 5% 0% 5%'
                    }}>
                        Slot Booking
                    </Text>
                </Grid.Container>

                <Grid.Container
                css={{
                    jc: 'center',
                    alignItems: 'center',
                    height: '70vh'
                }}>
                    <Grid.Container 
                    css={{
                        jc: 'center',
                        alignItems: 'center'
                    }}>
                        <Grid.Container gap={0}
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                        }}>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$5xl',
                                fontWeight: '$medium',
                                textAlign:'center',
                                padding:'0% 10% 0% 10%'
                            }}>
                                Slot Booking feature opens on 11th April, 2023 at 4pm IST!
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$xl',
                                fontWeight: '$medium',
                                textAlign:'center',
                                padding:'0% 10% 0% 10%'
                            }}>
                                Slot Booking feature opens on 11th April, 2023 at 4pm IST!
                            </Text>
                        </Grid.Container>

                        <Row
                        css={{
                            jc: 'center',
                        }}>
                            

                            <Col
                            css={{
                                width: 'max-content'
                            }}>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$9xl'
                                    }}>
                                        {days}
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$6xl'
                                    }}>
                                        {days}
                                    </Text>
                                </Grid.Container>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$2xl'
                                    }}>
                                        Days
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$lg'
                                    }}>
                                        Days
                                    </Text>
                                </Grid.Container>
                            </Col>

                            <Text hideIn={'xs'}
                            css={{
                                fontSize: '$9xl',
                                padding: '0% 5%'
                            }}>
                                :
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: '$6xl',
                                padding: '0% 2.5%'
                            }}>
                                :
                            </Text>

                            <Col
                            css={{
                                width: 'max-content'
                            }}>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$9xl'
                                    }}>
                                        {hours}
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$6xl'
                                    }}>
                                        {hours}
                                    </Text>
                                </Grid.Container>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$2xl'
                                    }}>
                                        Hours
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$lg'
                                    }}>
                                        Hours
                                    </Text>
                                </Grid.Container>
                            </Col>

                            <Text hideIn={'xs'}
                            css={{
                                fontSize: '$9xl',
                                padding: '0% 5%'
                            }}>
                                :
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: '$6xl',
                                padding: '0% 2.5%'
                            }}>
                                :
                            </Text>

                            <Col
                            css={{
                                width: 'max-content'
                            }}>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$9xl'
                                    }}>
                                        {minutes}
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$6xl'
                                    }}>
                                        {minutes}
                                    </Text>
                                </Grid.Container>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$2xl'
                                    }}>
                                        Minutes
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$lg'
                                    }}>
                                        Minutes
                                    </Text>
                                </Grid.Container>
                            </Col>

                            <Text hideIn={'xs'}
                            css={{
                                fontSize: '$9xl',
                                padding: '0% 5%'
                            }}>
                                :
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: '$6xl',
                                padding: '0% 2.5%'
                            }}>
                                :
                            </Text>

                            <Col
                            css={{
                                width: 'max-content'
                            }}>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$9xl'
                                    }}>
                                        {seconds}
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$6xl'
                                    }}>
                                        {seconds}
                                    </Text>
                                </Grid.Container>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$2xl'
                                    }}>
                                        Seconds
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$lg'
                                    }}>
                                        Seconds
                                    </Text>
                                </Grid.Container>
                            </Col>
                                
                            

                        </Row>
                    </Grid.Container>
                </Grid.Container>

                

                </Grid.Container>
            </div>
            }
            {isTimeUp && 
            <Grid.Container gap={0}
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center'
            }}>
                {/* Heading */}

                <QuoteHeading
                    heading='SLOT BOOKING'
                    description='Using the feature below book your times training slots before your competitors and show them what you&apos;re made of!'
                />
                
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
                        height: '725px',
                        margin: '5.5% 5%'
                    }}
                    url="https://calendly.com/aplcalendly01/main-field-w-goals-one-half-field-booking?background_color=1a1a1a&text_color=ffffff&primary_color=00ff91" style="min-width:320px;height:630px;"
                    />

                    <InlineWidget
                    styles={{
                        width: '500px',
                        height: '725px',
                        margin: '5.5% 5%'
                    }}
                    url="https://calendly.com/aplcalendly02/main-field-w-goals-other-half-field-booking?background_color=1a1a1a&text_color=ffffff&primary_color=00ff91" style="min-width:320px;height:630px;"
                    />

                    <InlineWidget
                    styles={{
                        width: '500px',
                        height: '725px',
                        margin: '5.5% 5%'
                    }}
                    url="https://calendly.com/aplcalendly03/side-field-w-cones-one-half-field-booking?background_color=1a1a1a&text_color=ffffff&primary_color=00ff91" style="min-width:320px;height:630px;"
                    />

                    <InlineWidget
                    styles={{
                        width: '500px',
                        height: '725px',
                        margin: '5.5% 5%'
                    }}
                    url="https://calendly.com/aplcalendly04/side-field-w-cones-other-half-field-booking-4?background_color=1a1a1a&text_color=ffffff&primary_color=00ff91" style="min-width:320px;height:630px;"
                    />
                    
                </Grid.Container>
                

            </Grid.Container>
            }
        </>
    )
}