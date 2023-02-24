import React from "react";
import './slotbooking.css';
import Slots from "./slots";

export default function SlotBooking(){
    return(
        <div className="slotbookingpage">
            <div className="sbbackg">
                <Slots/>
            </div>
        </div>
    )
}