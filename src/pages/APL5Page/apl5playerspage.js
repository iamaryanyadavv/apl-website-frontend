import React from "react";
import { Grid } from "@nextui-org/react";
import GradientHeading from "../../components/headings/gradientheading";
import EachPlayerCard from "../../components/players/eachplayer";

export default function APL5PlayersPage(){
    return(
        <Grid.Container
        css={{
            jc: 'center',
            alignItems: 'center'
        }}>
            <GradientHeading 
                heading='APL 5.0 Players'
                description='You can find all players that took part in APL Season 5.0 here tier wise!'
                gradient='45deg, #388EE9 20%, #09EBEE 100%'
            />
            <EachPlayerCard/>
        </Grid.Container>
    )
}