import React from "react";
import './apl6landing.css';
import QuoteHeading from "../../components/headings/quoteheading";
import PlayersCard from '../../components/seasons/playerscard.js';
import TeamsCard from '../../components/seasons/teamscard.js';
import TDetailsCard from '../../components/seasons/tdetailscard.js';
import AwardsCard from '../../components/seasons/awardscard.js';
import GalleryCard from '../../components/seasons/gallerycard.js';
import Grey from '../../assets/images/Grey.jpeg';
import PlayersCover from '../../assets/images/APL6PlayersCover.jpg'
import TeamsCover from '../../assets/images/Futsal.jpg'
import DetailsCover from '../../assets/images/FloodlightRain.jpg'

import { Grid } from "@nextui-org/react";

export default function APL6LandingPage () {
    return(
        <div className="apl6page">
            <div className="apl6backg">
                <QuoteHeading
                    heading='Season 6.0'
                    description='Organised by Dhrthi Bhat and Uday Srivastava, this season will be taking place from the 21st to 23rd April, 2023. With increased team budgets of 150 million (yes, 150), we are expecting more action, drama and competition from the get-go.'
                />
                <Grid.Container gap={0}
                css={{
                    jc: 'center',
                    alignItems: 'center'
                }}>
                    <Grid
                    css={{
                        padding: '36px'
                    }}>
                        <PlayersCard 
                            src={PlayersCover}
                            href='/seasons/apl6/players'
                        />
                    </Grid>
                    <Grid 
                    css={{
                        padding: '36px'
                    }}>
                        <TeamsCard 
                            src={TeamsCover}
                            href='/seasons/apl6/teams'
                        />
                    </Grid>
                    <Grid 
                    css={{
                        padding: '36px'
                    }}>
                        <TDetailsCard 
                            src={DetailsCover}
                            href='/seasons/apl6/details'
                        />
                    </Grid>
                    {/* UNcomment all this when data available - so post APL 6.0 */}
                    {/* <Grid 
                    css={{
                        padding: '36px'
                    }}> 
                        <AwardsCard 
                            src={Grey}
                            href='/seasons/apl6/awards'
                        />
                    </Grid>
                    <Grid 
                    css={{
                        padding: '36px'
                    }}>
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