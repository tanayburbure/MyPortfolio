import React from 'react'
import Navigation from './components/Navigation'
import Loader from './components/Loader'
import Home from './components/Home'


function App() {
  return (
    <div>
      {/* <Loader/> */}
      <Navigation/>
      <Home/>
    </div>
  )
}

export default App