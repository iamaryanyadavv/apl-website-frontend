import React from "react";
import "./homelanding.css";
import { Text } from "@nextui-org/react";

function HomeLanding() {
    return(
        <div className="homelandingpage">

            <div className="hlbackg">

                <Text showIn={'sm' | 'md'} hideIn={'xs'}
                css={{
                    fontSize: "$7xl" ,
                    alignItems: 'center',
                    textAlign: 'center',
                    fontWeight: '$semibold',
                    paddingBottom: '20%',
                    paddingTop: '15%'
                }}>
                        Ashoka Premier League
                </Text>
                <Text showIn={'xs'} 
                css={{
                    fontSize: "$5xl" ,
                    textAlign: 'center',
                    fontWeight: '$semibold',
                    padding: '60% 10%'
                }}>
                        Ashoka Premier League
                </Text>

            </div>
        </div>
    )
}

export default HomeLanding;