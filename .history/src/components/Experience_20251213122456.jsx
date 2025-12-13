import React, { useEffect, useState } from 'react';
import AnimatedText from '../utility/AnimatedText';

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

          backgroundPositionX: isMobile ? '69%' : 'right',

          backgroundSize: isMobile ? '430%' : 'cover',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        }}


      />

      {/* Foreground content */}
      <div className='h-screen pl-[5vw] md:pl-[15vh] lg:pl-[31vh] flex flex-col justify-center mt-4 lg:mt-4'>
        <h5 className="mb-8 lg:mb-12 font-semibold shadow-lg text-xs lg:text-[2.2vh] tracking-widest">E X P E R I E N C E</h5>

        <AnimatedText
  className="text-[clamp(4.2vh,5vw,8.5vh)] 
             font-[font9] 
             tracking-tight 
             sm:tracking-normal 
             w-full
             sm:w-[85%] 
             md:w-[80%] 
             lg:w-[80%] 
             font-semibold 
             leading-[clamp(4.2vh,7vw,9vh)] 
             break-words 
             hyphens-auto 
             cursor-expand"
>
  Over{' '}
  <span className="text-[#EB5939] font-[font8] tracking-wide sm:tracking-wider">
    two years
  </span>{' '}
  experience building and maintaining full-stack applications , contributing to real-world projects 
</AnimatedText>

      </div>
    </div>
  );
}

export default Experience;
