import React from "react";
import { InlineWidget } from "react-calendly";
import { Grid, Text } from "@nextui-org/react";
import QuoteHeading from "../headings/quoteheading";
import './slotbooking.css';

export default function Slots(){
    return(
        <>
            <Grid.Container gap={0}
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center'
            }}>
                {/* Heading */}

                <QuoteHeading
                    heading='SLOT BOOKING'
                    quote='"There&apos;s something greater than the result in football, more lasting: a legacy." - Xavi'
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
                    url="https://calendly.com/apl-4/main-field-w-goals-half-field-booking?background_color=1a1a1a&text_color=ffffff&primary_color=43cea2"
                    />

                    <InlineWidget
                    styles={{
                        width: '500px',
                        height: '725px',
                        margin: '5.5% 5%'
                    }}
                    url="https://calendly.com/apl-4/main-field-w-goals-half-field-booking-1?background_color=1a1a1a&text_color=ffffff&primary_color=43cea2"
                    />
                    <InlineWidget
                    styles={{
                        width: '500px',
                        height: '725px',
                        margin: '5.5% 5%'
                    }}
                    url="https://calendly.com/apl-4/side-field-w-cones-one-half-field-booking?background_color=1a1a1a&text_color=ffffff&primary_color=43cea2"
                    />

                    <InlineWidget
                    styles={{
                        width: '500px',
                        height: '725px',
                        margin: '5.5% 5%'
                    }}
                    url="https://calendly.com/apl-4/side-field-w-cones-other-half-field-booking?background_color=1a1a1a&text_color=ffffff&primary_color=43cea2"
                    />
                    
                </Grid.Container>
                

            </Grid.Container>
        </>
    )
}