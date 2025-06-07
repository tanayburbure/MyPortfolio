'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const HoverMaskText = ({
  hoverContent,
  backgroundContent,
  maskImage = '/images/mask.svg',
  maskColor = '#ec4e39',
  hoverSize = 400,
  defaultSize = 40,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const size = isHovered ? hoverSize : defaultSize;

  return (
    <main className={`relative w-full overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
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
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="cursor-default p-10 text-center"
        >
          {hoverContent}
        </div>
      </motion.div>

      <div className="relative z-10 flex w-full items-center justify-center text-center">
        <div className="cursor-default p-10">{backgroundContent}</div>
      </div>
    </main>
  );
};

export default HoverMaskText;
