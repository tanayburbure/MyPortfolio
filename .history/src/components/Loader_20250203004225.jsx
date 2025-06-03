import React from 'react';

function Loader() {
  return (
    <div className='bg-[#0D0D0D] h-[100vh] relative w-full flex items-center justify-center'>
      {/* Animated Number */}
      <div className='animate'>
        <style>
          {`
            @keyframes countUp {
              0% {
                content: '0';
                opacity: 1;
              }
              100% {
                content: '100';
                opacity: 0;
              }
            }

            .number {
              animation: countUp 1s linear forwards;
              font-size: 5vw;
              color: #b7ab98;
              transform: scaleX(-1); /* Flip horizontally */
            }
          `}
        </style>
        {/* Number Display */}
        <div className="number">0</div>
      </div>

      {/* Logo and Button */}
      <img
        className='h-16 absolute'
        src={`${import.meta.env.BASE_URL}images/logo.gif`}
        alt="Animated Logo"
      />
      <button className='border-[1px] hidden text-[2vh] absolute top-[57vh] px-8 py-[1px] pb-1 rounded-full border-[#b7ab98] text-[#b7ab98]'>S T A R T</button>
    </div>
  );
}

export default Loader;
