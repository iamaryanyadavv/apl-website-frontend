import { Text, Col, Grid } from "@nextui-org/react";
import './regrules.css';
import React from "react";

export default function RegRules(){
    return(
        <div>
                <Grid.Container gap={2}
                css={{
                    jc: 'center'
                }}>
                    <Grid
                    css={{
                        jc: 'flex-start',
                        maxWidth: '450px',
                    }}>
                        <Text className="reg-rules-heading" 
                        css={{
                            paddingLeft: '2%',
                            fontSize: '$2xl',
                            fontWeight: '$semibold'
                        }}>
                            Team Owner Registration Rules
                        </Text>
                        <Text
                        css={{
                            paddingLeft: '4%',
                        }}>
                            1. One person can register under one team only.
                        </Text>
                        <Text
                        css={{
                            paddingLeft: '4%'
                        }}>
                            2. Maximum number of official owners that can be per team is five however you can add 3 more as advisors.
                        </Text>
                        <Text
                        css={{
                            paddingLeft: '4%'
                        }}>
                            3. Registration Fee is a one time fee of 5000 Rupees.
                        </Text>
                        <Text
                        css={{
                            paddingLeft: '4%'
                        }}>
                            4. Rule 4 to take space.
                        </Text>
                        <Text
                        css={{
                            paddingLeft: '4%',
                            paddingBottom: '4%'
                        }}>
                            5. Rule 5 number to take up more space rule number 4.
                        </Text>
                    </Grid>
                    <Grid
                    css={{
                        jc: 'flex-end',
                        maxWidth: '450px'
                    }}>
                        <Text className="reg-rules-heading" 
                        css={{
                            paddingLeft: '2%',
                            fontSize: '$2xl',
                            fontWeight: '$semibold'
                        }}>
                            Team Player Registration Rules
                        </Text>
                        <Text
                        css={{
                            paddingLeft: '4%'
                        }}>
                            1. One person can register as a player only once.
                        </Text>
                        <Text
                        css={{
                            paddingLeft: '4%'
                        }}>
                            2. Registration Fee is a one time fee of 200 Rupees.
                        </Text>
                        <Text
                        css={{
                            paddingLeft: '4%'
                        }}>
                            3. Once registered the registration fee will not be refunded if the player wishes to back out. 
                        </Text>
                        <Text
                        css={{
                            paddingLeft: '4%'
                        }}>
                            4. There is a first-come-first-serve policy up to an upper limit of 150 players.
                        </Text>
                        <Text
                        css={{
                            paddingLeft: '4%'
                        }}>
                            5. Rule number 5.
                        </Text>
                        <Text
                        css={{
                            paddingLeft: '4%',
                            paddingBottom: '4%'
                        }}>
                            6. Rule number 6 to add more space after rule number 5.
                        </Text>
                    </Grid>
                </Grid.Container>

        </div>
    )
}