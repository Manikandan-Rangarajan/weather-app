import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

import {
  Info,
  Navbar,
  Prediction,
  Search,
  Backg,
} from "./components"

function App() {

  return (
    <>
    <BrowserRouter>
     <div className='relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar/>
      <Search/>
      <Info/>
      <Prediction/>
      <Backg/>
     </div>
      
    </BrowserRouter>
    </>
  )
}

export default App
