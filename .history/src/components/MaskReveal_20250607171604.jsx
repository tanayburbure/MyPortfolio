'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return position
}

const MaskReveal = ({ defaultContent, hoverContent }) => {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)
  const { x, y } = useMousePosition()
  const size = isHovered ? 400 : 40

  // Calculate position relative to container
  const getMaskPosition = () => {
    if (!containerRef.current) return { x: 0, y: 0 }
    
    const rect = containerRef.current.getBoundingClientRect()
    return {
      x: x - rect.left - (size / 2),
      y: y - rect.top - (size / 2)
    }
  }

  const maskPos = getMaskPosition()

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Content */}
      <div className="relative z-10">
        {defaultContent}
      </div>

      {/* Mask Layer */}
      <motion.div
        className="absolute flex inset-0 z-[99999] pointer-events-none"
        style={{
          WebkitMaskImage: "url('images/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#EB5939',
          zIndex:999999,
        }}
        animate={{
          WebkitMaskPosition: `${maskPos.x}px ${maskPos.y}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <div className="w-full h-screen">
          {hoverContent}
        </div>
      </motion.div>
    </div>
  )
}

export default MaskReveal