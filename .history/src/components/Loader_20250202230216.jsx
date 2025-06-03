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
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>

      <style jsx>{`
        .loader {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 10px solid transparent;
          border-top: 10px solid #ff6347; /* Color of the circle animation */
          animation: spin 3s linear infinite;
        }

        /* Spin animation for the loader */
        @keyframes spin {
          0% {
            transform: rotate(0deg);
            border-top-color: #ff6347; /* Color of the circle animation */
          }
          100% {
            transform: rotate(360deg);
            border-top-color: #00bcd4; /* Color change when completed */
          }
        }
      `}</style>
    </div>
  );
}

export default Loader;
