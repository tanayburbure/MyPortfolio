import React from 'react';

function Home() {
  return (
    <div className='relative flex items-center justify-center h-[100vh]'>
      <div className="absolute top-0 left-0 w-full h-screen">
  <img
    src="./images/satoru.jpg"
    alt=""
    className="w-full h-full object-cover opacity-25"
  />
</div>

      
      <h3 className='absolute top-44 tracking-tight text-lg font-bold'>T A N A Y &nbsp;&nbsp; B U R B U R E</h3>

      <h1 className='absolute top-[30%] text-center text-[16vh] font-bold leading-[6.4vw] tracking-tighter'>
        STILL <br />
        <span className='text-[#EB5939]'>
        DEBUGGING <br />
        </span>
        SINCE  <br />
        2023  
      </h1>
    </div>
  )
}

export default Home;