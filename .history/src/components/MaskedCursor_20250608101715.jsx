'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}

export default function MaskedCursor() {
  const { x, y } = useMousePosition()
  const size = 40
  const [isMasked, setIsMasked] = useState(true)

  useEffect(() => {
    const handleMouseOver = (e) => {
      setIsMasked(!e.target.closest('.no-mask'))
    }
    document.addEventListener('mouseover', handleMouseOver)
    return () => document.removeEventListener('mouseover', handleMouseOver)
  }, [])

  return (
    <>
      {/* INVERTED TEXT LAYER */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9999]"
        style={{
          WebkitMaskImage: "url('images/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#000', // Black color for text
          mixBlendMode: 'difference', // Inverts light text to dark
        }}
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`,
          opacity: isMasked ? 1 : 0,
        }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.5
        }}
      />

      {/* ORIGINAL ORANGE CURSOR */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9998]"
        style={{
          WebkitMaskImage: "url('images/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#ec4e39', // Your original orange color
        }}
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`,
          opacity: isMasked ? 1 : 0,
        }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.5
        }}
      />
    </>
  )
}