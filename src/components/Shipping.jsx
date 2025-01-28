import React from 'react'
import '../styles/shipping.scss'

const Shipping = () => {
  return (
    <div className="shipping">
      <div className="shipping-container">
        <h1 className="shipping-title">Shipping Policy</h1>
        
        <div className="shipping-content">
          <div className="shipping-methods">
            <div className="shipping-card">
              <h2>Local Bangalore Delivery</h2>
              <p>For local Bangalore deliveries, orders are shipped via Porter, 
              courier services, or private vehicles, depending on the order size.</p>
            </div>

            <div className="shipping-card">
              <h2>Outstation Delivery</h2>
              <p>For outstation deliveries, we use transport or courier services 
              with multi-layered packaging to ensure product safety.</p>
            </div>

            <div className="shipping-card">
              <h2>Bulk Orders</h2>
              <p>Bulk or large orders are dispatched directly to your location 
              via private vehicles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipping