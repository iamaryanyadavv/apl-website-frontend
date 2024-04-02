import React from "react";
import QuoteHeading from "../../components/headings/quoteheading";
import PlayersCard from '../../components/seasons/playerscard.js';
import TeamsCard from '../../components/seasons/teamscard.js';
import TDetailsCard from '../../components/seasons/tdetailscard.js';
import AwardsCard from '../../components/seasons/awardscard.js';
import GalleryCard from '../../components/seasons/gallerycard.js';
import ComingSoon from "../../components/comingsoon/comingsoon";
import Cover from '../../assets/images/APL7/APL7Cover.jpeg';
import Grey from '../../assets/images/Grey.jpeg';
import APL7Players from '../../assets/images/APL7Players.jpeg';
import APL7Teams from '../../assets/images/APL7Teams.jpeg';
import APL7Details from '../../assets/images/APL7Details.jpeg';
import { Grid } from "@nextui-org/react";
import './apl7landing.css';

export default function APL7LandingPage() {
    return (
        <div className="apl7page">
            <div className="apl7backg">
                <QuoteHeading
                    heading='Season 7.0'
                    description='Organised by Irya Khanna and Manya Malhotra, this season will be taking place from the 19th to 21st April, 2024. With increased team budgets of 150 million (yes, 150), we are expecting more action, drama and competition from the get-go.'
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
                            src={APL7Players}
                            href='/seasons/apl7/players'
                        />
                    </Grid>
                    <Grid
                        css={{
                            padding: '36px'
                        }}>
                        <TeamsCard
                            src={APL7Teams}
                            href='/seasons/apl7/teams'
                        />
                    </Grid>
                    <Grid
                        css={{
                            padding: '36px'
                        }}>
                        <TDetailsCard
                            src={APL7Details}
                            href='/seasons/apl7/details'
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