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

export const MaskReveal = ({ defaultContent, hoverContent }) => {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)
  const { x, y } = useMousePosition()
  const size = isHovered ? 400 : 40

  // Calculate mask position relative to container
  const calculateMaskPosition = () => {
    if (!containerRef.current) return { x: 0, y: 0 }
    
    const containerRect = containerRef.current.getBoundingClientRect()
    return {
      x: x - containerRect.left - (size / 2),
      y: y - containerRect.top - (size / 2)
    }
  }

  const maskPosition = calculateMaskPosition()

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

      {/* Mask Content */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          WebkitMaskImage: "url('images/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#EB5939',
        }}
        animate={{
          WebkitMaskPosition: `${maskPosition.x}px ${maskPosition.y}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        {hoverContent}
      </motion.div>
    </div>
  )
}