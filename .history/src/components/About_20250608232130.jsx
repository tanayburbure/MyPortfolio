import React from 'react';
import AnimatedText from './AnimatedText'; // adjust the path if needed

function About() {
  return (
    <div className='h-screen pl-[31vh] pb-4 flex flex-col justify-center'>
      <h5 className='shadow-lg font-sm font-[font14] tracking-widest mb-8 font-semibold'>A B O U T &nbsp; M E</h5>

      <AnimatedText className="text-[8vh] font-[font9] tracking-tighter w-[74%] font-semibold leading-[4.2vw] cursor-expand">
        I'm a <span className='text-[#EB5939] font-[font11] tracking-wider'>visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
      </AnimatedText>
    </div>
  );
}

export default About;
