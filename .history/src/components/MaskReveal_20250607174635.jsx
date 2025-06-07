'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return position
}

const AnimatedText = ({ children, className }) => {
  return <div className={className}>{children}</div>
}

const MaskReveal = ({ defaultContent, hoverContent }) => {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)
  const { x, y } = useMousePosition()
  const size = isHovered ? 400 : 0
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const getMaskPosition = () => {
    if (!containerRef.current || !isMounted) return { x: 0, y: 0 }
    
    const rect = containerRef.current.getBoundingClientRect()
    return {
      x: x - rect.left - size / 2,
      y: y - rect.top - size / 2
    }
  }

  const maskPos = getMaskPosition()

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Content (Always visible) */}
      <div className="relative z-10 w-full h-full">
        {defaultContent}
      </div>

      {/* Hover Content (Revealed by mask) */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          WebkitMaskImage: "url('images/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#EB5939',
        }}
        animate={{
          WebkitMaskPosition: `${maskPos.x}px ${maskPos.y}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ 
          type: 'spring', 
          damping: 20,
          stiffness: 100,
          duration: 0.3
        }}
      >
        <div className="w-full h-full">
          {hoverContent}
        </div>
      </motion.div>
    </div>
  )
}

export default MaskReveal