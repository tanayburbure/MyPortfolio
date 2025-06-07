'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const useMousePosition = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const updatePosition = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [mouseX, mouseY])

  return { x: mouseX, y: mouseY }
}

const MaskReveal = ({ defaultContent, hoverContent }) => {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)
  const { x: mouseX, y: mouseY } = useMousePosition()
  
  // Smooth size animation
  const size = useSpring(isHovered ? 400 : 0, {
    damping: 20,
    stiffness: 300,
    mass: 0.5
  })

  // Smooth position tracking
  const maskX = useSpring(0, { damping: 30, stiffness: 300 })
  const maskY = useSpring(0, { damping: 30, stiffness: 300 })

  useEffect(() => {
    if (!containerRef.current) return

    const updateMaskPosition = () => {
      const rect = containerRef.current.getBoundingClientRect()
      maskX.set(mouseX.get() - rect.left - size.get() / 2)
      maskY.set(mouseY.get() - rect.top - size.get() / 2)
    }

    const unsubscribe = size.on('change', updateMaskPosition)
    return () => unsubscribe()
  }, [mouseX, mouseY, maskX, maskY, size])

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Content */}
      <div className="relative z-10 w-full h-full">
        {defaultContent}
      </div>

      {/* Mask Layer */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          WebkitMaskImage: "url('images/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#EB5939',
          WebkitMaskPosition: `${maskX.get()}px ${maskY.get()}px`,
          WebkitMaskSize: `${size.get()}px`,
        }}
        transition={{ type: 'spring' }}
      >
        <div className="w-full h-full">
          {hoverContent}
        </div>
      </motion.div>
    </div>
  )
}

export default MaskReveal