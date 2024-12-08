
import React from 'react'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Hero from './components/Hero'
import About from './components/About'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import './App.css';
import WorkingStep from './components/WorkingStep'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className='font-primary overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <WorkingStep/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App
