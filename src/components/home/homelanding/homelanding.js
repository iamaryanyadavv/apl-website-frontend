import React from "react";
import "./homelanding.css";
import { Text } from "@nextui-org/react";
import LandingVideo from '../../../assets/images/LandingVideo.mp4';
import LandingImage from '../../../assets/images/LandingImage.png';

function HomeLanding() {
    return(
        // <div className="homelanding">
        //     <video src={LandingImage} autoPlay loop muted />
        //     <div className="text">
        //         <p>Ashoka Premier League</p>
        //     </div>
        // </div>
        <div className="homelandingpage">
            <div className="hlbackg">
                <Text hideIn={'xs'}
                css={{
                    fontSize: '$7xl',
                    fontWeight: '$semibold',
                    textAlign: 'center',
                    padding: '250px 5px 400px 05px'

                }}>
                    Ashoka Premier League
                </Text>
                <Text showIn={'xs'}
                css={{
                    fontSize: '$3xl',
                    fontWeight: '$semibold',
                    textAlign: 'center',
                    padding: '350px 5px 400px 05px'
                }}>
                    Ashoka Premier League
                </Text>

            </div>
        </div>
    )
}

export default HomeLanding;