'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return mousePosition
}

export const CustomCursor = () => {
  const { x, y } = useMousePosition()
  const size = 40 // Fixed 40px size as requested

  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => document.body.style.cursor = 'auto'
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999]  rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: 'translate(-50%, -50%)'
      }}
      animate={{
        x,
        y
      }}
      transition={{
        type: 'tween',
        ease: 'linear',
        duration: 0.1 // Near-instant response
      }}
    />
  )
}