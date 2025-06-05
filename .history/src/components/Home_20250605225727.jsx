import React from 'react';

function Home() {
  return (
    <div className="relative flex items-center justify-center h-[100vh]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="./images/new.jpg"
          alt=""
        />
      </div>

      {/* Name Text */}
      <h3 className="absolute top-32 tracking-tight text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/40">
        T A N A Y &nbsp;&nbsp; B U R B U R E
      </h3>

      {/* Main Headline */}
      <h1 className="absolute top-[23%] text-center text-[16vh] font-bold leading-[6.4vw] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/70 to-white/40">
        MAKING <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-red-500">
          GOOD <br />
          SHIT <br />
        </span>
        SINCE <br />
        2023
      </h1>
    </div>
  );
}

export default Home;
