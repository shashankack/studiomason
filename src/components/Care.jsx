import React from 'react'
import "../styles/care.scss"

const Care = () => {
  return (
    <div className="care">
      <div className="care-container">
        <h1 className="care-title">Care Instructions</h1>
        
        <div className="care-content">
          <div className="care-intro">
            <p>We use a water-based, non-emitting penetration sealer to protect your concrete surfaces, 
            making them as easy to clean as a laminated surface.</p>
            
            <p>Small hairline cracks, pores, and variations are natural in handcrafted concrete and 
            add to its unique charm.</p>
          </div>

          <div className="care-instructions">
            <div className="instruction-item">
              <h3>Daily Care</h3>
              <p>Use a damp cloth for regular cleaning and avoid abrasive pads or cleaners that may 
              damage the finish.</p>
            </div>

            <div className="instruction-item">
              <h3>Initial Period</h3>
              <p>In the initial days, avoid leaving items on the surface for extended periods, and 
              wipe spills immediately.</p>
            </div>

            <div className="instruction-item">
              <h3>Heat Protection</h3>
              <p>Do not place hot cookware directly on the surface, as it can cause damage.</p>
            </div>

            <div className="instruction-item">
              <h3>Natural Changes</h3>
              <p>Over time, concrete may naturally lighten or darken due to weather exposure.</p>
            </div>

            <div className="instruction-item">
              <h3>Surface Protection</h3>
              <p>Handle with care to avoid chipping, and do not use the surface as a cutting board.</p>
            </div>

            <div className="instruction-item">
              <h3>Preventive Measures</h3>
              <p>Always use coasters or felt pads under sharp or heavy objects to maintain the 
              surface's integrity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Care