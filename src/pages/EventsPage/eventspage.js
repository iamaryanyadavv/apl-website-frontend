import React from "react";
import '../../components/minievents/minievents.css';
import GradientHeading from "../../components/headings/gradientheading";
import EventSection1 from "../../components/minievents/eventsection1";
import EventSection2 from "../../components/minievents/eventsection2";
import PS5 from '../../assets/images/PS5Controller2.JPG';
import Foosball from '../../assets/images/Foosball1.jpg'
import Inclusivity from '../../assets/images/Inclusivity.jpg'
import AuctionPredictions from '../../assets/images/AuctionPredictions.jpg'


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
                heading='Foosball'
                desc1='Foosball? Foosball.'
                desc2='Get your friends for a fun evening filled with foosball, music and more!'
                time='1:30 PM'
                date='16th March, 2023'
                location='Outside Mess'
                team='Solo or Duos'
                src={Foosball}
                backgroundcolor='rgb(20,20,20)'
            />
            <EventSection2
                heading='FIFA 2v2s'
                desc1='Registration 150rs/player. 32 teams. Winner gets 4k & runner-up 2.5k.'
                desc2='You think you got what it takes?'
                time='TBA'
                date='22nd & 23rd March, 2023'
                location='SH3 Commons'
                team='2v2'
                src={PS5}
                backgroundcolor='rgb(0,0,0)'
                link='yes'
                linkref='/registration/fifa'
            />
            <EventSection1
                heading='Predicitions'
                desc1='Most expensive player? Team w highest bid? Come and give your auction predictions.'
                desc2='Correct predictions get &#x20B9;50 after the auction!'
                time='1:30 - 3:00 PM'
                date='2nd April, 2023'
                location='Outside Mess'
                team='Solo'
                src={AuctionPredictions}
                backgroundcolor='rgb(20,20,20)'
            />
        </div>
    )
}

export default EventsPage;