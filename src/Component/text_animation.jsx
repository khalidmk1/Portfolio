import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Designer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Front End Developer',
        1000,
        'Back End Developer',
        1000,
        'Apps Developer',
        1000,
        'Apps Designer',
        
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '23px', display: 'inline-block' ,  }}
      className='text_font'
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
