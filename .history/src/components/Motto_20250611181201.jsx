import React, { useEffect, useState } from 'react';

function Motto() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let requestId;
    const handleScroll = () => {
      if (requestId) return;
      requestId = requestAnimationFrame(() => {
        setOffsetY(window.scrollY * (isMobile ? 0.001 : 0.03));
        requestId = null;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestId) cancelAnimationFrame(requestId);
    };
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background with stabilized animation */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./images/sukuna4.jpg')",
          opacity: 0.6,
          backgroundSize: isMobile ? 'auto 130%' : 'cover',
          backgroundPositionY: isMobile 
            ? `calc(50% + ${offsetY * 0.5}px)`
            : `calc(50% + ${offsetY}px)`,
          willChange: 'background-position',
          transition: 'background-position 0.1s linear'
        }}
      />