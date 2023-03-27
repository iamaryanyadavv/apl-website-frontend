import React from 'react';
import Marquee from 'react-fast-marquee';
const NewsTicker = () => {
  return (
    <Marquee
      pauseOnHover={true}
      speed={50}
      style={{
        background: 'white',
        color: 'black',
        paddingTop: '7px',
        paddingBottom: '8px',
      }}
      gradientColor={[255, 255, 255]}
      gradientWidth={'15%'}
    >
      <p
        style={{
          fontSize: '15px',
          fontWeight: "500",
          paddingRight: '2px',
          paddingLeft: '2px',
        }}
      >
        APL 6.0 owner and player registrations re-open at 2PM IST on 28th of march, 2023! 
        Head on to the registrations page! 
        FIFA Registrations start on 20th of march, 2023!
      </p>
    </Marquee>
  );
};

export default NewsTicker;