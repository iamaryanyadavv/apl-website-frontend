import React from "react";
import { Container, Row, Text, Link, Col } from "@nextui-org/react";

function Footer(){
    return(
        <Container fluid >
            <Col>
                <Row      
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    borderStyle: 'solid',
                    borderColor: '$gray600',
                    borderWidth: '0px 0px 0px 0px'
                }}>
                    <Text hideIn={'xs'}
                    css={{
                        padding: '1% 0.35%',
                        fontSize: '$normal'
                    }}>
                        Made with 🤍 by
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        padding: '1%',
                    }}>
                        By
                    </Text>
                    <Link
                    css={{
                        color: '#3694ff'
                    }} target='_blank' href="https://iamaryanyadavv.github.io/personal-website/"
                    >
                        Aryan Yadav
                    </Link>
                    <Text hideIn={'xs'}
                    css={{
                        padding: '1% 0.35%'
                    }}>
                        and 
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        padding: '1%'
                    }}>
                        and 
                    </Text>
                    <Link 
                    css={{
                        color: '#3694ff'
                    }} target='_blank' href="https://zahaanshapoorjee.netlify.app/"
                    >
                        Zahaan Shapoorjee
                    </Link>
                </Row>
                <Text
                css={{
                    color: '$gray700',
                    jc: 'center',
                    textAlign: 'center',
                    padding: '10px 0px',
                    borderStyle: 'solid',
                    borderColor: '$gray700',
                    borderWidth: '1px 0px 0px 0px',
                    '@xsMax':{
                        fontSize: '$xs'
                    }
                }}>
                    © 2023 Ashoka Premier League. All Rights Reserved.
                </Text>
            </Col>
        </Container>
    )
}

export default Footer;