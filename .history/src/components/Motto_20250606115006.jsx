import React, { useEffect, useState } from 'react';

function Motto() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        setOffsetY(window.scrollY * 0.04);
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
      className="h-[100vh] relative overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('./images/sukuna.jpg')",
        backgroundPositionY: `calc(330% + ${offsetY}px)`,
        opacity: 0.7
      }}
    >
      {/* Text content */}
      <div className="top-[28%] left-0 right-0 absolute flex flex-col items-center text-center px-4 z-10">
        <h5 className="text-sm pl-3 mb-12">M Y &nbsp; M O T T O</h5>
        <h2 className="text-[18vh] w-[60%] font-semibold tracking-tighter leading-[7vw]">
          GOOD DESIGN IS HONEST
        </h2>
        <h4 className="mt-6 pl-5">Dieter Rams</h4>
      </div>
    </div>
  );
}

export default Motto;
