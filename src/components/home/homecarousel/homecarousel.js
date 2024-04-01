import React from "react";
import './homecarousel.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../homelanding/homelanding.css";
import "../homeawards/homeawards.css";
import "../homeseasons/homeseasons.css";
import "../homeslots/homeslots.css";
import { Button, Text, Grid } from "@nextui-org/react";

export default function HomeCarousel () {

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting){
                entry.target.classList.add('show')
                entry.target.classList.remove('hidden')
            } else {
                entry.target.classList.remove('show')
                entry.target.classList.add('hidden')
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=> observer.observe(el))

    return(
        <Carousel
        showDots={true}
        infiniteLoop={true}
        autoPlay={false}
        slidesToSlide={3}
        stopOnHover={true}
        swipeable={true}
        useKeyboardArrows={true}
        showThumbs={false}
        >


            <div>

                {/* Carousel Heading*/}
                <div>
                            <Text hideIn={'xs'}
                            css={{
                                fontSize: "$7xl" ,
                                textAlign: 'center',
                                fontWeight: '$semibold',
                                paddingBottom: '2.5%',
                                paddingTop: '5%',
                                marginBottom: '2.5%',
                                color: '$red700',
                                fontFamily:"Maven Pro ExtraBold"
                            }}>
                                    Seasons
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: "$5xl" ,
                                textAlign: 'center',
                                fontWeight: '$semibold',
                                paddingBottom: '2.5%',
                                paddingTop: '5%',
                                marginBottom: '2.5%',
                                color: '$red700',
                                fontFamily:"Maven Pro ExtraBold"
                            }}>
                                    Seasons
                            </Text>
                </div>

                {/* Carousel Content*/}
                <div>
                    <Grid.Container
                    css={{
                        jc: 'center',
                        alignItems: 'center'
                    }}>
                        <div className="homeawardspage">
                            
                            <div className="habackg">


                                {/* <Grid.Container
                                css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid>
                                        <Text hideIn={'xs'} className="hssquote"
                                        css={{
                                            jc: 'center',
                                            alignItems: 'center',
                                            paddingBottom: '5%',
                                            fontFamily: 'DS',
                                            fontWeight: 'normal',
                                            fontSize: '$4xl'
                                        }}>
                                            "Attack wins you games but defence wins you championships” - Sir Alex Ferguson
                                        </Text>
                                        <Text showIn={'xs'} className="hssquote"
                                        css={{
                                            jc: 'center',
                                            alignItems: 'center',
                                            paddingBottom: '5%',
                                            fontFamily: 'DS',
                                            fontWeight: 'normal',
                                            fontSize: '$2xl'
                                        }}>
                                            "Attack wins you games but defence wins you championships” - Sir Alex Ferguson
                                        </Text>
                                    </Grid>
                                </Grid.Container> */}

                                <Grid.Container
                                css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid>
                                        <Text hideIn={'xs'}
                                        css={{
                                            jc: 'center',
                                            fontWeight: '$medium',
                                            paddingBottom: '1%',
                                            textAlign: 'center',
                                            fontSize: '$4xl',
                                            width: '70vw',
                                            paddingTop: '15%',
                                            fontFamily:"Maven Pro"
                                        }}>
                                            Check out features from each and every season* below!
                                        </Text>
                                        <Text showIn={'xs'}
                                        css={{
                                            jc: 'center',
                                            fontWeight: '$medium',
                                            paddingBottom: '1%',
                                            textAlign: 'center',
                                            fontSize: '$2xl',
                                            width: '80vw',
                                            paddingTop: '30%',
                                            fontFamily:"Maven Pro"
                                        }}>
                                            Check out features from each and every season* below!
                                        </Text>
                                    </Grid>
                                </Grid.Container>

                                <Grid.Container gap={1}
                                css={{
                                    jc: 'center',
                                    paddingBottom: '25%'
                                }}>
                                    <Grid>
                                        <Button  shadow rounded bordered auto ghost>
                                            <a className="h-btn" href="/seasons">Seasons</a>
                                        </Button>
                                    </Grid>
                                </Grid.Container>

                                <Grid.Container
                                css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid>
                                        <Text hideIn={'xs'}
                                        css={{
                                            jc: 'center',
                                            fontWeight: '$medium',
                                            paddingBottom: '1%',
                                            textAlign: 'center',
                                            fontSize: "$sm"
                                        }}>
                                            *features include season schedule, Teams, Player Lists, Awards and more!
                                        </Text>
                                        <Text showIn={'xs'}
                                        css={{
                                            jc: 'center',
                                            fontWeight: '$medium',
                                            paddingTop: '20%',
                                            paddingBottom: '5%',
                                            textAlign: 'center',
                                            fontSize: "$xs"
                                        }}>
                                            *features include season schedule, Teams, Player Lists, Awards and more!
                                        </Text>
                                    </Grid>
                                </Grid.Container>

                                
                                {/* <Text hideIn={'xs'} className="haquote"
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    paddingBottom: '5%',
                                    fontFamily: 'DS',
                                    fontWeight: 'normal',
                                    fontSize: '$4xl'
                                }}>
                                    "Attack wins you games, defence wins you championships” - Sir Alex Ferguson
                                </Text>
                                <Text showIn={'xs'} className="haquote"
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    paddingTop: '5%',
                                    paddingBottom: '5%',
                                    fontFamily: 'DS',
                                    fontWeight: 'normal',
                                    fontSize: '$2xl'
                                }}>
                                    Attack wins you games, defence wins you championships” - Sir Alex Ferguson
                                </Text>
    
                                <Text hideIn={'xs'}
                                css={{
                                    jc: 'center',
                                    fontWeight: '$medium',
                                    paddingBottom: '1%',
                                    textAlign: 'center',
                                    paddingRight: '0%',
                                    paddingLeft: '0%',
                                    fontSize: '$3xl'
                                }}>
                                    Check out the features* of each and every season below!
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    jc: 'center',
                                    fontWeight: '$medium',
                                    paddingBottom: '5%',
                                    textAlign: 'center',
                                    paddingRight: '0%',
                                    paddingLeft: '0%',
                                    fontSize: '$2xl'
                                }}>
                                    Check out the features* of each and every season below!
                                </Text>
    
                                <Grid.Container gap={1}
                                css={{
                                    jc: 'center',
                                    paddingBottom: '15%'
                                }}>
                                    <Grid>
                                        <Button  shadow rounded bordered auto ghost>
                                            <a className="h-btn" href="/seasons">Seasons</a>
                                        </Button>
                                    </Grid>
                                </Grid.Container>
    
                                <Text hideIn={'xs'}
                                css={{
                                    jc: 'center',
                                    fontWeight: '$medium',
                                    paddingBottom: '1%',
                                    textAlign: 'center',
                                    fontSize: "$sm"
                                }}>
                                    *features include season schedule with bracket, Teams, Player Lists, Awards and more!
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    jc: 'center',
                                    fontWeight: '$medium',
                                    paddingTop: '20%',
                                    paddingBottom: '1%',
                                    textAlign: 'center',
                                    fontSize: "$xs"
                                }}>
                                    *features include season schedule with bracket, Teams, Player Lists, Awards and more!
                                </Text> */}


                            </div>
                        </div>
                    </Grid.Container>
                </div>
                
            </div>


            <div>

                {/* Carousel Heading*/}
                <div>
                    <Text hideIn={'xs'}
                    css={{
                        fontSize: "$7xl" ,
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        paddingBottom: '5%',
                        paddingTop: '5%',
                        color: '#5fbdd3',
                        fontFamily:"Maven Pro ExtraBold"
                    }}>
                            Slot Booking
                    </Text>
                    <Text showIn={'xs'} 
                    css={{
                        fontSize: "$5xl" ,
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        paddingBottom: '5%',
                        paddingTop: '5%',
                        color: '#5fbdd3',
                        fontFamily:"Maven Pro ExtraBold"
                    }}>
                            Slot Booking
                    </Text>
                </div>

                {/* Carousel Content*/}
                <div>
                    <Grid.Container
                    css={{
                        jc: 'center',
                        alignItems: 'center',
                    }}>
                        <div className="homeslotspage">
                            
                            <div className="hssbackg">
                                

                                {/* <Grid.Container
                                css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid>
                                        <Text hideIn={'xs'} className="hssquote"
                                        css={{
                                            jc: 'center',
                                            alignItems: 'center',
                                            paddingBottom: '5%',
                                            fontFamily: 'DS',
                                            fontWeight: 'normal',
                                            fontSize: '$4xl'
                                        }}>
                                            "There's something greater than the result in football, more lasting: a legacy” - Xavi
                                        </Text>
                                        <Text showIn={'xs'} className="hssquote"
                                        css={{
                                            jc: 'center',
                                            alignItems: 'center',
                                            paddingBottom: '5%',
                                            fontFamily: 'DS',
                                            fontWeight: 'normal',
                                            fontSize: '$2xl'
                                        }}>
                                            "There's something greater than the result in football, more lasting: a legacy” - Xavi
                                        </Text>
                                    </Grid>
                                </Grid.Container> */}

                                <Grid.Container
                                css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid>
                                        <Text hideIn={'xs'}
                                        css={{
                                            jc: 'center',
                                            fontWeight: '$medium',
                                            paddingBottom: '1%',
                                            textAlign: 'center',
                                            fontSize: '$4xl',
                                            width: '70vw',
                                            paddingTop: '15%',
                                            fontFamily:"Maven Pro"

                                        }}>
                                            Navigate to the training slot booking* features below!
                                        </Text>
                                        <Text showIn={'xs'}
                                        css={{
                                            jc: 'center',
                                            fontWeight: '$medium',
                                            paddingBottom: '1%',
                                            textAlign: 'center',
                                            fontSize: '$2xl',
                                            width: '80vw',
                                            paddingTop: '30%',
                                            fontFamily:"Maven Pro"
                                        }}>
                                            Navigate to the training slot booking* features below!
                                        </Text>
                                    </Grid>
                                </Grid.Container>

                                <Grid.Container gap={1}
                                css={{
                                    jc: 'center',
                                    paddingBottom: '25%'
                                }}>
                                    <Grid>
                                        <Button  shadow rounded bordered auto ghost>
                                            <a className="h-btn" href="/slots">Slot Booking</a>
                                        </Button>
                                    </Grid>
                                </Grid.Container>

                                <Grid.Container
                                css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid>
                                        <Text hideIn={'xs'}
                                        css={{
                                            jc: 'center',
                                            fontWeight: '$medium',
                                            paddingBottom: '1%',
                                            textAlign: 'center',
                                            fontSize: "$sm"
                                        }}>
                                            *owners/players will have to show an official booking email from Calendly for their slot
                                        </Text>
                                        <Text showIn={'xs'}
                                        css={{
                                            jc: 'center',
                                            fontWeight: '$medium',
                                            paddingTop: '20%',
                                            paddingBottom: '5%',
                                            textAlign: 'center',
                                            fontSize: "$xs"
                                        }}>
                                            *owners/players will have to show an official booking email from Calendly for their slot
                                        </Text>
                                    </Grid>
                                </Grid.Container>




                            </div>
                        </div>
                    </Grid.Container>
                </div>

            </div>
            

            <div>

                {/* Carousel Heading*/}
                <div>
                    <Text hideIn={'xs'} 
                    css={{
                        fontSize: "$7xl" ,
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        paddingBottom: '5%',
                        paddingTop: '5%',
                        color: "rgb(93 212 131)",
                        fontFamily:"Maven Pro ExtraBold"
                    }}>
                            Awards
                    </Text>
                    <Text showIn={'xs'} 
                    css={{
                        fontSize: "$5xl" ,
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        paddingBottom: '5%',
                        paddingTop: '5%',
                        color: "rgb(93 212 131)",
                        fontFamily:"Maven Pro ExtraBold"
                    }}>
                            Awards
                    </Text>
                </div>

                {/* Carousel Content*/}
                <div>
                    <Grid.Container
                    css={{
                        jc: 'center',
                        alignItems: 'center'
                    }}>
                        <div className="homeseasonspage">
                            
                            <div className="hsbackg">
                                
                                {/* <Text hideIn={'xs'} className="hsquote"
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    paddingBottom: '5%',
                                    fontFamily: 'DS',
                                    fontWeight: 'normal',
                                    fontSize: '$4xl'
                                }}>
                                    “Worst blindness a footballer can have is seeing only the ball” - Nelson Rodriguez
                                </Text>
                                <Text showIn={'xs'} className="hsquote"
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    paddingBottom: '5%',
                                    fontFamily: 'DS',
                                    fontWeight: 'normal',
                                    fontSize: '$2xl'
                                }}>
                                    “Worst blindness a footballer can have is seeing only the ball” - Nelson Rodriguez
                                </Text> */}
    
                                <Grid.Container
                                css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid>
                                        <Text hideIn={'xs'}
                                        css={{
                                            jc: 'center',
                                            fontWeight: '$medium',
                                            paddingBottom: '1%',
                                            textAlign: 'center',
                                            fontSize: '$4xl',
                                            width: '70vw',
                                            paddingTop: '15%',
                                            fontFamily:"Maven Pro"
                                        }}>
                                            Check out the award* winners from last season!
                                        </Text>
                                        <Text showIn={'xs'}
                                        css={{
                                            jc: 'center',
                                            fontWeight: '$medium',
                                            paddingBottom: '1%',
                                            textAlign: 'center',
                                            fontSize: '$2xl',
                                            width: '80vw',
                                            paddingTop: '30%',
                                            fontFamily:"Maven Pro"
                                        }}>
                                            Check out the award* winners from last season!
                                        </Text>
                                    </Grid>
                                </Grid.Container>
    
                                <Grid.Container gap={1}
                                css={{
                                    jc: 'center',
                                    paddingBottom: '25%'
                                }}>
                                    <Grid>
                                        <Button  shadow rounded bordered auto ghost>
                                            <a className="h-btn" href="/seasons/apl5/awards">Awards</a>
                                        </Button>
                                    </Grid>
                                </Grid.Container>
    
                                <Text hideIn={'xs'}
                                css={{
                                    jc: 'center',
                                    fontWeight: '$medium',
                                    paddingBottom: '1%',
                                    textAlign: 'center',
                                    fontSize: "$sm"
                                }}>
                                    *awards include Male MVP, Female MVP, Winners, Runners-up and Third Place Winners
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    jc: 'center',
                                    fontWeight: '$medium',
                                    paddingTop: '20%',
                                    paddingBottom: '5%',
                                    textAlign: 'center',
                                    fontSize: "$xs"
                                }}>
                                    *awards include Male MVP, Female MVP, Winners, Runners-up and Third Place Winners
                                </Text>

    
    
                            </div>
                        </div>
                    </Grid.Container>
                </div>
            </div>

            
        </Carousel>
    )
}