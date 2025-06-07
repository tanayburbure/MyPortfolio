// utils/maskStyles.js
export const getMaskStyles = (size, maskImage, maskColor) => ({
  WebkitMaskSize: `${size}px`,
  WebkitMaskImage: `url(${maskImage})`,
  WebkitMaskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  background: maskColor,
});