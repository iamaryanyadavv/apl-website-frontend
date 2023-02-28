import { Grid, Input, Text } from "@nextui-org/react";
import React from "react";
import './playerregistrationpage.css';
import PRegForm from "../../components/registration/pregform.js";

export default function PlayerRegistrationPage() {
    
    return(
        <div className="playerregistrationlanding">
            <div className="pregbackg">
                <Text hideIn={'xs'}
                css={{
                    textAlign: 'center',
                    fontSize: '$5xl',
                    fontWeight: '$semibold',
                    paddingBottom: '1.5%'
                }}>
                    APL 6.0 PLAYER REGISTRATION
                </Text>
                <Text showIn={'xs'}
                css={{
                    textAlign: 'center',
                    fontSize: '$3xl',
                    fontWeight: '$semibold',
                    padding: '10% 5%'
                }}>
                    APL 6.0 PLAYER REGISTRATION
                </Text>
                <Text hideIn={'xs'}
                css={{
                    textAlign: 'center',
                    fontSize:'$2xl',
                    fontWeight: '$medium',
                    padding: '0% 20% 2% 20%'
                }}>
                    Fill out the form below and pay the required registration fee to complete your registration!
                </Text>
                <Text showIn={'xs'}
                css={{
                    textAlign: 'center',
                    fontSize:'$xl',
                    fontWeight: '$medium',
                    paddingBottom: '5%'
                }}>
                    Fill out the form below and pay the required registration fee to complete your registration!
                </Text>
                <PRegForm/>
            </div>
        </div>
    )
}

