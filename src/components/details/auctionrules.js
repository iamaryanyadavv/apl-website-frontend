import React from "react";
import { useState, useEffect } from "react";
import { Grid, Text, Col, Table, Image } from "@nextui-org/react";
import Auction from '../../assets/images/Auction.jpeg'

export default function AuctionRules() {
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
                        }} src={Auction} />

                        <Text hideIn={'xs'}
                        css={{
                            fontSize: '$4xl',
                            fontWeight: '$semibold',
                            paddingTop: '20px',
                            paddingBottom: '20px'
                        }}>
                            Auction
                        </Text>

                        <Text showIn={'xs'}
                        css={{
                            fontSize: '$2xl',
                            fontWeight: '$semibold',
                            paddingTop: '20px',
                            paddingBottom: '20px'
                        }}>
                            Auction
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
                                1. Every team will have a budget of 130 million
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                2. Players are divided into 4 tiers: Tier 1, Tier 2, Tier 3 and Tier 4 (Wildcards)
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                3. Every team must have a minimum of 9 (7 men + 2 non-cis men) players. The upper limit on the number of players a team can buy is 11 players
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                4. Every team should mandatorily have 2 non-cis men players. Failure to comply will lead to disqualification
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                5. Every tier will have a base price as follows:
                            </Text>
                                <Table 
                                aria-label="Example table with static content"
                                css={{
                                height: "auto",
                                }}
                                >
                                    <Table.Header>
                                        <Table.Column>Tier</Table.Column>
                                        <Table.Column>Base Price</Table.Column>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row key='1'>
                                            <Table.Cell>1</Table.Cell>
                                            <Table.Cell>10M</Table.Cell>
                                        </Table.Row>
                                        <Table.Row key='2'>
                                            <Table.Cell>2</Table.Cell>
                                            <Table.Cell>7M</Table.Cell>
                                        </Table.Row>
                                        <Table.Row key='3'>
                                            <Table.Cell>3</Table.Cell>
                                            <Table.Cell>4M</Table.Cell>
                                        </Table.Row>
                                        <Table.Row key='4'>
                                            <Table.Cell>4</Table.Cell>
                                            <Table.Cell>1M</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                6. Every player will be bid based on a regular open basis (the highest bid wins). The entire auction will be callout-bid based so the owners can bid any amount for a player that comes on screen
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                7. Unsold players in the first round will return in a second round of auctions at a lower starting base price. If they remain unsold even after the second round, they will be randomly allotted to the teams based on squad numbers
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                8. Owners will not be allowed to make bids that will exceed their budget: 
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '2.5px 10px 10px 40px'
                            }}>
                                a. If such a bid occurs, the team found guilty will be given -3 group stage points immediately and will be out of the auction for that round. The bidding will, however, still continue. The team with the last legal bid will continue with the process and the other teams can bid further in case they have the budget
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '2.5px 10px 10px 40px'
                            }}>
                                b. Warnings will be given to owners at the 170m mark
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '2.5px 10px 10px 40px'
                            }}>
                                c. In case any team is unable to fulfill the minimum quota of 9 (7+2) players before their budget is over, they will be given -3 group stage points
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                9. Owners have to be dressed in formal clothes
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                10. There can only be a maximum of 5 people sitting at a team table. Team owners must ensure that this rule is adhered to. There will be strict penalties otherwise
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                11. No player can join an owner unless they have been bought by that particular owner
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                12. The decorum of the hall must be maintained at all times
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                13. All phones should be on silent
                            </Text>
                            <Text
                            css={{
                                fontSize: '$xl',
                                padding: '10px'
                            }}>
                                14. The auctioneers' decision, followed by the decision from the organizing committee is final
                            </Text>
                        </Col>
                    </Col>
                </Grid.Container>
            </Grid>
        </Grid.Container>
    )
}