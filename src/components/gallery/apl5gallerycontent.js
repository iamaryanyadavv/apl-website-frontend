import React from "react";
import { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import { Text, Grid, Image } from "@nextui-org/react";
import Image1 from '../../assets/images/APL5/APL5A2ZTeam.jpg';
import Image2 from '../../assets/images/APL5/APL5Cover.jpg';
import Image3 from '../../assets/images/APL5/Chakravyuh.jpeg';
import Image4 from '../../assets/images/APL5/GeneralBackgroundAPL1 2.jpg';
import Image5 from '../../assets/images/APL5/RamaBackgroundAPL.jpg';
import Image6 from '../../assets/images/APL5/SuiiicideSquad.jpg';
import Image7 from '../../assets/images/APL5/VeduBackgroundAPL1.jpg';
import Image8 from '../../assets/images/APL5/VeduBackgroundAPL2.jpg';
import Image9 from '../../assets/images/APL5/WaliBackgroundAPL.jpg';
import './apl5gallerycontent.css'

export default function APL5GalleryContent() {

    // vertical pic
    const widthV=108
    const heightV=180

    // hroizontal pic
    const widthH=300
    const heightH=180

    const images = [
        {
            src: Image1,
            width: widthH,
            height: heightH,
        },
        {
            src: Image2,
            width: widthH,
            height: heightH,
        },
        {
            src: Image3,
            width: widthH,
            height: heightH,
        },
        {
            src: Image4,
            width: widthV,
            height: heightV,
        },
        {
            src: Image5,
            width: widthH,
            height: heightH,
        },
        {
            src: Image6,
            width: widthH,
            height: heightH,
        },
        {
            src: Image7,
            width: widthV,
            height: heightV,
        },
        {
            src: Image8,
            width: widthV,
            height: heightV,
        },
        {
            src: Image9,
            width: widthV,
            height: heightV,
        }
    ]

    return(
        <Grid.Container 
        css={{
            jc: 'center',
            alignItems: 'center'
        }}>
            {images.map((image)=>(
                <Grid
                css={{
                    margin: '2.5px'
                }}>
                    <Image css={{
                    width: toString(image.width),
                    height: toString(image.height),
                    alignItems: 'center',
                    borderRadius: '05px'
                    }}  src={image.src} width={image.width} height={image.height} />
                </Grid>
            ))}
        </Grid.Container>
        
    )
}