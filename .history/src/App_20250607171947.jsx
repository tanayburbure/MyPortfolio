import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Client from './components/Client';
import Motto from './components/Motto';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Github from './components/Github';
import Dualshade from './components/Dualshade';
import MaskReveal from './components/MaskReveal'; // Import the MaskReveal component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [loading]);

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
    <div className='relative'>
      {loading && <Loader setLoading={setLoading} />}

      {!loading && (
        <MaskReveal> {/* Wrap your entire content with MaskReveal */}
          <div>
            <div className="fixed z-50">
              <Navigation />
            </div>
            <Home />
            <About />
            <Work />
            <Experience />
            <Client />
            <Github/>
            <Motto />
            <Footer />
          </div>
        </MaskReveal>
      )}
    </div>
  );
}

export default App;