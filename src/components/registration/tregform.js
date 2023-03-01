import React, {useState, useEffect} from "react";
import './tregform.css';
import { Grid, Input, Modal, Text, Dropdown, Button, Row, Col, Avatar, Radio} from "@nextui-org/react";
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
    const [Totalownersstatus, SetTotalownersstatus] = useState('');

    const [owner1, SetOwner1] = useState('');
    const [owner1status, SetOwner1status] = useState('');

    const [owner2, SetOwner2] = useState('');
    const [owner2email, setOwner2email] = useState('');
    const [owner2status, SetOwner2status] = useState('');
    const [owner2emailstatus, SetOwneremail2status] = useState('');
    

    const [owner3, SetOwner3] = useState('');
    const [owner3email, setOwner3email] = useState('');
    const [owner3status, SetOwner3status] = useState('');
    const [owner3emailstatus, SetOwneremail3status] = useState('');

    const [owner4, SetOwner4] = useState('');
    const [owner4email, setOwner4email] = useState('');
    const [owner4status, SetOwner4status] = useState('');
    const [owner4emailstatus, SetOwneremail4status] = useState('');

    const [owner5, SetOwner5] = useState('');
    const [owner5email, setOwner5email] = useState('');
    const [owner5status, SetOwner5status] = useState('');
    const [owner5emailstatus, SetOwneremail5status] = useState('');

    const [signedin, setSignedIn] = useState(false);
    const [initialImage, setInitialImage] = useState('');
    const [finalImage, setFinalImage] = useState('');

    const [emailID, setEmailID] = useState('');

    const [AlreadyRegistered, setAlreadyRegistered] = useState(false);
    const [RegistrationDone, setRegistrationDone] = useState(false);

    const [HelperColor, setHelperColor] = useState('');
    const [ModalVisibility, setModalVisibility] = useState(false);

    const [User, setUser] = useState({});

    function CheckForm(){
        if(teamname)
        {
            setTeamnamestatus('success')
        }
        if(!teamname)
        {
            setTeamnamestatus('error')
        }
        if(managername){
            SetManagernamestatus('success')
        }
        if(!managername){
            SetManagernamestatus('error')
        }
        if(manageremail){
            SetManageremailstatus('success')
        }
        if(!manageremail){
            SetManageremailstatus('error')
        }
        if(totalowners){
            SetTotalownersstatus('success')
        }
        if(!totalowners){
            SetTotalownersstatus('error')
        }
        if(managerphone.length===10){
            SetManagerphonestatus('success')
        }
        if(managerphone.length<10 || managerphone.length>10 || !managerphone){
            SetManagerphonestatus('error')
        }
        if(owner1){
            SetOwner1status('success')
        }
        if(!owner1){
            SetOwner1status('error')
        }
        if(owner2){
            SetOwner2status('success')
        }
        if(!owner2){
            SetOwner2status('error')
        }
        if(owner3){
            SetOwner3status('success')
        }
        if(!owner3){
            SetOwner3status('error')
        }
        if(owner4){
            SetOwner4status('success')
        }
        if(!owner4){
            SetOwner4status('error')
        }
        if(owner5){
            SetOwner5status('success')
        }
        if(!owner5){
            SetOwner5status('error')
        }
        if(owner2email)
        {
            SetOwneremail2status('success')
        }
        if(!owner2email)
        {
            SetOwneremail2status('error')
        }
        if(owner3email)
        {
            SetOwneremail3status('success')
        }
        if(!owner3email)
        {
            SetOwneremail3status('error')
        }
        if(owner4email)
        {
            SetOwneremail4status('success')
        }
        if(!owner4email)
        {
            SetOwneremail4status('error')
        }
        if(owner5email)
        {
            SetOwneremail5status('success')
        }
        if(!owner5email)
        {
            SetOwneremail5status('error')
        }
        

        if(managername && manageremail && managerphone && totalowners==5 && owner1 && owner2 && owner3 && owner4 && owner5){
            setTeamnamestatus('warning');
            SetManagernamestatus('warning');
            SetManagerphonestatus('warning');
            SetManageremailstatus('warning');
            SetTotalownersstatus('warning');
            SetOwner1status('warning');
            SetOwner2status('warning');
            SetOwner3status('warning');
            SetOwner4status('warning');
            SetOwner5status('warning');
            return true
        }
        else if(managername && manageremail && managerphone && totalowners==4 && owner1 && owner2 && owner3 && owner4)
        {
            setTeamnamestatus('warning');
            SetManagernamestatus('warning');
            SetManagerphonestatus('warning');
            SetManageremailstatus('warning');
            SetTotalownersstatus('warning');
            SetOwner1status('warning');
            SetOwner2status('warning');
            SetOwner3status('warning');
            SetOwner4status('warning');
            return true
        }
        else if(managername && manageremail && managerphone && totalowners==3 && owner1 && owner2 && owner3)
        {
            setTeamnamestatus('warning');
            SetManagernamestatus('warning');
            SetManagerphonestatus('warning');
            SetManageremailstatus('warning');
            SetTotalownersstatus('warning');
            SetOwner1status('warning');
            SetOwner2status('warning');
            SetOwner3status('warning');
            return true
        }
        else if(managername && manageremail && managerphone && totalowners==2 && owner1 && owner2)
        {
            setTeamnamestatus('warning');
            SetManagernamestatus('warning');
            SetManagerphonestatus('warning');
            SetManageremailstatus('warning');
            SetTotalownersstatus('warning');
            SetOwner1status('warning');
            SetOwner2status('warning');
            return true
        }
        else if(managername && manageremail && managerphone && totalowners==1 && owner1)
        {
            setTeamnamestatus('warning');
            SetManagernamestatus('warning');
            SetManagerphonestatus('warning');
            SetManageremailstatus('warning');
            SetTotalownersstatus('warning');
            SetOwner1status('warning');
            return true
        }
    }

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
                        {Object.keys(User).length != 0 &&
                        <div>
                            <Grid.Container gap={2}
                            css={{
                                jc: 'center',
                                alignItems: 'center'
                            }}>
                                <Text
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold',
                                    color: '$green600'
                                }}>
                                    Welcome {User.name}!
                                </Text>
                            </Grid.Container>
    
                            <Grid.Container
                            css={{
                                jc: 'center',
                                alignItems: 'center'
                            }}>
                                
                                <Text hideIn={'xs'}
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    paddingBottom: '5%',
                                    textAlign: 'center',
                                    color: '$gray900'
                                }}>
                                    Signed in using: {User.email}
                                </Text>
                                <Text showIn={'xs'}
                                css={{
                                    jc: 'center',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    fontSize: '$xl',
                                    fontWeight: '$semibold',
                                    paddingBottom: '15%',
                                    color: '$gray900'
                                }}>
                                    Signed in using: {User.email}
                                </Text>
                                
                            </Grid.Container>
                        
                        </div>
                        }
    
                        {!signedin &&
                        <div>
                            <Grid.Container gap={0}
                            css={{
                                jc: 'center',
                                alignItems: 'center'
                            }}>
    
                                <Grid
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Text
                                    css={{
                                        paddingTop: '5px'
                                    }}>
                                        *This form is open to only those affiliated with Ashoka University.
                                    </Text>
                                </Grid>
                                
                            </Grid.Container>
    
                            <Grid.Container gap={0}
                            css={{
                                jc: 'center',
                                alignItems: 'center'
                            }}>
    
                                <Grid
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Text
                                    css={{
                                        paddingBottom: '15px'
                                    }}>
                                        Please login via your @ashoka.edu.in email ID for form access.
                                    </Text>
                                </Grid>
                                
                            </Grid.Container> 
                        </div>}
    
                        {AlreadyRegistered && 
                            <Grid.Container
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}>
                                <Grid>
                                    <Text
                                    css={{
                                        textAlign: 'center',
                                        fontSize: '$3xl',
                                        fontWeight: '$bold',
                                        color: '$red600',
                                        paddingBottom: '20px'
                                    }}>
                                        YOU HAVE ALREADY REGISTERED WITH THIS EMAIL ID!
                                    </Text>
                                </Grid>
                            </Grid.Container>
                        }

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
                            <Input helperColor={HelperColor} disabled={!signedin} status={Teamnamestatus} onChange={(event)=>{
                                SetTeamname(event.target.value)
                                if(event.target.value){
                                    setTeamnamestatus('success')
                                }
                                else if(!event.target.value){
                                    setTeamnamestatus('error')
                                }
                                }} animated={true} placeholder='Team Name' type='text' bordered clearable required/>
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
                            <Input disabled={!signedin} status={Managernamestatus} onChange={(event)=>
                                {SetManagername(event.target.value); SetOwner1(event.target.value);
                                    if(event.target.value){
                                        SetManagernamestatus('success')
                                    }
                                    else if(!event.target.value){
                                        SetManagernamestatus('error')
                                    }}} animated={true} placeholder='Full Name' type='text' bordered clearable required/>
                        </Grid>

                        <Grid>
                            <Input disabled={!signedin} status={Manageremailstatus} css={{width:'300px'}} onChange={(event)=>{SetManageremail(event.target.value)
                            if(event.target.value){
                                SetManageremailstatus('success')
                            }
                            else if(!event.target.value){
                                SetManageremailstatus('error')
                            }
                            }} animated={true} placeholder='Email ID' type='text' bordered clearable/>
                        </Grid>

                        <Grid>
                            <Input disabled={!signedin} status={Managerphonestatus} onChange={(event)=>{SetManagerphone(event.target.value)
                            if(event.target.value){
                                SetManagerphonestatus('success')
                            }
                            else if(!event.target.value){
                                SetManagerphonestatus('error')
                            }}} animated={true} placeholder='Phone' type='text' bordered clearable required/>
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
                                    <Input disabled={!signedin} status={owner1status} onChange={(event)=>{
                                        SetOwner1(event.target.value)
                                        if(event.target.value){
                                            SetOwner1status('success')
                                        }
                                        else if(!event.target.value){
                                            SetOwner1status('error')
                                        }
                                        }} bordered labelLeft="1st" labelRight='(Manager)' placeholder={owner1} />
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
                                        <Input disabled={!signedin} status={owner1status} onChange={(event)=>{SetOwner1(event.target.value)
                                        if(event.target.value){
                                            SetOwner1status('success')
                                        }
                                        else if(!event.target.value){
                                            SetOwner1status('error')
                                        }}} bordered labelLeft="1st" labelRight='(Manager)' placeholder={managername} />
                                    </Grid>
                                    <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner2status} onChange={(event)=>{SetOwner2(event.target.value)
                                            if(event.target.value){
                                                SetOwner2status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwner2status('error')
                                            }
                                        }} bordered labelLeft="2nd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner2emailstatus} onChange={(event)=>{setOwner2email(event.target.value)
                                            if(event.target.value){
                                                SetOwneremail2status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwneremail2status('error')
                                            }}} bordered labelLeft="2nd" placeholder="Email Address" />
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
                                        <Input disabled={!signedin} status={owner1status} onChange={(event)=>{SetOwner1(event.target.value)
                                        if(event.target.value){
                                            SetOwner1status('success')
                                        }
                                        else if(!event.target.value){
                                            SetOwner1status('error')
                                        }}} bordered labelLeft="1st" labelRight='(Manager)' placeholder={managername} />
                                    </Grid>
                                    <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner2status} onChange={(event)=>{SetOwner2(event.target.value)
                                            if(event.target.value){
                                                SetOwner2status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwner2status('error')
                                            }
                                            }} bordered labelLeft="2nd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner2emailstatus} onChange={(event)=>{setOwner2email(event.target.value)
                                            if(event.target.value){
                                                SetOwneremail2status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwneremail2status('error')
                                            }}} bordered labelLeft="2nd" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner3status} onChange={(event)=>{SetOwner3(event.target.value)
                                            if(event.target.value){
                                                SetOwner3status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwner3status('error')
                                            }
                                            
                                            }} bordered labelLeft="3rd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner3emailstatus} onChange={(event)=>{setOwner3email(event.target.value)
                                            if(event.target.value){
                                                SetOwneremail3status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwneremail3status('error')
                                            }}} bordered labelLeft="3rd" placeholder="Email Address" />
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
                                            <Input disabled={!signedin} status={owner1status} onChange={(event)=>{SetOwner1(event.target.value)
                                            if(event.target.value){
                                                SetOwner1status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwner1status('error')
                                            }}} bordered labelLeft="1st" labelRight='(Manager)' placeholder={managername} />
                                        </Grid>
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner2status} onChange={(event)=>{SetOwner2(event.target.value)
                                            if(event.target.value){
                                                SetOwner2status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwner2status('error')
                                            }}} bordered labelLeft="2nd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner2emailstatus} onChange={(event)=>{setOwner2email(event.target.value)
                                            if(event.target.value){
                                                SetOwneremail2status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwneremail2status('error')
                                            }}} bordered labelLeft="2nd" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner3status} onChange={(event)=>{SetOwner3(event.target.value)
                                            if(event.target.value){
                                                SetOwner3status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwner3status('error')
                                            }}} bordered labelLeft="3rd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner3emailstatus} onChange={(event)=>{setOwner3email(event.target.value)
                                            if(event.target.value){
                                                SetOwneremail3status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwneremail3status('error')
                                            }}} bordered labelLeft="3rd" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner4status} onChange={(event)=>{SetOwner4(event.target.value)
                                            if(event.target.value){
                                                SetOwner4status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwner4status('error')
                                            }}} bordered labelLeft="4th" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner4emailstatus} onChange={(event)=>{setOwner4email(event.target.value)
                                            if(event.target.value){
                                                SetOwneremail4status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwneremail4status('error')
                                            }}} bordered labelLeft="4th" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
                                    </Grid.Container>
                                    </div>

                                :  
                                    <div>
                                    <Grid.Container gap={1}
                                    css={{
                                        jc: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner1status} onChange={(event)=>{SetOwner1(event.target.value)
                                            if(event.target.value){
                                                SetOwner1status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwner1status('error')
                                            }}} bordered labelLeft="1st" labelRight='(Manager)' placeholder={managername} />
                                        </Grid>
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner2status} onChange={(event)=>{SetOwner2(event.target.value)
                                            if(event.target.value){
                                                SetOwner2status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwner2status('error')
                                            }}} bordered labelLeft="2nd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner2emailstatus} onChange={(event)=>{setOwner2email(event.target.value)
                                            if(event.target.value){
                                                SetOwneremail2status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwneremail2status('error')
                                            }}} bordered labelLeft="2nd" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner3status} onChange={(event)=>{SetOwner3(event.target.value)
                                            if(event.target.value){
                                                SetOwner3status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwner3status('error')
                                            }}} bordered labelLeft="3rd" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner3emailstatus} onChange={(event)=>{setOwner3email(event.target.value)
                                            if(event.target.value){
                                                SetOwneremail3status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwneremail3status('error')
                                            }}} bordered labelLeft="3rd" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner4status} onChange={(event)=>{SetOwner4(event.target.value)
                                            if(event.target.value){
                                                SetOwner4status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwner4status('error')
                                            }}} bordered labelLeft="4th" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner4emailstatus} onChange={(event)=>{setOwner4email(event.target.value)
                                            if(event.target.value){
                                                SetOwneremail4status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwneremail4status('error')
                                            }}} bordered labelLeft="4th" placeholder="Email Address" />
                                        </Grid>
                                        </Grid.Container>
                                        <Grid.Container gap={1}
                                            css={{
                                                jc: 'center'
                                            }}>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner5status} onChange={(event)=>{SetOwner5(event.target.value)
                                            if(event.target.value){
                                                SetOwner5status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwner5status('error')
                                            }}} bordered labelLeft="5th" placeholder="Full Name" />
                                        </Grid>
                                        <Grid>
                                            <Input disabled={!signedin} status={owner5emailstatus} onChange={(event)=>{setOwner5email(event.target.value)
                                            if(event.target.value){
                                                SetOwneremail5status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwneremail5status('error')
                                            }}} bordered labelLeft="5th" placeholder="Email Address" />
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
                <Grid.Container css={{
                        jc: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Text css={{
                                jc:'center',
                                textAlign: 'center',
                                paddingBottom: '1%',
                                fontSize: '$4xl',
                                fontWeight: '$semibold'
                            }}>
                                Team Logo
                        </Text>
                <input disabled={!signedin} onChange={(event)=>setInitialImage(event.target.files[0])} className="photobtn" animated={'true'} type='file' accept="image/*" required/>
                </Grid.Container >
                    <Grid.Container gap={4}
                    css={{
                        jc: 'center'
                    }}>
                        <Grid>
                            <Button onPress={()=>{
                                setModalVisibility(CheckForm());
                                if(initialImage)
                                {
                                    convertImage();
                                }
                                
                            }} shadow rounded bordered auto ghost> Submit </Button>
                            <Modal
                                closeButton
                                open={ModalVisibility}
                                onClose={()=>{
                                    setModalVisibility(false)
                                }}>
    
                                    <Modal.Header>
                                        <Col>
                                            <Text
                                            css={{
                                                fontSize: '$4xl',
                                                fontWeight: '$semibold',
                                                textAlign: 'center',
                                                color: '$yellow600'
                                            }}>
                                                Team Owner Details
                                            </Text>
                                            <Text
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$normal',
                                                textAlign: 'center',
                                                color: '$gray700'
                                            }}>
                                                Check your details one last time before paying!
                                            </Text>
                                        </Col>
                                        
                                    </Modal.Header>
    
                                    <Modal.Body>
    
    
                                        <Grid.Container
                                        css={{
                                            jc: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Grid>
                                                
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center'
                                                }}>
                                                    <Grid>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center'
                                                        }}>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Team Name: 
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {teamname}
                                                            </Text>
    
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Team Name: 
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {teamname}
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                    <Grid>
                                                        {managername && 
                                                            <Row
                                                            css={{
                                                                jc: 'center',
                                                                textAlign: 'center'
                                                            }}>
                                                                <Text hideIn={'xs'}
                                                                css={{
                                                                    fontSize: '$lg',
                                                                    paddingRight: '4px',
                                                                    color: '$gray700'
                                                                }}>
                                                                    Manager Name: 
                                                                </Text>
                                                                <Text hideIn={'xs'}
                                                                css={{
                                                                    fontSize: '$lg',
                                                                    fontWeight: '$semibold'
                                                                }}>
                                                                    {managername}
                                                                </Text>
        
                                                                <Text showIn={'xs'}
                                                                css={{
                                                                    fontSize: '$md',
                                                                    paddingRight: '4px',
                                                                    color: '$gray700'
                                                                }}>
                                                                    Manager Name: 
                                                                </Text>
                                                                <Text showIn={'xs'}
                                                                css={{
                                                                    fontSize: '$md',
                                                                    fontWeight: '$semibold'
                                                                }}>
                                                                    {managername}
                                                                </Text>
                                                            </Row>
                                                        }
                                                    </Grid>
                                                    <Grid>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center'
                                                        }}>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Manager Email ID: 
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {manageremail}
                                                            </Text>
    
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Manager Email ID: 
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {manageremail}
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                </Grid.Container>

                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center'
                                                }}>
                                                        <Text hideIn={'xs'}
                                                        css={{
                                                            fontSize: '$lg',
                                                            paddingRight: '4px',
                                                            color: '$gray700'
                                                        }}>
                                                            Manager Phone Number:  
                                                        </Text>
                                                        <Text hideIn={'xs'}
                                                        css={{
                                                            fontSize: '$lg',
                                                            fontWeight: '$semibold'
                                                        }}>
                                                            {managerphone}
                                                        </Text>
    
                                                        <Text showIn={'xs'}
                                                        css={{
                                                            fontSize: '$md',
                                                            paddingRight: '4px',
                                                            color: '$gray700'
                                                        }}>
                                                            Manager Phone Number:  
                                                        </Text>
                                                        <Text showIn={'xs'}
                                                        css={{
                                                            fontSize: '$md',
                                                            fontWeight: '$semibold'
                                                        }}>
                                                            {managerphone}
                                                        </Text>
                                                    
                                                </Grid.Container>
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center'
                                                }}>
                                                    <Grid>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center'
                                                        }}>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Number of Team Owners:  
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {totalowners}
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Number of Team Owners:  
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {totalowners}
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                </Grid.Container>
    
                                               
                                                
                                                    {totalowners==5 &&
                                                    <Grid.Container gap={0.5}
                                                    css={{
                                                        jc: 'center',
                                                        alignItems: 'center',
                                                        textAlign: 'center'
                                                    }}>
                                                    <Grid>
                                                    <Row
                                                    css={{
                                                        jc: 'center',
                                                        textAlign: 'center'
                                                    }}>
                                                        <Text hideIn={'xs'}
                                                        css={{
                                                            fontSize: '$lg',
                                                            paddingRight: '4px',
                                                            color: '$gray700'
                                                        }}>
                                                            Manager Name: 
                                                        </Text>
                                                        <Text hideIn={'xs'}
                                                        css={{
                                                            fontSize: '$lg',
                                                            fontWeight: '$semibold'
                                                        }}>
                                                            {managername}
                                                        </Text>
                                                        <Text showIn={'xs'}
                                                        css={{
                                                            fontSize: '$md',
                                                            paddingRight: '4px',
                                                            color: '$gray700'
                                                        }}>
                                                            Manager Name: 
                                                        </Text>
                                                        <Text showIn={'xs'}
                                                        css={{
                                                            fontSize: '$md',
                                                            fontWeight: '$semibold'
                                                        }}>
                                                            {managername}
                                                        </Text>
                                                    </Row>
                                                </Grid>
                                                 <Grid>
                                                 <Row
                                                 css={{
                                                     jc: 'center',
                                                     textAlign: 'center'
                                                 }}>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 2 Name: 
                                                     </Text>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner2}
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 2 Name: 
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner2}
                                                     </Text>
                                                 </Row>
                                             </Grid>
                                             <Grid>
                                                 <Row
                                                 css={{
                                                     jc: 'center',
                                                     textAlign: 'center'
                                                 }}>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 3 Name: 
                                                     </Text>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner3}
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 3 Name: 
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner3}
                                                     </Text>
                                                 </Row>
                                             </Grid>
                                             <Grid>
                                                 <Row
                                                 css={{
                                                     jc: 'center',
                                                     textAlign: 'center'
                                                 }}>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 4 Name: 
                                                     </Text>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner4}
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 4 Name: 
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner4}
                                                     </Text>
                                                 </Row>
                                             </Grid>
                                             <Grid>
                                                 <Row
                                                 css={{
                                                     jc: 'center',
                                                     textAlign: 'center'
                                                 }}>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 5 Name: 
                                                     </Text>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner5}
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 5 Name: 
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner5}
                                                     </Text>
                                                 </Row>
                                             </Grid>
                                </Grid.Container>
                                                }
                                                {
                                                    totalowners==4 &&
                                                    <Grid.Container gap={0.5}
                                                    css={{
                                                        jc: 'center',
                                                        alignItems: 'center',
                                                        textAlign: 'center'
                                                    }}>
                                                    <Grid>
                                                    <Row
                                                    css={{
                                                        jc: 'center',
                                                        textAlign: 'center'
                                                    }}>
                                                        <Text hideIn={'xs'}
                                                        css={{
                                                            fontSize: '$lg',
                                                            paddingRight: '4px',
                                                            color: '$gray700'
                                                        }}>
                                                            Manager Name: 
                                                        </Text>
                                                        <Text hideIn={'xs'}
                                                        css={{
                                                            fontSize: '$lg',
                                                            fontWeight: '$semibold'
                                                        }}>
                                                            {managername}
                                                        </Text>
                                                        <Text showIn={'xs'}
                                                        css={{
                                                            fontSize: '$md',
                                                            paddingRight: '4px',
                                                            color: '$gray700'
                                                        }}>
                                                            Manager Name: 
                                                        </Text>
                                                        <Text showIn={'xs'}
                                                        css={{
                                                            fontSize: '$md',
                                                            fontWeight: '$semibold'
                                                        }}>
                                                            {managername}
                                                        </Text>
                                                    </Row>
                                                </Grid>
                                                 <Grid>
                                                 <Row
                                                 css={{
                                                     jc: 'center',
                                                     textAlign: 'center'
                                                 }}>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 2 Name: 
                                                     </Text>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner2}
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 2 Name: 
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner2}
                                                     </Text>
                                                 </Row>
                                             </Grid>
                                             <Grid>
                                                 <Row
                                                 css={{
                                                     jc: 'center',
                                                     textAlign: 'center'
                                                 }}>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 3 Name: 
                                                     </Text>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner3}
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 3 Name: 
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner3}
                                                     </Text>
                                                 </Row>
                                             </Grid>
                                             <Grid>
                                                 <Row
                                                 css={{
                                                     jc: 'center',
                                                     textAlign: 'center'
                                                 }}>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 4 Name: 
                                                     </Text>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner4}
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 4 Name: 
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner4}
                                                     </Text>
                                                 </Row>
                                             </Grid>
                                </Grid.Container>

                                                }
                                                {
                                                    totalowners==3 &&
                                                    <Grid.Container gap={0.5}
                                                    css={{
                                                        jc: 'center',
                                                        alignItems: 'center',
                                                        textAlign: 'center'
                                                    }}>
                                                    <Grid>
                                                    <Row
                                                    css={{
                                                        jc: 'center',
                                                        textAlign: 'center'
                                                    }}>
                                                        <Text hideIn={'xs'}
                                                        css={{
                                                            fontSize: '$lg',
                                                            paddingRight: '4px',
                                                            color: '$gray700'
                                                        }}>
                                                            Manager Name: 
                                                        </Text>
                                                        <Text hideIn={'xs'}
                                                        css={{
                                                            fontSize: '$lg',
                                                            fontWeight: '$semibold'
                                                        }}>
                                                            {managername}
                                                        </Text>
                                                        <Text showIn={'xs'}
                                                        css={{
                                                            fontSize: '$md',
                                                            paddingRight: '4px',
                                                            color: '$gray700'
                                                        }}>
                                                            Manager Name: 
                                                        </Text>
                                                        <Text showIn={'xs'}
                                                        css={{
                                                            fontSize: '$md',
                                                            fontWeight: '$semibold'
                                                        }}>
                                                            {managername}
                                                        </Text>
                                                    </Row>
                                                </Grid>
                                                 <Grid>
                                                 <Row
                                                 css={{
                                                     jc: 'center',
                                                     textAlign: 'center'
                                                 }}>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 2 Name: 
                                                     </Text>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner2}
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 2 Name: 
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner2}
                                                     </Text>
                                                 </Row>
                                             </Grid>
                                             <Grid>
                                                 <Row
                                                 css={{
                                                     jc: 'center',
                                                     textAlign: 'center'
                                                 }}>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 3 Name: 
                                                     </Text>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner3}
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 3 Name: 
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner3}
                                                     </Text>
                                                 </Row>
                                             </Grid>
                                </Grid.Container>
                                                }
                                                {
                                                    totalowners==2 &&
                                                    <Grid.Container gap={0.5}
                                                    css={{
                                                        jc: 'center',
                                                        alignItems: 'center',
                                                        textAlign: 'center'
                                                    }}>
                                                    <Grid>
                                                    <Row
                                                    css={{
                                                        jc: 'center',
                                                        textAlign: 'center'
                                                    }}>
                                                        <Text hideIn={'xs'}
                                                        css={{
                                                            fontSize: '$lg',
                                                            paddingRight: '4px',
                                                            color: '$gray700'
                                                        }}>
                                                            Manager Name: 
                                                        </Text>
                                                        <Text hideIn={'xs'}
                                                        css={{
                                                            fontSize: '$lg',
                                                            fontWeight: '$semibold'
                                                        }}>
                                                            {managername}
                                                        </Text>
                                                        <Text showIn={'xs'}
                                                        css={{
                                                            fontSize: '$md',
                                                            paddingRight: '4px',
                                                            color: '$gray700'
                                                        }}>
                                                            Manager Name: 
                                                        </Text>
                                                        <Text showIn={'xs'}
                                                        css={{
                                                            fontSize: '$md',
                                                            fontWeight: '$semibold'
                                                        }}>
                                                            {managername}
                                                        </Text>
                                                    </Row>
                                                </Grid>
                                                 <Grid>
                                                 <Row
                                                 css={{
                                                     jc: 'center',
                                                     textAlign: 'center'
                                                 }}>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 2 Name: 
                                                     </Text>
                                                     <Text hideIn={'xs'}
                                                     css={{
                                                         fontSize: '$lg',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner2}
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         paddingRight: '4px',
                                                         color: '$gray700'
                                                     }}>
                                                        Owner 2 Name: 
                                                     </Text>
                                                     <Text showIn={'xs'}
                                                     css={{
                                                         fontSize: '$md',
                                                         fontWeight: '$semibold'
                                                     }}>
                                                         {owner2}
                                                     </Text>
                                                 </Row>
                                             </Grid>
                                </Grid.Container>

                                                }
                                                {
                                                     totalowners==1 &&
                                                     <Grid.Container gap={0.5}
                                                     css={{
                                                         jc: 'center',
                                                         alignItems: 'center',
                                                         textAlign: 'center'
                                                     }}>
                                                     <Grid>
                                                     <Row
                                                     css={{
                                                         jc: 'center',
                                                         textAlign: 'center'
                                                     }}>
                                                         <Text hideIn={'xs'}
                                                         css={{
                                                             fontSize: '$lg',
                                                             paddingRight: '4px',
                                                             color: '$gray700'
                                                         }}>
                                                             Manager Name: 
                                                         </Text>
                                                         <Text hideIn={'xs'}
                                                         css={{
                                                             fontSize: '$lg',
                                                             fontWeight: '$semibold'
                                                         }}>
                                                             {managername}
                                                         </Text>
                                                         <Text showIn={'xs'}
                                                         css={{
                                                             fontSize: '$md',
                                                             paddingRight: '4px',
                                                             color: '$gray700'
                                                         }}>
                                                             Manager Name: 
                                                         </Text>
                                                         <Text showIn={'xs'}
                                                         css={{
                                                             fontSize: '$md',
                                                             fontWeight: '$semibold'
                                                         }}>
                                                             {managername}
                                                         </Text>
                                                     </Row>
                                                 </Grid>
                                                 </Grid.Container>
                                                }

                                                
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center'
                                                }}>
                                                    <Grid>
                                                    {finalImage &&
                                                        <Row
                                                        css={{
                                                            alignItems: 'center'
                                                        }}>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Team Logo: 
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Team Logo: 
                                                            </Text>
                                                            <Avatar
                                                                src={finalImage}
                                                                size='xl'
                                                            />
                                                            
                                                        </Row>
                                                    }
                                                    </Grid>
                                                    
                                                </Grid.Container>
                                            </Grid>
                                        </Grid.Container>
                                    </Modal.Body>
    
                                    <Modal.Footer
                                    css={{
                                        jc: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Button auto rounded 
                                        css={{
                                            background: '$gray900'
                                        }}
                                        onPress={(e)=>{
                                            sendForm(e);
                                            setRegistrationDone(true);
                                            setModalVisibility(false);
                                        }}>
                                            <Text
                                            css={{
                                                color: 'Black',
                                                fontWeight: '$semibold'
                                            }}>
                                                Pay
                                            </Text>
                                        </Button>
                                    </Modal.Footer>
    
                                </Modal>
                        </Grid>
                    </Grid.Container>
                    
                </Grid>
            </Grid.Container>
            
            
        }   
            {RegistrationDone &&
                <Grid.Container
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                }}>
                    <Grid>
                        <Grid.Container
                        css={{
                            jc: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                            css={{
                                color: '$green600',
                                fontSize: '$5xl',
                                fontWeight: '$semibold'
                            }}>
                                Registration Complete!
                            </Text>
                        </Grid.Container>
                        <Grid.Container
                        css={{
                            jc: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                            css={{
                                color: 'white',
                                fontSize: '$2xl',
                                fontWeight: '$medium',
                                paddingBottom: '40px'
                            }}>
                                You can find the your team details below!
                            </Text>
                        </Grid.Container>
                        <Grid.Container
                        css={{
                            jc: 'center',
                            alignItems: 'center'
                        }}>
                            <Grid>
                                <Grid.Container gap={0.5}
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid>
                                        <Row
                                        css={{
                                            jc: 'center',
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Team Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {teamname}
                                            </Text>

                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Team Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {teamname}
                                            </Text>
                                        </Row>
                                    </Grid>
                                </Grid.Container>
                                <Grid.Container gap={0.5}
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                        <Text hideIn={'xs'}
                                        css={{
                                            fontSize: '$lg',
                                            paddingRight: '4px',
                                            color: '$gray700'
                                        }}>
                                            Manager Name:  
                                        </Text>
                                        <Text hideIn={'xs'}
                                        css={{
                                            fontSize: '$lg',
                                            fontWeight: '$semibold'
                                        }}>
                                            {managername}
                                        </Text>

                                        <Text showIn={'xs'}
                                        css={{
                                            fontSize: '$md',
                                            paddingRight: '4px',
                                            color: '$gray700'
                                        }}>
                                            Manager Name:  
                                        </Text>
                                        <Text showIn={'xs'}
                                        css={{
                                            fontSize: '$md',
                                            fontWeight: '$semibold'
                                        }}>
                                            {managername}
                                        </Text>
                                    
                                </Grid.Container>
                                <Grid.Container gap={0.5}
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid>
                                        <Row
                                        css={{
                                            jc: 'center',
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Manager Email ID:  
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {manageremail}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Manager Email ID:  
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {manageremail}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid>
                                        <Row
                                        css={{
                                            jc: 'center',
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Manager Phone Number: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {managerphone}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Manager Phone Number: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {managerphone}
                                            </Text>
                                        </Row>
                                    </Grid>
                                </Grid.Container>
                                <Grid.Container gap={0.5}
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>

                                    <Grid>
                                        <Row
                                        css={{
                                            jc: 'center',
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                 Number of Team Owners: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {totalowners}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Number of Team Owners: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {totalowners}
                                            </Text>
                                        </Row>
                                    </Grid>
                                </Grid.Container>

                                {totalowners ==5 && 
                                
                                <Grid.Container gap={0.5}
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid css={{
                                        jc: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Row
                                        css={{
                                        
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 1 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner1}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 1 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner1}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid.Container gap={1} css={{
                                        jc:'center',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                    <Grid css={{
                                        jc:'center',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid css={{
                                        jc:'center',
                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Email ID: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2email}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Email ID: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2email}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    </Grid.Container>

                                    <Grid.Container css={{
                                        jc:'center',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }} gap={1}>
                                    <Grid css={{
                                        jc:'center',
                                        display: 'flex',
                                        flexDirection: 'row'

                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 3 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner3}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 3 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner3}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid css={{
                                        jc:'center'
                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 3 Email ID: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner3email}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 3 Email ID: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner3email}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    </Grid.Container>
                                    <Grid.Container css={{
                                        jc:'center',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }} gap={1}>
                                    <Grid css={{
                                        jc:'center',
                                        display: 'flex',
                                        flexDirection: 'row'

                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 4 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner4}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 4 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner4}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid css={{
                                        jc:'center'
                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 4 Email ID: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner4email}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 4 Email ID: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner4email}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    </Grid.Container>
                                    <Grid.Container css={{
                                        jc:'center',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }} gap={1}>
                                    <Grid css={{
                                        jc:'center',
                                        display: 'flex',
                                        flexDirection: 'row'

                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 5 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner5}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 5 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner5}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid css={{
                                        jc:'center'
                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 5 Email ID: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner5email}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 5 Email ID: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner5email}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    </Grid.Container>
                                            

                                </Grid.Container>}

                                {totalowners ==4 && 
                                
                                <Grid.Container gap={0.5}
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid>
                                        <Row
                                        css={{
                                        
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 1 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner1}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 1 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner1}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid.Container>
                                    <Grid css={{
                                        jc:'center',
                                        display: 'flex',
                                        flexDirection: 'row'

                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid css={{
                                        jc:'center'
                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Email ID: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2email}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Email ID: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2email}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    </Grid.Container>

                                    <Grid.Container>
                                    <Grid css={{
                                        jc:'center',
                                        display: 'flex',
                                        flexDirection: 'row'

                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 3 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner3}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 3 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner3}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid css={{
                                        jc:'center'
                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 3 Email ID: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner3email}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 3 Email ID: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner3email}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    </Grid.Container>
                                    <Grid.Container>
                                    <Grid css={{
                                        jc:'center',
                                        display: 'flex',
                                        flexDirection: 'row'

                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 4 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner4}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 4 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner4}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid css={{
                                        jc:'center'
                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 4 Email ID: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner4email}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 4 Email ID: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner4email}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    </Grid.Container>
                                </Grid.Container>}

                                {totalowners ==3 && 
                                
                                <Grid.Container gap={0.5}
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid>
                                        <Row
                                        css={{
                                        
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 1 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner1}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 1 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner1}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid.Container>
                                    <Grid css={{
                                        jc:'center',
                                        display: 'flex',
                                        flexDirection: 'row'

                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid css={{
                                        jc:'center'
                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Email ID: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2email}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Email ID: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2email}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    </Grid.Container>

                                    <Grid.Container>
                                    <Grid css={{
                                        jc:'center',
                                        display: 'flex',
                                        flexDirection: 'row'

                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 3 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner3}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 3 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner3}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid css={{
                                        jc:'center'
                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 3 Email ID: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner3email}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 3 Email ID: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner3email}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    </Grid.Container>
                                </Grid.Container>}

                                
                                {totalowners ==2 && 
                                
                                <Grid.Container gap={0.5}
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid>
                                        <Row
                                        css={{
                                        
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 1 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner1}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 1 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner1}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid.Container>
                                    <Grid css={{
                                        jc:'center',
                                        display: 'flex',
                                        flexDirection: 'row'

                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    <Grid css={{
                                        jc:'center'
                                    }}>
                                        <Row
                                        css={{
                                            
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Email ID: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2email}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 2 Email ID: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner2email}
                                            </Text>
                                        </Row>
                                    </Grid>
                                    </Grid.Container>

                                    
                                </Grid.Container>}

                                {totalowners ==1 && 
                                
                                <Grid.Container gap={0.5}
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid>
                                        <Row
                                        css={{
                                        
                                            textAlign: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 1 Name: 
                                            </Text>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner1}
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Owner 1 Name: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$semibold'
                                            }}>
                                                {owner1}
                                            </Text>
                                        </Row>
                                    </Grid>        
                                </Grid.Container>}
                                

                                {/* picture */}
                                <Grid.Container gap={0.5}
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Grid>
                                    {finalImage &&
                                        <Row
                                        css={{
                                            alignItems: 'center'
                                        }}>
                                            <Text hideIn={'xs'}
                                            css={{
                                                fontSize: '$lg',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Team Logo: 
                                            </Text>
                                            <Text showIn={'xs'}
                                            css={{
                                                fontSize: '$md',
                                                paddingRight: '4px',
                                                color: '$gray700'
                                            }}>
                                                Picture: 
                                            </Text>
                                            <Avatar
                                                src={finalImage}
                                                size='xl'
                                            />
                                            
                                        </Row>
                                    }
                                    </Grid>
                                    
                                </Grid.Container>
                            </Grid>
                        </Grid.Container>
                    </Grid>
                </Grid.Container>
            }

        </div>
    )
}