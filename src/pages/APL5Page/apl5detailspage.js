import React from "react";
import { Grid, Spacer } from "@nextui-org/react";
import GradientHeading from "../../components/headings/gradientheading";
import APL5DetailsContent from "../../components/details/apl5detailscontent";
import UnderDev from "../../components/underdevelopment/underdev";


export default function APL5DetailsPage(){
    return(
        <div>
        <Grid.Container
        css={{
            jc: 'center',
            alignItems: 'center'
        }}>
            <Spacer y={2} />
            <GradientHeading
                heading='APL 5.0 DETAILS'
                description='You can find all of the tournament details of APL Season 5.0!'
                gradient='45deg, $purple600 -20%, $pink600 100%'
            />
            <APL5DetailsContent/>
        </Grid.Container>
        <UnderDev/>
        </div>
    )
}