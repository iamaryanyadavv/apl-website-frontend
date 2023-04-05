import React from "react";
import {Loading, Grid, Input, Modal, Text, Dropdown, Button, Row, Col, Avatar, Radio } from "@nextui-org/react";
import './playerregclosed.css'
import { FaTools} from 'react-icons/fa'

export default function PlayerRegClosed(){
    return(
        <div className="player-reg-closed-bg">
            
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
                Player Registration is closed. See you next season!
                </Text>
                <Text showIn={'md'}
                css={{
                    fontSize: '$3xl',
                    fontWeight: '$semibold',
                    alignContent: 'center',
                    justifyContent: 'center'
                }}>
                Player Registration is closed. See you next season!
                </Text>
                <Text hideIn={'md'}
                css={{
                    fontSize: '$6xl',
                    fontWeight: '$semibold',
                    alignContent: 'center',
                    justifyContent: 'center'
                }}>
                You can check out the list of registered players <a href="/seasons/apl6/teams">here</a>.
                </Text>
                <Text showIn={'md'}
                css={{
                    fontSize: '$3xl',
                    fontWeight: '$semibold',
                    alignContent: 'center',
                    justifyContent: 'center'
                }}>
                You can check out the list of registered players <a href="/seasons/apl6/teams">here</a>.
                </Text>
                </Grid.Container>
        </div>
        
    )
}