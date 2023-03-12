import React from "react";
import { Grid, Spacer } from "@nextui-org/react";
import GradientHeading from "../../components/headings/gradientheading";
import APL6PlayersContent from "../../components/players/apl6playerscontent";

export default function APL6PlayersPage(){
    return(
        <Grid.Container 
        css={{
            jc: 'center',
            alignItems: 'center'
        }}>
            <Spacer y={2} />
            <GradientHeading
                heading='APL 6.0 PLAYERS'
                description='You can find all players that take part in APL Season 6.0! They will be segrated into tiers soon!'
                gradient='45deg, #388EE9 20%, #09EBEE 100%'
            />
            <APL6PlayersContent/>
        </Grid.Container>
    )
}