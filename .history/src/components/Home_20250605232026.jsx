import React from 'react';

function Home() {
  return (
    <div className='relative flex items-center justify-center h-[100vh]'>
      <div className='absolute  h-[100vh] overflow-hidden'>
        <img src="./images/duck.avif" alt="" />
      </div>
      
      <h3 className='absolute top-32 tracking-tight text-md font-bold '>T A N A Y &nbsp;&nbsp; B U R B U R E</h3>

      <h1 className='absolute top-[23%] text-center text-[16vh] font-bold leading-[6.4vw] tracking-tighter'>
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