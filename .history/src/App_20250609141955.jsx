// import React, { useEffect, useState } from 'react';
// import Lenis from '@studio-freight/lenis';
// import Navigation from './components/Navigation';
// import Home from './components/Home';
// import About from './components/About';
// import Work from './components/Work';
// import Experience from './components/Experience';
// import Client from './components/Client';
// import Motto from './components/Motto';
// import Footer from './components/Footer';
// import Github from './components/Github';
// import Dualshade from './components/Dualshade'
// import MaskedCursor from './components/MaskedCursor'

// function App() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 2,
//       easing: (t) => 1 - Math.pow(1 - t, 5),
//       smooth: true,
//       smoothTouch: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//   }, []);

//   return (
//     <div className='relative'>
//       <div>
//         <div className="fixed z-50">
//           <Navigation />
//         </div>
//         <Home />
//         <About />
//         <Work />
//         <Experience />
//         <Client />
//         <Github />
//         <Motto />
//         <Footer />
//         <MaskedCursor />
//       </div>
//     </div>
//   );
// }
// export default App;

import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Client from './components/Client';
import Motto from './components/Motto';
import Footer from './components/Footer';
import Github from './components/Github';
import MaskedCursor from './components/MaskedCursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => 1 - Math.pow(1 - t, 5),
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative">
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <>
          <div className="fixed z-50">
            <Navigation />
          </div>
          <Home />
          <About />
          <Work />
          <Experience />
          <Client />
          <Github />
          <Motto />
          <Footer />
          <MaskedCursor />
        </>
      )}
    </div>
  );
}

export default App;
