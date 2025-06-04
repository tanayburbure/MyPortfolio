import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Motto() {
  const imageRef = useRef(null);
  const triggerRef = useRef(null); // Scoped ScrollTrigger

  useEffect(() => {
    if (typeof window !== 'undefined' && imageRef.current) {
      const trigger = ScrollTrigger.create({
        trigger: imageRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        animation: gsap.to(imageRef.current, {
          y: -100,
          ease: 'none',
        }),
      });

      triggerRef.current = trigger;

      return () => {
        trigger.kill(); // Clean only this trigger
      };
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        ref={imageRef}
        src="/images/logo.svg" // ✅ Correct usage in Vite
        alt="Experience"
        className="absolute top-0 left-0 -z-10 w-screen h-screen object-cover"
      />
      <div className="absolute top-[28%] left-0 right-0 flex flex-col items-center text-center px-4">
        <h5 className="text-sm mb-4">M Y &nbsp; M O T T O</h5>
        <h2 className="text-[18vh] w-[60%] font-semibold tracking-tighter leading-[7vw]">
          GOOD DESIGN IS HONEST
        </h2>
        <h4 className="mt-4">Dieter Rams</h4>
      </div>
    </div>
  );
}

export default Motto;
