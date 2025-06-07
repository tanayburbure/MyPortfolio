'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Mouse tracking hook
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

// Main component
export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;

  // Effect to add hover listeners to all interactive elements
  useEffect(() => {
    const hoverElements = document.querySelectorAll(
      'a, button, input, textarea, [data-cursor-hover]'
    );

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    hoverElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
      element.style.cursor = 'none'; // Hide default cursor
    });

    return () => {
      hoverElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Clamp mask position to avoid going outside viewport
  const clampedX = Math.max(0, Math.min(window.innerWidth - size, x - size / 2));
  const clampedY = Math.max(0, Math.min(window.innerHeight - size, y - size / 2));

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      style={{
        WebkitMaskImage: "url('images/mask.svg')",
        WebkitMaskRepeat: 'no-repeat',
        backgroundColor: '#ec4e39',
      }}
      animate={{
        WebkitMaskPosition: `${clampedX}px ${clampedY}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.4 }}
    />
  );
}