// hooks/useMaskAnimation.js
import { useState } from 'react';

export const useMaskAnimation = (defaultSize = 40, hoverSize = 400) => {
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? hoverSize : defaultSize;

  return {
    isHovered,
    size,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };
};