import React from "react";
import "./homelanding.css";
import { Text } from "@nextui-org/react";

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
                    padding: '25vh 5px 33vh 5px'

                }}>
                    Ashoka Premier League
                </Text>
                <Text showIn={'xs'}
                css={{
                    fontSize: '$3xl',
                    fontWeight: '$semibold',
                    textAlign: 'center',
                    padding: '35vh 5px 43vh 5px'
                }}>
                    Ashoka Premier League
                </Text>

            </div>
        </div>
    )
}

export default HomeLanding;