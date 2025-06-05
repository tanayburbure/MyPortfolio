import React from 'react';

function Home() {
  return (
    <div className='relative flex items-center justify-center h-[100vh]'>
      <div className='absolute w-full h-screen overflow-hidden'>
        <img className='cover-full h-[100vh] w-screen' src="./images/new.jpg" alt="" />
      </div>
      
      <h3 className='absolute top-32 tracking-tight text-md font-bold bg-clip-text text-transparent bg-gradient-to-r from-white/80 to-white/50'>
        T A N A Y &nbsp;&nbsp; B U R B U R E
      </h3>

      <h1 className='absolute top-[23%] text-center text-[16vh] font-bold leading-[6.4vw] tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white/70 to-white/30'>
        MAKING <br />
        <span className='text-[#EB5939] bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-red-500'>
          GOOD <br />
          SHIT <br />
        </span>
        SINCE <br />
        2023
      </h1>
    </div>
  );
}

export default Home;
