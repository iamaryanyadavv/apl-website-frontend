import React, {useState} from "react";
import './tregform.css';
import { Grid, Text, Input, Radio, Button} from "@nextui-org/react";
import { useGoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";

export default function TRegForm() {

    const [teamname, SetTeamname] = useState('');
    const [managername, SetManagername] = useState('');
    const [manageremail, SetManageremail] = useState('');
    const [managerphone, SetManagerphone] = useState('');
    const [totalowners, SetTotalowners] = useState('1');
    const [owner1, SetOwner1] = useState('');
    const [owner2, SetOwner2] = useState('');
    const [owner3, SetOwner3] = useState('');
    const [owner4, SetOwner4] = useState('');
    const [owner5, SetOwner5] = useState('');
    const [signedin, setSignedIn] = useState(false);

    const login = useGoogleLogin({
        onSuccess: credentialResponse => 
        {
            setSignedIn(true);
            document.getElementById("googleSignIn").innerHTML = "Signed In as:"
            console.log(signedin);
            const USER_CREDENTIAL = jwtDecode(credentialResponse.credential);
            console.log("sasa"+USER_CREDENTIAL);
        },
        flow: 'auth-code',
        
      });

      async function sendForm(e)
    {
        if(teamname & managername & manageremail & managerphone & totalowners==1 & owner1 ||
        teamname & managername & manageremail & managerphone & totalowners==2 & owner1 & owner2 ||
        teamname & managername & manageremail & managerphone & totalowners==3 & owner1 & owner2 & owner3 ||
        teamname & managername & manageremail & managerphone & totalowners==4 & owner1 & owner2 & owner3 & owner4 || 
        teamname & managername & manageremail & managerphone & totalowners==5 & owner1 & owner2 & owner3 & owner4 & owner5
        )
        {
        try{
        let res = await fetch("https://localhost:3001/",
        {
            method: "POST",
            body: JSON.stringify({
                teamname:teamname,
                managername:managername,
                manageremail:manageremail,
                managerphone:managerphone,
              }),
              headers:{
                "accepts":"application/json"
            }
        });
        let resJson = await res.json();
        if(res.status==200)
        {
            console.log("SUCCESS");
        }
        else
        console.log("FAILED");
    }
        catch(error)
        {
            console.log(error);
        }
    }
    else
    alert("You must fill all fields to submit the form...");
}

    return(
        <div>
            <div className="googlelogin">
            <button auto_select = "false" className="signInButton" id="googleSignIn" onClick={() => {
                login();
            }}>
                Sign In to Google
            </button> 
            </div>
            <Grid.Container gap={2}
            css={{
                jc: 'center',
            }}>

                <Grid 
                css={{
                    jc: 'center',
                    width: '1024px'
                }}>
                    <Text
                    css={{
                        jc:'center',
                        textAlign: 'center',
                        paddingBottom: '1%',
                        fontSize: '$4xl',
                        fontWeight: '$semibold'
                    }}>Team</Text>

                    <Grid.Container gap={2}
                    css={{
                        jc: 'center',
                    }}>
                        <Grid>
                            <Input disabled={!signedin} onChange={(event)=>{SetTeamname(event.target.value)}} animated={true} placeholder='Team Name' type='text' bordered clearable required/>
                        </Grid>

                    </Grid.Container>
                </Grid>

                <Grid 
                css={{
                    jc: 'center',
                    width: '1024px'
                }}>
                    <Text
                    css={{
                        jc:'center',
                        textAlign: 'center',
                        paddingBottom: '1%',
                        fontSize: '$4xl',
                        fontWeight: '$semibold'
                    }}>Manager</Text>

                    <Grid.Container gap={2}
                    css={{
                        jc: 'center',
                    }}>
                        <Grid>
                            <Input disabled={!signedin} onChange={(event)=>{SetManagername(event.target.value); SetOwner1(event.target.value)}} animated={true} placeholder='Full Name' type='text' bordered clearable required/>
                        </Grid>

                        <Grid>
                            <Input disabled={!signedin} css={{width:'300px'}} onChange={(event)=>{SetManageremail(event.target.value)}} animated={true} placeholder='Email ID' type='text' bordered clearable/>
                        </Grid>

                        <Grid>
                            <Input disabled={!signedin} onChange={(event)=>{SetManagerphone(event.target.value)}} animated={true} placeholder='Phone' type='text' bordered clearable required/>
                        </Grid>

                    </Grid.Container>
                </Grid>
                    
                <Grid 
                css={{
                    jc: 'center',
                    width: '1024px'
                }}>
                    <Grid.Container gap={2}
                    css={{
                        jc: 'center',
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>
                        <Grid>
                            <Text
                            css={{
                                jc:'center',
                                textAlign: 'center',
                                paddingBottom: '1%',
                                fontSize: '$4xl',
                                fontWeight: '$semibold'
                            }}>
                            Team Owners:
                            </Text>
                        </Grid>
                        <Grid>
                            <Radio.Group label="Number of Total Owners" defaultValue="1" value={totalowners} onChange={SetTotalowners} orientation="horizontal">
                                <Radio value='1'>1</Radio>
                                <Radio value='2'>2</Radio>
                                <Radio value='3'>3</Radio>
                                <Radio value='4'>4</Radio>
                                <Radio value='5'>5</Radio>
                            </Radio.Group>
                            <Text>Total {teamname} team owners: {totalowners}</Text>
                        </Grid>
                    </Grid.Container>
                </Grid>

                <Grid 
                css={{
                    jc: 'center',
                    width: '1024px'
                }}>
                    {totalowners==='1' 
                    ?   <div>
                            <Grid.Container gap={1}
                            css={{
                                jc: 'center'
                            }}>
                                <Grid>
                                    <Input disabled={!signedin} onChange={(event)=>{SetOwner1(event.target.value)}} bordered labelLeft="1st" labelRight='(Manager)' placeholder={owner1} />
                                </Grid>
                            </Grid.Container>
                        </div>
                    :   (totalowners==='2'
                        ?   <div>
                                <Grid.Container gap={1}
                                css={{
                                    jc: 'center'
                                }}>
                                    <Grid>
                                        <Input disabled={!signedin} onChange={(event)=>{SetOwner1(event.target.value)}} bordered labelLeft="1st" labelRight='(Manager)' placeholder={managername} />
                                    </Grid>
                                    <Grid>
                                        <Input disabled={!signedin} onChange={(event)=>{SetOwner2(event.target.value)}} bordered labelLeft="2nd" placeholder="Full Name" />
                                    </Grid>
                                </Grid.Container>
                            </div>
                            
                        :   (totalowners==='3'
                            ?   
                                <div>
                                <Grid.Container gap={1}
                                css={{
                                    jc: 'center'
                                }}>
                                    <Grid>
                                        <Input disabled={!signedin} onChange={(event)=>{SetOwner1(event.target.value)}} bordered labelLeft="1st" labelRight='(Manager)' placeholder={managername} />
                                    </Grid>
                                    <Grid>
                                        <Input disabled={!signedin} onChange={(event)=>{SetOwner2(event.target.value)}} bordered labelLeft="2nd" placeholder="Full Name" />
                                    </Grid>
                                    <Grid>
                                        <Input disabled={!signedin} onChange={(event)=>{SetOwner3(event.target.value)}} bordered labelLeft="3rd" placeholder="Full Name" />
                                    </Grid>
                                </Grid.Container>
                                </div>
                                
                            :   (totalowners==='4'
                                ?   
                                    <div>
                                    <Grid.Container gap={1}
                                    css={{
                                        jc: 'center'
                                    }}>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner1(event.target.value)}} bordered labelLeft="1st" labelRight='(Manager)' placeholder={managername} />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner2(event.target.value)}} bordered labelLeft="2nd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner3(event.target.value)}} bordered labelLeft="3rd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner4(event.target.value)}} bordered labelLeft="4th" placeholder="Full Name" />
                                        </Grid>
                                    </Grid.Container>
                                    </div>

                                :  
                                    <div>
                                    <Grid.Container gap={1}
                                    css={{
                                        jc: 'center'
                                    }}>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner1(event.target.value)}} bordered labelLeft="1st" labelRight='(Manager)' placeholder={managername} />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner2(event.target.value)}} bordered labelLeft="2nd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner3(event.target.value)}} bordered labelLeft="3rd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner4(event.target.value)}} bordered labelLeft="4th" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner5(event.target.value)}} bordered labelLeft="5th" placeholder="Full Name" />
                                        </Grid>
                                    </Grid.Container>
                                    </div>
                                    
                                )
                            )
                        )
                    }
                    

                </Grid>

                <Grid
                css={{
                    width: '1024px'
                }}>
                    <Grid.Container gap={4}
                    css={{
                        jc: 'center',
                    }}>
                        <Grid>
                            <Button onPress={sendForm} shadow rounded bordered auto ghost> Submit </Button>
                        </Grid>
                    </Grid.Container>
                </Grid>

            </Grid.Container>
        </div>
    )
}