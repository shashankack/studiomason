import React from 'react'

import ScreenVideo from './ScreenVideo'
import Products from './Products'
import About from './About'
import Clients from './Clients'
import RevealOnScroll from './RevealOnScroll'
import Description from './Description'
import Footer from './Footer'
import Project from './Project'
import Logo from './Logo'


const ScrollHero = () => {
  return (
    <div>
      <Logo />
      <ScreenVideo />
      <Project/>
      <Products />
      <About />
      <RevealOnScroll />
      <Description />
      <Clients />
      <Footer />
    </div>
  )
}



export default ScrollHero
