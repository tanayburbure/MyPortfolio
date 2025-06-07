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
  const baseSize = 40
  const hoverSize = 400
  const size = isHovered ? hoverSize : baseSize

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Content (always visible) */}
      <div className="relative z-10">
        {defaultContent}
      </div>

      {/* Hover Content (revealed through mask) */}
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