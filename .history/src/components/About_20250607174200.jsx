'use client'
import React from 'react'
import AnimatedText from './AnimatedText'
import MaskReveal from './MaskReveal'

function About() {
  return (
    <div className='h-[100vh] relative overflow-x-hidden'>
      <MaskReveal
        defaultContent={
          <div className='absolute top-[30vh] left-[20vw] w-[70%] whitespace-nowrap'>
  <h5 className='text-sm font-semibold mb-6 text-[#afa18f]'>A B O U T &nbsp; M E</h5>
  <AnimatedText className="text-[9vh] tracking-tighter w-[80%] font-semibold leading-[4.5vw] text-[#afa18f] whitespace-nowrap">
    I'm a <span className='text-[#EB5939]'>visually skilled</span> interactive web designer and developer with a strong focus on crafting high quality, impactful digital experiences.
  </AnimatedText>
</div>
        }
        hoverContent={
          <div className='absolute top-[30vh] left-[20vw] mr-40'>
            <h5 className='text-sm font-semibold mb-6 text-black'>A B O U T &nbsp; M E</h5>
            <div className="text-[9vh] tracking-tighter font-semibold leading-[4.5vw] text-black">
              A passionate <span className='font-bold'>creative developer</span> who bridges majsb ajabbs ahjsba jasajshja jabnnsjjbaj jans jansja ndh nanbs jansh
            </div>
          </div>
        }
      />
    </div>
  )
}

export default About