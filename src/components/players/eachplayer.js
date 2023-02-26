import { Button, Text } from "@nextui-org/react";
import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function EachPlayerCard(){
    const [PlayerData, setPlayerData] = useState(['1,2,3,4,5'])

    const getData = () => {
        fetch('http://localhost:3000/')
        .then(response => response.json())
        .then(console.log())
    }

    useEffect( () => {
        getData();
    }, [])

    return(
        <div>
            <Button onPress={()=>{getData()}}>
                Test
            </Button>
        </div>
    )
}