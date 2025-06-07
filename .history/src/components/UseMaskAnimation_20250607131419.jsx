import { useState } from 'react';

const UseMaskAnimation = ({ 
  defaultSize = 40, 
  hoverSize = 400, 
  children 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? hoverSize : defaultSize;

  return children({
    isHovered,
    size,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  });
};

export default UseMaskAnimation;