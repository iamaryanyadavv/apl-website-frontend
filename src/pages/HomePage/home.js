import React from "react";
import HomeLanding from "../../components/home/homelanding/homelanding"
import HomeCarousel from "../../components/home/homecarousel/homecarousel"
import NewsTicker from "../../components/home/marquee/marquee";
import Prizes from "../../components/home/prizes/prizes";
import HomeEvents from "../../components/home/homeevents/homeevents";
import HomeTeam from "../../components/home/hometeam/hometeam";

const Home = () => {
    return(
        <div>
            <NewsTicker/>

            <HomeLanding/>
            <HomeCarousel/>
            <Prizes />
            <HomeEvents/>
            <HomeTeam/>

            <NewsTicker/>
        </div>
    );
};

export default Home;