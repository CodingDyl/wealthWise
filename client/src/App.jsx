import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Hero, About, Contact } from './pages'
import { Footer } from './components'


const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-background">
      <div className="bg-home-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
      </div> 
      <About />
      <Contact />
      <Footer />
    </div>
    </BrowserRouter>
   )
}

export default App
