import React, { memo } from 'react'
import AnimatedServices from './AnimateServices'
import ScrollPower from './ScrollPower'
import "../styles/about.scss"
import "../styles/scrollpower.scss"
import RevealOnScroll from './RevealOnScroll'

// Constants for menu items to avoid re-creation on each render
const DESIGN_MENU_ITEMS = [
  'CONCRETE/FURNITURE DESIGN',
  'DURABLE OUTDOOR SOLUTIONS',
  'SUSTAINABLE PRODUCTION',
  'BESPOKE CONCRETE DECOR'
];

const PRODUCT_MENU_ITEMS = [
  'FURNITURE',
  "PLANTERS",
  'WALL PANNEL'
];

// Memoized menu components to prevent unnecessary re-renders
const DesignMenu = memo(() => (
  <div className='about-menu'>
    <ul>
      {DESIGN_MENU_ITEMS.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
));

const ProductMenu = memo(() => (
  <div className='about-reach'>
    <ul>
      {PRODUCT_MENU_ITEMS.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
));

// Memoized logo component
const Logo = memo(() => (
  <div className='logo-div'>
    <img 
      src="logo2.png" 
      className='logo' 
      alt="Company Logo"
      loading="lazy"
    />
  </div>
));

const About = () => {
  return (
    <div className='about-main'>
      <section className='about-one'>
        <Logo />
        <DesignMenu />
        <ProductMenu />
      </section>

      <section className='about-two'>
        <AnimatedServices />
      </section>

      <section className='about-three'>
        <ScrollPower />
      </section>
    </div>
  )
}

// Memoize the entire component to prevent unnecessary re-renders
export default memo(About)
