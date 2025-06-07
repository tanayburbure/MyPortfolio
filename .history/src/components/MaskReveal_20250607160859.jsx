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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, top: 0, left: 0 })
  const containerRef = React.useRef(null)
  const { x, y } = useMousePosition()
  const size = isHovered ? 400 : 40

  // Update container dimensions
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setDimensions({
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left
      })
    }
  }, [])

  // Calculate relative mouse position
  const relativeX = x - dimensions.left
  const relativeY = y - dimensions.top

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
          WebkitMaskPosition: `${relativeX - size/2}px ${relativeY - size/2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        {hoverContent}
      </motion.div>
    </div>
  )
}