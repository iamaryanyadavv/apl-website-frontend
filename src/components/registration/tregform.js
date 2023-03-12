import React, {useState, useEffect} from "react";
import './tregform.css';
import { Grid, Input, Loading, Modal, Text, Dropdown, Button, Row, Col, Avatar, Radio} from "@nextui-org/react";
import { useTicker } from "../../hooks";
import jwt_decode from "jwt-decode";
import imageCompression from 'browser-image-compression';

export default function TRegForm() {

    //12:30pm on 23rd March, 2023 GMT or 6pm on 23rd March, 2023 IST
    const endDate = "2023-03-10T12:30:00.000Z"; 
    
    const { days, hours, minutes, seconds, isTimeUp } = useTicker(endDate);

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
    const [owner2phone, setOwner2phone] = useState('')
    const [owner2phonestatus, setOwner2phonestatus] = useState('')
    

    const [owner3, SetOwner3] = useState('');
    const [owner3email, setOwner3email] = useState('');
    const [owner3status, SetOwner3status] = useState('');
    const [owner3emailstatus, SetOwneremail3status] = useState('');
    const [owner3phone, setOwner3phone] = useState('')
    const [owner3phonestatus, setOwner3phonestatus] = useState('')

    const [owner4, SetOwner4] = useState('');
    const [owner4email, setOwner4email] = useState('');
    const [owner4status, SetOwner4status] = useState('');
    const [owner4emailstatus, SetOwneremail4status] = useState('');
    const [owner4phone, setOwner4phone] = useState('')
    const [owner4phonestatus, setOwner4phonestatus] = useState('')

    const [owner5, SetOwner5] = useState('');
    const [owner5email, setOwner5email] = useState('');
    const [owner5status, SetOwner5status] = useState('');
    const [owner5emailstatus, SetOwneremail5status] = useState('');
    const [owner5phone, setOwner5phone] = useState('')
    const [owner5phonestatus, setOwner5phonestatus] = useState('')

    const [signedin, setSignedIn] = useState(false);
    const [initialImage, setInitialImage] = useState('');
    const [finalImage, setFinalImage] = useState('');

    const [AlreadyRegistered, setAlreadyRegistered] = useState(false);
    const [RegistrationDone, setRegistrationDone] = useState();

    const [HelperColor, setHelperColor] = useState('');
    const [ModalVisibility, setModalVisibility] = useState(false);
    const [LoginLoader, setLoginLoader] = useState(false);

    const [paymentSC, setPaymentSC] = useState();
    const [paymentSCUploaded, setPaymentSCUploaded] = useState();
    const [teamlogoUploaded, setTeamlogoUploaded] = useState();

    const [RegStatusModal, setRegStatusModal] = useState(false);

    const [User, setUser] = useState({});

    const[paymentmode, setPaymentmode] = useState('Webstie - UPI');

    async function checkIfRegSuccess(manageremail){
        await fetch('http://localhost:3001/registration/team')
        .then(response=>response.json())
        .then((data)=>{
            if(data.values){
                for(var i = 0; i < data.values.length; i++){
                    if(manageremail===data.values[i][0]){
                        console.log('found')
                        setRegStatusModal(true)
                        setRegistrationDone(true)
                    }
                    else if(manageremail!==data.values[i][0]){
                        setRegStatusModal(false)
                        setRegistrationDone(false)
                    }
                }
            }
            else if(!data.values){
                setRegStatusModal(true)
                setRegistrationDone(true)
            }
        })
    }

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
        if(owner2phone)
        {
            setOwner2phonestatus('success')
        }
        if(!owner2phone)
        {
            setOwner2phonestatus('error')
        }
        if(owner3phone)
        {
            setOwner3phonestatus('success')
        }
        if(!owner3phone)
        {
            setOwner3phonestatus('error')
        }
        if(owner4phone)
        {
            setOwner4phonestatus('success')
        }
        if(!owner4phone)
        {
            setOwner4phonestatus('error')
        }
        if(owner5phone)
        {
            setOwner5phonestatus('success')
        }
        if(!owner5phone)
        {
            setOwner5phonestatus('error')
        }
        

        if(teamname && managername && manageremail && managerphone && totalowners==='5' && owner1 && owner2 && owner3 && owner4 && owner5 && paymentSC && teamlogoUploaded
        && owner2email && owner3email && owner4email && owner5email
        && owner2phone && owner3phone && owner4phone && owner5phone){
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
            SetOwneremail5status('warning');
            SetOwneremail4status('warning');
            SetOwneremail3status('warning');
            SetOwneremail2status('warning');
            setOwner2phonestatus('warning');
            setOwner3phonestatus('warning');
            setOwner4phonestatus('warning');
            setOwner5phonestatus('warning');

            return true
        }
        else if(teamname && managername && manageremail && managerphone && totalowners==='4' && owner1 && owner2 && owner3 && owner4 && paymentSC && teamlogoUploaded
        && owner2email && owner3email && owner4email
        && owner2phone && owner3phone && owner4phone)
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
            SetOwneremail4status('warning');
            SetOwneremail3status('warning');
            SetOwneremail2status('warning');
            setOwner2phonestatus('warning');
            setOwner3phonestatus('warning');
            setOwner4phonestatus('warning');
            return true
        }
        else if(teamname && managername && manageremail && managerphone && totalowners==='3' && owner1 && owner2 && owner3 && paymentSC && teamlogoUploaded
        && owner2email && owner3email
        && owner2phone && owner3phone)
        {
            setTeamnamestatus('warning');
            SetManagernamestatus('warning');
            SetManagerphonestatus('warning');
            SetManageremailstatus('warning');
            SetTotalownersstatus('warning');
            SetOwner1status('warning');
            SetOwner2status('warning');
            SetOwner3status('warning');
            SetOwneremail3status('warning');
            SetOwneremail2status('warning');
            setOwner2phonestatus('warning');
            setOwner3phonestatus('warning');
            return true
        }
        else if(teamname && managername && manageremail && managerphone && totalowners==='2' && owner1 && owner2 && paymentSC && teamlogoUploaded
        && owner2email
        && owner2phone) 
        {
            setTeamnamestatus('warning');
            SetManagernamestatus('warning');
            SetManagerphonestatus('warning');
            SetManageremailstatus('warning');
            SetTotalownersstatus('warning');
            SetOwner1status('warning');
            SetOwner2status('warning');
            SetOwneremail2status('warning');
            setOwner2phonestatus('warning');
            return true
        }
        else if(teamname && managername && manageremail && managerphone && totalowners==='1' && owner1 && paymentSC && teamlogoUploaded)
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

    async function sendTeamLogo(imagedata){
        var imageName = teamname;
        const ImageData = new FormData();
        ImageData.append('file', imagedata, imageName);
        if(ImageData){
            await fetch('http://localhost:3001/registration/teamlogo',{
                method: 'POST',
                headers:{Value: "multipart/form-data"},
                body: ImageData
            })
        }
    }

    async function sendPaymentImage(paymentdata){
        var paymentName = teamname + " Payment";
        const PaymentData = new FormData();
        PaymentData.append('file', paymentdata, paymentName);
        if(PaymentData){
            await fetch('http://localhost:3001/registration/teampaymentimages',{
                method: 'POST',
                headers:{Value: "multipart/form-data"},
                body: PaymentData
            })
        }
    }

    const getRegisteredTeamsEmailData= async (userObject) =>{
        await fetch('http://localhost:3001/registration/team')
        .then(response=>response.json())
        .then((data)=>{
            var isSignedin = false
            if(data.values){
                for(var i = 0; i < data.values.length; i++){
                    if(userObject.email!=data.values[i][0]){
                        isSignedin=true
                    }
                    else{
                        isSignedin=false
                        break;
                    }
                }
                if(isSignedin===true){
                    setLoginLoader(false)
                    setSignedIn(true)
                    document.getElementById("GoogleButton").hidden = true;
                    setUser(userObject);
                    SetManageremail(userObject.email);
                    SetManagername(userObject.given_name+" "+userObject.family_name);
                    SetOwner1(userObject.given_name+" "+userObject.family_name);
                    setAlreadyRegistered(false)
                    SetManageremailstatus('success')
                    SetOwner1status('success')
                }
                else{
                    setLoginLoader(false);
                    setSignedIn(false)
                    setAlreadyRegistered(true)
                    document.getElementById("GoogleButton").hidden = false;
                }   
            }
            else if(!data.values){
                setLoginLoader(false);
                setSignedIn(true)
                setAlreadyRegistered(false)
                document.getElementById("GoogleButton").hidden = true;
                setUser(userObject);
                SetManageremail(userObject.email);
                SetManagername(userObject.given_name+" "+userObject.family_name);
                SetOwner1(userObject.given_name+" "+userObject.family_name);
                setAlreadyRegistered(false)
                SetManageremailstatus('success')
                SetOwner1status('success')
            }
            
             
        })
    } 

    async function sendForm(e)
    {
        if(teamname && managername && manageremail && managerphone && totalowners==1 && owner1 && !owner2 && !owner3 && !owner4 && !owner5 ){
            console.log('coming in owner1')
            await fetch("http://localhost:3001/registration/team",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                teamlogo: finalImage,
                manageremail: manageremail,
                teamname: teamname,
                paymentmode: paymentmode,
                managername: managername,
                teamownersnames: owner1,
                managerphone: managerphone,
                teamownersemailIDs: manageremail,
                teamownersphones: managerphone
            }),
        });
        }
        if(teamname && managername && manageremail && managerphone && totalowners==2 && owner1 && owner2 && !owner3 && !owner4 && !owner5 ){
            console.log('coming in owner1+2')
            await fetch("http://localhost:3001/registration/team",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                teamlogo: finalImage,
                manageremail: manageremail,
                teamname: teamname,
                paymentmode: paymentmode,
                managername: managername,
                teamownersnames: owner1 + ', ' + owner2,
                managerphone: managerphone,
                teamownersemailIDs: manageremail + ', ' + owner2email,
                teamownersphones: managerphone + ', ' + owner2phone
            }),
        });
        }
        if(teamname && managername && manageremail && managerphone && totalowners==3 && owner1 && owner2 && owner3 && !owner4 && !owner5 ){
            await fetch("http://localhost:3001/registration/team",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                teamlogo: finalImage,
                manageremail: manageremail,
                teamname: teamname,
                paymentmode: paymentmode,
                managername: managername,
                teamownersnames: owner1 + ', ' + owner2 + ', ' + owner3,
                managerphone: managerphone,
                teamownersemailIDs: manageremail + ', ' + owner2email + ', ' + owner3email,
                teamownersphones: managerphone + ', ' + owner2phone + ', ' + owner3phone 
            }),
        });
        }
        if(teamname && managername && manageremail && managerphone && totalowners==4 && owner1 && owner2 && owner3 && owner4 && !owner5 ){
            await fetch("http://localhost:3001/registration/team",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                teamlogo: finalImage,
                manageremail: manageremail,
                teamname: teamname,
                paymentmode: paymentmode,
                managername: managername,
                teamownersnames: owner1 + ', ' + owner2 + ', ' + owner3 + ', ' + owner4,
                managerphone: managerphone,
                teamownersemailIDs: manageremail + ', ' + owner2email + ', ' + owner3email + ', ' + owner4email,
                teamownersphones: managerphone + ', ' + owner2phone + ', ' + owner3phone + ', ' + owner4phone
            }),
        });
        }
        if(teamname & managername & manageremail & managerphone & totalowners==5 & owner1 & owner2 & owner3 & owner4 & owner5){
            await fetch("http://localhost:3001/registration/team",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                teamlogo: finalImage,
                manageremail: manageremail,
                teamname: teamname,
                paymentmode: paymentmode,
                managername: managername,
                teamownersnames: owner1 + ', ' + owner2 + ', ' + owner3 + ', ' + owner4 + ', ' + owner5,
                managerphone: managerphone,
                teamownersemailIDs: manageremail + ', ' + owner2email + ', ' + owner3email + ', ' + owner4email + ', ' + owner5email,
                teamownersphones: managerphone + ', ' + owner2phone + ', ' + owner3phone + ', ' + owner4phone + ', ' + owner5phone
            }),
        });
        }
        
    }

    const convertImageToBase64 = async (e) => {
        const options = {
            maxSizeMB: 0.030,
            maxWidthOrHeight: 720,
            useWebWorker: true
        }

        const compressedFile = await imageCompression(initialImage, options);
        
        convertBlobToBase64(compressedFile)
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
        setLoginLoader(true); 
        getRegisteredTeamsEmailData(userObject);
    }
    
    useEffect( ()=>{
        setLoginLoader(true)
        window.setTimeout(()=>{
            window.google.accounts.id.initialize({
                client_id: "307601456989-5ii0dp5jhqah6snpkuf9ff1jajp67ku6.apps.googleusercontent.com",
                callback: handleCallbackresponse
            });
            
            window.google.accounts.id.renderButton(
                document.getElementById("GoogleButton"),
                { theme: 'outlined', size: 'large', shape: 'pill',}
            ); 
            setLoginLoader(false)
        }, 2000)
    }, [isTimeUp, RegistrationDone])

    return(
        <div>

        {!isTimeUp && 
            <div>
                <Grid.Container  gap={0}
                css={{
                    jc: 'center',
                    alignItems: 'center',
                }}>
                
                <Grid.Container
                css={{
                    jc: 'center',
                    alignItems: 'center'
                }}>
                    <Text hideIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$5xl',
                        fontWeight: '$semibold',
                        paddingBottom: '1.5%'
                    }}>
                        APL 6.0 TEAM REGISTRATION
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$3xl',
                        fontWeight: '$semibold',
                        padding: '10% 5% 0% 5%'
                    }}>
                        APL 6.0 TEAM REGISTRATION
                    </Text>
                </Grid.Container>

                <Grid.Container
                css={{
                    jc: 'center',
                    alignItems: 'center',
                    height: '70vh'
                }}>
                    <Grid.Container 
                    css={{
                        jc: 'center',
                        alignItems: 'center'
                    }}>
                        <Grid.Container gap={0}
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                        }}>
                            <Text hideIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$5xl',
                                fontWeight: '$medium',
                            }}>
                                REGISTRATION OPENS IN...
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                fontSize: '$2xl',
                                fontWeight: '$medium',
                            }}>
                                REGISTRATION OPENS IN...
                            </Text>
                        </Grid.Container>

                        <Row
                        css={{
                            jc: 'center',
                        }}>
                            

                            <Col
                            css={{
                                width: 'max-content'
                            }}>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$9xl'
                                    }}>
                                        {days}
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$6xl'
                                    }}>
                                        {days}
                                    </Text>
                                </Grid.Container>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$2xl'
                                    }}>
                                        Days
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$lg'
                                    }}>
                                        Days
                                    </Text>
                                </Grid.Container>
                            </Col>

                            <Text hideIn={'xs'}
                            css={{
                                fontSize: '$9xl',
                                padding: '0% 5%'
                            }}>
                                :
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: '$6xl',
                                padding: '0% 2.5%'
                            }}>
                                :
                            </Text>

                            <Col
                            css={{
                                width: 'max-content'
                            }}>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$9xl'
                                    }}>
                                        {hours}
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$6xl'
                                    }}>
                                        {hours}
                                    </Text>
                                </Grid.Container>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$2xl'
                                    }}>
                                        Hours
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$lg'
                                    }}>
                                        Hours
                                    </Text>
                                </Grid.Container>
                            </Col>

                            <Text hideIn={'xs'}
                            css={{
                                fontSize: '$9xl',
                                padding: '0% 5%'
                            }}>
                                :
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: '$6xl',
                                padding: '0% 2.5%'
                            }}>
                                :
                            </Text>

                            <Col
                            css={{
                                width: 'max-content'
                            }}>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$9xl'
                                    }}>
                                        {minutes}
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$6xl'
                                    }}>
                                        {minutes}
                                    </Text>
                                </Grid.Container>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$2xl'
                                    }}>
                                        Minutes
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$lg'
                                    }}>
                                        Minutes
                                    </Text>
                                </Grid.Container>
                            </Col>

                            <Text hideIn={'xs'}
                            css={{
                                fontSize: '$9xl',
                                padding: '0% 5%'
                            }}>
                                :
                            </Text>
                            <Text showIn={'xs'}
                            css={{
                                fontSize: '$6xl',
                                padding: '0% 2.5%'
                            }}>
                                :
                            </Text>

                            <Col
                            css={{
                                width: 'max-content'
                            }}>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$9xl'
                                    }}>
                                        {seconds}
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$6xl'
                                    }}>
                                        {seconds}
                                    </Text>
                                </Grid.Container>
                                <Grid.Container 
                                css={{
                                    jc: 'center',
                                }}>
                                    <Text hideIn={'xs'}
                                    css={{
                                        fontSize: '$2xl'
                                    }}>
                                        Seconds
                                    </Text>
                                    <Text showIn={'xs'}
                                    css={{
                                        fontSize: '$lg'
                                    }}>
                                        Seconds
                                    </Text>
                                </Grid.Container>
                            </Col>
                                
                            

                        </Row>
                    </Grid.Container>
                </Grid.Container>

                

                </Grid.Container>
            </div>
        }

        {isTimeUp && 
            <div>
                {/* Heading */}
                <Grid.Container gap={2}
                css={{
                    jc: 'center',
                    alignItems: 'center'
                }}>
                    <Text hideIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$5xl',
                        fontWeight: '$semibold',
                        paddingBottom: '1.5%'
                    }}>
                        APL 6.0 TEAM REGISTRATION
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$3xl',
                        fontWeight: '$semibold',
                        padding: '10% 5%'
                    }}>
                        APL 6.0 TEAM REGISTRATION
                    </Text>
                    <Text hideIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize:'$2xl',
                        fontWeight: '$medium',
                        padding: '0% 20% 2% 20%'
                    }}>
                        Fill out the form* below and pay the required registration fee to complete your registration!
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize:'$xl',
                        fontWeight: '$medium',
                        paddingBottom: '5%'
                    }}>
                        Fill out the form* below and pay the required registration fee to complete your registration!
                    </Text>

                </Grid.Container>
                {/* Form */}
                <Grid.Container gap={2}
                css={{
                    jc: 'center',
                }}>
                    <Grid.Container
                            css={{
                                jc: 'center',
                                paddingTop:"1%"
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
                                <Modal
                                open={signedin}
                                closeButton
                                >
                                        <Modal.Header
                                        css={{
                                            paddingTop: '0px',
                                        }}>
                                            <Col>
                                                <Text 
                                                css={{
                                                    textAlign: 'center',
                                                    fontSize: '$3xl',
                                                    fontWeight: '$bold',
                                                    color: '$green600',
                                                    borderStyle: 'solid',
                                                    borderWidth: '0px 0px 1px 0px',
                                                    borderColor: '$gray800'
                                                }}>
                                                    Success!
                                                </Text>
                                                
                                            </Col>
                                        </Modal.Header>
                                        <Modal.Body
                                        css={{
                                            paddingTop: '0px'
                                        }}>
                                            <Text 
                                            css={{
                                                textAlign: 'center',
                                                fontSize: '$xl',
                                                fontWeight: '$semibold',
                                                color: 'white',
                                            }}>
                                                You have been successfully logged in as {User.name}
                                            </Text>
                                        </Modal.Body>
                                        
                                </Modal>
                            
                            </div>
                            }
        
                            {!signedin && !LoginLoader &&
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

                            {LoginLoader && //Show loader when LoginLoader===true - for the lag between loggin in and shoing welcome message
                            <Grid.Container
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                            }}>
                                <Grid>
                                    <Loading
                                    size="xl"
                                    color='white'

                                    />
                                </Grid>
                            </Grid.Container>
                            }

                            {AlreadyRegistered && //If user is already registered, show error message
                            
                            <Grid.Container
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}>
                                <Modal
                                open={AlreadyRegistered}
                                closeButton
                                onClose={()=>{setAlreadyRegistered(false); window.location.pathname='/registration/team'; }}
                                >
                                        <Modal.Header
                                        css={{
                                            paddingTop: '0px',
                                        }}>
                                            <Col>
                                                <Text 
                                                css={{
                                                    textAlign: 'center',
                                                    fontSize: '$3xl',
                                                    fontWeight: '$bold',
                                                    color: '$red600',
                                                    borderStyle: 'solid',
                                                    borderWidth: '0px 0px 1px 0px',
                                                    borderColor: '$gray800'
                                                }}>
                                                    Error!
                                                </Text>
                                                
                                            </Col>
                                        </Modal.Header>
                                        <Modal.Body
                                        css={{
                                            paddingTop: '0px'
                                        }}>
                                            <Text 
                                            css={{
                                                textAlign: 'center',
                                                fontSize: '$xl',
                                                fontWeight: '$bold',
                                                color: 'white',
                                            }}>
                                                It seems that you have already registered with this email address.
                                            </Text>
                                        </Modal.Body>
                                        
                                </Modal>
                            </Grid.Container>
                            
                            }   

                            <Grid.Container gap={2}
                            css={{
                                jc: 'center',
                                alignItems: 'center'
                            }}>
                                {/* Teamname */}
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
                                                }} animated={true} placeholder='Team Name' type='text'  clearable required/>
                                        </Grid>

                                    </Grid.Container>
                                </Grid>

                            </Grid.Container>       
                    
                    
                    {/* Manager */}
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
                            {/* Manager name */}
                            {managername &&
                            <Grid>
                                <Input disabled={!signedin} status={Managernamestatus} onChange={(event)=>
                                    {SetManagername(event.target.value); SetOwner1(event.target.value);
                                        if(event.target.value){
                                            SetManagernamestatus('success')
                                        }
                                        else if(!event.target.value){
                                            SetManagernamestatus('error')
                                        }}} animated={true} placeholder={managername} type='text' clearable required/>
                            </Grid>
                            }

                            {!managername &&
                            <Grid>
                                <Input disabled={!signedin} status={Managernamestatus} onChange={(event)=>
                                    {SetManagername(event.target.value); SetOwner1(event.target.value);
                                        if(event.target.value){
                                            SetManagernamestatus('success')
                                        }
                                        else if(!event.target.value){
                                            SetManagernamestatus('error')
                                        }}} animated={true} placeholder={'Manager Name'} type='text'   clearable required/>
                            </Grid>
                            } 
                            
                            {/* Manager email */}
                            {manageremail &&
                            <Grid>
                                <Input disabled status={Manageremailstatus} css={{width:'300px'}} onChange={(event)=>{SetManageremail(event.target.value)
                                if(event.target.value){
                                    SetManageremailstatus('success')
                                }
                                else if(!event.target.value){
                                    SetManageremailstatus('error')
                                }
                                }} animated={true} readOnly placeholder={manageremail} type='text'   clearable/>
                            </Grid>
                            }
                            {!manageremail &&
                            <Grid>
                                <Input disabled status={Manageremailstatus} css={{width:'300px'}} onChange={(event)=>{SetManageremail(event.target.value)
                                if(event.target.value){
                                    SetManageremailstatus('success')
                                }
                                else if(!event.target.value){
                                    SetManageremailstatus('error')
                                }
                                }} animated={true} readOnly placeholder='Email ID' type='text'   clearable/>
                            </Grid>
                            }

                            <Grid>
                                <Input disabled={!signedin} status={Managerphonestatus} onChange={(event)=>{SetManagerphone(event.target.value)
                                if(event.target.value.length>10 || event.target.value.length<10){
                                    SetManagerphonestatus('error')
                                }
                                else if(event.target.value.length===10){
                                    SetManagerphonestatus('success')
                                }}} animated={true} placeholder='Phone' type='text'   clearable required/>
                            </Grid>

                        </Grid.Container>
                    </Grid>
                        
                    {/* Team Owners */}
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
                    
                    {/* Owners details */}
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
                                        <Input disabled status={owner1status} onChange={(event)=>{
                                            SetOwner1(event.target.value)
                                            if(event.target.value){
                                                SetOwner1status('success')
                                            }
                                            else if(!event.target.value){
                                                SetOwner1status('error')
                                            }
                                            }} labelLeft="1st" labelRight='(Manager)' placeholder={managername} />
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
                                            }}}   labelLeft="1st" labelRight='(Manager)' placeholder={managername} />
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
                                            }}   labelLeft="2nd" placeholder="Full Name" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner2emailstatus} onChange={(event)=>{setOwner2email(event.target.value)
                                                if(event.target.value){
                                                    SetOwneremail2status('success')
                                                }
                                                else if(!event.target.value){
                                                    SetOwneremail2status('error')
                                                }}}   labelLeft="2nd" placeholder="Email Address" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner2phonestatus} onChange={(event)=>{setOwner2phone(event.target.value)
                                                if(event.target.value){
                                                    setOwner2phonestatus('success')
                                                }
                                                else if(!event.target.value){
                                                    setOwner2phonestatus('error')
                                                }}}   labelLeft="2nd" placeholder="Phone Number" />
                                            </Grid>
                                            </Grid.Container>
                                            
                                    </Grid.Container>
                                </div>
                                
                            :   (totalowners==='3'
                                ?   
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
                                                }}}   labelLeft="1st" labelRight='(Manager)' placeholder={managername} />
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
                                                }}}   labelLeft="2nd" placeholder="Full Name" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner2emailstatus} onChange={(event)=>{setOwner2email(event.target.value)
                                                if(event.target.value){
                                                    SetOwneremail2status('success')
                                                }
                                                else if(!event.target.value){
                                                    SetOwneremail2status('error')
                                                }}}   labelLeft="2nd" placeholder="Email Address" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner2phonestatus} onChange={(event)=>{setOwner2phone(event.target.value)
                                                if(event.target.value){
                                                    setOwner2phonestatus('success')
                                                }
                                                else if(!event.target.value){
                                                    setOwner2phonestatus('error')
                                                }}}   labelLeft="2nd" placeholder="Phone Number" />
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
                                                }}}   labelLeft="3rd" placeholder="Full Name" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner3emailstatus} onChange={(event)=>{setOwner3email(event.target.value)
                                                if(event.target.value){
                                                    SetOwneremail3status('success')
                                                }
                                                else if(!event.target.value){
                                                    SetOwneremail3status('error')
                                                }}}   labelLeft="3rd" placeholder="Email Address" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner3phonestatus} onChange={(event)=>{setOwner3phone(event.target.value)
                                                if(event.target.value){
                                                    setOwner3phonestatus('success')
                                                }
                                                else if(!event.target.value){
                                                    setOwner3phonestatus('error')
                                                }}}   labelLeft="3rd" placeholder="Phone Number" />
                                            </Grid>
                                            </Grid.Container>
                                    </Grid.Container>
                                    </div>
                                    
                                :   (totalowners==='4'
                                    ?   
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
                                                }}}   labelLeft="1st" labelRight='(Manager)' placeholder={managername} />
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
                                                }}}   labelLeft="2nd" placeholder="Full Name" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner2emailstatus} onChange={(event)=>{setOwner2email(event.target.value)
                                                if(event.target.value){
                                                    SetOwneremail2status('success')
                                                }
                                                else if(!event.target.value){
                                                    SetOwneremail2status('error')
                                                }}}   labelLeft="2nd" placeholder="Email Address" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner2phonestatus} onChange={(event)=>{setOwner2phone(event.target.value)
                                                if(event.target.value){
                                                    setOwner2phonestatus('success')
                                                }
                                                else if(!event.target.value){
                                                    setOwner2phonestatus('error')
                                                }}}   labelLeft="2nd" placeholder="Phone Number" />
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
                                                }}}   labelLeft="3rd" placeholder="Full Name" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner3emailstatus} onChange={(event)=>{setOwner3email(event.target.value)
                                                if(event.target.value){
                                                    SetOwneremail3status('success')
                                                }
                                                else if(!event.target.value){
                                                    SetOwneremail3status('error')
                                                }}}   labelLeft="3rd" placeholder="Email Address" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner3phonestatus} onChange={(event)=>{setOwner3phone(event.target.value)
                                                if(event.target.value){
                                                    setOwner3phonestatus('success')
                                                }
                                                else if(!event.target.value){
                                                    setOwner3phonestatus('error')
                                                }}}   labelLeft="3rd" placeholder="Phone Number" />
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
                                                }}}   labelLeft="4th" placeholder="Full Name" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner4emailstatus} onChange={(event)=>{setOwner4email(event.target.value)
                                                if(event.target.value){
                                                    SetOwneremail4status('success')
                                                }
                                                else if(!event.target.value){
                                                    SetOwneremail4status('error')
                                                }}}   labelLeft="4th" placeholder="Email Address" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner4phonestatus} onChange={(event)=>{setOwner4phone(event.target.value)
                                                if(event.target.value){
                                                    setOwner4phonestatus('success')
                                                }
                                                else if(!event.target.value){
                                                    setOwner4phonestatus('error')
                                                }}}   labelLeft="4th" placeholder="Phone Number" />
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
                                                }}}   labelLeft="1st" labelRight='(Manager)' placeholder={managername} />
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
                                                }}}   labelLeft="2nd" placeholder="Full Name" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner2emailstatus} onChange={(event)=>{setOwner2email(event.target.value)
                                                if(event.target.value){
                                                    SetOwneremail2status('success')
                                                }
                                                else if(!event.target.value){
                                                    SetOwneremail2status('error')
                                                }}}   labelLeft="2nd" placeholder="Email Address" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner2phonestatus} onChange={(event)=>{setOwner2phone(event.target.value)
                                                if(event.target.value){
                                                    setOwner2phonestatus('success')
                                                }
                                                else if(!event.target.value){
                                                    setOwner2phonestatus('error')
                                                }}}   labelLeft="2nd" placeholder="Phone Number" />
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
                                                }}}   labelLeft="3rd" placeholder="Full Name" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner3emailstatus} onChange={(event)=>{setOwner3email(event.target.value)
                                                if(event.target.value){
                                                    SetOwneremail3status('success')
                                                }
                                                else if(!event.target.value){
                                                    SetOwneremail3status('error')
                                                }}}   labelLeft="3rd" placeholder="Email Address" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner3phonestatus} onChange={(event)=>{setOwner3phone(event.target.value)
                                                if(event.target.value){
                                                    setOwner3phonestatus('success')
                                                }
                                                else if(!event.target.value){
                                                    setOwner3phonestatus('error')
                                                }}}   labelLeft="3rd" placeholder="Phone Number" />
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
                                                }}}   labelLeft="4th" placeholder="Full Name" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner4emailstatus} onChange={(event)=>{setOwner4email(event.target.value)
                                                if(event.target.value){
                                                    SetOwneremail4status('success')
                                                }
                                                else if(!event.target.value){
                                                    SetOwneremail4status('error')
                                                }}}   labelLeft="4th" placeholder="Email Address" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner4phonestatus} onChange={(event)=>{setOwner4phone(event.target.value)
                                                if(event.target.value){
                                                    setOwner4phonestatus('success')
                                                }
                                                else if(!event.target.value){
                                                    setOwner4phonestatus('error')
                                                }}}   labelLeft="4th" placeholder="Phone Number" />
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
                                                }}}   labelLeft="5th" placeholder="Full Name" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner5emailstatus} onChange={(event)=>{setOwner5email(event.target.value)
                                                if(event.target.value){
                                                    SetOwneremail5status('success')
                                                }
                                                else if(!event.target.value){
                                                    SetOwneremail5status('error')
                                                }}}   labelLeft="5th" placeholder="Email Address" />
                                            </Grid>
                                            <Grid>
                                                <Input disabled={!signedin} status={owner5phonestatus} onChange={(event)=>{setOwner5phone(event.target.value)
                                                if(event.target.value){
                                                    setOwner5phonestatus('success')
                                                }
                                                else if(!event.target.value){
                                                    setOwner5phonestatus('error')
                                                }}}   labelLeft="5th" placeholder="Phone Number" />
                                            </Grid>
                                            </Grid.Container>
                                        </Grid.Container>
                                        </div>
                                    )
                                )
                            )
                        }
                        

                    </Grid>

                    {/* Team logo and payment details */}
                    <Grid
                    css={{
                        width: '1024px'
                    }}>
                        <Grid.Container gap={2} css={{
                                jc: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <Col>
                                {teamlogoUploaded===false && 
                                        <Text
                                        css={{
                                            jc: 'center',
                                            textAlign: 'center',
                                            color: '$red600',
                                            fontSize: '$xl',
                                            fontWeight: '$semibold',
                                            paddingTop: '1.5%'
                                        }}>
                                            Please upload the Team Logo!
                                        </Text>
                                        }
                                        <Text css={{
                                        jc:'center',
                                        textAlign: 'center',
                                        paddingBottom: '1%',
                                        fontSize: '$4xl',
                                        fontWeight: '$semibold'
                                    }}>
                                        Team Logo
                                </Text>
                                </Col>
                                
                                <input disabled={!signedin} 
                                onChange={(event)=>{
                                    
                                    if(event.target.files[0].size>220000){
                                        window.alert('Maximum file size: 2mb!')
                                    }
                                    else{
                                        setInitialImage(event.target.files[0])
                                        console.log('Thank you for correct image size')
                                    }
                                }} 
                                className="photobtn" animated={'true'} type='file' accept="image/*" required/>
                                <Text>
                                    Max: 2mb
                                </Text>
                        </Grid.Container>

                        {/* Payment details */}
                        <Grid.Container gap={2}
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                paddingBottom:'20px',
                                paddingTop:'20px'
                            }}>
                                <Col>
                                    {paymentSCUploaded===false && 
                                    <Text
                                    css={{
                                        jc: 'center',
                                        textAlign: 'center',
                                        color: '$red600',
                                        fontSize: '$xl',
                                        fontWeight: '$semibold',
                                        paddingTop: '1.5%'
                                    }}>
                                        Please upload payment screenshot from your UPI service app!
                                    </Text>
                                    }
                                    
                                    <Text
                                    css={{
                                        jc:'center',
                                        textAlign: 'center',
                                        fontSize: '$4xl',
                                        fontWeight: '$semibold'
                                    }}>
                                        Payment
                                    </Text>
                                    <Text 
                                    css={{
                                        jc:'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$medium'
                                    }}>
                                        Please pay the amount (6000) to Uday Srivastava, via PayTM or GPay.
                                    </Text>
                                    <Text 
                                    css={{
                                        jc:'center',
                                        textAlign: 'center',
                                        fontSize: '$xl',
                                        fontWeight: '$medium'
                                    }}>
                                        (8447906230, UPI ID: )
                                    </Text>
                                </Col>
                                <Grid>
                                    <input disabled={!signedin} onChange={(event)=>{setPaymentSC(event.target.files[0]); }} className="photobtn" animated={'true'} type='file' accept="image/*" required/>
                                </Grid>
                                
                        </Grid.Container>
                    
                    {/* payment button */}
                        <Grid.Container gap={4}
                        css={{
                            jc: 'center'
                        }}>
                            <Grid>
                                <Button auto rounded disabled={!signedin}
                                css={{
                                    background: '$gray900'
                                }}
                                onPress={()=>{
                                    if(initialImage)
                                    {   convertImageToBase64();
                                        setTeamlogoUploaded(true)
                                    }
                                    if(!initialImage){
                                        setTeamlogoUploaded(false)
                                    }
                                    if(paymentSC){
                                        setPaymentSCUploaded(true)
                                    }
                                    if(!paymentSC){
                                        setPaymentSCUploaded(false)
                                    }
                                    setModalVisibility(CheckForm());
                                }}>
                                    <Text
                                    css={{
                                        color: 'Black',
                                        fontWeight: '$semibold'
                                    }}>
                                        Register
                                    </Text>
                                </Button>
                                
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

                                                
                                                
                                                    {totalowners===5 &&
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
                                                    totalowners===4 &&
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
                                                    totalowners===3 &&
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
                                                    totalowners===2 &&
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
                                                        totalowners===1 &&
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
                                            sendPaymentImage(paymentSC);
                                            sendTeamLogo(initialImage);
                                            setModalVisibility(false);
                                            checkIfRegSuccess(manageremail)
                                        }}>
                                            <Text
                                            css={{
                                                color: 'Black',
                                                fontWeight: '$semibold'
                                            }}>
                                                Register
                                            </Text>
                                        </Button>
                                    </Modal.Footer>

                                </Modal>
                                {RegistrationDone===true && 
                                <Modal
                                open={RegStatusModal}
                                closeButton
                                onClose={()=>{
                                    setRegStatusModal(false)
                                    window.location.pathname='./registration/team'
                                }}
                                >
                                        <Modal.Header
                                        css={{
                                            paddingTop: '0px',
                                        }}>
                                            <Col>
                                                <Text 
                                                css={{
                                                    textAlign: 'center',
                                                    fontSize: '$3xl',
                                                    fontWeight: '$bold',
                                                    color: '$green600',
                                                    borderStyle: 'solid',
                                                    borderWidth: '0px 0px 1px 0px',
                                                    borderColor: '$gray800'
                                                }}>
                                                    Success!
                                                </Text>
                                                
                                            </Col>
                                        </Modal.Header>
                                        <Modal.Body
                                        css={{
                                            paddingTop: '0px'
                                        }}>
                                            <Text 
                                            css={{
                                                textAlign: 'center',
                                                fontSize: '$xl',
                                                fontWeight: '$semibold',
                                                color: 'white',
                                            }}>
                                                You have been successfully registered as {teamname}
                                            </Text>
                                            <Text 
                                            css={{
                                                textAlign: 'center',
                                                fontSize: '$xl',
                                                fontWeight: '$semibold',
                                                color: 'white',
                                            }}>
                                                You can check out the full list of APL6.0 registered teams here
                                            </Text>
                                            <Text 
                                            css={{
                                                textAlign: 'center',
                                                fontSize: '$lg',
                                                fontWeight: '$medium',
                                                color: 'white',
                                            }}>
                                                <a href="/seasons/apl6/teams">APL 6.0 Registered Teams</a>
                                            </Text>
                                        </Modal.Body>
                                        
                                </Modal>
                                }

                                {RegistrationDone===false && 
                                <Modal
                                open={RegStatusModal}
                                closeButton
                                onClose={()=>{
                                    setRegStatusModal(false)
                                    window.location.pathname='./registration/team'
                                }}
                                >
                                        <Modal.Header
                                        css={{
                                            paddingTop: '0px',
                                        }}>
                                            <Col>
                                                <Text 
                                                css={{
                                                    textAlign: 'center',
                                                    fontSize: '$3xl',
                                                    fontWeight: '$bold',
                                                    color: '$red600',
                                                    borderStyle: 'solid',
                                                    borderWidth: '0px 0px 1px 0px',
                                                    borderColor: '$gray800'
                                                }}>
                                                    Error!
                                                </Text>
                                                
                                            </Col>
                                        </Modal.Header>
                                        <Modal.Body
                                        css={{
                                            paddingTop: '0px'
                                        }}>
                                            <Text 
                                            css={{
                                                textAlign: 'center',
                                                fontSize: '$xl',
                                                fontWeight: '$semibold',
                                                color: 'white',
                                            }}>
                                                You were not able to register as {teamname}. Please try again...
                                            </Text>
                                        </Modal.Body>
                                        
                                </Modal>
                                }
                            </Grid>
                        </Grid.Container>
                    </Grid>
                </Grid.Container>
            
            </div>
        } 

        </div>
    )
}