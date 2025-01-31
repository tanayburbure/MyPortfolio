import React from 'react'

function Home() {
  return (
    <div className='text-white flex items-center justify-center'>
        <video className=' cover' autoPlay loop muted src="/video/back.mp4"></video>
        <h3 className='absolute top-12'>T A N A Y  B U R B U R E</h3>
        <h1 className='absolute text-center text-[16vh] font-medium leading-[6.5vw]'>
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