import React from "react";
import { Grid, Spacer } from "@nextui-org/react";
import GradientHeading from "../../components/headings/gradientheading";
import APL5PlayersContent from "../../components/players/apl5playerscontent";

export default function APL5PlayersPage(){
    return(
        <Grid.Container 
        css={{
            jc: 'center',
            alignItems: 'center'
        }}>
            <Spacer y={2} />
            <GradientHeading
                heading='APL 5.0 PLAYERS'
                description='You can find all players that took part in APL Season 5.0 here tier wise!'
                gradient='45deg, #388EE9 20%, #09EBEE 100%'
            />
            <APL5PlayersContent/>
        </Grid.Container>
    )
}