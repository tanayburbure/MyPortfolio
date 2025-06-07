import React from 'react';
import AnimatedText from './AnimatedText';

function About() {
  return (
    <div className='h-screen pl-[31vh] pb-4 flex flex-col justify-center'>
      <h5 className='text-sm font-semibold mb-6'>A B O U T &nbsp; M E</h5>

      {/* Add data-cursor attributes here */}
      <AnimatedText 
        className="text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]"
        data-cursor="hover"
        data-cursor-size="400" // Optional: custom size
      >
        I'm a <span 
          className='text-[#EB5939]' 
          data-cursor="hover"
          data-cursor-size="400" // Optional: custom size
        >visually skilled</span> interactive web designer and developer...
      </AnimatedText>
    </div>
  );
}

export default About;