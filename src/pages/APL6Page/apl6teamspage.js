import React from "react";
import { Grid, Spacer } from "@nextui-org/react";
import GradientHeading from "../../components/headings/gradientheading";
import APL6TeamsContent from "../../components/teams/apl6teamscontent";


export default function APL5TeamPage(){
    return(
        <Grid.Container
        css={{
            jc: 'center',
            alignItems: 'center'
        }}>
            <Spacer y={2} />
            <GradientHeading
                heading='APL 6.0 TEAMS'
                description='You can find all teams that are taking part in APL Season 6.0!'
                gradient='45deg, $red600 50%, $red800 100%'
            />
            <APL6TeamsContent/>
        </Grid.Container>
    )
}