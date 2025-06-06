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
    <div
      className="bg-fixed w-full bg-center min-h-[100vh] relative"
      style={{
        backgroundImage: "url('./images/satoru.jpg')",
        opacity: 0.6,
        backgroundPositionY: `calc(110% + ${offsetY}px)`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 z-0" />

      {/* Content */}
      <div className="absolute top-[24%] left-[10%] z-10">
        <h3 className="tracking-tight text-lg font-bold text-center mb-8 mr-5">
          T A N A Y &nbsp;&nbsp; B U R B U R E
        </h3>

        <h1 className="text-center text-[16vh] font-bold leading-[6.4vw] tracking-tighter">
          STILL <br />
          <span className="text-[#EB5939]">
            DEBUGGING <br />
          </span>
          SINCE <br />
          2023
        </h1>
      </div>
    </div>
  );
}

export default Home;
