import { Grid, Input, Text } from "@nextui-org/react";
import React from "react";
import './fifaregistrationpage.css';
import FifaRegForm from "../../components/registration/fifaregistration";

export default function FifaRegistrationPage() {
    
    return(
        <div className="fifaregistrationlanding">
            <div className="fifabackg">
                <FifaRegForm/>
            </div>
        </div>
    )
}