import React from "react";
import { Grid, Spacer } from "@nextui-org/react";
import GradientHeading from "../../components/headings/gradientheading";
import APL5AwardsContent from "../../components/awards/apl5awardscontent";


export default function APL5AwardsPage(){
    return(
        <Grid.Container
        css={{
            jc: 'center',
            alignItems: 'center'
        }}>
            <Spacer y={2} />
            <GradientHeading
                heading='APL 5.0 AWARDS'
                description='You can find all of the tournament details of APL Season 5.0!'
                gradient='45deg, $green600 40%, $green800 100%'
            />
            <APL5AwardsContent/>
        </Grid.Container>
    )
}