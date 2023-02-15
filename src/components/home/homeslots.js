import React from "react";
import './homeslots.css';
import { Text, Grid, Button } from "@nextui-org/react";

export default function HomeSlots(){
    return(
        <div className="homeslotspage">
            <div className="hssbackg">
                <Text className="hssquote" h2
                css={{
                    display: 'flex',
                    jc: 'center',
                    alignItems: 'center',
                    paddingRight: '10%',
                    paddingLeft: '10%',
                    paddingBottom: '1%',
                    fontFamily: 'DS',
                    fontWeight: 'normal'
                }}>
                    “Talent is nothing without hardwork” - Cristiano Ronaldo
                </Text>

                <Text h3
                css={{
                    display: 'flex',
                    jc: 'center',
                    fontWeight: '$medium',
                    paddingBottom: '0%',
                    textAlign: 'center'
                }}>
                    Staying up till late completing assignments, finishing exams, perfecting projects - what for? This.
                </Text>

                <Text h3
                css={{
                    display: 'flex',
                    jc: 'center',
                    fontWeight: '$medium',
                    paddingBottom: '1%',
                    textAlign: 'center'
                }}>
                    Navigate to the training slot booking* features below!
                </Text>

                <Grid.Container gap={1}
                css={{
                    jc: 'center',
                    paddingBottom: '25%'
                }}>
                    <Grid>
                        <Button  shadow rounded bordered auto ghost>
                            <a className="h-btn" href="/slots">Slot Booking</a>
                        </Button>
                    </Grid>
                </Grid.Container>

                <Text h6
                css={{
                    display: 'flex',
                    jc: 'center',
                    fontWeight: '$medium',
                    paddingBottom: '1%',
                    textAlign: 'center'
                }}>
                    *owners/players will have to show an official booking email from Calendly for their slot
                </Text>
            </div>
        </div>
    )
}