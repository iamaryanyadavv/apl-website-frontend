import React from "react";
import {Loading, Grid, Input, Modal, Text, Dropdown, Button, Row, Col, Avatar, Radio } from "@nextui-org/react";
import './teamregclosed.css'
import { FaTools} from 'react-icons/fa'

export default function TeamRegClosed(){
    return(
        <div className="team-reg-closed-bg">
            
                <Grid.Container justify="center">
                <Text hideIn={'md'}
                css={{
                    fontSize: '$6xl',
                    fontWeight: '$semibold',
                }}>
                Team Registration is closed. See you next season!
                </Text>
                <Text showIn={'md'}
                css={{
                    fontSize: '$2xl',
                    fontWeight: '$semibold',
                }}>.
                Team Registration is closed. See you next season!
                </Text>
                <Text hideIn={'md'}
                css={{
                    fontSize: '$6xl',
                    fontWeight: '$semibold',
                }}>
                You can check out the list of registered teams <a href="/seasons/apl6/teams">here</a>.
                </Text>
                <Text showIn={'md'}
                css={{
                    fontSize: '$2xl',
                    fontWeight: '$semibold',
                }}>.
                You can check out the list of registered teams <a href="/seasons/apl6/teams">here</a>.
                </Text>
                </Grid.Container>
        </div>
        
    )
}