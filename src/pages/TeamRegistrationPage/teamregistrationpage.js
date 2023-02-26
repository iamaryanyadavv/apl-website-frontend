import React from "react";
import { Grid, Input, Text } from "@nextui-org/react";
import './teamregistrationpage.css';
import TRegForm from '../../components/registration/tregform.js';

export default function TeamRegistrationPage() {


    return(
        <div className="teamregistrationlanding">
            <div className="tregbackg">
                <Text h1
                css={{
                    textAlign: 'center',
                    fontWeight: '$semibold',
                    paddingBottom: '1.5%'
                }}>
                    APL 6.0 TEAM REGISTRATION
                </Text>
                <Text
                css={{
                    textAlign: 'center',
                    fontSize:'$md',
                    fontWeight: '$medium',
                    paddingBottom: '2%'
                }}>
                    Fill out the form below and pay the required registration fee to complete your registration!
                </Text>
                <TRegForm/>
            </div>
        </div>
    )

//     const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
}

