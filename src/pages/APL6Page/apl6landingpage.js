import React from "react";
import './apl6landing.css';
import QuoteHeading from "../../components/headings/quoteheading";
import PlayersCard from '../../components/seasons/playerscard.js';
import TeamsCard from '../../components/seasons/teamscard.js';
import TDetailsCard from '../../components/seasons/tdetailscard.js';
import AwardsCard from '../../components/seasons/awardscard.js';
import GalleryCard from '../../components/seasons/gallerycard.js';
import Grey from '../../assets/images/Grey.jpeg'

import { Grid } from "@nextui-org/react";

export default function APL6LandingPage () {
    return(
        <div className="apl6page">
            <div className="apl6backg">
                <QuoteHeading
                    heading='Season 6.0'
                    description='Organised by Dhrthi Bhat and Uday Srivastava, this season took place on the 8th and 9th of April, 2023. A total of 16 teams and 150 players participated in this version with player prices going as high as 70 million out of a 130 million budget!'
                />
                <Grid.Container gap={8}
                css={{
                    jc: 'center',
                    alignItems: 'center'
                }}>
                    <Grid>
                        <PlayersCard 
                            src={Grey}
                            href='/seasons/apl6/players'
                        />
                    </Grid>
                    <Grid>
                        <TeamsCard 
                            src={Grey}
                            href='/seasons/apl6/teams'
                        />
                    </Grid>
                    <Grid>
                        <TDetailsCard 
                            src={Grey}
                            href='/seasons/apl6/details'
                        />
                    </Grid>
                    {/* UNcomment all this when data available - so post APL 6.0 */}
                    {/* <Grid> 
                        <AwardsCard 
                            src={Grey}
                            href='/seasons/apl6/awards'
                        />
                    </Grid>
                    <Grid>
                        <GalleryCard
                            src={Grey}
                            href='/seasons/apl6/gallery'
                        />
                    </Grid> */}
                </Grid.Container>
            </div>
        </div>

        
    )
}