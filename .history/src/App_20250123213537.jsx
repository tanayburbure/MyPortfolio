import React from 'react'
import Navigation from './components/Navigation'
import Loader from './components/Loader'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div>
      <Loader/>
      <div className='fixed'>
        <Navigation/>
      </div>
      <Home/>
      <About/>
    </div>
  )
}

export default App