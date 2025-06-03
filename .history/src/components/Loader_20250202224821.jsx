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
          @keyframes l16 {
            0%   {background-position: -150% 0, -150% 0;}
            66%  {background-position: 250% 0, -150% 0;}
            100% {background-position: 250% 0, 250% 0;}
          }

          .loader {
            height: 4px;
            width: 130px;
            --c: no-repeat linear-gradient(#6100ee 0 0);
            background: var(--c), var(--c), #d7b8fc;
            background-size: 60% 100%;
            animation: l16 3s infinite;
          }
        `}
      </style>
      <div className='h-[100vh] flex items-center justify-center'>
        <div className='loader'></div>
      </div>
    </>
  );
}

export default Loader;
