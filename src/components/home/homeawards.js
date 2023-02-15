import React from "react";
import './homeawards.css';
import { Text, Grid, Button } from "@nextui-org/react";

export default function HomeAwards(){
    return(
        <div className="homeawardspage">
            <div className="habackg">
                <Text className="haquote" h2
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
                    Attack wins you games, defence wins you championships” - Sir Alex Ferguson
                </Text>

                <Text h3
                css={{
                    display: 'flex',
                    jc: 'center',
                    fontWeight: '$medium',
                    paddingBottom: '0%',
                    textAlign: 'center'
                }}>
                    Over time Ashoka has seen some dramatic finishes to and insanely intense seasons of the APL.
                </Text>

                <Text h3
                css={{
                    display: 'flex',
                    jc: 'center',
                    fontWeight: '$medium',
                    paddingBottom: '1%',
                    textAlign: 'center'
                }}>
                    Check out the features* of each and every season below!
                </Text>

                <Grid.Container gap={1}
                css={{
                    jc: 'center',
                    paddingBottom: '25%'
                }}>
                    <Grid>
                        <Button  shadow rounded bordered auto ghost>
                            <a className="h-btn" href="/seasons">Seasons</a>
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
                    *features include season schedule with a knockout bracket, teams, player list, awards and more!
                </Text>
            </div>
        </div>
    )
}