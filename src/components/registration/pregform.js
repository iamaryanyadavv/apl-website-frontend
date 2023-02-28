import { Grid, Input, useInput, Text, Dropdown, Button, Col } from "@nextui-org/react";
import './pregform.css';
import React, {useState, useEffect} from "react";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
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
    ]

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
    ]

    const [firstname, setFirstName] = useState('');
    const [middlename, setMiddleName] = useState('');
    const [lastname, setLastName] = useState('');
    const [batch, setBatch] = useState('');
    const [gender, setGender] = useState('');
    const [primarypos, setPrimaryPos] = useState('');
    const [secondpos, setSecondPos] = useState('');
    const [comment, setComment] = useState('');
    const [image, setImage] = useState();
    const [phonenumber,setPhonenumber] = useState('');
    const [signedin, setSignedIn] = useState(false);
    const [SignInButtonText, setSignInButtonText] = useState('Google Sign In');
    const [SignedInEmailID, setSignInEmailID] = useState('');
    const [User, setUser] = useState({});
    const [UserName, setUserName] = useState('');
    const [UserEmail, setUserEmail] = useState('');

    const { value, reset, bindings } = useInput("");

    const validatePhone = (value) => {
        return value.match(/^(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?$/i);
    }
    const helper = React.useMemo(() => {
        if (!value)
          return {
            text: "",
            color: "",
          };
        const isValid = validatePhone(value);
        if(isValid)
        {
            setPhonenumber(value);
        }
        return {
          text: isValid ? "Valid" : "Invalid",
          color: isValid ? "success" : "error",
        };
    }, [value]);

    const login = useGoogleLogin({
        onSuccess: codeResponse => 
        {
            setSignedIn(true);
        },
        flow: 'auth-code',
        
    });


    async function sendForm(e)
    {
        if(firstname & middlename & lastname & batch & phonenumber & gender & primarypos & secondpos & comment)
        {
        try{
        let res = await fetch("https://localhost:3001/",
        {
            method: "POST",
            body: JSON.stringify({
                firstname: firstname,
                middlename:middlename,
                lastname:lastname,
                batch:batch,
                phonenumber:phonenumber,
                gender:gender,
                position1:primarypos,
                position2:secondpos,
                comments:comment
                }),
            headers:{
                "accepts":"application/json"
            }
        });

        let resJson = await res.json();
        if(res.status===200)
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

    function handleCallbackresponse(response){
        var userObject = jwt_decode(response.credential)
        setUser(userObject);
        var userName = userObject.name;
        setUserName(userName);
        var userEmail = userObject.email;
        setUserEmail(userEmail);
        setSignedIn(true);
        document.getElementById("GoogleButton").hidden = true;
    }

    useEffect(()=>{
        window.google.accounts.id.initialize({
            client_id: "307601456989-5ii0dp5jhqah6snpkuf9ff1jajp67ku6.apps.googleusercontent.com",
            callback: handleCallbackresponse
        });
        window.google.accounts.id.renderButton(
            document.getElementById("GoogleButton"),
            { theme: 'filled_black', size: 'large', shape: 'pill', }
        );
    }, [])

    // useEffect(
    //     () => {
    //         if (User){
    //             console.log(User);
    //             axios
    //                 .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${User.access_token}`, {
    //                     headers: {
    //                         Authorization: `Bearer ${User.access_token}`,
    //                         Accept: 'application/json'
    //                     }
    //                 })
    //                 .then((res) => {
    //                     setGoogleProfile(res.data);
    //                 })
    //                 .catch((err) => console.log(err))
    //         }
    //     }
    // )

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
                            fontSize: '$xl',
                            fontWeight: '$semibold'
                        }}>
                            Welcome {UserName}!
                        </Text>
                    </Grid.Container>

                    <Grid.Container
                    css={{
                        jc: 'center',
                        alignItems: 'center'
                    }}>
                        
                        <Text
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            fontSize: '$xl',
                            fontWeight: '$semibold'
                        }}>
                            You're signed in with {UserEmail}.
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
                                    padding: 'px'
                                }}>
                                    This form is open to only Ashoka University students.
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
                    
                       
                    
                    <Grid.Container gap={0}
                    css={{
                        jc: 'center',
                        alignItems: 'center',
                        paddingBottom: '5%'
                    }}>
                        <Grid
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            {/* <Button auto 
                            css={{
                                background: '$gray900',
                            }}
                            onPress={()=>{
                                login();
                            }}>
                                <Text
                                css={{
                                    color: 'Black',
                                    fontWeight: '$semibold',
                                }}>
                                    {SignInButtonText}
                                </Text>
                            </Button> */}
                        </Grid>

                    </Grid.Container>

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
                            <Grid>
                                <Input  disabled={!signedin}  onChange={(event)=>{setFirstName(event.target.value)}} animated={'true'} placeholder='First' type='text'  clearable required/>
                            </Grid>

                            <Grid>
                                <Input disabled={!signedin} onChange={(event)=>{setMiddleName(event.target.value)}} animated={'true'} placeholder='Middle' type='text'  clearable/>
                            </Grid>

                            <Grid>
                                <Input disabled={!signedin} onChange={(event)=>{setLastName(event.target.value)}} animated={'true'} placeholder='Last' type='text' clearable required/>
                            </Grid>

                        </Grid.Container>
                    </Grid.Container>

                    <Grid.Container gap={2}
                    css={{
                        jc: 'center'
                    }}>
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
                                ? <Dropdown.Button className="dp-btn" default light>Choose</Dropdown.Button>
                                : <Dropdown.Button className="dp-btn" default light>{batch}</Dropdown.Button>
                                }
                                <Dropdown.Menu onSelectionChange={setBatch} disallowEmptySelection selectionMode="single" selectedKeys={batch} aria-label="Dynamic Actions" items={batchItems}>
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
                            <Input disabled={!signedin} width='200px' {...bindings} onClearClick={reset} status={helper.color} color={helper.color} helperColor={helper.color} helperText={helper.text} animated={'true'} placeholder='Phone Number' type='text' clearable required/>
                        </Grid>
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
                                ? <Dropdown.Button className="dp-btn" default light>Choose</Dropdown.Button>
                                : <Dropdown.Button className="dp-btn" default light>{gender}</Dropdown.Button>
                                }
                                <Dropdown.Menu disabled={!signedin} onSelectionChange={setGender} disallowEmptySelection selectionMode="single" selectedKeys={gender} aria-label="Dynamic Actions" items={genderItems}>
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

                    <Grid.Container gap={2}
                    css={{
                        jc: 'center'
                    }}>
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
                                        ? <Dropdown.Button className="dp-btn" css={{ jc: 'center' }} default light>General</Dropdown.Button>
                                        : <Dropdown.Button className="dp-btn" css={{ jc: 'center' }} default light>{primarypos}</Dropdown.Button>
                                        }
                                        <Dropdown.Menu onSelectionChange={setPrimaryPos} disallowEmptySelection selectionMode="single" selectedKeys={primarypos} aria-label="Dynamic Actions" items={GeneralPosItems}>
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
                            <input disabled={!signedin} onChange={(event)=>setImage(event.target.files[0])} className="photobtn" animated={'true'} type='file' accept="image/*" required/>
                        </Grid>

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
                                        ? <Dropdown.Button className="dp-btn" css={{ jc: 'center' }} default light>Preferred</Dropdown.Button>
                                        : <Dropdown.Button className="dp-btn" css={{ jc: 'center' }} default light>{secondpos}</Dropdown.Button>
                                        }
                                <Dropdown.Menu disabled={!signedin} onSelectionChange={setSecondPos} selectionMode="single" selectedKeys={secondpos} aria-label="Dynamic Actions" items={PreferredPosItems}>
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

                    <Grid.Container gap={2}
                    css={{
                        jc: 'center',
                        alignItems: 'center'
                    }}>
                        <Grid>
                            <Input css={{
                                jc: 'center',
                                textAlign: 'center'
                            }} disabled={!signedin} onChange={(event)=>setComment(event.target.value)} width='300px' animated={'true'} placeholder="Any Comments? (Don't roast me)" type='text' clearable></Input>
                        </Grid>
                    </Grid.Container>

                    <Grid.Container gap={2}
                    css={{
                        jc: 'center',
                    }}>
                        <Grid>
                            <Button auto rounded
                            css={{
                                background: '$gray900'
                            }}>
                                <Text
                                css={{
                                    color: 'Black',
                                    fontWeight: '$semibold'
                                }}>
                                    Register
                                </Text>
                            </Button>
                        </Grid>
                        {/* disabled={!signedin} */}
                    </Grid.Container>

                </Grid>
            </Grid.Container>

        </div>
    )
}