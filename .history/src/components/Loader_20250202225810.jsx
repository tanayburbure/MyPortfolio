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
    <>
      <style>
        {`
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

          .loader {
            position: relative;
            height: 4px;
            width: 130px;
            --c: no-repeat linear-gradient(#6100ee 0 0);
            background: var(--c), var(--c), #d7b8fc;
            background-size: 60% 100%;
            animation: p 6s linear infinite, r 6s ease-out infinite, x 1.5s cubic-bezier(.365, 0, .635, 1) infinite alternate, y 1.5s cubic-bezier(.365, 0, .635, 1) infinite alternate;
          }

          .loader::before,
          .loader::after {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }

          .loader::before {
            --x: 0.5em;
            --y: 0.5em;
            --r: calc(100% - 0.5em); // inner radius of ring
            --mask: radial-gradient(circle at var(--x) var(--y), red calc(var(--r) - 1px), transparent), radial-gradient(closest-side, transparent var(--r), red calc(var(--r) + 1px));
            background: linear-gradient(-45deg, #d196dd, #fd954e);
            background-clip: text;
            -webkit-mask: var(--mask);
            mask: var(--mask);
            mask-composite: add, intersect;
            padding: 2.5em;
            border-radius: 0.2em;
          }

          .loader::after {
            color: transparent;
            background: linear-gradient(-45deg, #3e1c33, #814623);
            -webkit-mask: var(--mask);
            mask: var(--mask);
          }
        `}
      </style>
      <div className='h-[100vh] flex items-center justify-center'>
        <div className="loader"></div>
      </div>
    </>
  );
}

export default Loader;
