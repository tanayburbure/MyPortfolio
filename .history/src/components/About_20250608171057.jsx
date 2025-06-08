import React from 'react';
import AnimatedText from './AnimatedText'; // adjust the path if needed

function About() {
  return (
    <div className='h-screen pl-[31vh] pb-4 flex flex-col justify-center relative'>
      <h5 className='text-sm font-semibold mb-6'>A B O U T &nbsp; M E</h5>

      {/* Black clone for masked effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 text-black z-0"
        style={{ WebkitTextFillColor: 'black' }}
      >
        <AnimatedText className="text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] cursor-expand">
          I'm a <span className='text-black'>visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
        </AnimatedText>
      </div>

      {/* Visible layer */}
      <AnimatedText className="text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] cursor-expand relative z-10">
        I'm a <span className='text-[#EB5939]'>visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
      </AnimatedText>
    </div>
  );
}

export default About;
