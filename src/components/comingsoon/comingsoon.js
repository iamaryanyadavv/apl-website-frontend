import React from "react";
import { Col, Text, Loading } from "@nextui-org/react";
import './comingsoon.css'

export default function ComingSoon(){
    return(
        <div className="cmng-soon-bg">
            <Col
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
            }}>
                <Text hideIn={'md'}
                css={{
                    fontSize: '$8xl',
                    fontWeight: '$semibold'
                }}>
                COMING SOON
                </Text>
                <Text showIn={'md'}
                css={{
                    fontSize: '$5xl',
                    fontWeight: '$semibold'
                }}>
                COMING SOON
                </Text>
                <Loading 
                    loadingCss={{ $$loadingSize: "60px", $$loadingBorder: "3px" }}
                    color='white'
                    type="default" 
                    gradientBackground={'#141414'}
                />
            </Col>
        </div>
        
    )
}