import React from "react";
import { useState, useEffect } from "react";
import { Table, Avatar, Text, Grid, Loading } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";

export default function Pool4(){
    const [Fetching, setFetching] = useState();
    const [Group, setGroup] = useState([]);

    const columns = [
        {
            key: "logo",
            label: "Logo",
        },
        {
          key: "team",
          label: "Team",
        },
        {
            key: "mp",
            label: "MP",
        },
        {
            key: "won",
            label: "Won",
        },
        {
            key: "lost",
            label: "Lost",
        },
        {
            key: "draw",
            label: "Draw",
        },
        {
            key: "gf",
            label: "GF",
        },
        {
            key: "ga",
            label: "GA",
        },
        {
            key: "gd",
            label: "GD",
        },
        {
            key: "points",
            label: "Points",
        },
        {
            key: "status",
            label: "Status",
        },                  
    ];

    async function getStandings(){
        await fetch('https://aplapi.onrender.com/seasons/apl6/standings/d')
        .then(response=>response.json())
        .then(data=>{
            // console.log(data.values[0][0])
            setGroup(data.values)
            setFetching(false)
        })
    }

    useEffect(()=>{
        setFetching(true)
        getStandings();
    }, [])

    return(
        <>
            {Fetching===true && 
            <Grid.Container gap={4}
            css={{
                jc: 'center',
                alignItems: 'center',
                height: '60vh',
            }}>
                <Loading
                size="xl"
                color={'white'}
                />
            </Grid.Container>
            }
            {Group.length!=0 && !Fetching &&
            <>
                <Text
                css={{
                    fontSize: '$4xl',
                    fontWeight: '$semibold',
                    paddingTop: '60px',
                    paddingLeft: '20px'
                }}> Pool D </Text>
                <Table 
                bordered
                aria-label="Group D"
                css={{
                height: "auto",
                minWidth: "100%",
                }}
                >
                    <Table.Header columns={columns}>
                        {(column) => (
                        <Table.Column css={{
                            padding: '0px 5px 0px 0px'
                        }} key={column.key}>{column.label}</Table.Column>
                        )}
                    </Table.Header>
                    <Table.Body>
                        {console.log(Group)}
                        <Table.Row key='1'>
                            <Table.Cell><Avatar bordered src={Group[0][0]} /></Table.Cell>
                            <Table.Cell>{Group[0][1]}</Table.Cell>
                            <Table.Cell>{Group[0][2]}</Table.Cell>
                            <Table.Cell>{Group[0][3]}</Table.Cell>
                            <Table.Cell>{Group[0][4]}</Table.Cell>
                            <Table.Cell>{Group[0][5]}</Table.Cell>
                            <Table.Cell>{Group[0][6]}</Table.Cell>
                            <Table.Cell>{Group[0][7]}</Table.Cell>
                            <Table.Cell>{Group[0][8]}</Table.Cell>
                            <Table.Cell>{Group[0][9]}</Table.Cell>
                            <Table.Cell><StyledBadge type='active'>{Group[0][10]}</StyledBadge></Table.Cell>
                        </Table.Row>
                        <Table.Row key='2'>
                            <Table.Cell><Avatar bordered src={Group[1][0]} /></Table.Cell>
                            <Table.Cell>{Group[1][1]}</Table.Cell>
                            <Table.Cell>{Group[1][2]}</Table.Cell>
                            <Table.Cell>{Group[1][3]}</Table.Cell>
                            <Table.Cell>{Group[1][4]}</Table.Cell>
                            <Table.Cell>{Group[1][5]}</Table.Cell>
                            <Table.Cell>{Group[1][6]}</Table.Cell>
                            <Table.Cell>{Group[1][7]}</Table.Cell>
                            <Table.Cell>{Group[1][8]}</Table.Cell>
                            <Table.Cell>{Group[1][9]}</Table.Cell>
                            <Table.Cell><StyledBadge type='active'>{Group[1][10]}</StyledBadge></Table.Cell>
                        </Table.Row>
                        <Table.Row key='3'>
                            <Table.Cell><Avatar bordered src={Group[2][0]} /></Table.Cell>
                            <Table.Cell>{Group[2][1]}</Table.Cell>
                            <Table.Cell>{Group[2][2]}</Table.Cell>
                            <Table.Cell>{Group[2][3]}</Table.Cell>
                            <Table.Cell>{Group[2][4]}</Table.Cell>
                            <Table.Cell>{Group[2][5]}</Table.Cell>
                            <Table.Cell>{Group[2][6]}</Table.Cell>
                            <Table.Cell>{Group[2][7]}</Table.Cell>
                            <Table.Cell>{Group[2][8]}</Table.Cell>
                            <Table.Cell>{Group[2][9]}</Table.Cell>
                            <Table.Cell><StyledBadge type='paused'>{Group[2][10]}</StyledBadge></Table.Cell>
                        </Table.Row>
                        <Table.Row key='4'>
                            <Table.Cell><Avatar bordered src={Group[3][0]} /></Table.Cell>
                            <Table.Cell>{Group[3][1]}</Table.Cell>
                            <Table.Cell>{Group[3][2]}</Table.Cell>
                            <Table.Cell>{Group[3][3]}</Table.Cell>
                            <Table.Cell>{Group[3][4]}</Table.Cell>
                            <Table.Cell>{Group[3][5]}</Table.Cell>
                            <Table.Cell>{Group[3][6]}</Table.Cell>
                            <Table.Cell>{Group[3][7]}</Table.Cell>
                            <Table.Cell>{Group[3][8]}</Table.Cell>
                            <Table.Cell>{Group[3][9]}</Table.Cell>
                            <Table.Cell><StyledBadge type='paused'>{Group[3][10]}</StyledBadge></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
            }
        </>
    )
}