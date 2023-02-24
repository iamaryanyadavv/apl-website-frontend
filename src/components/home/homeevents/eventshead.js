import React from "react";
import { Grid, Text } from "@nextui-org/react";

export default function EventsHead () {
    return(
        <Grid.Container
        css={{
            jc: 'center',
            textAlign: 'center',
            paddingTop: '5%'
        }}>
            <Grid>
                <Grid.Container
                css={{
                    jc: 'center',
                    textAlign: 'center'
                }}>
                    <Grid>
                        <Text hideIn={'xs'}
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                            fontSize: '$7xl',
                            fontWeight: '$bold',
                            textGradient: "45deg, $purple600 -20%, $pink600 100%",
                            padding:'2.5% 10px 0px 10px'
                        }}>
                            Mini Events
                        </Text>
                        <Text showIn={'xs'}
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                            fontSize: '$5xl',
                            fontWeight: '$bold',
                            textGradient: "45deg, $purple600 -20%, $pink600 100%",
                            padding: '5% 10px 0px 10px'
                        }}>
                            Mini Events
                        </Text>
                    </Grid>
                    
                </Grid.Container>
                <Grid.Container
                css={{
                    jc: 'center',
                    textAlign: 'center'
                }}>
                    <Grid>
                        <Text
                        css={{
                            fontSize: '$lg',
                            color: '$gray800',
                            paddingBottom: '50px'
                        }}>
                            Participate in these promo events and win exciting prizes!
                        </Text>
                    </Grid>
                </Grid.Container>
            </Grid>
        </Grid.Container>
    )
}