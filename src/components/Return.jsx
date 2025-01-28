import React from 'react'
import '../styles/return.scss'

const Return = () => {
  return (
    <div className="return">
      <div className="return-container">
        <h1 className="return-title">Returns & Exchange</h1>
        
        <div className="return-content">
          <div className="policy-section">
            <div className="policy-card">
              <h2>Cancellation</h2>
              <p>Once confirmed orders cannot be cancelled or changed in any way. 
              In the event that the shipment is refused, the customer will be 
              responsible for a 50% restocking fee on the entire order.</p>
            </div>

            <div className="policy-card">
              <h2>Returns</h2>
              <p>Purchases cannot be returned or exchanged.</p>
            </div>
          </div>

          <div className="terms-section">
            <h2 className="terms-title">Terms & Conditions</h2>
            
            <div className="terms-grid">
              <div className="terms-card">
                <h3>Catalogs and Color Samples</h3>
                <p>For accuracy in seeing samples of colors and finishes, our 
                Finishes Guide is available upon request. Tolerance for color 
                variations is 5%.</p>
              </div>

              <div className="terms-card">
                <h3>Product Dimensions & Weights</h3>
                <p>All of our products are handmade, therefore product dimensions 
                may vary by 2-5mm. Weights are estimated actual weights may vary 
                by up to 10%.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Return