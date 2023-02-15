import React from "react";
import './homeseasons.css';
import { Text, Grid, Button } from "@nextui-org/react";

export default function HomeSeasons(){
    return(
        <div className="homeseasonspage">
            <div className="hsbackg">
                <Text className="hsquote" h2
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
                    “In football ,the worst blindness is seeing only the ball” - Nelson Falcāo Rodriguez
                </Text>

                <Text h3
                css={{
                    display: 'flex',
                    jc: 'center',
                    fontWeight: '$medium',
                    paddingBottom: '0%',
                    textAlign: 'center'
                }}>
                    Even though we have had an exceptional show of footballing skill and quality all around, some still stand out.
                </Text>

                <Text h3
                css={{
                    display: 'flex',
                    jc: 'center',
                    fontWeight: '$medium',
                    paddingBottom: '1%',
                    textAlign: 'center'
                }}>
                    Check out the list of all the award* winners across the seasons!
                </Text>

                <Grid.Container gap={1}
                css={{
                    jc: 'center',
                    paddingBottom: '25%'
                }}>
                    <Grid>
                        <Button  shadow rounded bordered auto ghost>
                            <a className="h-btn" href="/">Awards</a>
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
                    *awards include Male MVP, Female MVP, Winners, Runners-up and Third Place Winners
                </Text>
            </div>
        </div>
    )
}