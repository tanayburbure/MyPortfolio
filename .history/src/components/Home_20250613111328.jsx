import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const mainHeadingRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setOffsetY(0);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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
      {/* Background */}
      <div
        className={`absolute inset-0 ${!isMobile ? 'bg-fixed' : ''}`}
        style={{
          backgroundImage: "url('./images/new.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: isMobile ? '400%' : 'cover',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          backgroundPositionX: 'center',
          backgroundPositionY: isMobile
            ? 'center'
            : `calc(110% + ${offsetY}px)`,
          opacity: 0.6,
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Name */}
        <h3 className="font-[font14] font-bold tracking-tight text-sm sm:text-base md:text-lg mb-4">
          T A N A Y &nbsp;&nbsp; B U R B U R E
        </h3>

        {/* Animated Main Heading */}
        <div className="overflow-hidden mb-1 w-full max-w-[95vw] sm:max-w-[90vw]">
          <h1
  ref={mainHeadingRef}
  className="font-[font13] text-[#EB5939] text-[8vh] md:text-[12vh] lg:text-[9vw] leading-none font-normal tracking-tight cursor-expand"
>
  STILL
  <br className="block md:hidden" />
  DEBUGGING
</h1>

        </div>

        {/* Animated Subtitle */}
        <div className="overflow-hidden w-full max-w-[90vw]">
          <h1
            ref={subtitleRef}
            className="font-[font9] font-semibold text-[3vh] sm:text-[4.5vh] md:text-[5.5vh] lg:text-[4vw] tracking-tight leading-none whitespace-nowrap"
          >
            SINCE 2023
          </h1>
        </div>
      </div>
    </div>
  );
}
