import React from 'react';

function Home() {
  return (
    <div className='relative flex items-center justify-center h-[100vh]'>
      <div className='absolute w-full h-screen overflow-hidden'>
        <img src="./images/back.jpg" alt="" />
      </div>
      
      <h3 className='absolute top-28 tracking-tight text-lg font-bold '>T A N A Y &nbsp;&nbsp; B U R B U R E</h3>

      <h1 className='absolute text-center  text-[16vh] font-font-semibold leading-[6.5vw]'>
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