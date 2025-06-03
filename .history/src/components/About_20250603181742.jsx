import React, { useEffect, useState } from 'react';

function About() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setReveal(true), 100); // Trigger reveal after mount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='h-screen pl-[31vh] pb-4 flex flex-col justify-center'>
      <h5 className='text-xm font-semibold mb-6'>A B O U T &nbsp; M E</h5>

      <div className='relative w-[77%]'>
        <h2
          className={`
            text-[9vh] tracking-tighter font-semibold leading-[4.5vw]
            text-black transition-colors duration-1000
            ${!reveal ? 'text-[#2F2D29]' : 'text-black'}
          `}
        >
          I'm a <span className='text-[#EB5939]'>visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
        </h2>

        {/* Overlay for the reveal effect */}
        <div
          className={`
            absolute inset-0 bg-[#2F2D29]
            transition-transform duration-[1500ms] ease-in-out
            ${reveal ? 'translate-x-full' : 'translate-x-0'}
          `}
        />
      </div>
    </div>
  );
}

export default About;
