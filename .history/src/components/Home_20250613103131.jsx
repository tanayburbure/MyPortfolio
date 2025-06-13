import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const mainHeadingRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
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
        setOffsetY(window.scrollY * 0.03);
        animationFrameId = null;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!mainHeadingRef.current || !subtitleRef.current) return;

    const splitMain = new SplitText(mainHeadingRef.current, {
      type: 'chars',
    });
    const splitSub = new SplitText(subtitleRef.current, {
      type: 'chars',
    });

    gsap.from([...splitMain.chars, ...splitSub.chars], {
      y: 80,
      opacity: 0,
      ease: 'power4.out',
      stagger: 0.04,
      duration: 1,
    });

    return () => {
      splitMain.revert();
      splitSub.revert();
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 ${!isMobile ? 'bg-fixed' : ''}`}
        style={{
          backgroundImage: "url('./images/new.jpg')",
          backgroundRepeat: 'no-repeat',
          opacity: 0.4,
          backgroundPositionX: 'center',
          backgroundPositionY: isMobile
            ? 'center'
            : `calc(110% + ${offsetY}px)`,
          backgroundSize: isMobile ? '400%' : 'cover',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center lg:px-4 pr-1 text-center">
        {/* Name */}
        <h3 className="font-[font14] mt-[-4vh] font-bold tracking-tight lg:mb-4 text-sm sm:text-base md:text-lg">
          T A N A Y &nbsp;&nbsp; B U R B U R E
        </h3>

        {/* Main Heading (Animated) */}
        <div className="overflow-hidden">
          <h1
            ref={mainHeadingRef}
            className="font-[font13] cursor-expand leading-[7.3vh] font-normal tracking-tight text-[8vh] mt-8 lg:text-[9vw] md:text-[12vh] text-[#EB5939]"
          >
            STILL DEBUGGING
          </h1>
        </div>

        {/* Subtitle (Animated) */}
        <div className="overflow-hidden">
          <h1
            ref={subtitleRef}
            className="font-[font9] font-semibold tracking-tight mt-2 lg:mt-4 text-[3.5vh] sm:text-[4.5vh] md:text-[5.5vh] lg:text-[4vw]"
          >
            SINCE 2023
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
