import React, { useEffect, useState, useMemo } from 'react';
import AnimatedText from '../components/AnimatedText';

function Experience() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable parallax/scroll tracking on mobile

    let requestId;
    const handleScroll = () => {
      if (requestId) return;
      requestId = requestAnimationFrame(() => {
        setOffsetY(window.scrollY * 0.03); // Reduced parallax for desktop
        requestId = null;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestId) cancelAnimationFrame(requestId);
    };
  }, [isMobile]);

  const backgroundStyle = useMemo(() => {
    if (isMobile) {
      return {
        backgroundImage: "url('/images/satoru.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.6,
      };
    } else {
      return {
        backgroundImage: "url('/images/satoru.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.6,
        transform: `translateY(${offsetY}px)`,
        willChange: 'transform',
      };
    }
  }, [offsetY, isMobile]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div
        className={`inset-0 absolute ${isMobile ? '' : 'fixed'}`}
        style={backgroundStyle}
      />

      {/* Content */}
      <div className="relative h-full z-10 flex flex-col pt-[30vh] sm:pt-52 md:pt-60 lg:pt-48 px-[5vw] sm:px-[10vw] md:pl-[15vh] lg:pl-[31vh]">
        <h5 className="mb-6 sm:mb-8 lg:mb-12 font-semibold font-sm font-[font14] tracking-widest text-xs sm:text-sm md:text-base">
          E X P E R I E N C E
        </h5>

        <AnimatedText className="text-[5vh] sm:text-[6.5vh] md:text-[8vh] lg:text-[8.5vh] font-[font9] cursor-expand mb-12 sm:mb-16 md:mb-20 tracking-tight w-[95%] font-semibold leading-[9.5vw] sm:leading-[5vw] md:leading-[4.5vw] lg:leading-[3.9vw]">
          Over
          <span className="text-[#EB5939] font-[font8] tracking-wide sm:tracking-wider"> two years</span> of Experience in interactive design and working with some of the most talented people in the business.
        </AnimatedText>
      </div>
    </div>
  );
}

export default Experience;
