import React from "react";
import { Grid, Spacer } from "@nextui-org/react";
import GradientHeading from "../../components/headings/gradientheading";
import APL7PlayersContent from "../../components/players/apl7playerscontent";

export default function APL7PlayersPage(){
    return(
        <Grid.Container 
        css={{
            jc: 'center',
            alignItems: 'center'
        }}>
            <Spacer y={2} />
            <GradientHeading
                heading='APL 7.0 PLAYERS'
                description='You can find all players that take part in APL Season 7.0 segregated into their tiers.'
                gradient='45deg, #388EE9 20%, #09EBEE 100%'
            />
            <APL7PlayersContent/>
        </Grid.Container>
    )
}