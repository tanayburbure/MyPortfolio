import React from 'react';

function Home() {
  return (
    <div className='relative flex items-center justify-center h-screen'>
      <div className='absolute inset-0 w-full h-full overflow-hidden'>
        <img src="public\images\goku-beast-mode-amoled-black-background-minimal-5120x2880-4946.png" alt="" />
      </div>
      
      <h3 className='absolute top-12'>T A N A Y  B U R B U R E</h3>
      <h1 className='absolute text-center  text-[16vh] font-medium leading-[6.5vw]'>
        MAKING <br />
        <span className='text-[#EB5939]'>
        GOOD   <br />
        SHIT   <br />
        </span>
        SINCE  <br />
        2023  
      </h1>
    </div>
  )
}

export default Home;