import React from 'react';

function Home() {
  return (
    <div className='relative flex items-center justify-center h-screen'>
      <div className='absolute w-full h-screen'>
        <img src="https://images.unsplash.com/photo-1516663713099-37eb6d60c825?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJsYWNrfGVufDB8fDB8fHww" alt="" />
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