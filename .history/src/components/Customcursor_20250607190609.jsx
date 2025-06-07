'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Mouse position hook
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

// Simple 40px Custom Cursor Component
export const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const size = 40; // Fixed size

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: '#ec4e39',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        x: x,
        y: y,
      }}
      transition={{ 
        type: 'spring',
        damping: 20,
        stiffness: 300,
        mass: 0.5
      }}
    />
  );
};