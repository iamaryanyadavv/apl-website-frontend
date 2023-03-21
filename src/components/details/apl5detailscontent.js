import React from "react";
import { useState, useEffect } from "react";
import { Table, Grid, Loading, Avatar, Text, Col } from "@nextui-org/react";
import Pool1 from "./pool1";
import Pool2 from "./pool2";
import Pool3 from "./pool3";
import Pool4 from "./pool4";

export default function APL5DetailsContent() {
    const [Fetching, setFetching] = useState();
    async function getStandings(){
        await fetch('https://ashoka-premier-league-api.onrender.com/seasons/apl5/standings')
        .then(response=>response.json())
        .then(data=>{
            setFetching(false)
        })
    }

                    
    useEffect(()=>{
        setFetching(true)
        getStandings();
    }, [])

    return(
        <div>
            {Fetching===true && 
            <Grid.Container gap={4}
            css={{
                jc: 'center',
                alignItems: 'center',
                height: '60vh',
            }}>
                <Loading
                size="xl"
                color={'white'}
                />
            </Grid.Container>
            }
            {!Fetching &&
            <div>
                {/* Bracket */}

                {/* Standings */}
                <Col
                css={{
                    padding: '0px 15px'
                }}>
                    <Pool1/>
                    <Pool2/>
                    <Pool3/>
                    <Pool4/>
                </Col>
                {/* Group Stage Games */}

                {/* Rules */}

            </div>}

        </div>
    )
}