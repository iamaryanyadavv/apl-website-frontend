import React from "react";
import "./homelanding.css";
import { Text } from "@nextui-org/react";
import LandingVideo from '../../../assets/images/LandingVideo2.mp4';

function HomeLanding() {
    return(
        <div className="homelanding">
            <video src={LandingVideo} autoPlay loop muted />
            <div className="text">
                <p>Ashoka Premier League</p>
            </div>
        </div>
    )
}

export default HomeLanding;