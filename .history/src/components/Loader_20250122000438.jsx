import React from 'react'

function Loader() {
  return (
    <div className='bg-[#0D0D0D] h-[100vh] w-screen w-full flex items-center justify-center'>
        <div className='h-[14vw] w-[14vw] border-[1.7px] border-[#b7ab98] rounded-full'>
            <img src="\images\logo.gif" alt="" />
        </div>
    </div>
  )
}

export default Loader