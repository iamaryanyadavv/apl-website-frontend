import React from "react";
import './roadtoapl.css';
import RoadToAPLContent from "./roadtoaplcontent";
import QuoteHeading from "../headings/quoteheading";

export default function RoadToAPL(){
    return(
        <div className="roadtoAPLpage">
            <div className="RTAPLbackg">
                <QuoteHeading
                    heading='ROAD TO APL 7.0'
                    description='Take a look at all events leading upto the coveted APL tournament. You do not want to miss out on any of these, trust us!'
                />
                <RoadToAPLContent/>
            </div>
        </div>
    )
}