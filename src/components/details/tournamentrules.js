import React from "react";
import { useState, useEffect } from "react";
import { Grid, Text, Col, Table, Image } from "@nextui-org/react";
import APL from '../../assets/images/AshokaFieldSunset.jpg'

export default function TournamentRules() {
    return(
        <Grid.Container 
        css={{
            jc: 'center',
            textAlign: 'center'
        }}>
            <Grid>
                <Grid.Container 
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    margin: '30px 0px 30px 0px',
                    backgroundColor: 'rgb(20,20,20)',
                    borderRadius: '20px'
                }}>
                    <Col 
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        jc: 'center',
                    }}>
                        <Image
                        css={{
                            '@xsMin':{
                                width: '200px',
                                height: '200px',
                                borderRadius: '40px',
                                marginTop: '40px'
                            },
                            '@xsMax':{
                                width: '100px',
                                height: '100px',
                                borderRadius: '20px',
                                marginTop: '40px'
                            },
                            objectFit: 'cover'
                        }} src={APL} />

                        <Text hideIn={'xs'}
                        css={{
                            fontSize: '$4xl',
                            fontWeight: '$semibold',
                            paddingTop: '20px',
                            paddingBottom: '20px'
                        }}>
                            Tournament
                        </Text>
                        
                        <Text showIn={'xs'}
                        css={{
                            fontSize: '$2xl',
                            fontWeight: '$semibold',
                            paddingTop: '20px',
                            paddingBottom: '20px'
                        }}>
                            Tournament
                        </Text>

                        <Col
                        css={{
                            maxWidth: '1000px',
                            display: 'flex',
                            flexDirection: 'column',
                            jc: 'center',
                            textAlign:'left'
                        }}>
                            
                            {/* Rules go here */}
                        </Col>
                    </Col>
                </Grid.Container>
            </Grid>
        </Grid.Container>
    )
}