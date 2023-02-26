import React from "react";
import GradientHeading from "../../components/headings/gradientheading";
import TeamContent from "../../components/adminteampage/teamcontent";

const TeamPage = () => {
    return(
        <div>
            <GradientHeading 
                heading='Meet The Team'
                description='People who have made APL 6.0 possible!'
                gradient='45deg, $red600 20%, $yellow600 100%'
            />
            <TeamContent/>
        </div>
    )
}

export default TeamPage;