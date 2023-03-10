import React from "react";
import '../../components/minievents/minievents.css';
import GradientHeading from "../../components/headings/gradientheading";
import EventSection1 from "../../components/minievents/eventsection1";
import EventSection2 from "../../components/minievents/eventsection2";
import PS5 from '../../assets/images/PS5Controller2.JPG';
import Nutmeg from '../../assets/images/FootballFreestyle.jpeg';
import Bin from '../../assets/images/Bin.png';
import FBowling from '../../assets/images/FootballBowling.jpeg';

const EventsPage = () => {
    return(
        <div>
            <GradientHeading 
                heading='Mini Events'
                description='Participate in these promo events and win exciting prizes!'
                gradient='45deg, $purple600 -20%, $pink600 100%'
                descpadding='0 0 20px 0'
            />
            <EventSection1
                heading='FIFA Tournament'
                desc1='Participate in this FIFA tournament to show you&aps;re better than your comptetitors virtually.'
                desc2='Stand a chance to win a ₹2000 cash prize!'
                time='12pm to 4pm'
                date='18th March, 2023'
                location='Takshila, AC02'
                team='Duos'
                src={PS5}
                backgroundcolor='rgb(20,20,20)'
                link='yes'
                linkref='/registration/fifa'
            />
            <EventSection2
                heading='1v1 Challenge'
                desc1='Participate in the 1v1 challenge and show them what you can do with an actual ball at your feet!'
                desc2='Every nutmeg gets you ₹50 off your registration fee!'
                time='12pm to 4pm'
                date='19th March, 2023'
                location='Outside Mess'
                team='Solo'
                src={Nutmeg}
                backgroundcolor='rgb(0,0,0)'
            />
            <EventSection1
                heading='Bin Challenge'
                desc1='Feel like you&apos;re more of a Beckham than Messi? This is your chance to prove it!'
                desc2='The one with the most bin shots out of 10 attempts wins a ₹2000 cash prize!'
                time='12pm to 4pm'
                date='21st March, 2023'
                location='Mess Lawns'
                team='Solo'
                src={Bin}
                backgroundcolor='rgb(20,20,20)'
            />
            <EventSection2
                heading='Foot Bowling'
                desc1='Participate in the football bowling and see how high you can score!'
                desc2='One with most points after 3 turns gets ₹50 off their registration fee!'
                time='12pm to 4pm'
                date='22nd March, 2023'
                location='Outside Mess'
                team='Solo'
                src={FBowling}
                backgroundcolor='rgb(0,0,0)'
            />
        </div>
    )
}

export default EventsPage;