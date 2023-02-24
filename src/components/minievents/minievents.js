import React from "react";
import './minievents.css';
import EventHeading from "./eventheading";
import EventFifa from "./eventfifa";
import EventNutmeg from "./eventnutmeg.js";
import EventBin from "./eventbin.js";

export default function MiniEvents () {
    return(
        <div>
            <EventHeading/>
            <EventFifa/>
            <EventNutmeg/>
            <EventBin/>
        </div>
    )
}