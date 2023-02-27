import { Grid, Input, useInput, Text, Dropdown, Button } from "@nextui-org/react";
import './pregform.css';
import React, {useState} from "react";
import { useEffect } from "react";
import { useGoogleLogin } from '@react-oauth/google';

export default function PRegForm(){

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
    const login = useGoogleLogin({
        onSuccess: codeResponse => 
        {
            console.log(codeResponse);
            setSignedIn(true);
            document.getElementById("googleSignIn").innerHTML = "Signed In"
        },
        flow: 'auth-code',
        
      });
      
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
            <Grid.Container gap={2}
            css={{
                jc:'center'
            }}>
                <Grid 
                css={{
                    jc: 'center',
                    width: '1024px'
                }}>
                    <div className="googlelogin">
            <button auto_select = "false" className="signInButton" id="googleSignIn" onClick={() => {
                login();
            }}>
                Sign In to Google
            </button>           
        </div>  
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
                            <Input  disabled={!signedin}  onChange={(event)=>{setFirstName(event.target.value)}} animated={true} placeholder='First' type='text' bordered clearable required/>
                        </Grid>

                        <Grid>
                            <Input disabled={!signedin} onChange={(event)=>{setMiddleName(event.target.value)}} animated={true} placeholder='Middle' type='text' bordered clearable/>
                        </Grid>

                        <Grid>
                            <Input disabled={!signedin} onChange={(event)=>{setLastName(event.target.value)}} animated={true} placeholder='Last' type='text' bordered clearable required/>
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
                            width: '250px'
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
                            <Input disabled={!signedin} width='200px' {...bindings} onClearClick={reset} status={helper.color} color={helper.color} helperColor={helper.color} helperText={helper.text} animated={true} placeholder='Phone Number' type='text' bordered clearable required/>
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
                </Grid>
                
                <Grid
                css={{
                    jc: "center",
                    width: '1024px'
                }}>
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
                            <input disabled={!signedin} onChange={(event)=>setImage(event.target.files[0])} className="photobtn" animated={true} type='file' accept="image/*" required/>
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
                </Grid>

                <Grid
                css={{
                    jc: "center",
                    width: '1024px'
                }}>
                    <Grid.Container gap={2}
                    css={{
                        jc: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                        <Grid>
                            <Input css={{
                                jc: 'center',
                                textAlign: 'center'
                            }} disabled={!signedin} onChange={(event)=>setComment(event.target.value)} width='300px' animated={true} placeholder="Any Comments? (Don't roast me)" type='text' bordered clearable></Input>
                        </Grid>
                            
                    </Grid.Container>
                </Grid>
            
                <Grid
                css={{
                    width: '1024px'
                }}>
                    <Grid.Container gap={2}
                    css={{
                        jc: 'center',
                    }}>
                        <Grid>
                            <Button disabled={!signedin} onPress={sendForm} shadow rounded bordered auto ghost> Submit </Button>
                        </Grid>
                    </Grid.Container>
                </Grid>
            </Grid.Container>
        </div>
    )
}