// import React from 'react'

// function Loader() {
//   return (
//     <div className='bg-[#0D0D0D] h-[100vh] relative w-full flex items-center justify-center'>
//       <div className='h-[14vw] w-[14vw] border-[1.7px] border-[#b7ab98] rounded-full'></div>
//         <img
//           className='h-20 pb-4'
//           src={`${import.meta.env.BASE_URL}images/logo.gif`}
//           alt="Animated Logo"
//         />
//         <button className='border-[1px] text-[2vh] px-8 py-[1px] pb-1 rounded-full border-[#b7ab98] text-[#b7ab98]'>S T A R T</button>
      
//     </div>
//   )
// }

// export default Loader

import React, { useEffect } from 'react';
import { Lottie } from 'react-lottie';
import animationData from './animation.json'; // Replace with your animation data path

function Loader() {
  useEffect(() => {
    const animationWindow = document.querySelector('#animationWindow');

    const animData = {
      wrapper: animationWindow,
      animType: 'svg',
      loop: true,
      prerender: true,
      autoplay: true,
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/play_fill_loader.json',
      rendererSettings: {
        // Options to control the rendering (add any additional options if needed)
      }
    };

    let anim = bodymovin.loadAnimation(animData);

    anim.addEventListener('DOMLoaded', onDOMLoaded);
    anim.setSpeed(1);

    function onDOMLoaded(e) {
      anim.addEventListener('complete', function () {});
      ScrubBodymovinTimeline(anim); // Call this to control the timeline (scrubbing)
    }

    return () => {
      if (anim) anim.destroy();
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div id="animationWindow"></div>
    </div>
  );
}

// Placeholder for the scrubbing function you need to implement
function ScrubBodymovinTimeline(anim) {
  // Scrubbing logic goes here
  console.log('Scrubbing timeline...');
  // You could use anim.goToAndStop(time, true) to control the animation based on user interaction
}

export default Loader;
