import React from "react";
import { Grid, Spacer, Text } from "@nextui-org/react";
import GradientHeading from "../../components/headings/gradientheading";
import APL7DetailsContent from "../../components/details/apl7detailscontent";
import UnderDev from "../../components/underdevelopment/underdev";

export default function APL7DetailsPage() {
    return (
        <Grid.Container
            css={{
                jc: 'center',
                alignItems: 'center'
            }}>
            <Spacer y={2} />
            <GradientHeading
                heading='APL 7.0 DETAILS'
                description='You can find all of the tournament details of APL Season 7.0!'
                gradient='45deg, $purple600 -20%, $pink600 100%'
                descpadding='0px 12px'
            />
            <APL7DetailsContent />
        </Grid.Container>
    )
}