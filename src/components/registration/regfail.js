import React from "react";
import {Loading, Grid, Input, Modal, Text, Dropdown, Button, Row, Col, Avatar, Radio } from "@nextui-org/react";
import './regfail.css'
import { FaTools} from 'react-icons/fa'

export default function RegFailed(){
    return(
        <div className="team-reg-closed-bg">
            
                <Grid.Container justify="center" alignItems="center" css={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent: 'center',
                    margin:'6%'
                }}>
                <Text hideIn={'md'}
                css={{
                    fontSize: '$6xl',
                    fontWeight: '$semibold',
                    alignContent: 'center',
                    justifyContent: 'center'
                }}>
                Fifa Registration is closed. See you next season!
                </Text>
                <Text showIn={'md'}
                css={{
                    fontSize: '$3xl',
                    fontWeight: '$semibold',
                    alignContent: 'center',
                    justifyContent: 'center'
                }}>
                Fifa Registration is closed. See you next season!
                </Text>
                </Grid.Container>
        </div>
        
    )
}