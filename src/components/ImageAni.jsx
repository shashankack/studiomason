import React, { memo } from 'react'
import "../styles/imageani.scss"
import { Link } from 'react-router-dom'
import AnimatedButton from './AnimatedButton'

// Constants outside component to prevent recreation
const HEADING_TEXT = "CONCRETE INNOVATION, TIMELESS DESIGN"
const DESCRIPTION_TEXT = `Studio Mason products are made using high-performance concrete, Steel, Wood, Resin and
Fibreglass. \n\nOur materials offer strength, weather resistance, and a natural aesthetic appeal. Each
piece is handcrafted and finished with attention to detail, ensuring uniqueness and longevity.`

// Memoize the button component since it's static
const ExploreButton = memo(() => (
  <div className='imageani-btn'>
    <Link to="/screensix" className='imageani-explore'>
      <AnimatedButton text="EXPLORE"/>
    </Link>
  </div>
))

const ImageAni = () => {
  return (
    <div className= "imageani-main">
        <div className='imageani-heading'>
            <h2> {HEADING_TEXT} </h2>
        </div>

        <div className='imageani-para'>
            <p> {DESCRIPTION_TEXT} </p>
        </div>

        <ExploreButton />
    </div>
  )
}

// Memoize the entire component since it's static
export default memo(ImageAni)
