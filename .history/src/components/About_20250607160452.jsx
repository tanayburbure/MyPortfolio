'use client'
import React from 'react'
import AnimatedText from './AnimatedText'
import { MaskReveal } from './MaskReveal' // adjust path as needed

function About() {
  return (
    <div className='h-screen pl-[31vh] pb-4 flex flex-col justify-center'>
      <MaskReveal
        defaultText={
          <>
            <h5 className='text-sm font-semibold mb-6'>A B O U T &nbsp; M E</h5>
            <AnimatedText className="text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]">
              I'm a <span className='text-[#EB5939]'>visually skilled</span> interactive web designer...
            </AnimatedText>
          </>
        }
        hoverText={
          <>
            <h5 className='text-sm font-semibold mb-6'>A B O U T &nbsp; M E</h5>
            <div className="text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] text-black">
              A passionate <span className='text-black'>creative developer</span> who bridges design...
            </div>
          </>
        }
      />
    </div>
  )
}

export default About