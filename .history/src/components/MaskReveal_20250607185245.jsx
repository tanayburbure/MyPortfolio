'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;

  // Effect to handle hover states on custom elements
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const hoverElements = document.querySelectorAll('[data-cursor="hover"]');
    
    const enterHandler = () => setIsHovered(true);
    const leaveHandler = () => setIsHovered(false);

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', enterHandler);
      el.addEventListener('mouseleave', leaveHandler);
      el.style.cursor = 'none';
    });

    return () => {
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', enterHandler);
        el.removeEventListener('mouseleave', leaveHandler);
      });
    };
  }, []);

  // Safely calculate clamped values
  const clampedX = typeof window !== 'undefined' 
    ? Math.max(0, Math.min(window.innerWidth - size, x - size / 2))
    : 0;
  const clampedY = typeof window !== 'undefined' 
    ? Math.max(0, Math.min(window.innerHeight - size, y - size / 2))
    : 0;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      style={{
        WebkitMaskImage: "url('/images/mask.svg')", // Fixed path (add leading slash)
        WebkitMaskRepeat: 'no-repeat',
        backgroundColor: '#ec4e39',
        width: '100vw',
        height: '100vh',
      }}
      animate={{
        WebkitMaskPosition: `${clampedX}px ${clampedY}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.4 }}
    />
  );
}