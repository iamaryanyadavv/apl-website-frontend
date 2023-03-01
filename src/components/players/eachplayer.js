import { Button, Input, Text, Image} from "@nextui-org/react";
import { Loading } from '@nextui-org/react';
import React from "react";
import { useState, useEffect } from "react";
import imageCompression from 'browser-image-compression';


export default function EachPlayerCard(){
    const [Fetching, setFetching] = useState(true);
    const [PlayerData, setPlayerData] = useState([]);
    const [ImageBase64, setImageBase64] = useState('');
    const [ChoppedImageBase64, setChoppedImageBase64] = useState([]);
    const [TestString, setTestString] = useState('');
    const [WholeImageFile, setWholeImageFile] = useState('');
    const [FinalFile, setFinalFile] = useState('');
    
    function chunkSubstr(str, size) {
        const numChunks = Math.ceil(str.length / size)
        const chunks = new Array(numChunks)
      
        for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
          chunks[i] = str.substr(o, size)
        }
        setChoppedImageBase64(chunks);
    }

    const convertBlobToBase64 = async (blob) => { // blob data
        const img = await blobToBase64(blob);
        setFinalFile(img);

        await fetch('http://localhost:3001/seasons/apl5/players',{
            method: 'POST',
            headers:{"Content-type":"application/json"},
            body: JSON.stringify({
                image: img,
                name: TestString
            })
        })

      }
      
    const blobToBase64 = blob => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {resolve(reader.result); }
        reader.onerror = error => reject(error);
    });
    
    const sendImage = async (e) => {

        const options = {
            maxSizeMB: 0.030,
            maxWidthOrHeight: 720,
            useWebWorker: true
        }

        const compressedFile = await imageCompression(WholeImageFile, options);
        console.log(compressedFile);
        console.log(convertBlobToBase64(compressedFile));
    }


    const getData = async () => {
        await fetch('http://localhost:3001/seasons/apl5/players')
        .then(response => response.json())
        .then((data)=>{
            setPlayerData(data);
            isFetchingData(data);
        })
    }

    const isFetchingData = (Data) => {
        if(Data){
            setFetching(false)
        }
    }

    useEffect( () => {
        getData();
    }, [])

    return(
        <div>
            {/* <FileBase64 type="file" multiple={false}
            onDone={(data) => {
                setImageBase64(data.base64)
            }}/> */}
            <input type='file' accept='image/*' onChange={(event)=>{
                setWholeImageFile(event.target.files[0]);
            }}>
            </input>
            <input type='text' onChange={(event)=>{
                setTestString(event.target.value)
            }}></input>
            {Fetching === true ? 
            <div>
                <Loading>
                    Fetching
                </Loading>
            </div> 
            : 
            <div>
                <Button 
                    onPress={()=>{
                        chunkSubstr(ImageBase64, 50000);
                    }}
                >
                    Make Chunks
                </Button>
                <Button
                    onPress={()=>{
                        console.log(WholeImageFile);
                        console.log(TestString)
                    }}
                >
                    Check WHole
                </Button>
                <Button
                    onPress={()=>{
                        sendImage();
                    }}
                >
                    Send Chunks
                </Button>
                <img src={FinalFile}></img>
                <Text>
                    {PlayerData.values}
                </Text>
            </div> 
            }
        </div>
    )
}