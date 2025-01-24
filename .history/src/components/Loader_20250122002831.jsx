import React from 'react'

function Loader() {
  return (
    <div className='bg-[#0D0D0D] h-[100vh] w-screen w-full flex items-center justify-center'>
        <div className='h-[14vw] w-[14vw] border-[1.7px] flex flex-col items-center justify-center border-[#b7ab98] rounded-full'>
            <img className='h-16 pb-3' src="\images\logo.gif" alt="" />
            <button className='border-2 rounded-full border-[#b7ab98] text-[#b7ab98]'>S T A R T</button>
        </div>
    </div>
  )
}

export default Loader