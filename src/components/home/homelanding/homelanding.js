import React from "react";
import "./homelanding.css";
import { Text } from "@nextui-org/react";
import LandingVideo from '../../../assets/images/LandingVideo.mov';

function HomeLanding() {
    return(
        // <div className="homelandingpage">

        //     <div className="hlbackg">
        //         <video src={LandingVideo} autoPlay muted loop />
        //         <Text showIn={'sm' | 'md'} hideIn={'xs'}
        //         css={{
        //             fontSize: "$7xl" ,
        //             alignItems: 'center',
        //             textAlign: 'center',
        //             fontWeight: '$semibold',
        //             paddingBottom: '20%',
        //             paddingTop: '15%'
        //         }}>
        //                 Ashoka Premier League
        //         </Text>
        //         <Text showIn={'xs'} 
        //         css={{
        //             fontSize: "$5xl" ,
        //             textAlign: 'center',
        //             fontWeight: '$semibold',
        //             padding: '60% 10%'
        //         }}>
        //                 Ashoka Premier League
        //         </Text>

        //     </div>
        // </div>
        <div className="homelanding">
            <video src={LandingVideo} autoPlay loop muted />
            <div className="text">
                <p>Ashoka Premier League</p>
            </div>
        </div>
    )
}

export default HomeLanding;