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
            50%, 100% { --p: 100 }
          }

          @keyframes r {
            0%, 50% { --r: calc(100% - 0.5em) }
            75%, 100% { --r: -1px }
          }

          @keyframes x {
            100% { --x: calc(100% - 0.1em) }
          }

          @keyframes y {
            100% { --y: calc(100% - 0.1em) }
          }

          .loader {
            display: grid;
            place-items: center;
            width: 200px;
            height: 200px;
            font: 900 6em 'Courier New';
            background: #171717;
            position: relative;
            animation: p 6s linear infinite;
          }

          .loader::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 2.5em;
            border-radius: 0.5em;
            box-shadow: 4px 4px 13px;
            background: linear-gradient(-45deg, #3e1c33, #814623);
            animation: r 6s ease-out infinite, x 1.5s cubic-bezier(.365, 0, .635, 1) infinite alternate, y 1.5s cubic-bezier(.365, 0, .635, 1) infinite alternate;
            -webkit-mask: radial-gradient(circle at var(--x) var(--y), calc(100% - 0.2em)), radial-gradient(closest-side, #0000 60%, red calc(60% + 1px) calc(100% - 1px), #0000), conic-gradient(red calc(var(--p) * 1%), #0000 0%);
            mask: radial-gradient(circle at var(--x) var(--y), calc(100% - 0.2em)), radial-gradient(closest-side, #0000 60%, red calc(60% + 1px) calc(100% - 1px), #0000), conic-gradient(red calc(var(--p) * 1%), #0000 0%);
            -webkit-mask-composite: source-over, source-in;
            mask-composite: add, intersect;
          }

          .loader::after {
            content: '100%';
            position: absolute;
            color: #d7b8fc;
            font-size: 2em;
            mix-blend-mode: difference;
            -webkit-background-clip: text;
            background-clip: text;
          }
        `}
      </style>
      <div className="loader"></div>
    </>
  );
}

export default Loader;
