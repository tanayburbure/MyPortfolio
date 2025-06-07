import { motion } from 'framer-motion';
import useMaskAnimation from '../useMaskAnimation';

const MaskEffect = ({
  children,
  maskImage,
  maskColor,
  defaultSize = 40,
  hoverSize = 400,
  transition
}) => {
  const { size, bind } = useMaskAnimation(defaultSize, hoverSize);

  return children({
    size,
    maskStyles: {
      WebkitMaskSize: `${size}px`,
      WebkitMaskImage: `url(${maskImage})`,
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      background: maskColor,
    },
    bind,
    transition: transition || { type: 'tween', ease: 'backOut', duration: 0.5 }
  });
};

export default MaskEffect;