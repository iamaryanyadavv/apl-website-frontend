import React from "react";
import { Grid, Spacer } from "@nextui-org/react";
import GradientHeading from "../../components/headings/gradientheading";
import APL5GalleryContent from "../../components/gallery/apl5gallerycontent";
import UnderDev from "../../components/underdevelopment/underdev";


export default function APL5GalleryPage(){
    return(
        <div>
        <Grid.Container
        css={{
            jc: 'center',
            alignItems: 'center'
        }}>
            <Spacer y={2} />
            <GradientHeading
                heading='APL 5.0 GALLERY'
                description='Collection of pictures and memories from APL 5.0'
                gradient='45deg, $yellow600 40%, $yellow800 100%'
            />
            <APL5GalleryContent/>
            
        </Grid.Container>
        <UnderDev/>
        </div>

    )
}