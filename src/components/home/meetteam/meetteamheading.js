import React from "react";
import { Grid, Text } from "@nextui-org/react";

export default function MeetTeamHeading () {
    return(
        <Grid.Container
        css={{
            jc: 'center',
            textAlign: 'center',
            paddingTop: '3%'
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
                            fontWeight: '$semibold',
                            textGradient: "45deg, $red600 20%, $yellow600 100%",
                            padding:'5px 10px 0px 10px'
                        }}>
                            Meet The Team
                        </Text>
                        <Text showIn={'xs'}
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                            fontSize: '$5xl',
                            fontWeight: '$semibold',
                            textGradient: "45deg, $red600 20%, $yellow600 100%",
                            padding: '20px 10px 0px 10px'
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
                        <Text
                        css={{
                            fontSize: '$lg',
                            color: '$gray800',
                            paddingBottom: '50px'
                        }}>
                            People who have made APL 6.0 possible!
                        </Text>
                    </Grid>
                </Grid.Container>
            </Grid>
        </Grid.Container>
    )
}