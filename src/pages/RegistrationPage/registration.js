import React from "react";
import "./registration.css";
import RegCards from '../../components/registration/regcards.js';
import RegRules from '../../components/registration/regrules.js';

function Registration() {
    return(
        <div className="registrationlanding">
            <div className="regbackg">
                <RegCards/>
                {/* <RegRules/> */}
            </div>
        </div>
    )
}

export default Registration;