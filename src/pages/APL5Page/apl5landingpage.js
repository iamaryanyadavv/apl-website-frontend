import React from "react";
import './apl5landing.css';
import QuoteHeading from "../../components/headings/quoteheading";
import PlayersCard from '../../components/seasons/playerscard.js';
import TeamsCard from '../../components/seasons/teamscard.js';
import TDetailsCard from '../../components/seasons/tdetailscard.js';
import AwardsCard from '../../components/seasons/awardscard.js';
import GalleryCard from '../../components/seasons/gallerycard.js';
import APL5PlayersCover from '../../assets/images/APL5/VeduBackgroundAPL2.jpg';
import APL5TeamsCover from '../../assets/images/APL5/APL5A2ZTeam.jpg';
import APL5TDetailsCover from '../../assets/images/APL5/WaliBackgroundAPL 3.jpg';
import APL5AwardsCover from '../../assets/images/APL5/GeneralBackgroundAPL1 2.jpg';
import APL5GalleryCover from '../../assets/images/APL5/VeduBackgroundAPL1.jpg';

import { Grid, Spacer } from "@nextui-org/react";

export default function APL5LandingPage () {
    return(
        <div className="apl5page">
            <div className="apl5backg">
                <QuoteHeading
                    heading='Season 5.0'
                    description='Organised by Tanuj Sood and Apollinaire Abi, this season took place on the 14th and 15th of April 2022. A total of 12 teams and 150 players participated in this version with player prices going as high as 70 million out of a 130 million budget!'
                />
                <Grid.Container gap={8}
                css={{
                    jc: 'center',
                    alignItems: 'center'
                }}>
                    <Grid>
                        <PlayersCard 
                            src={APL5PlayersCover}
                            href='/seasons/apl5/players'
                        />
                    </Grid>
                    <Grid>
                        <TeamsCard 
                            src={APL5TeamsCover}
                            href='/seasons/apl5/teams'
                        />
                    </Grid>
                    <Grid>
                        <TDetailsCard 
                            src={APL5TDetailsCover}
                            href='/seasons/apl5/details'
                        />
                    </Grid>
                    <Grid>
                        <AwardsCard 
                            src={APL5AwardsCover}
                            href='/seasons/apl5/awards'
                        />
                    </Grid>
                    <Grid>
                        <GalleryCard
                            src={APL5GalleryCover}
                            href='/seasons/apl5/gallery'
                        />
                    </Grid>
                </Grid.Container>
            </div>
        </div>

        
    )
}