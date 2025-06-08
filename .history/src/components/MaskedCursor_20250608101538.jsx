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
      {/* SOLID BLACK MASK (for text) */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9999]"
        style={{
          maskImage: "url('images/mask.svg')",
          WebkitMaskImage: "url('images/mask.svg')",
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: 'black',
          mixBlendMode: 'hard-light',
        }}
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          maskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`,
          maskSize: `${size}px`,
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
          maskImage: "url('images/mask.svg')",
          WebkitMaskImage: "url('images/mask.svg')",
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#ec4e39',
        }}
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          maskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`,
          maskSize: `${size}px`,
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