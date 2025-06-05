import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Motto() {
  const imageRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.to(imageRef.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div className='h-[100vh] relative overflow-hidden'>
      <img
  ref={imageRef}
  className="h-[100vh] w-[100vw] object-cover absolute top-0 left-0 -z-10"
  src="./images/Exp.jpg"
  alt="Experience"
  loading="eager"
  fetchpriority="high"
/>
      <div className='top-[28%] left-0 right-0 absolute flex flex-col items-center text-center px-4'>
        <h5 className='text-sm mb-4'>M Y &nbsp; M O T T O</h5>
        <h2 className='text-[18vh] w-[60%] font-semibold tracking-tighter leading-[7vw]'>
          GOOD DESIGN IS HONEST
        </h2>
        <h4 className='mt-4'>Dieter Rams</h4>
      </div>
    </div>
  );
}

export default Motto;
