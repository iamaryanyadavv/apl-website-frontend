import React from "react";
import { Grid, Spacer } from "@nextui-org/react";
import GradientHeading from "../../components/headings/gradientheading";
import APL6DetailsContent from "../../components/details/apl6detailscontent";
import UnderDev from "../../components/underdevelopment/underdev";

export default function APL6DetailsPage(){
    return(
        <div>
        <Grid.Container
        css={{
            jc: 'center',
            alignItems: 'center'
        }}>
            <Spacer y={2} />
            <GradientHeading
                heading='APL 6.0 DETAILS'
                description='You can find all of the tournament details of APL Season 6.0!'
                gradient='45deg, $purple600 -20%, $pink600 100%'
            />
            <APL6DetailsContent/>
        </Grid.Container>
        <UnderDev/>
        </div>
    )
}