import React, { useState } from 'react';
import Loader from './components/Loader';
import LenisProvider from './utility/LenisProvider';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Client from './components/Client';
import Motto from './components/Motto';
import Footer from './components/Footer';
import Github from './components/Github';
import MaskedCursor from './utility/MaskedCursor';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {loading && <Loader setLoading={setLoading} />}

      {!loading && (
        <LenisProvider>
          <div className="fixed z-50">
            <Navigation />
          </div>

          <MaskedCursor />
          <Home isLoaded={!loading} />

          <About />
          <Work />
          <Experience />
          <Client />
          <Github />
          <Motto />
          <Footer />
        </LenisProvider>
      )}
    </div>
  );
}

export default App;
