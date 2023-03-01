import { Grid, Input, Modal, Text, Dropdown, Button, Row, Col, Avatar} from "@nextui-org/react";
import './pregform.css';
import React, {useState, useEffect} from "react";
import imageCompression from 'browser-image-compression';
import jwt_decode from "jwt-decode";

export default function PRegForm(){

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
    const genderItems = [
        { key: "Man", name: "Man" },
        { key: "Non-Cis Man", name: "Non-Cis Man" },
    ];
    const GeneralPosItems=[
        { key: "Goalkeeper", name: 'Goalkeeper'},
        { key: 'Defender', name: 'Defender'},
        { key: 'Midfielder', name: 'Midfielder'},
        { key: 'Attacker', name: 'Attacker'}
    ];
    const PreferredPosItems=[
        { key: 'GK', name: 'Goalkeeper (GK)' },
        { key: 'CB', name: 'Center Back (CB)' },
        { key: 'RB', name: 'Right Back (RB)' },
        { key: 'LB', name: 'Left Back (LB)' },
        { key: 'CDM', name: 'Center Defensive Mid (CDM)' },
        { key: 'CM', name: 'Center Mid (CM)' },
        { key: 'CAM', name: 'Center Attacking Mid (CAM)' },
        { key: 'LM', name: 'Left Mid (LM)' },
        { key: 'RM', name: 'Right Mid (RM)' },
        { key: 'LW', name: 'Left Wing (LW)'},
        { key: 'RW', name: 'Right Wing (RW)'},
        { key: 'CF', name: 'Center Forward (CF)'},
        { key: 'ST', name: 'Striker (ST)'}
    ];

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

    const [initialImage, setInitialImage] = useState('');
    const [finalImage, setFinalImage] = useState('');

    const [phonenumber,setPhonenumber] = useState('');
    const [PhonenumberStatus, setPhonenumberStatus] = useState('');

    const [emailID, setEmailID] = useState('');

    const [AlreadyRegistered, setAlreadyRegistered] = useState(false);
    const [RegistrationDone, setRegistrationDone] = useState(false);

    const [HelperColor, setHelperColor] = useState('');
    const [ModalVisibility, setModalVisibility] = useState(false);

    const [signedin, setSignedIn] = useState(false);
    const [User, setUser] = useState({});
    //     onSuccess: codeResponse => 
    //     {
    //         setSignedIn(true);
    //     },
    //     flow: 'auth-code',
        
    // });


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
        if(firstname && lastname && batch && phonenumber && gender && primarypos && secondpos){
            return true
        }
    }

    // function to send final player data to database
    async function sendForm(e)
    {
        //required inputs: firstname, lastname, batch, phonenumber, gender, position 1, position 2, 
        //not required inputs: middlename, image, comment
        
        if(firstname && lastname && batch && phonenumber && gender && primarypos && secondpos)
        { console.log(finalImage)

            // image, firstname, middlename, lastname, emailid, batch, phone, gender, primarypos, secondpos, comment
            await fetch('http://localhost:3001/registration/player',{
            method: 'POST',
            headers:{"Content-type":"application/json"},
            body: JSON.stringify({
                image: finalImage,
                firstname: firstname,
                middlename: middlename,
                lastname: lastname,
                emailid: emailID,
                batch: batch,
                phonenumber: phonenumber,
                gender: gender,
                primarypos: primarypos,
                secondpos: secondpos,
                comment: comment
            })
        })
        }
    }

    
    // functions to convert image to base64
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

    // function to check whether player is already registered
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

    // funciton to handle callback for google sign in
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
                                <Grid>
                                    <Input disabled={!signedin} status={FirstnameStatus}  helperColor={HelperColor}
                                    onChange={(event)=>{
                                        setFirstName(event.target.value); 
                                        if(event.target.value){
                                            setFirstnameStatus('success')
                                        }
                                        else if(!event.target.value){
                                            setFirstnameStatus('error')
                                        }
                                    }} 
                                    animated={'true'} placeholder='First' type='text' clearable required/>
                                </Grid>
    
                                {/* Middlename */}
                                <Grid>
                                    <Input disabled={!signedin} onChange={(event)=>{setMiddleName(event.target.value)}} animated={'true'} placeholder='Middle' type='text'  clearable/>
                                </Grid>
    
                                {/* Lastname */}
                                <Grid>
                                    <Input disabled={!signedin} status={LastnameStatus}  helperColor={HelperColor}
                                    onChange={(event)=>{
                                        setLastName(event.target.value);
                                        if(event.target.value){
                                            setLastnameStatus('success')
                                        }
                                        else(
                                            setLastnameStatus('error')
                                        )
                                    }} animated={'true'} placeholder='Last' type='text' clearable required/>
                                </Grid>
    
                            </Grid.Container>
                        </Grid.Container>
    
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
                                    disallowEmptySelection selectionMode="single" selectedKeys={gender} aria-label="Dynamic Actions" items={genderItems}>
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
                                <input disabled={!signedin} onChange={(event)=>setInitialImage(event.target.files[0])} className="photobtn" animated={'true'} type='file' accept="image/*" required/>
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
                            {/* Comment */}
                            <Grid>
                                <Input css={{
                                    jc: 'center',
                                    textAlign: 'center'
                                }} disabled={!signedin} onChange={(event)=>setComment(event.target.value)} width='300px' animated={'true'} placeholder="Any Comments? (Don't roast me)" type='text' clearable></Input>
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
                                    setModalVisibility(CheckForm());
                                    setFirstnameStatus('warning');
                                    setLastnameStatus('warning');
                                    setBatchStatus('warning');
                                    setPhonenumberStatus('warning');
                                    setGenderStatus('warning');
                                    setPrimaryposStatus('warning');
                                    setSecondposStatus('warning');
                                    convertImage();
                                }}>
                                    <Text
                                    css={{
                                        color: 'Black',
                                        fontWeight: '$semibold'
                                    }}>
                                        Pay
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
                                You can find the player details below!
                            </Text>
                        </Grid.Container>
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
                    </Grid>
                </Grid.Container>
            }

        </div>
    )
}