import React from 'react'
import Navigation from './components/Navigation'
import Loader from './components/Loader'
import Home from './components/Home'
import App from './components/About'

function App() {
  return (
    <div>
      {/* <Loader/> */}
      <Navigation/>
      <Home/>
      <App/>
    </div>
  )
}

export default App