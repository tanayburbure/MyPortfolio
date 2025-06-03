import React from 'react';
import { motion } from 'framer-motion';

function Loader() {
  return (
    <div className='bg-[#0D0D0D] h-[100vh] relative w-full flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{ duration: 2, ease: 'linear' }}
        className='h-[14vw] w-[14vw] border-[1.7px] border-[#b7ab98] rounded-full'
      ></motion.div>
      <img
        className='h-20 pb-4 absolute'
        src={`${import.meta.env.BASE_URL}images/logo.gif`}
        alt="Animated Logo"
      />
      <button className='border-[1px] absolute top-[53vh] text-[2vh] px-8 py-[1px] pb-1 rounded-full border-[#b7ab98] text-[#b7ab98]'>S T A R T</button>
    </div>
  );
}

export default Loader;