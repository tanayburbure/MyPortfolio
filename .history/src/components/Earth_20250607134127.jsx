'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import useMousePosition from './MousePosition';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [mounted, setMounted] = useState(false);
  const size = 40;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || x === null || y === null) return null;

  return createPortal(
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      initial={{ opacity: 0 }}
      animate={{
        x: x - size / 2,
        y: y - size / 2,
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: '#ec4e39',
        mixBlendMode: 'difference', // makes it more visually appealing on different backgrounds
      }}
    />,
    document.body
  );
};

export default CustomCursor;
