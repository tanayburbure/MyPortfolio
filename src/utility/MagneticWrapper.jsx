'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const MagneticWrapper = ({ children, strength = 1, radius = 50 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;

    const distance = Math.sqrt(relX ** 2 + relY ** 2);

    if (distance < radius) {
      animate(x, relX * strength, { type: 'spring', stiffness: 300, damping: 20 });
      animate(y, relY * strength, { type: 'spring', stiffness: 300, damping: 20 });
    } else {
      animate(x, 0, { type: 'spring', stiffness: 300, damping: 20 });
      animate(y, 0, { type: 'spring', stiffness: 300, damping: 20 });
    }
  };

  const handleMouseLeave = () => {
    animate(x, 0, { type: 'spring', stiffness: 300, damping: 20 });
    animate(y, 0, { type: 'spring', stiffness: 300, damping: 20 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;
