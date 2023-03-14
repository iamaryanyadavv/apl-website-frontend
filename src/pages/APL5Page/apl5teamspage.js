import React from "react";
import { Grid, Spacer } from "@nextui-org/react";
import GradientHeading from "../../components/headings/gradientheading";
import APL5TeamsContent from "../../components/teams/apl5teamscontent";
import UnderDev from "../../components/underdevelopment/underdev";


export default function APL5TeamPage(){
    return(
        <div>
        <Grid.Container
        css={{
            jc: 'center',
            alignItems: 'center'
        }}>
            <Spacer y={2} />
            <GradientHeading
                heading='APL 5.0 TEAMS'
                description='You can find all teams that took part in APL Season 5.0!'
                gradient='45deg, $red600 50%, $red800 100%'
            />
            <APL5TeamsContent/>
        </Grid.Container>
        </div>
    )
}