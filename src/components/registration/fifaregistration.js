import { Grid, Input, Modal, Text, Dropdown, Button, Row, Col, Avatar, Loading} from "@nextui-org/react";
import './fifaregistration.css';
import React, {useState, useEffect} from "react";
import imageCompression from 'browser-image-compression';
import jwt_decode from "jwt-decode";


export default function FifaRegForm(){

    const batchItems = [
        { key: "UG25", name: "UG 2025" },
        { key: "UG24", name: "UG 2024" },
        { key: "UG23", name: "UG 2023" },
        { key: "UG22", name: "UG 2022" },
        { key: "ASP23", name: "ASP 2023" },
        { key: "YIF", name: "YIF" },
        { key: "MA", name: "MA" },
        { key: "Faculty/Staff", name: "Faculty/Staff" },
    ];

    const [participantone, setParticipantone] = useState('');
    const [participantoneStatus, setParticipantoneStatus] = useState('');

    const [participantonephone, setParticipantonephone] = useState('');
    const [participantonephoneStatus, setParticipantonephoneStatus] = useState('');
    
    const [participantoneemail, setParticipantoneemail] = useState('');
    const [participantoneemailStatus, setParticipantoneemailStatus] = useState('');

    const [participantonebatch, setParticipantonebatch] = useState('');
    const [participantonebatchStatus, setParticipantonebatchStatus] = useState('');

    const [participanttwo, setParticipanttwo] = useState('');
    const [participanttwoStatus, setParticipanttwoStatus] = useState('');

    const [participanttwophone, setParticipanttwophone] = useState('');
    const [participanttwophoneStatus, setParticipanttwophoneStatus] = useState('');

    const [participanttwoemail, setParticipanttwoemail] = useState('');
    const [participanttwoemailStatus, setParticipanttwoemailStatus] = useState('');

    const [participanttwobatch, setParticipanttwobatch] = useState('');
    const [participanttwobatchStatus, setParticipanttwobatchStatus] = useState('');

    const [AlreadyRegistered, setAlreadyRegistered] = useState(false);
    const [RegistrationDone, setRegistrationDone] = useState();

    const [ModalVisibility, setModalVisibility] = useState(false);
    const [LoginLoader, setLoginLoader] = useState(false);
    
    const [signedin, setSignedIn] = useState(false);
    const [User, setUser] = useState({});

    const [paymentSC, setPaymentSC] = useState();
    const [paymentSCUploaded, setPaymentSCUploaded] = useState();

    const [finalImage, setFinalImage] = useState();

    const [RegStatusModal, setRegStatusModal] = useState(false);

    

    function CheckForm(){
        if(participantone){
            setParticipantoneStatus('success')
        }
        if(!participantone){
            setParticipantoneStatus('error')
        }
        if(participantonephone.length===10){
            setParticipantonephoneStatus('success')
        }
        if(participantonephone.length<10 || participantonephone.length>10 || !participantonephone){
            setParticipantonephoneStatus('error')
        }
        if(participantoneemail){
            setParticipantoneemailStatus('success')
        }
        if(!participantoneemail){
            setParticipantoneemailStatus('error')
            console.log('ERROR EAIL')
        }
        if(participanttwo){
            setParticipanttwoStatus('success')
        }
        if(!participanttwo){
            setParticipanttwoStatus('error')
        }
        if(participanttwophone.length===10){
            setParticipanttwophoneStatus('success')
        }
        if(participanttwophone.length<10 || participanttwophone.length>10 || !participanttwophone){
            setParticipanttwophoneStatus('error')
        }
        if(participanttwoemail){
            setParticipanttwoemailStatus('success')
        }
        if(!participanttwoemail){
            setParticipanttwoemailStatus('error')
        }
        if(participantonebatch)
        {
            setParticipantonebatchStatus('success')
        }
        if(!participantonebatch)
        {
            setParticipantonebatchStatus('error')
        }
        if(participanttwobatch)
        {
            setParticipanttwobatchStatus('success')
        }
        if(!participanttwobatch)
        {
            setParticipanttwobatchStatus('error')
        }
        if(paymentSC)
        {
            setPaymentSCUploaded('success')
        }
        if(!paymentSC)
        {
            setPaymentSCUploaded('error')
        }
        if(participantone && participantonephone.length===10 && participantoneemail && participanttwo && participanttwophone.length===10 && participanttwoemail && participantonebatch && participanttwobatch && paymentSC){
            setParticipantoneStatus('warning');
            setParticipantonephoneStatus('warning');
            setParticipantoneemailStatus('warning');
            setParticipanttwoStatus('warning');
            setParticipanttwophoneStatus('warning');
            setParticipanttwoemailStatus('warning');
            setParticipantonebatchStatus('warning');
            setParticipanttwobatchStatus('warning');
            return true
        }
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
        
    }, [])

    async function sendForm(e)
    {
      
        console.log('entere')
        if(participantone && participanttwo && participanttwoemail && participantoneemail && participantonephone && participanttwophone && participantonebatch && participanttwobatch && paymentSC)
        { 
            console.log('Sending')
            await fetch('http://localhost:3001/registration/fifa',{
            method: 'POST',
            headers:{"Content-type":"application/json"},
            body: JSON.stringify({
                participantone: participantone,
                participantonephone: participantonephone,
                participantoneemail: participantoneemail,
                participantonebatch: participantonebatch,
                participanttwo: participanttwo,
                participanttwophone: participanttwophone,
                participanttwoemail: participanttwoemail,
                participanttwobatch: participanttwobatch,
                image: finalImage
            })
        })
        }
        
    }

    // function to send payment image to googledrive
    async function sendPaymentImage(paymentdata){
        var paymentName = User.given_name+User.family_name + ' Payment'
        const PaymentData = new FormData();
        PaymentData.append('file', paymentdata, paymentName);
        if(PaymentData){
            await fetch('http://localhost:3001/registration/fifaplayerpaymentimage',{
                method: 'POST',
                headers:{Value: "multipart/form-data"},
                body: PaymentData
            })
        }
    }
    
    const convertImageToBase64 = async (e) => {
        const options = {
            maxSizeMB: 0.030,
            maxWidthOrHeight: 720,
            useWebWorker: true
        }

        const compressedFile = await imageCompression(paymentSC, options);
        
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

    async function checkIfRegSuccess1(emailID){
        await fetch('http://localhost:3001/registration/fifa1')
        .then(response=>response.json())
        .then((data)=>{
            console.log(data.values)
            if(data.values){
                for(var i = 0; i < data.values.length; i++){
                    if(emailID===data.values[i][0]){
                        setRegStatusModal(true)
                        setRegistrationDone(true)
                        console.log('FOUND')
                    }
                    else if(emailID!==data.values[i][0]){
                        setRegStatusModal(false)
                        setRegistrationDone(false)
                        console.log('NOT FOUND')
                    }
                }
            }
            else if(!data.values){
                console.log('DATA NO FOUND')
                setRegStatusModal(true)
                setRegistrationDone(true)
            }
        })
    }
    async function checkIfRegSuccess2(emailID){
        await fetch('http://localhost:3001/registration/fifa2')
        .then(response=>response.json())
        .then((data)=>{
            console.log(data.values)
            if(data.values){
                for(var i = 0; i < data.values.length; i++){
                    if(emailID===data.values[i][0]){
                        setRegStatusModal(true)
                        setRegistrationDone(true)
                        console.log('FOUND')
                    }
                    else if(emailID!==data.values[i][0]){
                        setRegStatusModal(false)
                        setRegistrationDone(false)
                        console.log('NOT FOUND')
                    }
                }
            }
            else if(!data.values){
                console.log('DATA NO FOUND')
                setRegStatusModal(true)
                setRegistrationDone(true)
            }
        })
    }
    
    // function to check whether player is already registered
    const getRegisteredPlayersEmailData= async (userObject) =>{
        await fetch('http://localhost:3001/registration/player')
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
                    setLoginLoader(false);
                    setSignedIn(true)
                    document.getElementById("GoogleButton").hidden = true;
                    setUser(userObject);
                    setParticipantone(userObject.given_name + " "+userObject.family_name)
                    setAlreadyRegistered(false)
                    setParticipantoneemail(userObject.email);
                    setParticipantoneStatus('success'); 
                    setParticipantoneemailStatus('success');
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
                setUser(userObject);
                setParticipantone(userObject.given_name + " "+userObject.family_name)
                setAlreadyRegistered(false)
                setParticipantoneStatus('success');
                setParticipantoneemail(userObject.email)
                setParticipantoneemailStatus('success')
            }
            
             
        })
    } 

    // funciton to handle callback for google sign in
    function handleCallbackresponse(response){
        
        var userObject = jwt_decode(response.credential)
        setLoginLoader(true);
        document.getElementById("GoogleButton").hidden = true;

        getRegisteredPlayersEmailData(userObject);
    }

    
    return(
        <div>
                <Grid.Container gap={2}
                css={{
                    jc: 'center',
                    alignItems: 'center'
                }}>
                    <Grid
                    css={{
                        jc: 'center',
                        alignItems: 'center'
                    }}>
                        <Grid.Container
                        css={{
                            jc: 'center',

                        }}>
                            
                            <div className="GoogleButton" id='GoogleButton'></div>
                        </Grid.Container>
                        

                        {Object.keys(User).length != 0 && //Display welcome message to user if User Object is not empty
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

                        {!signedin && !LoginLoader && //Show login buttons when not signed in and LoginLoader===false
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
                            
                        </div>

                        }

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
                            <div>
                                <Grid.Container
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Modal
                                    open={AlreadyRegistered}
                                    closeButton
                                    onClose={()=>{setAlreadyRegistered(false); window.location.pathname='/registration/player'; }}
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
                            </div>
                        }

                        {/* Participant 1 */}
                        <Grid.Container gap={2}
                        css={{
                            jc: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                            css={{
                                jc:'center',
                                textAlign: 'center',
                                paddingBottom: '2%',
                                fontSize: '$4xl',
                                fontWeight: '$semibold'
                            }}>Participant 1</Text>

                            <Grid.Container gap={2}
                            css={{
                                jc: 'center',
                            }}>
                                {/* Participant 1 */}
                                {participantone &&
                                <Grid>
                                    <Input onChange={(event)=>{
                                        participantone(event.target.value);
                                        if(event.target.value) {
                                            setParticipantoneStatus('success')
                                        }
                                        else if(!event.target.value){
                                            setParticipantoneStatus('error')
                                        }
                                    }} 
                                    width="200px"  status={participantoneStatus} disabled={!signedin} value={participantone} />
                                </Grid>
                                }
                                {!participantone && 
                                <Grid>
                                    <Input onChange={(event)=>{
                                        setParticipantone(event.target.value)
                                        if(event.target.value) {
                                            setParticipantoneStatus('success')
                                        }
                                        else if(!event.target.value){
                                            setParticipantoneStatus('error')
                                        }
                                        }} 
                                        width="200px" status={participantoneStatus} disabled={!signedin} placeholder='Name' />
                                </Grid>
                                }
                                {/* Participant One Phone */}
                               
                                <Grid> 
                                    <Input onChange={(event)=>{
                                        setParticipantonephone(event.target.value)
                                        if(event.target.value.length>10 || event.target.value.length<10){
                                            setParticipantonephoneStatus('error')
                                        }
                                        else if(event.target.value.length===10){
                                            setParticipantonephoneStatus('success')
                                        }
                                    }}
                                    
                                    width="200px" status={participantonephoneStatus} disabled={!signedin} animated={'true'} 
                                    placeholder='Phone Number' type='text' clearable required  />
                                </Grid>
                                <Grid
                                css={{
                                    textAlign: 'center',
                                    
                                }}>
                                    <Col>
                                        <Input onChange={(event)=>{
                                        participantoneemail(event.target.value);
                                        if(event.target.value) {
                                            setParticipantoneemailStatus('success')
                                        }
                                        else if(!event.target.value){
                                            setParticipantoneemailStatus('error')
                                        }
                                    }}  width="300px" status={participantoneemailStatus} readOnly disabled={!signedin} value={participantoneemail} placeholder='Email ID' />
                                    </Col>
                                </Grid>
                        
                            <Grid
                            css={{
                                jc:'center',
                            }}>
                                <Dropdown isDisabled= {!signedin}>
                                    {participantonebatch === '' 
                                    ? <Dropdown.Button className="dp-btn" color={participantonebatchStatus} default ghost>Batch</Dropdown.Button>
                                    : <Dropdown.Button className="dp-btn" color={participantonebatchStatus} default ghost>{participantonebatch}</Dropdown.Button>
                                    }
                                    <Dropdown.Menu 
                                    onAction={(event)=>{
                                        setParticipantonebatch(event);
                                        if(event){
                                            setParticipantonebatchStatus('success');
                                        }
                                    }} disallowEmptySelection selectionMode="single" selectedKeys={participantonebatch} aria-label="Dynamic Actions" items={batchItems}>
                                        {(item) => (
                                        <Dropdown.Item
                                            key={item.key}
                                            color={item.key === "delete" ? "error" : "default"}
                                        >
                                            {item.name}
                                        </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Grid>

                            </Grid.Container>
                        </Grid.Container>

                        {/* Participant Two */}

                        <Grid.Container gap={2}
                        css={{
                            jc: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                            css={{
                                jc:'center',
                                textAlign: 'center',
                                paddingBottom: '2%',
                                fontSize: '$4xl',
                                fontWeight: '$semibold'
                            }}>Participant 2</Text>

                            <Grid.Container gap={2}
                            css={{
                                jc: 'center',
                            }}>
                                
                                <Grid>
                                    <Input onChange={(event)=>{
                                        setParticipanttwo(event.target.value);
                                        if(event.target.value) {
                                            setParticipanttwoStatus('success')
                                        }
                                        else if(!event.target.value){
                                            setParticipanttwoStatus('error')
                                        }
                                    }} 
                                    width="200px"  status={participanttwoStatus} disabled={!signedin} placeholder='Full Name' />
                                </Grid>
                                <Grid> 
                                    <Input onChange={(event)=>{
                                        setParticipanttwophone(event.target.value)
                                        if(event.target.value.length===10){
                                            setParticipanttwophoneStatus('success')
                                        }
                                        else{
                                            setParticipanttwophoneStatus('error')
                                        }
                                        
                                        }} 
                                        width="200px" status={participanttwophoneStatus} disabled={!signedin} placeholder='Phone Number' />
                                </Grid>
                                <Grid> 
                                    <Input onChange={(event)=>{
                                        setParticipanttwoemail(event.target.value)
                                        if(event.target.value.length){
                                            setParticipanttwoemailStatus('success')
                                        }
                                        else{
                                            setParticipanttwoemailStatus('error')
                                        }
                                        
                                        }} 
                                        width="300px" status={participanttwoemailStatus} disabled={!signedin} placeholder='Email ID' />
                                </Grid>
                        
                            <Grid
                            css={{
                                jc:'center',
                            }}>
                                <Dropdown isDisabled= {!signedin}>
                                    {participanttwobatch === '' 
                                    ? <Dropdown.Button className="dp-btn" color={participanttwobatchStatus} default ghost>Batch</Dropdown.Button>
                                    : <Dropdown.Button className="dp-btn" color={participanttwobatchStatus} default ghost>{participanttwobatch}</Dropdown.Button>
                                    }
                                    <Dropdown.Menu 
                                    onAction={(event)=>{
                                        setParticipanttwobatch(event);
                                        if(event){
                                            setParticipanttwobatchStatus('success');
                                        }
                                    }} disallowEmptySelection selectionMode="single" selectedKeys={participanttwobatch} aria-label="Dynamic Actions" items={batchItems}>
                                        {(item) => (
                                        <Dropdown.Item
                                            key={item.key}
                                            color={item.key === "delete" ? "error" : "default"}
                                        >
                                            {item.name}
                                        </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Grid>

                            </Grid.Container>                            
                        </Grid.Container>


                        {/* payment details */}
                        <Grid.Container gap={2}
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            paddingBottom:'20px'
                        }}>
                            <Col>
                                {paymentSCUploaded===false && 
                                <Text
                                css={{
                                    jc: 'center',
                                    textAlign: 'center',
                                    color: '$red600',
                                    fontSize: '$xl',
                                    fontWeight: '$semibold'
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
                                    Please pay the amount to Uday Srivastava, via PayTM or GPay.
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
                        <Grid.Container gap={2}
                        css={{
                            jc: 'center',
                        }}>
                            <Grid>
                                <Button auto rounded disabled={!signedin}
                                css={{
                                    background: '$gray900'
                                }}
                                onPress={()=>{
                                    if(paymentSC)
                                    {convertImageToBase64()}
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
                                }}
                                css={
                                    {
                                        display:'flex',
                                        flexWrap:'nowrap'
                                    }
                                }
                                
                                >

                                    <Modal.Header>
                                        <Col>
                                            <Text
                                            css={{
                                                fontSize: '$4xl',
                                                fontWeight: '$semibold',
                                                textAlign: 'center',
                                                color: '$yellow600'
                                            }}>
                                                Player Details
                                            </Text>
                                            <Text
                                            css={{
                                                fontSize: '$md',
                                                fontWeight: '$normal',
                                                textAlign: 'center',
                                                color: '$gray900'
                                            }}>
                                                Check your details one last time before paying!
                                            </Text>
                                        </Col>
                                        
                                    </Modal.Header>

                                    <Modal.Body>


                                        <Grid.Container
                                        css={{
                                            jc: 'center',
                                            alignItems: 'center',
                                            display:'flex',
                                            flexDirection: 'column',
                                            justifyContent:'center',
                                            alignContent:'center',
                                            flexWrap:'nowrap'
                                        
                                        }}>
                                            <Grid> 
                                            <Grid css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            marginBottom: 0
                                                        }}>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            marginBottom: 0
                                                        }}>
                                                            <Text 
                                                            css={{
                                                                fontSize: '$lg',
                                                                paddingRight: '4px',
                                                                color: 'white',
                                                                fontWeight:'$bold',
                                                                
                                                            }} h1>
                                                                Participant 1
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center'
                                                }}>
                                                    </Grid.Container> 
                                                    <Grid>
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
                                                                Name: 
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {participantone}
                                                            </Text>

                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Name: 
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {participantone}
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                        {participantoneemail && 
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
                                                                    Email: 
                                                                </Text>
                                                                <Text hideIn={'xs'}
                                                                css={{
                                                                    fontSize: '$lg',
                                                                    fontWeight: '$semibold'
                                                                }}>
                                                                    {participantoneemail}
                                                                </Text>
        
                                                                <Text showIn={'xs'}
                                                                css={{
                                                                    fontSize: '$md',
                                                                    paddingRight: '4px',
                                                                    color: '$gray700'
                                                                }}>
                                                                   Email: 
                                                                </Text>
                                                                <Text showIn={'xs'}
                                                                css={{
                                                                    fontSize: '$md',
                                                                    fontWeight: '$semibold'
                                                                }}>
                                                                    {participantoneemail}
                                                                </Text>
                                                            </Row>
                                                        }
                                                    </Grid>
                                                    <Grid>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            display: 'flex',
                                                            flexDirection: 'row'
                                                        }}>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Phone Number: 
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {participantonephone}
                                                            </Text>

                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Phone Number: 
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {participantonephone}
                                                            </Text>
                                                        </Row>
                                                        <Grid/>
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
                                                                Batch: 
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {participantonebatch}
                                                            </Text>

                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Batch: 
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {participantonebatch}
                                                            </Text>
                                                        </Row>
                                                        </Grid>
                                                    </Grid> 
                                            </Grid>
                                        </Grid.Container>
                                        <Grid.Container
                                        css={{
                                            jc: 'center',
                                            alignItems: 'center',
                                            display:'flex',
                                            flexDirection: 'column',
                                            justifyContent:'center',
                                            alignContent:'center',
                                            flexWrap:'nowrap',
                                            marginTop:'6%'
                                        }}>
                                            <Grid> 
                                            <Grid css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            marginBottom: 0     
                                                        }}>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            marginBottom: 0
                                                        }}>
                                                            <Text 
                                                            css={{
                                                                fontSize: '$lg',
                                                                paddingRight: '4px',
                                                                color: 'white',
                                                                fontWeight:'$bold',
                                                                
                                                            }} h1>
                                                                Participant 2
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                        <Grid.Container gap={0.5}
                                                        css={{
                                                            jc: 'center',
                                                            alignItems: 'center',
                                                            textAlign: 'center'
                                                        }}>
                                                    </Grid.Container> 
                                                    <Grid>
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
                                                                Name: 
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {participanttwo}
                                                            </Text>

                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Name: 
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {participanttwo}
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                        {participanttwoemail && 
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
                                                                    Email: 
                                                                </Text>
                                                                <Text hideIn={'xs'}
                                                                css={{
                                                                    fontSize: '$lg',
                                                                    fontWeight: '$semibold'
                                                                }}>
                                                                    {participanttwoemail}
                                                                </Text>
        
                                                                <Text showIn={'xs'}
                                                                css={{
                                                                    fontSize: '$md',
                                                                    paddingRight: '4px',
                                                                    color: '$gray700'
                                                                }}>
                                                                   Email: 
                                                                </Text>
                                                                <Text showIn={'xs'}
                                                                css={{
                                                                    fontSize: '$md',
                                                                    fontWeight: '$semibold'
                                                                }}>
                                                                    {participanttwoemail}
                                                                </Text>
                                                            </Row>
                                                        }
                                                    </Grid>
                                                    <Grid>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            display: 'flex',
                                                            flexDirection: 'row'
                                                        }}>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Phone Number: 
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {participanttwophone}
                                                            </Text>

                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Phone Number: 
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {participanttwophone}
                                                            </Text>
                                                        </Row>
                                                        <Grid/>
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
                                                                Batch: 
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {participanttwobatch}
                                                            </Text>

                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Batch: 
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {participanttwobatch}
                                                            </Text>
                                                        </Row>
                                                        </Grid>
                                                    </Grid> 
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
                                            sendPaymentImage(paymentSC)
                                            setRegistrationDone(true);
                                            setModalVisibility(false);
                                            checkIfRegSuccess1(participantoneemail)
                                            checkIfRegSuccess1(participantoneemail)
                                        }}>Pay
                                            {/* <Text
                                            css={{
                                                color: 'Black',
                                                fontWeight: '$semibold'
                                            }}>
                                                Pay
                                            </Text> */}
                                            {/* <a href="https://www.instamojo.com/@testingrightnowforapl/l639029eaa66b4bbbbb30744adfef7b48/" rel="im-checkout" data-text="Pay" data-css-style="color:#ffffff; background:#000000; width:180px; border-radius:30px"   data-layout="vertical">PAY</a> */}
                                            {/* <script src="https://js.instamojo.com/v1/button.js"></script> */}
                                        </Button>
                                    </Modal.Footer>

                                </Modal>
                                {RegistrationDone===true && 
                                <Modal
                                open={RegStatusModal}
                                closeButton
                                onClose={()=>{
                                    setRegStatusModal(false)
                                    window.location.pathname='./registration/fifa'
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
                                                You have been successfully registered as {User.name}
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
                                    window.location.pathname='./registration/fifa'
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
                                                You were not able to register as {User.name}. Please try again...
                                            </Text>
                                        </Modal.Body>
                                        
                                </Modal>
                                }
                            </Grid>
                        </Grid.Container>

                    </Grid>
                </Grid.Container>
        </div>
        )
    }

