import React from "react";
import { Grid, Text } from "@nextui-org/react";

export default function EventHeading () {
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
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                            fontSize: '$7xl',
                            fontWeight: '$bold',
                            textGradient: "45deg, $purple600 -20%, $pink600 100%",
                            padding:'5% 10px 0px 10px'
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
                        <Text hideIn={'xs'}
                        css={{
                            fontSize: '$3xl',
                            color: 'White',
                            paddingBottom: '100px'
                        }}>
                            Participate in these promo events and win exciting prizes!
                        </Text>
                        <Text showIn={'xs'}
                        css={{
                            fontSize: '$lg',
                            color: 'White',
                            paddingBottom: '30px'
                        }}>
                            Participate in these promo events and win exciting prizes!
                        </Text>
                    </Grid>
                </Grid.Container>
            </Grid>
        </Grid.Container>
    )
}
