import React from "react";
import './roadtoapl.css';
import RoadToAPLHeading from "./roadtoaplheading";
import RoadToAPLContent from "./roadtoaplcontent";

export default function RoadToAPL(){
    return(
        <div className="roadtoAPLpage">
            <div className="RTAPLbackg">
                <RoadToAPLHeading/>
                <RoadToAPLContent/>
            </div>
        </div>
    )
}