import React from "react";
import { Collapse, Grid, Text } from "@nextui-org/react";

export default function APL6StandingsFAQs(){
    return(
        <>
        <Grid.Container
        css={{
            jc: 'center',
            alignItems: 'center'
        }}>
            {/* Left Side */}
            <Grid
            css={{
                '@xsMin':{
                    width: '600px'
                },
                '@xsMax':{
                    width: '300px'
                }
            }}>
                <Collapse.Group splitted accordion={false}>
                    <Collapse  title="How are the knockout fixtures decided?" >
                        <Text css={{padding: '5px 0px'}}>
                        Out of 24 teams (which are divided in 6 pools of 4 each) 16 teams qualify for the knockout stage.
                        </Text>
                        <Text css={{padding: '5px 0px'}}>
                        All of the teams that finish 1st and 2nd in each pool qualify for the Round-of-16 directly, giving us our first 12 of 16 spots.
                        </Text>
                        <Text css={{padding: '5px 0px'}}>
                        Now, all 3rd placed teams are set in the Battle of The 3rds table and the top 4 teams in this table qualify and take the remaining 4 spots in the Round-of-16.
                        </Text>
                        <Text css={{padding: '5px 0px'}}>
                        Scroll down to the bottom of this page to see the Battle of The 3rds Table.
                        </Text>
                        <Text css={{padding: '5px 0px'}}>
                        For further clarification on the Battle of The 3rds table please refer to the answer to the "What is the Battle of The 3rds?" question.
                        </Text>
                    </Collapse>
                </Collapse.Group>
            </Grid>

            {/* Right Side */}
            <Grid
            css={{
                '@xsMin':{
                    width: '600px'
                },
                '@xsMax':{
                    width: '300px'
                }
            }}>
                <Collapse.Group splitted accordion={false}>
                    <Collapse title="What is the Battle of The 3rds?">
                        <Text css={{padding: '5px 0px'}}>
                            All 6 of the 3rd placed teams in the 6 pools would be placed in the Battle of The 3rds table. 
                            Top 4 (out of the 6 teams) in this table, would qualify for the knockout stage.
                        </Text>
                        <Text css={{padding: '5px 0px'}}>
                            Notice how we mention the Battle of The 3rds not as a "pool" but rather as a "table" because it exists merely to help you understand how the last 4 qualificaiton spots are decided.
                            That means that there are no extra games that would be played between the teams that end up in the Battle of The 3rds table but rather in this table
                            these 6 teams would be ranked according to the same factors (points, gf, ga and so on) as to which they were ranked in their respective pools.
                        </Text>
                        <Text css={{padding: '5px 0px'}}>
                            So, in essence, the best 4 3rd-placed-teams in the tournament make it to the knockout stage.
                        </Text >
                    </Collapse>
                </Collapse.Group>
            </Grid>
        </Grid.Container>
        </>
    )
}