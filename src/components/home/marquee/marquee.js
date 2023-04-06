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
        Groups Draw scheduled to take place at the mess on 10th of April.
        Look out for that email!
        Also, do check out our sponsors on the APL x FanUp page accessible from the navbar!
      </p>
    </Marquee>
  );
};

export default NewsTicker;