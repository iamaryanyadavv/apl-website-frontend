import React from "react";
import SeasonsContent from "./seasonscontent";
import QuoteHeading from "../headings/quoteheading";

export default function Seasons(){
    return(
        <>
            <QuoteHeading 
                heading='SEASONS'
                quote='"Attack wins you games but defence wins you championships" - Sir Alex Ferguson'
                description='Check out features across some of the APL seasons. From players and teams to awards and gallery, we&apos;ve got it all'
            />
            <SeasonsContent/>
        </>
    )
}