import React from "react";
import '../../components/minievents/minievents.css';
import EventHeading from "../../components/minievents/eventheading";
import EventFifa from "../../components/minievents/eventfifa";
import EventNutmeg from "../../components/minievents/eventnutmeg";
import EventBin from "../../components/minievents/eventbin";
import EventBowling from "../../components/minievents/eventbowling";

const EventsPage = () => {
    return(
        <div>
            <EventHeading/>
            <EventFifa/>
            <EventNutmeg/>
            <EventBin/>
            <EventBowling/>
        </div>
    )
}

export default EventsPage;