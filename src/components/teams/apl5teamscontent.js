import { Avatar, Col, Collapse, Grid, Loading, Progress, Table, Text } from "@nextui-org/react";
import React from "react";
import { useState, useEffect } from "react";

export default function APL5TeamsContent() {
    const [Fetching, setFetching] = useState(true);
    const [TeamAccordions, setTeamAccordions] = useState();

    const getData = async () =>{
        await fetch('http://localhost:3001/seasons/apl5/teamdata/budgets')
        .then(response => response.json())
        .then((data)=>{
            temp(data);
        })
        
    }

    const temp = async (teamslists) => {
        await fetch('http://localhost:3001/seasons/apl5/teamdata')
        .then(response => response.json())
        .then((data)=>{
            createAccordions(data, teamslists);
        })
        setFetching(false);
    }

    function createAccordions(teams, teamslists){
        setTeamAccordions(teams.map((team,index)=>(
            <Collapse
            css={{
                margin: '20px',
                backgroundColor: 'rgb(0,0,0)'
            }} 
            contentLeft={
                <Avatar size={'xl'} src={team[0]} />
            } 
            key={index} 
            shadow 
            title={team[2]} 
            subtitle='Expand for details'>
                <Text hideIn={'xs'}
                css={{
                    fontSize: '$2xl',
                    fontWeight: '$medium'
                }}>
                    Manager: {team[4]}
                </Text>
                <Text showIn={'xs'}
                css={{
                    fontSize: '$lg',
                    fontWeight: '$medium'
                }}>
                    Manager: {team[4]}
                </Text>
                
                <Text hideIn={'xs'}
                css={{
                    fontSize: '$xl',
                    fontWeight: '$medium',
                    padding: '0% 5% 2.5% 5%'
                }}>
                    Owners: {team[5]}
                </Text>
                <Text showIn={'xs'}
                css={{
                    fontSize: '$md',
                    fontWeight: '$medium'
                }}>
                    Owners: {team[5]}
                </Text>
                {AccordionMaterial(team,teamslists)}
            </Collapse>
        )))
    }

    function AccordionMaterial(team,teamslists){
        
        var accMaterial = ''
        for (var i=0; i<20; i++){
            if(team[2]===teamslists[i][0]){
                var sum =  parseInt(teamslists[i][2]) + parseInt(teamslists[i][4]) + parseInt(teamslists[i][6]) + parseInt(teamslists[i][8]) + parseInt(teamslists[i][10]) + parseInt(teamslists[i][12]) + parseInt(teamslists[i][14]) + parseInt(teamslists[i][16]) + parseInt(teamslists[i][18]) + parseInt(teamslists[i][20]) + parseInt(teamslists[i][22]) + parseInt(teamslists[i][24])
                var budgetBarValue = (sum/130)*100
                accMaterial =   
                    <Grid.Container
                    css={{
                        jc:'center',
                        alignItems: 'center'
                    }}>
                        <Table bordered
                        css={{
                            height: "auto",
                            minWidth: "100%",
                        }}>
                            <Table.Header>
                                <Table.Column>Player</Table.Column>
                                <Table.Column>Price</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                {teamslists[i][1] && teamslists[i][2] && 
                                <Table.Row>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][1]}</Table.Cell>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][2]}</Table.Cell>
                                </Table.Row>
                                }
                                {teamslists[i][3] && teamslists[i][4] && 
                                <Table.Row>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][3]}</Table.Cell>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][4]}</Table.Cell>
                                </Table.Row>
                                }
                                {teamslists[i][5] && teamslists[i][6] && 
                                <Table.Row>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][5]}</Table.Cell>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][6]}</Table.Cell>
                                </Table.Row>
                                }
                                {teamslists[i][7] && teamslists[i][8] && 
                                <Table.Row>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][7]}</Table.Cell>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][8]}</Table.Cell>
                                </Table.Row>
                                }
                                {teamslists[i][9] && teamslists[i][10] &&       
                                <Table.Row>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][9]}</Table.Cell>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][10]}</Table.Cell>
                                </Table.Row>
                                }
                                {teamslists[i][11] && teamslists[i][12] && 
                                <Table.Row>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][11]}</Table.Cell>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][12]}</Table.Cell>
                                </Table.Row>
                                }
                                {teamslists[i][13] && teamslists[i][14] && 
                                <Table.Row>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][13]}</Table.Cell>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][14]}</Table.Cell>
                                </Table.Row>
                                }
                                {teamslists[i][15] && teamslists[i][16] && 
                                <Table.Row>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][15]}</Table.Cell>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][16]}</Table.Cell>
                                </Table.Row>
                                }
                                {teamslists[i][17] && teamslists[i][18] && 
                                <Table.Row>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][17]}</Table.Cell>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][18]}</Table.Cell>
                                </Table.Row>
                                }
                                {teamslists[i][19] && teamslists[i][20] && 
                                <Table.Row>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][19]}</Table.Cell>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][20]}</Table.Cell>
                                </Table.Row>
                                }
                                {teamslists[i][21] && teamslists[i][22] && 
                                <Table.Row>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][21]}</Table.Cell>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][22]}</Table.Cell>
                                </Table.Row>
                                }
                                {teamslists[i][23] && teamslists[i][24] && 
                                <Table.Row>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][23]}</Table.Cell>
                                    <Table.Cell css={{textAlign: 'start'}}>{teamslists[i][24]}</Table.Cell>
                                </Table.Row>
                                }
                            </Table.Body>
                        </Table>
                        <Col>
                        <Text
                        css={{
                            fontSize: '$xl',
                            fontWeight: '$medium'
                        }}>
                            {130-teamslists[i][28]} M Spent (Max. 130)
                        </Text>
                        <Progress size='sm' color='error' value={budgetBarValue} />
                        </Col>
                    </Grid.Container>
                
            }
        }
        return(accMaterial)
    }
    

    useEffect( () => {
        getData();
        
    }, [])

    return(
        <div>
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
            {!Fetching && 
            <Grid.Container
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                backgroundColor: 'rgb(20,20,20)',
                borderRadius: '20px',
                borderStyle: 'solid',
                borderWidth: '0px'
            }}>
                {TeamAccordions}
            </Grid.Container>
            }
        </div>
    )
    
}