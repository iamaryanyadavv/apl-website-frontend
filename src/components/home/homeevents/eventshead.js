import React from "react";
import './homeevents.css';
import { Grid, Text } from "@nextui-org/react";

export default function EventsHead () {

    const observer = new IntersectionObserver((entries)=>{
        console.log(entries)
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
        <Grid.Container className="hidden"
        css={{
            jc: 'center',
            textAlign: 'center',
            paddingTop: '2.5%'
        }}>
            <Grid>
                <Grid.Container
                css={{
                    jc: 'center',
                    textAlign: 'center'
                }}>
                    <Grid>
                        <Text hideIn={'xs'}
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                            fontSize: '$7xl',
                            fontWeight: '$semibold',
                            textGradient: "45deg, $purple600 -20%, $pink600 100%",
                            padding:'2.5% 10px 0px 10px'
                        }}>
                            Promo Events
                        </Text>
                        <Text showIn={'xs'}
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                            fontSize: '$5xl',
                            fontWeight: '$semibold',
                            textGradient: "45deg, $purple600 -20%, $pink600 100%",
                            padding: '5% 10px 0px 10px'
                        }}>
                            Promo Events
                        </Text>
                    </Grid>
                    
                </Grid.Container>
                <Grid.Container
                css={{
                    jc: 'center',
                    textAlign: 'center'
                }}>
                    <Grid>
                        <Text
                        css={{
                            fontSize: '$lg',
                            color: '$gray800',
                            paddingBottom: '50px'
                        }}>
                            Participate in these promo events and win exciting prizes!
                        </Text>
                    </Grid>
                </Grid.Container>
            </Grid>
        </Grid.Container>
    )
}