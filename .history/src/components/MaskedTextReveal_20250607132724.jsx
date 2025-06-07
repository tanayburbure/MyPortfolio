'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from './MousePosition'; // Adjust path accordingly

const MaskedTextReveal = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 50;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center text-black"
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      style={{
        WebkitMaskImage: "url('/images/mask.svg')",
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: '40px',
        background: '#ec4e39',
      }}
    >
      <p
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-[1000px] p-10 text-[64px] leading-[66px] text-[#afa18f] cursor-default"
      >
        {children}
      </p>
    </motion.div>
  );
};

export default MaskedTextReveal;
