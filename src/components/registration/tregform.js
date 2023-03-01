import React, {useState, useEffect} from "react";
import './tregform.css';
import { Grid, Text, Input, Radio, Button} from "@nextui-org/react";
import { useGoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import imageCompression from 'browser-image-compression';

export default function TRegForm() {

    const [teamname, SetTeamname] = useState('');
    const [Teamnamestatus, setTeamnamestatus] = useState('')

    const [managername, SetManagername] = useState('');
    const [Managernamestatus, SetManagernamestatus] = useState('');


    const [manageremail, SetManageremail] = useState('');
    const [Manageremailstatus, SetManageremailstatus] = useState('');

    const [managerphone, SetManagerphone] = useState('');
    const [Managerphonestatus, SetManagerphonestatus] = useState('');

    const [totalowners, SetTotalowners] = useState('1');
    const [Totalowners, SetTotalownersstatus] = useState('');

    const [owner1, SetOwner1] = useState('');

    const [owner2, SetOwner2] = useState('');
    const [owner2email, setOwner2email] = useState('');

    const [owner3, SetOwner3] = useState('');
    const [owner3email, setOwner3email] = useState('');

    const [owner4, SetOwner4] = useState('');
    const [owner4email, setOwner4email] = useState('');

    const [owner5, SetOwner5] = useState('');
    const [owner5email, setOwner5email] = useState('');

    const [signedin, setSignedIn] = useState(false);
    const [initialImage, setInitialImage] = useState('');
    const [finalImage, setFinalImage] = useState('');

    const [emailID, setEmailID] = useState('');

    const [AlreadyRegistered, setAlreadyRegistered] = useState(false);
    const [RegistrationDone, setRegistrationDone] = useState(false);

    const [HelperColor, setHelperColor] = useState('');
    const [ModalVisibility, setModalVisibility] = useState(false);

    const [User, setUser] = useState({});

    const getRegisteredPlayersEmailData= async (userObject) =>{
        await fetch('http://localhost:3001/registration/player')
        .then(response=>response.json())
        .then((data)=>{
            var isSignedin = false
            data.values.map((item)=>{   
                if(userObject.email!=item[0]){
                    isSignedin=true
                }
                else{
                    isSignedin=false
                }
            })
            if(isSignedin===true){
                setSignedIn(true)
                document.getElementById("GoogleButton").hidden = true;
                setUser(userObject);
                setEmailID(userObject.email);
                // console.log('Signed in')
            }
            else{
                setSignedIn(false)
                setAlreadyRegistered(true)
                document.getElementById("GoogleButton").hidden = false;
                // console.log('Did not sign in')
            }    
        })
    } 

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
}

    const convertImage = async (e) => {
        const options = {
            maxSizeMB: 0.030,
            maxWidthOrHeight: 720,
            useWebWorker: true
        }

        const compressedFile = await imageCompression(initialImage, options);
        console.log(compressedFile);
        console.log(convertBlobToBase64(compressedFile));
    }

    const convertBlobToBase64 = async (blob) => { // blob data
        const img = await blobToBase64(blob);
        setFinalImage(img);
    }
      
    const blobToBase64 = blob => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {resolve(reader.result); }
        reader.onerror = error => reject(error);
    });

    function handleCallbackresponse(response){
        var userObject = jwt_decode(response.credential)  
        getRegisteredPlayersEmailData(userObject);
    }
    
    useEffect( ()=>{
        window.google.accounts.id.initialize({
            client_id: "307601456989-5ii0dp5jhqah6snpkuf9ff1jajp67ku6.apps.googleusercontent.com",
            callback: handleCallbackresponse
        });

        window.google.accounts.id.renderButton(
            document.getElementById("GoogleButton"),
            { theme: 'outlined', size: 'large', shape: 'pill',}
        ); 
    }, [])

    return(
        <div>
        {!RegistrationDone &&

            <Grid.Container gap={2}
            css={{
                jc: 'center',
            }}>
                <Grid.Container
                        css={{
                            jc: 'center',
    
                        }}>
                            <div className="GoogleButton" id='GoogleButton'></div>
                        </Grid.Container>

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
                                    <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner2(event.target.value)}} bordered labelLeft="2nd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{setOwner2email(event.target.value)}} bordered labelLeft="2nd" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
                                        
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
                                    <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner2(event.target.value)}} bordered labelLeft="2nd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{setOwner2email(event.target.value)}} bordered labelLeft="2nd" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner3(event.target.value)}} bordered labelLeft="3rd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{setOwner3email(event.target.value)}} bordered labelLeft="3rd" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
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
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner2(event.target.value)}} bordered labelLeft="2nd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{setOwner2email(event.target.value)}} bordered labelLeft="2nd" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner3(event.target.value)}} bordered labelLeft="3rd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{setOwner3email(event.target.value)}} bordered labelLeft="3rd" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner4(event.target.value)}} bordered labelLeft="4th" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{setOwner4email(event.target.value)}} bordered labelLeft="4th" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
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
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner2(event.target.value)}} bordered labelLeft="2nd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{setOwner2email(event.target.value)}} bordered labelLeft="2nd" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner3(event.target.value)}} bordered labelLeft="3rd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{setOwner3email(event.target.value)}} bordered labelLeft="3rd" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner4(event.target.value)}} bordered labelLeft="4th" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{setOwner4email(event.target.value)}} bordered labelLeft="4th" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{SetOwner5(event.target.value)}} bordered labelLeft="5th" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} onChange={(event)=>{setOwner5email(event.target.value)}} bordered labelLeft="5th" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
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
        }   
            {!RegistrationDone && <div></div>}

        </div>
    )
}