// components/AnimatedMask.jsx
import { motion } from 'framer-motion';

export const AnimatedMask = ({
  size,
  maskImage,
  maskColor,
  children,
  className = '',
}) => (
  <motion.div
    className={`absolute inset-0 flex items-center justify-center ${className}`}
    animate={{
      WebkitMaskSize: `${size}px`,
    }}
    transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
    style={{
      WebkitMaskImage: `url(${maskImage})`,
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      background: maskColor,
    }}
  >
    {children}
  </motion.div>
);