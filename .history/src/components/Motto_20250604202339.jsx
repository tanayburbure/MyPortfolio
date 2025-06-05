import React from 'react';

function Motto() {
  return (
    <div className='h-[100vh] relative overflow-hidden'>
      <img
        className=" object-cover opacity-70 position-bottom absolute top-0 left-0 -z-10"
        src="./images/sukuna.jpg"
        alt="Experience"
        loading="eager"
        fetchpriority="high"
      />
      <div className='top-[28%] left-0 right-0 absolute flex flex-col items-center text-center px-4'>
        <h5 className='text-sm pl-3 mb-12'>M Y &nbsp; M O T T O</h5>
        <h2 className='text-[18vh] w-[60%] font-semibold tracking-tighter leading-[7vw]'>
          GOOD DESIGN IS HONEST
        </h2>
        <h4 className='mt-6 pl-5'>Dieter Rams</h4>
      </div>
    </div>
  );
}

export default Motto;
