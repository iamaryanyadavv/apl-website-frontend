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
                desc1='TBA'
                desc2='TBA'
                time='TBA'
                date='16th March, 2023'
                location='TBA'
                team='Solo or Duos'
                src={Foosball}
                backgroundcolor='rgb(20,20,20)'
            />
            <EventSection2
                heading='FIFA 2v2s'
                desc1='Participate in this FIFA tournament to show you are better than your comptetitors virtually.'
                desc2='Stand a chance to win a ₹2000 cash prize!'
                time='TBA'
                date='22nd & 23rd March, 2023'
                location='Mini Amphitheatre'
                team='Duos'
                src={PS5}
                backgroundcolor='rgb(0,0,0)'
                link='yes'
                linkref='/registration/fifa'
            />
            <EventSection1
                heading='Inclusivity Event'
                desc1='TBA'
                desc2='TBA'
                time='TBA'
                date='30th March, 2023'
                location='Mess Lawns'
                team='Solo'
                src={Inclusivity}
                backgroundcolor='rgb(20,20,20)'
            />
            <EventSection2
                heading='Predicitions'
                desc1='Most expensive player? Team w highest bid? Come and give your auction predictions.'
                desc2='Correct predictions get &#x20B9;50 after the auction!'
                time='TBA'
                date='5th April, 2023'
                location='Outside Mess'
                team='Solo'
                src={AuctionPredictions}
                backgroundcolor='rgb(0,0,0)'
            />
        </div>
    )
}

export default EventsPage;