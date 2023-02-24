import React from "react";
import { Grid, Text } from "@nextui-org/react";

export default function TeamHeading () {
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
                            textGradient: "45deg, $red600 20%, $yellow600 100%",
                            padding:'5% 10px 0px 10px'
                        }}>
                            Meet The Team
                        </Text>
                        <Text showIn={'xs'}
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                            fontSize: '$5xl',
                            fontWeight: '$bold',
                            textGradient: "45deg, $red600 20%, $yellow600 100%",
                            padding: '5% 10px 0px 10px'
                        }}>
                            Meet The Team
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
                            fontSize: '$2xl',
                            color: 'White',
                            paddingBottom: '50px'
                        }}>
                            People who have made APL possible!
                        </Text>
                        <Text showIn={'xs'}
                        css={{
                            fontSize: '$md',
                            color: 'White',
                            paddingBottom: '30px'
                        }}>
                            People who have made APL possible!
                        </Text>
                    </Grid>
                </Grid.Container>
            </Grid>
        </Grid.Container>
    )
}