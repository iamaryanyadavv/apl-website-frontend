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
        <div className="homelanding" dangerouslySetInnerHTML={{
            __html: `<video autoplay loop muted playsinline>
      <source src=${LandingVideo} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
          }}>
        </div>
    )
}

export default HomeLanding;