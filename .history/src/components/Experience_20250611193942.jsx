import React, { useEffect, useState } from 'react';
import AnimatedText from '../components/AnimatedText';

function Experience() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobilePosX, setMobilePosX] = useState('80%'); // You can adjust this via UI or state logic

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (mobile) setOffsetY(0);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let animationFrameId;

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        setOffsetY(window.scrollY * 0.05);
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
      {/* Background image with opacity */}
      <div
        className={`absolute inset-0 ${!isMobile ? 'bg-fixed' : ''}`}
        style={{
          backgroundImage: "url('/images/satoru.jpg')",
          backgroundRepeat: "no-repeat",
          opacity: 0.7,
          backgroundPositionY: isMobile
            ? 'center'
            : `calc(100% + ${offsetY}px)`,

          // 👇 You can change this percentage to control horizontal position on mobile (e.g. '80%', '50%', '20%')
          backgroundPositionX: isMobile ? '69%' : 'right',

          backgroundSize: isMobile ? '430%' : 'cover',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        }}


      />

      {/* Foreground content */}
      <div className='h-screen pl-[5vw] md:pl-[15vh] lg:pl-[31vh] flex flex-col justify-center mt-16 lg:mt-6'>
        <h5 className="mb-4 lg:mb-12 font-semibold shadow-lg text-xs lg:text-[2.2vh] tracking-widest">C L I E N T S</h5>

        <AnimatedText className="text-[5vh] sm:text-[6vh] md:text-[7vh] lg:text-[8.5vh] font-[font9] tracking-tight sm:tracking-normal w-[97%] sm:w-[85%] md:w-[80%] lg:w-[80%] font-semibold leading-[9vw] sm:leading-[7vw] md:leading-[10vh] lg:leading-[3.95vw] cursor-expand">
          Over <span className="text-[#EB5939] font-[font8] tracking-wide sm:tracking-wider"> two years</span> of Experience in interactive design and working with some of the most talented people in the business.
        </AnimatedText>
      </div>
    </div>
  );
}

export default Experience;
