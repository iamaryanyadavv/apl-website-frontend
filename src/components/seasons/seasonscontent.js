import { Grid } from "@nextui-org/react";
import React from "react";
import SeasonCard from "./seasoncard";
import APL4Cover from '../../assets/images/APL4/APL4Cover.JPG';
import APL5Cover from '../../assets/images/APL5/APL5Cover 2.jpg';

export default function SeasonsContent(){
    return(
        <Grid.Container gap={6}
        css={{
            jc: 'center',
            alignItems: 'center'
        }}>
            <Grid> 
                <SeasonCard season='5.0' semester='SPRING 2022' src={APL5Cover} href='/seasons/apl5' />
            </Grid>
            <Grid> 
                <SeasonCard season='4.0' semester='SPRING 2019' src={APL4Cover} href='/comingsoon' />
            </Grid> 
        </Grid.Container>
    )
}