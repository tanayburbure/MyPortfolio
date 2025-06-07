'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}

function About() {
  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePosition()
  const size = isHovered ? 400 : 40

  return (
    <div className='relative h-screen pl-[31vh] pb-4 flex flex-col justify-center'>
      {/* Mask layer - visible on hover */}
      <motion.div
        className="absolute w-full h-full flex flex-col justify-center pl-[31vh] pb-4 pointer-events-none"
        style={{
          WebkitMaskImage: "url('/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#EB5939',
          color: 'black',
        }}
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <h5 className='text-sm font-semibold mb-6'>A B O U T &nbsp; M E</h5>
        <div className="text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]">
          A passionate <span className='text-black'>creative developer</span> who bridges design and code to build immersive web experiences that captivate and engage.
        </div>
      </motion.div>

      {/* Regular content layer */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h5 className='text-sm font-semibold mb-6'>A B O U T &nbsp; M E</h5>
        <AnimatedText className="text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]">
          I'm a <span className='text-[#EB5939]'>visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
        </AnimatedText>
      </div>
    </div>
  )
}

export default About