import React from "react";
import { Container, Row, Text, Link } from "@nextui-org/react";

function Footer(){
    return(
        <Container fluid >
            <Row      
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                borderStyle: 'solid',
                borderColor: '$gray600',
                borderWidth: '1px 0px 0px 0px'
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
                }} target='_blank' href="https://aryanyadav.com/"
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
        </Container>
    )
}

export default Footer;