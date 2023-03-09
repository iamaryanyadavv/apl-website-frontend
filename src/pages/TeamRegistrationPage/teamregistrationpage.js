import React from "react";
import { Grid, Input, Text } from "@nextui-org/react";
import './teamregistrationpage.css';
import TRegForm from '../../components/registration/tregform.js';

export default function TeamRegistrationPage() {


    return(
        <div className="teamregistrationlanding">
            <div className="tregbackg">
                <TRegForm/>
            </div>
        </div>
    )
}

