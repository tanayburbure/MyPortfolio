import React, { useEffect, useRef, useState } from 'react';
import AnimatedText from '../components/AnimatedText';

function Experience() {
  const bgRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    if (bgRef.current) {
      // Adjust the speed of parallax by changing divisor (e.g. 3)
      setOffsetY(window.pageYOffset / 3);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col mt-12 justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/images/Exp.jpg')",
          transform: `translateY(${offsetY}px)`,
          willChange: 'transform',
        }}
      ></div>

      <h5 className="text-sm font-semibold mb-6 pl-[31vh]">E X P E R I E N C E</h5>

      <AnimatedText className="text-[9vh] mb-20 pl-[31vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]">
        Over <span className="text-[#EB5939]">two years</span> of Experience in interactive design and working with some of the most talented people in the business.
      </AnimatedText>
    </div>
  );
}

export default Experience;
