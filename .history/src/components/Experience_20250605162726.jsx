import React, { useEffect, useState } from 'react';
import AnimatedText from '../components/AnimatedText'; // adjust path if needed

function Experience() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.05);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="bg-fixed w-full bg-center bg-cover min-h-screen relative"
      style={{
        backgroundImage: "url('/images/Exp.jpg')",
        backgroundPositionY: `calc(50% + ${offsetY}px)`
      }}
    >
      {/* Gradient Shadow Top */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/70 to-transparent z-10 pointer-events-none" />

      {/* Gradient Shadow Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none" />

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-12 pt-48">
        <h5 className="text-sm font-semibold mb-6 pl-[31vh] text-white">E X P E R I E N C E</h5>

        <AnimatedText className="text-[9vh] mb-20 pl-[31vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] text-white">
          Over <span className="text-[#EB5939]">two years</span> of Experience in interactive design and working with some of the most talented people in the business.
        </AnimatedText>
      </div>
    </div>
  );
}

export default Experience;
