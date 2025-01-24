import React from 'react'

function Home() {
  return (
    <div className='text-white flex items-center justify-center'>
        <video className='h-[100vh] w-[100vw] cover' autoPlay loop muted src="/video/back.mp4"></video>
        <h3 className='absolute top-12'>T A N A Y  B U R B U R E</h3>
        <h1 className='absolute text-center text-[12vh] font-bold leading-6'>
            MAKING <br />
            GOOD   <br />
            SHIT   <br />
            SINCE  <br />
            2023  
        </h1>
    </div>
  )
}

export default Home