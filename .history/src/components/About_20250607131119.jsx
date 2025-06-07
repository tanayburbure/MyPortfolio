import React from 'react';
import AnimatedText from './AnimatedText';
import { AnimatedMask, UseMaskAnimation } from './MaskEffects';

function About() {
  const { size, bind } = UseMaskAnimation(40, 600);

  return (
    <div className='h-screen pl-[31vh] pb-4 flex flex-col justify-center relative overflow-hidden'>
      <h5 className='text-sm font-semibold mb-6'>A B O U T &nbsp; M E</h5>

      <div className="relative">
        <AnimatedMask
          size={size}
          maskImage="/images/mask.svg"
          maskColor="#EB5939"
          className="z-20"
        >
          <div {...bind} className="absolute inset-0" />
        </AnimatedMask>

        <AnimatedText className="text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] relative z-10">
          I'm a <span className='text-[#EB5939]'>visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
        </AnimatedText>
      </div>
    </div>
  );
}

export default About;