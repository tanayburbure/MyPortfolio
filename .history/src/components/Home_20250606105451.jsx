import React, { useEffect, useState } from 'react';

function Home() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
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
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover z-0"
        style={{
          backgroundImage: "url('./images/new.jpg')",
          backgroundPositionY: `calc(110% + ${offsetY}px)`,
          opacity: 0.4,
        }}
      />

      {/* Optional dark overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-30 z-0" /> */}

      {/* Content Layer */}
      <div className="relative z-10 h-full absolute top-[22%]">
          <h3 className="tracking-tight text-lg font-bold text-center mb-52 mr-6">
            T A N A Y &nbsp;&nbsp; B U R B U R E
          </h3>

          <h1 className="text-center text-[16vh] font-bold leading-[6.4vw] tracking-tighter">
            STILL&nbsp;
            <span className="text-[#EB5939]">DEBUGGING <br /></span>
          </h1>
          <h3 className='text-center text-[6vh]'>SINCE 2023</h3>
      </div>
    </div>
  );
}

export default Home;
