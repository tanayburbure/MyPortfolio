// import React from 'react'

// function Loader() {
//   return (
//     <div className='bg-[#0D0D0D] h-[100vh] relative w-full flex items-center justify-center'>
//       <div className='h-[14vw] w-[14vw] border-[1.7px] border-[#b7ab98] rounded-full'></div>
//         <img
//           className='h-20 pb-4'
//           src={`${import.meta.env.BASE_URL}images/logo.gif`}
//           alt="Animated Logo"
//         />
//         <button className='border-[1px] text-[2vh] px-8 py-[1px] pb-1 rounded-full border-[#b7ab98] text-[#b7ab98]'>S T A R T</button>
      
//     </div>
//   )
// }

// export default Loader

import React from 'react';

function Loader() {
  return (
    <div style={styles.container}>
      {/* Inline styles for the animation */}
      <style>
        {`
          @keyframes drawCircle {
            0% {
              stroke-dashoffset: 188.5; /* Start with the circle fully "drawn out" */
            }
            100% {
              stroke-dashoffset: 0; /* Fully visible at the end */
            }
          }

          .circle {
            animation: drawCircle 3s ease-in-out forwards;
            transform: rotate(-90deg); /* Start drawing from the top */
            transform-origin: center;
          }
        `}
      </style>

      {/* SVG Circle */}
      <svg style={styles.svg} viewBox="0 0 64 64">
        <circle
          className="circle"
          style={styles.circle}
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke="#b7ab98"
          strokeWidth="1.7"
          strokeDasharray="188.5" /* Circumference of the circle */
          strokeDashoffset="188.5" /* Start with the circle fully "drawn out" */
        />
      </svg>
    </div>
  );
}

// Inline styles for the component
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    width: '14vw',
    height: '14vw',
  },
  circle: {
    transformOrigin: 'center',
  },
};

export default Loader;
