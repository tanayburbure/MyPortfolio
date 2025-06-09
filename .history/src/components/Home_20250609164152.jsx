import React, { useEffect, useState, useRef } from 'react';

function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const bgRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    let animationFrameId;
    const bgElement = bgRef.current;

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        
        if (isMobile) {
          // Mobile-specific parallax effect
          const parallaxFactor = 0.03;
          setOffsetY(scrollPosition * parallaxFactor);
          
          if (bgElement) {
            bgElement.style.backgroundPositionY = `calc(50% + ${scrollPosition * parallaxFactor}px)`;
            bgElement.style.transform = `translate3d(0, ${scrollPosition * parallaxFactor * 0.1}px, 0)`;
          }
        } else {
          // Original desktop effect (no transform, just backgroundPosition)
          const parallaxFactor = 0.05;
          setOffsetY(scrollPosition * parallaxFactor);
          
          if (bgElement) {
            bgElement.style.backgroundPositionY = `calc(110% + ${scrollPosition * parallaxFactor}px)`;
            bgElement.style.transform = 'none';
          }
        }
        
        animationFrameId = null;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with conditional styling */}
      <div
        ref={bgRef}
        className={`absolute inset-0 bg-center bg-no-repeat bg-cover z-0 ${
          isMobile ? 'will-change-transform' : ''
        }`}
        style={{
          backgroundImage: "url('./images/new.jpg')",
          backgroundSize: 'cover',
          opacity: 0.4,
          // Mobile-specific extensions
          ...(isMobile ? {
            backgroundPositionY: '50%',
            minHeight: '110vh',
            top: '-5vh'
          } : {
            backgroundPositionY: '110%'
          })
        }}
      />

      {/* Your original content - completely unchanged */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center lg:px-4 pr-1 text-center">
        <h3 className="font-[font4] mt-[-4vh] font-bold tracking-tight lg:mb-4 text-sm sm:text-base md:text-lg">
          T A N A Y &nbsp;&nbsp; B U R B U R E
        </h3>

        <h1 className="font-[font13] leading-[7.3vh] font-normal tracking-tight leading-tight text-[8vh] mt-20 lg:text-[9vh] md:text-[12vh]">
          STILL{isMobile ? <br /> : ' '}
          <span className="text-[#EB5939] text-[8vh] lg:text-[9vh]">DEBUGGING</span>
        </h1>

        <h3 className="font-[font9] font-semibold tracking-tight mt-2 text-[3.5vh] sm:text-[4.5vh] md:text-[5.5vh]">
          SINCE 2023
        </h3>
      </div>
    </div>
  );
}

export default Home;