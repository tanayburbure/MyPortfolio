'use client'
import React from 'react'
import AnimatedText from './AnimatedText'
import MaskReveal from './MaskReveal'

function About() {
  return (
    <div className='h-[100vh] relative '>
      <MaskReveal
        defaultContent={
          <div className='absolute top-[30vh]'>
            <h5 className='text-sm font-semibold mb-6 text-[#afa18f]'>A B O U T &nbsp; M E</h5>
            <AnimatedText className="text-[6vh] leading-snug tracking-tight px-10 sm:px-20 md:px-40 font-semibold text-[#afa18f]">
              I'm a <span className='text-[#EB5939]'>visually skilled</span> interactive web designer and developer with a strong focus on crafting high quality, impactful digital experiences.
            </AnimatedText>

          </div>
        }
        hoverContent={
          <div>
            <h5 className='text-sm font-semibold mb-6 text-black'>A B O U T &nbsp; M E</h5>
            <div className="text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] text-black">
              A passionate <span className='font-bold'>creative developer</span> who bridges...
            </div>
          </div>
        }
      />
    </div>
  )
}

export default About