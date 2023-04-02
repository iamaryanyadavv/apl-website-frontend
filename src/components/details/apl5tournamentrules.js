import React from "react";
import { useState, useEffect } from "react";
import { Grid, Text, Col, Table, Image } from "@nextui-org/react";
import APL from '../../assets/images/AshokaFieldSunset.jpg'

export default function TournamentRules() {
    return(
        <Grid.Container 
        css={{
            jc: 'center',
            textAlign: 'center'
        }}>
            <Grid>
                <Grid.Container 
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    margin: '30px 0px 30px 0px',
                    backgroundColor: 'rgb(20,20,20)',
                    borderRadius: '20px'
                }}>
                    <Col 
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        jc: 'center',
                    }}>
                        <Image
                        css={{
                            '@xsMin':{
                                width: '200px',
                                height: '200px',
                                borderRadius: '40px',
                                marginTop: '40px'
                            },
                            '@xsMax':{
                                width: '100px',
                                height: '100px',
                                borderRadius: '20px',
                                marginTop: '40px'
                            },
                            objectFit: 'cover'
                        }} src={APL} />

                        <Text hideIn={'xs'}
                        css={{
                            fontSize: '$4xl',
                            fontWeight: '$semibold',
                            paddingTop: '20px',
                            paddingBottom: '20px'
                        }}>
                            APL Event
                        </Text>

                        <Text showIn={'xs'}
                        css={{
                            fontSize: '$2xl',
                            fontWeight: '$semibold',
                            paddingTop: '20px',
                            paddingBottom: '20px'
                        }}>
                            Event
                        </Text>

                        <Col
                        css={{
                            maxWidth: '1000px',
                            display: 'flex',
                            flexDirection: 'column',
                            jc: 'center',
                            textAlign:'left'
                        }}>
                            
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                1. The tournament has two rounds - <b><u>Group Stages and Knockouts</u></b>.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                2. In the <b>Group Stages</b>, teams will be divided into <b>4 groups of 5 teams</b>. Every team will play all other teams in their group once. The <b>top three teams</b> in each group will <b>qualify</b> for the next round. The teams that finish <b>first</b> in their respective groups will <b>directly play in the quarter-finals</b>. The teams finishing second and third will go through a playoff round in order to reach the quarter-finals. Post the quarter-finals, we will have regular semi-finals and a final.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                3. The format for the matches will be as follows:
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px',
                                textDecoration:'underline',
                                fontWeight: 'bold'
                            }}>
                                Group Stages:
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '2.5px 10px 10px 40px'
                            }}>
                                - Each match will be a <b>running 12-minute game</b>. The referee will blow their <b>whistle at the halfway point</b> of the game and the teams will <b>switch sides</b>. The <b>second half will start immediately after this</b>.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '2.5px 10px 10px 40px'
                            }}>
                                - Matches that end in a draw in regular time during the group stages will see both teams being awarded 1 point each.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px',
                                textDecoration:'underline',
                                fontWeight:'bold'
                            }}>
                                Knockouts:
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '2.5px 10px 10px 40px'
                            }}>
                                - Each match will be 7 minutes per half with a halftime break of 1 minute.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '2.5px 10px 10px 40px'
                            }}>
                                - Matches that end in a draw will be followed by extra time of 3 minutes. Extra time will be of the Golden Goal format (the team that scores first wins the match immediately). 
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '2.5px 10px 10px 40px'
                            }}>
                                - If the draw persists beyond extra time, there will be an <b>American penalty shootout (one-on-ones)</b> in which each team takes <b>three penalties, starting at the halfway line</b>.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '2.5px 10px 10px 40px'
                            }}>
                                - If the deadlock persists, the match will be decided in sudden death. Only those players on the field when the final whistle is blown can participate in the shoot-out.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                4. Teams can field a maximum of SIX players in a game (<b>with at least one non-cis man at all times</b>) throughout the tournament. Substitutions are rolling and can be made when the ball goes out of play (<b>the referee and the core team must be verbally informed</b>) without any restrictions on the number of substitutions. <b>A minimum of 4 players should be fielded, otherwise, the match will be abandoned/forfeited</b>. In this case, the penalty would be the same as mentioned in point (5).
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                5. Teams have to be present 5 minutes before their game kicks off. In case the team fails to arrive for their game a <b>maximum of 5 minutes after the kick-off time</b>, the match will be <b>forfeited</b>. The <b>other team will be given a 3-0 win along with 3 points</b>.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                6. When the ball goes out, the opposition team will be awarded a kick-in. Players are allowed to score directly from a kick-in.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                7. In the case of free kicks, the wall has to be 5 yards away. There are <b>no offsides</b>.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                8. If an in-game penalty occurs, the player will have to take a <b>one-step penalty</b>. If the player shuffles and misses, the penalty will be considered a miss. If the player shuffles and scores, they will be awarded another try. However, if the player shuffles the second time as well, the penalty will be considered a miss. <b>Only the referee's decision is final</b>.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                9. 2 yellow cards given to one player within one match will lead to an immediate red. Red cards will lead to the suspension of a player, both from the current match as well as the next. A total of 3 yellow cards to one player in the group stage will lead to a one-match suspension. The player will be suspended for the game that succeeds the game in which they received their third yellow card. The card tally will get refreshed after the group stages.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '2.5px 10px 10px 40px'
                            }}>
                                <b>For example:</b>
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '2.5px 10px 10px 40px'
                            }}>
                                If a player receives one yellow card each in Game 1, Game 2 and Game 3, they will be suspended for Game 4.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '2.5px 10px 10px 40px'
                            }}>
                                If a player receives their third yellow card in Game 4 (the last match of the group stages), the <b>yellow card tally will be refreshed before the knockout stage</b> starts and no suspensions will occur.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                10. There can only be a maximum of 5 people sitting at a team table. Team owners must ensure that this rule is adhered to. There will be strict penalties otherwise
                            </Text>
                            <Table 
                                aria-label="Example table with static content"
                                css={{
                                height: "auto",
                                }}
                                >
                                    <Table.Header>
                                        <Table.Column>Team</Table.Column>
                                        <Table.Column>Match 1</Table.Column>
                                        <Table.Column>Match 2</Table.Column>
                                        <Table.Column>Match 3</Table.Column>
                                        <Table.Column>Points</Table.Column>
                                        <Table.Column>Goal Difference</Table.Column>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row key='1'>
                                            <Table.Cell>A</Table.Cell>
                                            <Table.Cell>W</Table.Cell>
                                            <Table.Cell>W</Table.Cell>
                                            <Table.Cell>D</Table.Cell>
                                            <Table.Cell>7</Table.Cell>
                                            <Table.Cell>4</Table.Cell>
                                        </Table.Row>
                                        <Table.Row key='2'>
                                        <Table.Cell>B</Table.Cell>
                                            <Table.Cell>W</Table.Cell>
                                            <Table.Cell>W</Table.Cell>
                                            <Table.Cell>D</Table.Cell>
                                            <Table.Cell>7</Table.Cell>
                                            <Table.Cell>2</Table.Cell>
                                        </Table.Row>
                                        <Table.Row key='3'>
                                        <Table.Cell>C</Table.Cell>
                                            <Table.Cell>L</Table.Cell>
                                            <Table.Cell>L</Table.Cell>
                                            <Table.Cell>W</Table.Cell>
                                            <Table.Cell>3</Table.Cell>
                                            <Table.Cell>0</Table.Cell>
                                        </Table.Row>
                                        <Table.Row key='4'>
                                        <Table.Cell>D</Table.Cell>
                                            <Table.Cell>L</Table.Cell>
                                            <Table.Cell>L</Table.Cell>
                                            <Table.Cell>L</Table.Cell>
                                            <Table.Cell>0</Table.Cell>
                                            <Table.Cell>-3</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                                <Text
                            css={{
                                fontSize: '$xl',
                                padding: '2.5px 10px 10px 40px'
                            }}>
                                Assumed that teams have won by a margin of 1 goal.

                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '2.5px 10px 10px 40px'
                            }}>
                                In such a scenario, team A will be placed higher on the table than team B.
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px',
                                fontWeight: 'bold'
                            }}>
                                11. The referee's word is final.
                            </Text>
                        </Col>
                    </Col>
                </Grid.Container>
            </Grid>
        </Grid.Container>
    )
}