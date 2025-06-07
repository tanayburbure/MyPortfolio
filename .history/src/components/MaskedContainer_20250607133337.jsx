'use client';
import { motion } from 'framer-motion';
import useMousePosition from './MousePosition'; // Adjust path as needed

const MaskedContainer = ({ children }) => {
  const { x, y } = useMousePosition();
  const size = 50;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center text-black pointer-events-none"
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      style={{
        WebkitMaskImage: "url('/images/mask.svg')",
        WebkitMaskRepeat: 'no-repeat',
        background: '#ec4e39',
        zIndex: 999999,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MaskedContainer;
