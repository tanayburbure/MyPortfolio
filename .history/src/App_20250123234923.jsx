import React from 'react'
import Navigation from './components/Navigation'
import Loader from './components/Loader'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'

function App() {
  return (
    <div>
      {/* <Loader/> */}
      <div className='fixed'>
        <Navigation/>
      </div>
      <Home/>
      <About/>
      <Work/>
    </div>
  )
}

export default App