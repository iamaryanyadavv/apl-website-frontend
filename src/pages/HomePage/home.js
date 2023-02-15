import React from "react";
import HomeLanding from "../../components/home/homelanding.js";
import HomeAwards from "../../components/home/homeawards.js";
import HomeSeasons from "../../components/home/homeseasons.js";
import HomeSlots from "../../components/home/homeslots.js";

const Home = () => {
    return(
        <div>
            <HomeLanding/>
            <HomeAwards/>
            <HomeSeasons/>
            <HomeSlots/>
        </div>
    );
};

export default Home;