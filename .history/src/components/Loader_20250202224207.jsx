import React from 'react'

function Loader() {
  return (
    <div className='bg-[#0D0D0D] h-[100vh] relative w-full flex items-center justify-center'>
      <div className='h-[14vw] w-[14vw] border-[1.7px] border-[#b7ab98] rounded-full'></div>
        <img
          className='h-20 pb-4'
          src={`${import.meta.env.BASE_URL}images/logo.gif`}
          alt="Animated Logo"
        />
        <button className='border-[1px] text-[2vh] px-8 py-[1px] pb-1 rounded-full border-[#b7ab98] text-[#b7ab98]'>S T A R T</button>
      
    </div>
  )
}

export default Loader

// import React from 'react'

// function Loader() {
//   return (
//     <div className='h-[100vh] flex items-center justify-center'>
//       <div className='h-[14vw] w-0 border-[1.7px] border-[#b7ab98] animate-grow'></div>
//     </div>
//   )
// }

// export default Loader
