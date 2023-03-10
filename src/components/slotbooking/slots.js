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
                    {/* <InlineWidget
                    styles={{
                        width: '500px',
                        height: '725px',
                        margin: '5.5% 5%'
                    }}
                    url=""
                    /> */}

                    {/* <InlineWidget
                    styles={{
                        width: '500px',
                        height: '725px',
                        margin: '5.5% 5%'
                    }}
                    url=""
                    /> */}

                    {/* <InlineWidget
                    styles={{
                        width: '500px',
                        height: '725px',
                        margin: '5.5% 5%'
                    }}
                    url=""
                    /> */}

                    {/* <InlineWidget
                    styles={{
                        width: '500px',
                        height: '725px',
                        margin: '5.5% 5%'
                    }}
                    url=""
                    /> */}
                    
                </Grid.Container>
                

            </Grid.Container>
        </>
    )
}