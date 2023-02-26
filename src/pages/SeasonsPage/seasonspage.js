import React from "react";
import "./seasonspage.css";
import Seasons from "../../components/seasons/seasons";

function SeasonsPage() {
    return(
        <div className="seasonspage">
            <div className="seasonsbackg">
                <Seasons/>
            </div>
        </div>
    )
}

export default SeasonsPage;