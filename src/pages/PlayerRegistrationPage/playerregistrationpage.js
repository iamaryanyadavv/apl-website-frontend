import { Grid, Input, Text } from "@nextui-org/react";
import React from "react";
import './playerregistrationpage.css';
import PRegForm from "../../components/registration/pregform.js";

export default function PlayerRegistrationPage() {
    
    return(
        <div className="playerregistrationlanding">
            <div className="pregbackg">
                <Text h1
                css={{
                    textAlign: 'center',
                    fontWeight: '$semibold',
                    paddingBottom: '1.5%'
                }}>
                    APL 6.0 PLAYER REGISTRATION
                </Text>
                <Text
                css={{
                    textAlign: 'center',
                    fontSize:'$md',
                    fontWeight: '$medium',
                    paddingBottom: '2%'
                }}>
                    Fill out the form below and pay the required registration fee to complete your registration!
                </Text>
                <PRegForm/>
            </div>
        </div>
    )
}

