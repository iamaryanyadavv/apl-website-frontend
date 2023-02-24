import React from "react";
import { Container, Row, Text } from "@nextui-org/react";

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
                <Text
                css={{
                    paddingTop: '1%',
                    paddingBottom: '1%',
                }}>
                    Made with 🤍 by Aryan Yadav and Zahaan Shaporjee
                </Text>
            </Row>
        </Container>
    )
}

export default Footer;