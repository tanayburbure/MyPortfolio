import React from 'react'
import Navigation from './components/Navigation'
import Loader from './components/Loader'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Client from './components/Client'

function App() {
  return (
    <div>
      {/* <Loader/> */}
      <div className='fixed z-50'>
        <Navigation/>
      </div>
      <Home/>
      <About/>
      <Work/>
      <Experience/>
      <Client/>
    </div>
  )
}

export default App