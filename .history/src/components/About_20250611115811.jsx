import React from 'react';
import AnimatedText from './AnimatedText'; // adjust the path if needed

function About() {
  return (
    <div className='h-screen pl-[5vw] md:pl-[15vh] lg:pl-[31vh] flex flex-col justify-center mt-16'>
      <h5 className='shadow-lg text-xs lg:text-sm sm:text-sm md:text-base font-[font14] tracking-widest mb-6 sm:mb-8 lg:mb-12 font-semibold'>
        A B O U T &nbsp; M E
      </h5>

      <AnimatedText className="text-[5vh] sm:text-[6vh] md:text-[7vh] lg:text-[8.5vh] font-[font9] tracking-tight sm:tracking-normal w-[97%] sm:w-[85%] md:w-[80%] lg:w-[77%] font-semibold leading-[9.5vw] sm:leading-[7vw] md:leading-[10vh] lg:leading-[3.9vw] cursor-expand">
        I'm a <span className='text-[#EB5939] font-[font8] tracking-wide sm:tracking-wider'>visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
      </AnimatedText>
    </div>
  );
}

export default About;
