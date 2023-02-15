import React from "react";
import { Container, Row, Text } from "@nextui-org/react";

function Footer(){
    return(
        <Container fluid >
            <Row      
            css={{
                jc: 'center',
                textAlign: 'center',
            }}>
                <Text
        css={{
            paddingTop: '1%',
            paddingBottom: '2%'
        }}>
                    Made with 🤍 by Aryan Yadav and Zahaan Shaporjee
                </Text>
            </Row>
        </Container>
    )
}

export default Footer;