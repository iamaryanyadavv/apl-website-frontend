import React from "react";
import { Col, Text, Loading } from "@nextui-org/react";
import './underdev.css'
import { FaTools} from 'react-icons/fa'

export default function UnderDev(){
    return(
        <div className="under-dev-bg">
            
                <Text hideIn={'md'}
                css={{
                    fontSize: '$8xl',
                    fontWeight: '$semibold',
                }}>
                Under Development
                </Text>
                <Text showIn={'md'}
                css={{
                    fontSize: '$3xl',
                    fontWeight: '$semibold',
                }}>
                Under Development
                </Text>
                <FaTools className='tools-icon'/>
                {/* <Loading 
                    loadingCss={{ $$loadingSize: "60px", $$loadingBorder: "3px" }}
                    color='white'
                    type="default" 
                    gradientBackground={'#141414'}
                /> */}

        </div>
        
    )
}