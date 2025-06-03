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
  const animationStyle = {
    '--p': 0,
    '--r': '0px',
    '--x': '0px',
    '--y': '0px',
    animation: 'p 6s linear infinite, r 6s ease-out infinite, x 1.5s cubic-bezier(.365,0,.635,1) infinite alternate, y 1.5s cubic-bezier(.365,0,.635,1) infinite alternate',
  };

  const keyframesStyle = `
    @keyframes p { 
      50%, 100% { --p: 100; }
    }
    @keyframes r {
      0%, 50% { --r: calc(100% - 0.5em); }
      75%, 100% { --r: -1px; }
    }
    @keyframes x { 
      100% { --x: calc(100% - 0.5em); } 
    }
    @keyframes y { 
      100% { --y: calc(100% - 0.5em); } 
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>
      <div className='h-[100vh] flex items-center justify-center'>
        <div
          className='h-[14vw] w-[14vw] border-[1.7px] border-[#b7ab98] rounded-full'
          style={animationStyle}
        ></div>
      </div>
    </>
  );
}

export default Loader;
