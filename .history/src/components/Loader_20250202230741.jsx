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
          @keyframes growCircle {
            0% {
              transform: scale(0) rotate(0deg);
              opacity: 0;
            }
            100% {
              transform: scale(1) rotate(360deg);
              opacity: 1;
            }
          }

          .animate-growCircle {
            animation: growCircle 2s ease-out forwards;
          }
        `}
      </style>

      {/* Animated div */}
      <div style={styles.loader} className="animate-growCircle"></div>
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
  loader: {
    height: '14vw',
    width: '14vw',
    border: '1.7px solid #b7ab98',
    borderRadius: '50%', // Makes the div a circle
    transform: 'scale(0)', // Start with zero size
    opacity: 0, // Start fully transparent
  },
};

export default Loader;
