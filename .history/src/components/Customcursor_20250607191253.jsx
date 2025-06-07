'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Enhanced mouse position hook with requestAnimationFrame
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let requestId;
    let mouseX = 0;
    let mouseY = 0;

    const updateMousePosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      setMousePosition({ x: mouseX, y: mouseY });
      requestId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updateMousePosition);
    requestId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return mousePosition;
};

// Smoother Custom Cursor Component
export const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const size = 40;

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        x: x,
        y: y,
      }}
      transition={{ 
        type: 'spring',
        damping: 50,
        stiffness: 300,
        mass: 0.8,
        restDelta: 0.001
      }}
    />
  );
};