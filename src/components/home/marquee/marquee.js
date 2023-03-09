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
        paddingBottom: '8px'
      }}
      gradientColor={[255, 255, 255]}
      gradientWidth={'15%'}
    >
      <p
        style={{
          fontSize: '22.5px',
          fontWeight: "500",
          textAlign: 'center',
          justifyContent: 'center',
          paddingRight: '2px',
          paddingLeft: '2px'
        }}
      >
        APL 6.0 owner and player registrations open on 23th of march, 2023! 
        Head on to the registrations page!
      </p>
    </Marquee>
  );
};

export default NewsTicker;