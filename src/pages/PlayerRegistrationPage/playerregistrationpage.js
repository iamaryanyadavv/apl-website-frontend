import { Grid, Input, Text } from "@nextui-org/react";
import React from "react";
import './playerregistrationpage.css';
import PRegForm from "../../components/registration/pregform.js";

export default function PlayerRegistrationPage() {
    
    return(
        <div className="playerregistrationlanding">
            <div className="pregbackg">
                <PRegForm/>
            </div>
        </div>
    )
}

