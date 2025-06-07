'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return position
}

export const MaskReveal = ({ defaultText, hoverText, children }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePosition()
  const size = isHovered ? 400 : 40

  return (
    <div className="relative">
      {/* Mask Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          WebkitMaskImage: "url('/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#EB5939',
        }}
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        {hoverText}
      </motion.div>

      {/* Content Layer */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {defaultText}
      </div>
    </div>
  )
}