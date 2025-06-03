import React from 'react';

function Loader() {
  return (
    <div className='bg-[#0D0D0D] h-[100vh] relative w-full flex items-center justify-center'>
      {/* Animated Circle */}
      <div className='animate'>
        <style>
          {`
            @keyframes drawCircle {
              0% {
                stroke-dashoffset: 188.5; /* Start with the circle fully "drawn out" (invisible) */
              }
              100% {
                stroke-dashoffset: 0; /* Fully visible at the end (clockwise drawing) */
              }
            }

            // @keyframes disappearCircle {
            //   0% {
            //     stroke-dashoffset: 0; /* Start with the circle fully visible */
            //   }
            //   100% {
            //     stroke-dashoffset: -188.5; /* Fully "drawn out" at the end (counterclockwise disappearing) */
            //   }
            // }

            .circle {
              animation: drawCircle 1.5s linear forwards, disappearCircle 1.5s linear 1.5s forwards;
              transform: rotate(-90deg); /* Start drawing from the top */
              transform-origin: center;
            }
          `}
        </style>
        {/* SVG Circle */}
        <svg style={{ width: '16vw', height: '16vw' }} viewBox="0 0 64 64">
          <circle
            className="circle"
            cx="32"
            cy="32"
            r="30"
            fill="none"
            stroke="#b7ab98"
            strokeWidth="0.3"
            strokeDasharray="188.5" /* Circumference of the circle */
            strokeDashoffset="188.5" /* Start with the circle fully "drawn out" */
          />
        </svg>
      </div>

      {/* Logo and Button */}
      <img
        className='h-16 absolute'
        src={`${import.meta.env.BASE_URL}images/logo.gif`}
        alt="Animated Logo"
      />
      <button className='border-[1px]  text-[2vh] absolute top-[57vh] px-8 py-[1px] pb-1 rounded-full border-[#b7ab98] text-[#b7ab98]'>S T A R T</button>
    </div>
  );
}

export default Loader;
