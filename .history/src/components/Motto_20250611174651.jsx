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
        setOffsetY(window.scrollY * (isMobile ? 0.002 : 0.02)); // Reduced factors
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
      {/* Background with stabilized sizing */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./images/sukuna4.jpg')",
          opacity: 0.6,
          transform: `translateY(${offsetY}px)`,
          willChange: 'transform',
          backgroundSize: isMobile ? 'auto 120%' : 'cover'
        }}
      />
      
      {/* Content remains the same */}
      <div className="relative h-full z-10 flex flex-col items-center justify-center">
        {/* ... your existing content ... */}
      </div>
    </div>
  );
}