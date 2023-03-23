import { Avatar, Col, Collapse, Grid, Loading, Progress, Table, Text, Spacer } from "@nextui-org/react";
import React from "react";
import { useState, useEffect } from "react";

export default function APL5TeamsContent() {
    const [Fetching, setFetching] = useState(true);
    const [TeamAccordions, setTeamAccordions] = useState();

    const getTeamBudgetsData = async () =>{
        await fetch('https://ashoka-premier-league-api.onrender.com/seasons/apl6/teamdata/budgets')
        .then(response => response.json())
        .then((data)=>{
            console.log(data)
            OnceTeamBudgetsData(data);
        })
        
    }

    const OnceTeamBudgetsData = async (teamslists) => {
        await fetch('https://ashoka-premier-league-api.onrender.com/seasons/apl6/teamdata')
        .then(response => response.json())
        .then((data)=>{
            createTeamAccordions(data, teamslists);
        })
        setFetching(false);
    }

    function createTeamAccordions(teams, teamslists){
        if(teams.length>1){
            const onlyteams = []
            for(var i=1; i<teams.length;i++){
                onlyteams.push(teams[i])
            }
            setTeamAccordions(onlyteams.map((team,index)=>(
                <Collapse
                css={{
                    margin: '30px',
                    backgroundColor: 'rgb(0,0,0)',
                    jc: 'center',
                    alignItems: 'center',
                    '@xsMax':{
                        width: '330px'                        
                    },
                    '@xsMin':{
                        width: '500px'
                    }
                }} 
                contentLeft={
                    <Avatar bordered size={'xl'} src={team[0]} />
                } 
                key={index} 
                borderWeight={'null'}
                shadow 
                title={team[2]} 
                subtitle='Expand for details'>
                    <Grid.Container css={{
                        jc: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <Col>
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
                                padding: '0% 5% 2.5% 5%',
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
                        </Col>
    

                    </Grid.Container>
                    {AccordionMaterial(team,teamslists)}
                </Collapse>
            )))
        }
    }

    function AccordionMaterial(team,teamslists){
        
        var accMaterial = ''
        for (var i=0; i<teamslists.values.length; i++){
            if(teamslists.values[i].length>1){
                if(team[2]===teamslists.values[i][0]){
                    var budgetBarValue = (parseInt(teamslists.values[i][26])/130)*100
                    accMaterial =   
                        <Grid.Container
                        css={{
                            jc:'center',
                            alignItems: 'center'
                        }}>
                            {(teamslists.values[i][30]) && 
                            <Col>
                                <Text
                                css={{
                                    fontSize: '$xl',
                                    fontWeight: '$medium',
                                    paddingBottom: '5%'
                                }}>
                                    Record: {teamslists.values[i][30]}
                                </Text>
                            </Col>
                            }
                            {!teamslists.values[i][30] && 
                            <Col>
                                <Text
                                css={{
                                    fontSize: '$xl',
                                    fontWeight: '$medium',
                                    paddingBottom: '5%'
                                }}>
                                    Record -
                                </Text>
                            </Col>
                            }
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
                                    {teamslists.values[i][1] && teamslists.values[i][2] && 
                                    <Table.Row>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][1]}</Table.Cell>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][2]}</Table.Cell>
                                    </Table.Row>
                                    }
                                    {teamslists.values[i][3] && teamslists.values[i][4] && 
                                    <Table.Row>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][3]}</Table.Cell>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][4]}</Table.Cell>
                                    </Table.Row>
                                    }
                                    {teamslists.values[i][5] && teamslists.values[i][6] && 
                                    <Table.Row>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][5]}</Table.Cell>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][6]}</Table.Cell>
                                    </Table.Row>
                                    }
                                    {teamslists.values[i][7] && teamslists.values[i][8] && 
                                    <Table.Row>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][7]}</Table.Cell>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][8]}</Table.Cell>
                                    </Table.Row>
                                    }
                                    {teamslists.values[i][9] && teamslists.values[i][10] &&       
                                    <Table.Row>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][9]}</Table.Cell>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][10]}</Table.Cell>
                                    </Table.Row>
                                    }
                                    {teamslists.values[i][11] && teamslists.values[i][12] && 
                                    <Table.Row>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][11]}</Table.Cell>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][12]}</Table.Cell>
                                    </Table.Row>
                                    }
                                    {teamslists.values[i][13] && teamslists.values[i][14] && 
                                    <Table.Row>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][13]}</Table.Cell>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][14]}</Table.Cell>
                                    </Table.Row>
                                    }
                                    {teamslists.values[i][15] && teamslists.values[i][16] && 
                                    <Table.Row>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][15]}</Table.Cell>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][16]}</Table.Cell>
                                    </Table.Row>
                                    }
                                    {teamslists.values[i][17] && teamslists.values[i][18] && 
                                    <Table.Row>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][17]}</Table.Cell>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][18]}</Table.Cell>
                                    </Table.Row>
                                    }
                                    {teamslists.values[i][19] && teamslists.values[i][20] && 
                                    <Table.Row>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][19]}</Table.Cell>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][20]}</Table.Cell>
                                    </Table.Row>
                                    }
                                    {teamslists.values[i][21] && teamslists.values[i][22] && 
                                    <Table.Row>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][21]}</Table.Cell>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][22]}</Table.Cell>
                                    </Table.Row>
                                    }
                                    {teamslists.values[i][23] && teamslists.values[i][24] && 
                                    <Table.Row>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][23]}</Table.Cell>
                                        <Table.Cell css={{textAlign: 'start'}}>{teamslists.values[i][24]}</Table.Cell>
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
                                    {teamslists.values[i][26]} M Spent (Max. 130)
                                </Text>
                                <Progress size='sm' color='error' value={budgetBarValue} />
                            </Col>
                        </Grid.Container>
                    
                }  
            }
        }
        return(accMaterial)
    }
    

    useEffect( () => {
        getTeamBudgetsData();
        
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
            {!Fetching && TeamAccordions &&
            <Grid.Container
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                padding: '30px 0px 0px 0px',
                backgroundColor: 'rgb(20,20,20)',
                borderRadius: '20px',
                borderStyle: 'solid',
                borderWidth: '0px'
            }}>
                {TeamAccordions}
            </Grid.Container>
            }
            {!Fetching && !TeamAccordions &&
            <div>
            <Text hideIn={'xs'}
            css={{
                fontSize: '$4xl',
                fontWeight: '$semibold',
                padding: '40px 10% 0px 10%',
                textAlign: 'center',

            }}>
                No Teams yet... Check again after team registration starts!
            </Text>
            <Text showIn={'xs'}
            css={{
                fontSize: '$2xl',
                fontWeight: '$semibold',
                padding: '40px 10% 0px 10%',
                textAlign: 'center',

            }}>
                No Teams yet... Check again after team registration starts!
            </Text>
            <Spacer y={15}/>
        </div>
            }
        </div>
    )
    
}