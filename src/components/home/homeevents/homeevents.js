import React from "react";
import './homeevents.css';
import EventsHead from "./eventshead";
import EventsContent from "./eventscontent";

export default function HomeEvents () {
    return(
        <div>
            <EventsHead/>
            <EventsContent/>
        </div>
    )
}