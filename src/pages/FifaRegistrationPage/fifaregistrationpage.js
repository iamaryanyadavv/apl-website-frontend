import { Grid, Input, Text } from "@nextui-org/react";
import React from "react";
import './fifaregistrationpage.css';
import FifaRegForm from "../../components/registration/fifaregistration";

export default function FifaRegistrationPage() {
    
    return(
        <div className="fifaregistrationlanding">
            <div className="fifabackg">
                <Text hideIn={'xs'}
                css={{
                    textAlign: 'center',
                    fontSize: '$5xl',
                    fontWeight: '$semibold',
                    paddingBottom: '1.5%'
                }}>
                    FIFA TOURNAMENT REGISTRATION
                </Text>
                <Text showIn={'xs'}
                css={{
                    textAlign: 'center',
                    fontSize: '$3xl',
                    fontWeight: '$semibold',
                    padding: '10% 5%'
                }}>
                    FIFA TOURNAMENT REGISTRATION
                </Text>
                <Text hideIn={'xs'}
                css={{
                    textAlign: 'center',
                    fontSize:'$2xl',
                    fontWeight: '$medium',
                    padding: '0% 20% 2% 20%'
                }}>
                    Fill out the form* below and pay the required registration fee to complete your registration!
                </Text>
                <Text showIn={'xs'}
                css={{
                    textAlign: 'center',
                    fontSize:'$xl',
                    fontWeight: '$medium',
                    paddingBottom: '5%'
                }}>
                    Fill out the form* below and pay the required registration fee to complete your registration!
                </Text>
                <FifaRegForm/>
            </div>
        </div>
    )
}