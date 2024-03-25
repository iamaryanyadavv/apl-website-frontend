import { Grid, Input, Modal, Text, Dropdown, Button, Row, Col, Avatar, Loading, Image} from "@nextui-org/react";
import './pregform.css';
import React, {useState, useEffect} from "react";
import imageCompression from 'browser-image-compression';
import jwt_decode from "jwt-decode";
import { useTicker } from "../../hooks";
import payment from "./paymentinfo.jpg"


export default function PRegForm(){

    const batchItems = [
        { key: "UG2023", name: "UG 2023" },
        { key: "UG25", name: "UG 2025" },
        { key: "UG24", name: "UG 2024" },
        { key: "UG23", name: "UG 2023" },
        { key: "ASP24", name: "ASP 2024" },
        { key: "YIF", name: "YIF" },
        { key: "MA", name: "MA" },
        { key: "Faculty/Staff", name: "Faculty/Staff" },
    ];
    const genderItems = [
        { key: "Male", name: "Male" },
        { key: "Female", name: "Female" },
        { key: "Non Binary", name: "Non Binary" },
        { key: "Trans Man", name: "Trans Man" },
        { key: "Trans Woman", name: "Trans Woman" },
    ];


    const GeneralPosItems=[
        { key: "Goalkeeper", name: 'Goalkeeper'},
        { key: 'Defender', name: 'Defender'},
        { key: 'Midfielder', name: 'Midfielder'},
        { key: 'Attacker', name: 'Attacker'}
    ];
    const PreferredPosItems=[
        { key: "Goalkeeper", name: 'Goalkeeper'},
        { key: 'Defender', name: 'Defender'},
        { key: 'Midfielder', name: 'Midfielder'},
        { key: 'Attacker', name: 'Attacker'}
    ];

    const genderItemsFULL = [
        { key: "Non-Cis Man", name: "Non-Cis Man" }
    ];
    
    //12:30pm on 23rd March, 2023 GMT or 6pm on 23rd March, 2023 IST
    const endDate = "2023-03-10T12:30:00.000Z"; 

    const { days, hours, minutes, seconds, isTimeUp } = useTicker(endDate);

    //User filled in deails

    const [firstname, setFirstName] = useState('');
    const [FirstnameStatus, setFirstnameStatus] = useState('');

    const [middlename, setMiddleName] = useState('');

    const [lastname, setLastName] = useState('');
    const [LastnameStatus, setLastnameStatus] = useState('');

    const [batch, setBatch] = useState('');
    const [BatchStatus, setBatchStatus] = useState('');

    const [gender, setGender] = useState('');
    const [GenderStatus, setGenderStatus] = useState('');

    const [primarypos, setPrimaryPos] = useState('');
    const [PrimaryposStatus, setPrimaryposStatus] = useState('');

    const [secondpos, setSecondPos] = useState('');
    const [SecondposStatus, setSecondposStatus] = useState('');

    const [comment, setComment] = useState('');

    const [initialImage, setInitialImage] = useState();
    const [finalImage, setFinalImage] = useState();
    const [finalImageStatus, setFinalImageStatus] = useState();
    const [finalFile, setFinalFile] = useState();
    const [finalFileName, setFinalFileName] = useState();

    const [paymentSC, setPaymentSC] = useState();
    const [paymentSCUploaded, setPaymentSCUploaded] = useState();

    const [phonenumber,setPhonenumber] = useState('');
    const [PhonenumberStatus, setPhonenumberStatus] = useState('');

    const [emailID, setEmailID] = useState('');
    const [EmailIDStatus, setEmailIDStatus] = useState('');

    // variables to store result of check if user already registered
    const [AlreadyRegistered, setAlreadyRegistered] = useState(false);
    const [RegistrationDone, setRegistrationDone] = useState();

    // to control details check modal and loader while signing in details
    const [ModalVisibility, setModalVisibility] = useState(false);
    const [LoginLoader, setLoginLoader] = useState(false);

    const [RegSuccessStatus, setRegSuccessStatus] = useState(false);
    const [RegErrorStatus, setRegErrorStatus] = useState(false);
    const [RegProcess, setRegProcess] = useState(false);
    const [LoadingModal, setLoadingModal] = useState(false);
    const [maleRegFull, setmaleRegFull] = useState(false);
    
    //variable to control if user signed in
    const [signedin, setSignedIn] = useState(false);
    const [User, setUser] = useState({});

    const [tier, setTier] = useState('0');
    const [price, setPrice] = useState('0');
    const [team, setTeam] = useState('0');
    const [teamlogo, setTeamLogo] = useState('0');

    //function to check if registration was successful
    async function checkIfRegSuccess(emailID){
        console.log('entering function')
        while(RegProcess===true){
            console.log('looping 2.5 seconds')
            window.setTimeout(()=>{

                fetch('https://aplapi.onrender.com/registration/player')
                .then(response=>response.json())
                .then((data)=>{
                    if(data.values){
                        for(var i = 0; i < data.values.length; i++){
                            if(emailID===data.values[i][0]){
                                setRegSuccessStatus(true)
                                setRegProcess(false)
                                break;
                                // setRegistrationDone(true)
                            }
                            else if(emailID!==data.values[i][0]){
                                setRegSuccessStatus(false)
                                // setRegistrationDone(false)
                            }
                        }
                        setRegErrorStatus(true)
                    }
                    else if(!data.values){
                        setRegSuccessStatus(true)
                        setRegProcess(false)
                        // setRegistrationDone(true)
                    }
                })

            },2500)

        }
    }

    // function to check if all required fields are filled
    function CheckForm(){
        if(firstname){
            setFirstnameStatus('success')
        }
        if(!firstname){
            setFirstnameStatus('error')
        }
        if(lastname){
            setLastnameStatus('success')
        }
        if(!lastname){
            setLastnameStatus('error')
        }
        if(emailID){
            setEmailIDStatus('success')
        }
        if(!emailID){
            setEmailIDStatus('error')
        }
        if(batch){
            setBatchStatus('success')
        }
        if(!batch){
            setBatchStatus('error')
        }
        if(phonenumber.length===10){
            setPhonenumberStatus('success')
        }
        if(phonenumber.length<10 || phonenumber.length>10 || !phonenumber){
            setPhonenumberStatus('error')
        }
        if(gender){
            setGenderStatus('success')
        }
        if(!gender){
            setGenderStatus('error')
        }
        if(primarypos){
            setPrimaryposStatus('success')
        }
        if(!primarypos){
            setPrimaryposStatus('error')
        }
        if(secondpos){
            setSecondposStatus('success')
        }
        if(!secondpos){
            setSecondposStatus('error')
        }
        if(initialImage){
            setFinalImageStatus('success')
        }
        if(!initialImage){
            setFinalImageStatus('error')
        }
        if(firstname && lastname && batch && phonenumber && gender && primarypos && secondpos && paymentSC && initialImage){
            setFirstnameStatus('warning');
            setLastnameStatus('warning');
            setEmailIDStatus('warning');
            setBatchStatus('warning');
            setPhonenumberStatus('warning');
            setGenderStatus('warning');
            setPrimaryposStatus('warning');
            setSecondposStatus('warning');
            return true
        }
    }

    // function to send final player data to sheets
    async function sendForm(e)
    {
        //required inputs: firstname, lastname, batch, phonenumber, gender, position 1, position 2, 
        //not required inputs: middlename, image, comment
        
        if(firstname && lastname && batch && phonenumber && gender && primarypos && secondpos)
        { 
            // image, name, ppos, spos, comments, tier, price, team, teamlogo, gender, batch, email
            // https://aplapi.onrender.com/registration/player
            const res = await fetch('https://aplapi.onrender.com/registration/player',{
            method: 'POST',
            headers:{"Content-type":"application/json"},
            body: JSON.stringify({
                image: finalImage,
                name: firstname + middlename +' '+ lastname,
                primarypos: primarypos,
                secondpos: secondpos,
                comment: comment,
                tier: tier,
                price: price,
                team: team,
                teamlogo: teamlogo,
                gender: gender,
                batch: batch,
                emailID: emailID
                })
            })
            if (res.status===200){
                setRegSuccessStatus(true)
                setLoadingModal(false)
            }
            else if (res.status!==200){
                setRegErrorStatus(true)
                setLoadingModal(false)
            }
        }
        
    }

    // function to send profile image to googledrive
    async function sendProfileImage(imagedata){
        var imageName = User.given_name+User.family_name
        const ImageData = new FormData();
        ImageData.append('file', imagedata, imageName);
        if(ImageData){
            await fetch('https://aplapi.onrender.com/registration/playerimage',{
                method: 'POST',
                headers:{Value: "multipart/form-data"},
                body: ImageData
            })
        }
    }

    // function to send payment image to googledrive
    async function sendPaymentImage(paymentdata){
        var paymentName = User.given_name+User.family_name + 'Payment'
        const PaymentData = new FormData();
        PaymentData.append('file', paymentdata, paymentName);
        if(PaymentData){
            await fetch('https://aplapi.onrender.com/registration/playerpaymentimage',{
                method: 'POST',
                headers:{Value: "multipart/form-data"},
                body: PaymentData
            })
        }
    }
    
    // functions to convert image to base64
    const convertImageToBase64 = async (e) => {
        const options = {
            maxSizeMB: 0.030,
            maxWidthOrHeight: 600,
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

    // function to check whether player is already registered
    const getRegisteredPlayersEmailData= async (userObject) =>{
        await fetch('https://aplapi.onrender.com/registration/player')
        .then(response=>response.json())
        .then((data)=>{
            var isSignedin = false
            if(data.values){
                for(var i = 0; i < data.values.length; i++){
                    if(userObject.email!==data.values[i][0]){
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
                    setFirstName(userObject.given_name)
                    setLastName(userObject.family_name)
                    setAlreadyRegistered(false)
                    setEmailID(userObject.email);
                    setFirstnameStatus('success');
                    setLastnameStatus('success');
                    setEmailIDStatus('success');
                    // console.log('Signed in')
                }
                else{
                    setLoginLoader(false);
                    setSignedIn(false)
                    setAlreadyRegistered(true)
                    document.getElementById("GoogleButton").hidden = false;
                    // console.log('Did not sign in')
                }   
            }
            else if(!data.values){
                setLoginLoader(false);
                setSignedIn(true)
                setUser(userObject);
                setFirstName(userObject.given_name)
                setLastName(userObject.family_name)
                setAlreadyRegistered(false)
                setEmailID(userObject.email);
            }
            
             
        })
        await fetch('https://aplapi.onrender.com/registration/checkreg')
        .then(response=>response.json())
        .then((data)=>{
            if(data.values)
            {
                var count = 0;
                for(var i = 0; i < data.values.length; i++)
                {
                    if(data.values[i][0]==='Male')
                    {
                        count++;
                    }
                    
                };
                console.log(count);
                if(count>=192)
                {
                    setmaleRegFull(true);
                    alert('Male Player Registrations are full!')
                }
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
    
    useEffect( ()=>{
        setLoginLoader(true)
        window.setTimeout(()=>{
            window.google.accounts.id.initialize({
                client_id: "307601456989-3visvqebfkepaqi9b86e95pgn6bd8qfb.apps.googleusercontent.com",
                callback: handleCallbackresponse
            });
            
            window.google.accounts.id.renderButton(
                document.getElementById("GoogleButton"),
                { theme: 'outlined', size: 'large', shape: 'pill',}
            ); 
            setLoginLoader(false)
        }, 2000)
        
    }, [isTimeUp])

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
                        APL 7.0 PLAYER REGISTRATION
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$3xl',
                        fontWeight: '$semibold',
                        padding: '10% 5% 0% 5%'
                    }}>
                        APL 7.0 PLAYER REGISTRATION
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
                        APL 7.0 PLAYER REGISTRATION
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$3xl',
                        fontWeight: '$semibold',
                        padding: '10% 5%'
                    }}>
                        APL 7.0 PLAYER REGISTRATION
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
                        

                        {Object.keys(User).length !== 0 && //Display welcome message to user if User Object is not empty
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
                        
                        {/* firstname, middlename, lastname */}
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
                            }}>Full Name</Text>

                            <Grid.Container gap={2}
                            css={{
                                jc: 'center',
                            }}>
                                {/* Firstname */}
                                {firstname &&
                                <Grid>
                                    <Input onChange={(event)=>{
                                        setFirstName(event.target.value);
                                        if(event.target.value) {
                                            setFirstnameStatus('success')
                                        }
                                        else if(!event.target.value){
                                            setFirstnameStatus('error')
                                        }
                                    }} 
                                    width="200px"  status={FirstnameStatus} disabled={!signedin} placeholder={firstname} />
                                </Grid>
                                }
                                {!firstname && 
                                <Grid>
                                    <Input onChange={(event)=>{
                                        setFirstName(event.target.value)
                                        if(event.target.value) {
                                            setFirstnameStatus('success')
                                        }
                                        else if(!event.target.value){
                                            setFirstnameStatus('error')
                                        }
                                        }} 
                                        width="200px" status={FirstnameStatus} disabled={!signedin} placeholder='First' />
                                </Grid>
                                }
                                
                                

                                {/* Middlename */}
                                <Grid>
                                    <Input width="200px" disabled={!signedin} onChange={(event)=>{setMiddleName(event.target.value)}} animated={'true'} placeholder='Middle' type='text'  clearable/>
                                </Grid>


                                {/* Lastname */}
                                {lastname &&
                                <Grid> 
                                    <Input onChange={(event)=>{
                                        setLastName(event.target.value)
                                        if(event.target.value){
                                            setLastnameStatus('success')
                                        }
                                        else if(!event.target.value){
                                            setLastnameStatus('error')
                                        }
                                        
                                        }} 
                                        width="200px" status={LastnameStatus} disabled={!signedin} placeholder={lastname} />
                                </Grid>
                                }
                                {!lastname && 
                                <Grid>
                                    <Input onChange={(event)=>{
                                        setLastName(event.target.value)
                                        if(event.target.value){
                                            setLastnameStatus('success')
                                        }
                                        else if(!event.target.value){
                                            setLastnameStatus('error')
                                        }
                                        }} 
                                        width="200px" status={LastnameStatus} disabled={!signedin} placeholder='Last' />
                                </Grid>
                                }

                            </Grid.Container>

                        </Grid.Container>

                        {/* email */}
                        {emailID &&
                            <Grid.Container gap={2}
                            css={{
                                jc: 'center',
                                alignItems: 'center'
                            }}>
                                <Grid
                                css={{
                                    textAlign: 'center',
                                    
                                }}>
                                    <Col>
                                        <Text 
                                        css={{
                                            jc:'center',
                                            textAlign: 'center',
                                            paddingBottom: '5%',
                                            fontSize: '$4xl',
                                            fontWeight: '$semibold'
                                        }}>
                                            Email ID
                                        </Text>
                                        <Input width="300px" readOnly value={emailID} />
                                    </Col>
                                </Grid>
                                
                            </Grid.Container>
                        }
                        {!emailID && 
                            <Grid.Container gap={2}
                            css={{
                                jc: 'center',
                                alignItems: 'center'
                            }}>
                                <Grid
                                css={{
                                    textAlign: 'center',
                                    
                                }}>
                                    <Col>
                                        <Text 
                                        css={{
                                            jc:'center',
                                            textAlign: 'center',
                                            paddingBottom: '5%',
                                            fontSize: '$4xl',
                                            fontWeight: '$semibold'
                                        }}>
                                            Email ID
                                        </Text>
                                        <Input width="300px"  readOnly placeholder='Email ID' />
                                    </Col>
                                </Grid>
                                
                            </Grid.Container>
                        }
                        

                        {/* batch, phonenumber, gender */}
                        <Grid.Container gap={2}
                        css={{
                            jc: 'center'
                        }}>
                            {/* Batch */}
                            <Grid
                            css={{
                                jc:'center',
                            }}>
                                <Text
                                css={{
                                    jc:'center',
                                    textAlign: 'center',
                                    paddingBottom: '2%',
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold'
                                }}>Batch
                                </Text>
                                <Dropdown isDisabled= {!signedin}>
                                    {batch === '' 
                                    ? <Dropdown.Button className="dp-btn" color={BatchStatus} default light>Choose</Dropdown.Button>
                                    : <Dropdown.Button className="dp-btn" color={BatchStatus} default light>{batch}</Dropdown.Button>
                                    }
                                    <Dropdown.Menu 
                                    onAction={(event)=>{
                                        setBatch(event);
                                        if(event){
                                            setBatchStatus('success');
                                        }
                                    }} disallowEmptySelection selectionMode="single" selectedKeys={batch} aria-label="Dynamic Actions" items={batchItems}>
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

                            {/* Phone */}
                            <Grid 
                            css={{
                                
                            }}>
                                <Text
                                css={{
                                    jc:'center',
                                    textAlign: 'center',
                                    paddingBottom: '2%',
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold'
                                }}>Phone
                                </Text>
                                <Input 
                                    disabled={!signedin} 
                                    width='200px' 
                                    // {...bindings} 
                                    status={PhonenumberStatus} 
                                    onChange={(event)=>{
                                        setPhonenumber(event.target.value)
                                        if(event.target.value.length>10 || event.target.value.length<10){
                                            setPhonenumberStatus('error')
                                        }
                                        else if(event.target.value.length===10){
                                            setPhonenumberStatus('success')
                                        }
                                    }}
                                    // color={helper.color} 
                                    // helperColor={helper.color} 
                                    // helperText={helper.text} 
                                    animated={'true'} 
                                    placeholder='Phone Number' type='text' clearable required/>
                            </Grid>

                            {/* Gender */}
                            <Grid>
                                <Text
                                css={{
                                    jc:'center',
                                    textAlign: 'center',
                                    paddingBottom: '2%',
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold'
                                }}>Gender
                                </Text>
                                <Dropdown isDisabled= {!signedin}>
                                    {gender === '' 
                                    ? <Dropdown.Button className="dp-btn" color={GenderStatus} default light>Choose</Dropdown.Button>
                                    : <Dropdown.Button className="dp-btn" color={GenderStatus} default light>{gender}</Dropdown.Button>
                                    }
                                    <Dropdown.Menu disabled={!signedin} 
                                    onAction={(event)=>{
                                        setGender(event);
                                        if(event){
                                            setGenderStatus('success')
                                        }
                                    }} 
                                    disallowEmptySelection selectionMode="single" selectedKeys={gender} aria-label="Dynamic Actions" items={maleRegFull?genderItemsFULL:genderItems}>
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
                                {gender!=="Male" && gender!=="" && <Text
                                css={{
                                    jc:'center',
                                    textAlign: 'center',
                                    paddingBottom: '2%',
                                    fontSize: '$sm',
                                    color:"White",

                                }}><a href="https://chat.whatsapp.com/L1NkbNm0h9M2OPjuX9u65Z">NC Men WhatsApp Group</a>
                                </Text>}
                                
                            </Grid>
                        </Grid.Container>

                        {/* primarypos, image, secondarypos */}
                        <Grid.Container gap={2}
                        css={{
                            jc: 'center'
                        }}>
                            {/* Primary Position */}
                            <Grid
                            css={{
                                jc:'center',
                                textAlign: 'center'
                            }}>
                                <Text
                                        css={{
                                            jc:'center',
                                            textAlign: 'center',
                                            fontSize: '$4xl',
                                            fontWeight: '$semibold'
                                        }}>Position I
                                        </Text>
                                        <Dropdown isDisabled= {!signedin}>
                                            {primarypos === '' 
                                            ? <Dropdown.Button className="dp-btn" css={{ jc: 'center' }} color={PrimaryposStatus} default light>General</Dropdown.Button>
                                            : <Dropdown.Button className="dp-btn" css={{ jc: 'center' }} color={PrimaryposStatus} default light>{primarypos}</Dropdown.Button>
                                            }
                                            <Dropdown.Menu 
                                            onAction={(event)=>{
                                                setPrimaryPos(event);
                                                if(event){
                                                    setPrimaryposStatus('success')
                                                }
                                            }} 
                                            disallowEmptySelection selectionMode="single" selectedKeys={primarypos} aria-label="Dynamic Actions" items={GeneralPosItems}>
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

                            {/* image */}
                            <Grid 
                            css={{
                                width: '300px',
                                jc: 'center',
                                textAlign: 'center'
                            }}>
                                
                                <Text
                                css={{
                                    jc:'center',
                                    textAlign: 'center',
                                    paddingBottom: '2%',
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold'
                                }}>Photo
                                </Text>
                                <input disabled={!signedin} 
                                onChange={(event)=>{
                                    
                                    if(event.target.files[0].size>2200000){
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
                                {finalImageStatus==='error' && 
                                <Text
                                css={{
                                    jc: 'center',
                                    textAlign: 'center',
                                    color: '$red600',
                                    fontSize: '$xl',
                                    fontWeight: '$semibold'
                                }}>
                                    Please upload a photo of yourself!
                                </Text>
                                }
                            </Grid>
                            
                            {/* Secondary Position */}
                            <Grid>
                                <Text
                                css={{
                                    jc:'center',
                                    paddingBottom: '2%',
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold'
                                }}>Position II
                                </Text>
                                <Dropdown isDisabled= {!signedin}>
                                            {secondpos === '' 
                                            ? <Dropdown.Button className="dp-btn" css={{ jc: 'center' }} color={SecondposStatus} default light>Preferred</Dropdown.Button>
                                            : <Dropdown.Button className="dp-btn" css={{ jc: 'center' }} color={SecondposStatus} default light>{secondpos}</Dropdown.Button>
                                            }
                                    <Dropdown.Menu disabled={!signedin} 
                                    onAction={(event)=>{
                                        setSecondPos(event);
                                        if(event){
                                            setSecondposStatus('success')
                                        }
                                    }}
                                    selectionMode="single" selectedKeys={secondpos} aria-label="Dynamic Actions" items={PreferredPosItems}>
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

                        {/* comment */}
                        <Grid.Container gap={2}
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            paddingBottom:'20px'
                        }}>
                            <Col>
                                <Text
                                css={{
                                    jc:'center',
                                    textAlign: 'center',
                                    fontSize: '$4xl',
                                    fontWeight: '$semibold'
                                }}>
                                    Comments
                                </Text>
                            </Col>
                            <Grid>
                                <Input css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }} disabled={!signedin} onChange={(event)=>setComment(event.target.value)} width='320px' animated={'true'} placeholder="Comments? (Injuries, don't roast me at the auction...)" type='text' clearable></Input>
                            </Grid>
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
                                    Please pay the amount (&#x20B9;250) to Irya Khanna, via PayTM or GPay.
                                </Text>
                                <Text 
                                css={{
                                    jc:'center',
                                    textAlign: 'center',
                                    fontSize: '$xl',
                                    fontWeight: '$medium'
                                }}>
                                    (9930189038, UPI ID: irya.khanna@okhdfcbank)
                                </Text>
                                {/* <Image src={payment} width={250} height={350} css={{marginTop:"$10", marginBottom:"$1", objectFit:"contain"}}></Image> */}
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
                                    if(initialImage)
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
                                            alignItems: 'center'
                                        }}>
                                            <Grid>
                                                {/* first, middle, last */}
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
                                                                First Name: 
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {firstname}
                                                            </Text>

                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                First Name: 
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {firstname}
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                    <Grid>
                                                        {middlename && 
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
                                                                    Middle Name: 
                                                                </Text>
                                                                <Text hideIn={'xs'}
                                                                css={{
                                                                    fontSize: '$lg',
                                                                    fontWeight: '$semibold'
                                                                }}>
                                                                    {middlename}
                                                                </Text>
        
                                                                <Text showIn={'xs'}
                                                                css={{
                                                                    fontSize: '$md',
                                                                    paddingRight: '4px',
                                                                    color: '$gray700'
                                                                }}>
                                                                    Middle Name: 
                                                                </Text>
                                                                <Text showIn={'xs'}
                                                                css={{
                                                                    fontSize: '$md',
                                                                    fontWeight: '$semibold'
                                                                }}>
                                                                    {middlename}
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
                                                                Last Name: 
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {lastname}
                                                            </Text>

                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Last Name: 
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {lastname}
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                </Grid.Container>

                                                {/* email id */}
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
                                                            Email ID:  
                                                        </Text>
                                                        <Text hideIn={'xs'}
                                                        css={{
                                                            fontSize: '$lg',
                                                            fontWeight: '$semibold'
                                                        }}>
                                                            {emailID}
                                                        </Text>

                                                        <Text showIn={'xs'}
                                                        css={{
                                                            fontSize: '$md',
                                                            paddingRight: '4px',
                                                            color: '$gray700'
                                                        }}>
                                                            Email ID:  
                                                        </Text>
                                                        <Text showIn={'xs'}
                                                        css={{
                                                            fontSize: '$md',
                                                            fontWeight: '$semibold'
                                                        }}>
                                                            {emailID}
                                                        </Text>
                                                    
                                                </Grid.Container>

                                                {/* batch, gender */}
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
                                                                Batch:  
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {batch}
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
                                                                {batch}
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
                                                                Gender: 
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {gender}
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Gender: 
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {gender}
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                </Grid.Container>

                                                {/* number */}
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
                                                                Phone Number: 
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {phonenumber}
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
                                                                {phonenumber}
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                </Grid.Container>

                                                {/* pos1, pos2 */}
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
                                                                Position I: 
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {primarypos}
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Position I: 
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {primarypos}
                                                            </Text>
                                                        </Row>
                                                    </Grid>
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
                                                                Position II: 
                                                            </Text>
                                                            <Text hideIn={'xs'}
                                                            css={{
                                                                fontSize: '$lg',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {secondpos}
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                paddingRight: '4px',
                                                                color: '$gray700'
                                                            }}>
                                                                Position II: 
                                                            </Text>
                                                            <Text showIn={'xs'}
                                                            css={{
                                                                fontSize: '$md',
                                                                fontWeight: '$semibold'
                                                            }}>
                                                                {secondpos}
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                </Grid.Container>

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
                                                                Picture: 
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

                                                {/* comment */}
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center'
                                                }}>
                                                    <Grid>
                                                        {comment &&
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
                                                                    Comment: 
                                                                </Text>
                                                                <Text hideIn={'xs'}
                                                                css={{
                                                                    fontSize: '$lg',
                                                                    fontWeight: '$semibold'
                                                                }}>
                                                                    {comment}
                                                                </Text>
                                                                <Text showIn={'xs'}
                                                                css={{
                                                                    fontSize: '$md',
                                                                    paddingRight: '4px',
                                                                    color: '$gray700'
                                                                }}>
                                                                    Comment: 
                                                                </Text>
                                                                <Text showIn={'xs'}
                                                                css={{
                                                                    fontSize: '$md',
                                                                    fontWeight: '$semibold'
                                                                }}>
                                                                    {comment}
                                                                </Text>
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
                                            sendPaymentImage(paymentSC)
                                            sendProfileImage(initialImage);
                                            setModalVisibility(false);
                                            setLoadingModal(true)
                                            // setRegProcess(true);
                                            // checkIfRegSuccess(emailID);
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

                                </Modal >


                                <Modal
                                open={LoadingModal}>
                                    <Modal.Body>
                                        <Loading color='white' size={"xl"} />
                                    </Modal.Body>
                                </Modal>

                                {RegSuccessStatus===true && 
                                <Modal
                                open={RegSuccessStatus}
                                closeButton
                                onClose={()=>{
                                    setRegSuccessStatus(false)
                                    window.location.pathname='./registration/player'
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
                                            <Text 
                                            css={{
                                                textAlign: 'center',
                                                fontSize: '$xl',
                                                fontWeight: '$semibold',
                                                color: 'white',
                                            }}>
                                                You can check out the full list of APL7.0 registered players here
                                            </Text>
                                            <Text 
                                            css={{
                                                textAlign: 'center',
                                                fontSize: '$lg',
                                                fontWeight: '$medium',
                                                color: 'white',
                                            }}>
                                                <a href="/seasons/apl7/players">APL 7.0 Registered Players</a>
                                            </Text>
                                        </Modal.Body>
                                        
                                </Modal>
                                
                                }

                                {RegErrorStatus===true && 
                                <Modal
                                open={RegErrorStatus}
                                closeButton
                                onClose={()=>{
                                    setRegErrorStatus(false)
                                    window.location.pathname='./registration/player'
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
        }
        </div> 
        
    )
}