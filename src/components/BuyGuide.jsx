import React from 'react'
import "../styles/buyGuide.scss"
import { Link } from 'react-router-dom'

const BuyGuide = () => {
  return (
    <div className="buy-guide">
      <div className="guide-container">
        <h1 className="guide-title">How to Buy</h1>
        
        <div className="guide-content">
          <div className="guide-step">
            <h2>Explore Our Collection</h2>
            <p>Browse through our product range to see our signature products. 
            Each product page provides detailed descriptions, images, and material information.</p>
          </div>
      
         <Link to= "https://wa.me/+919980547044" style={{textDecoration: "none"}}>
          <div className="guide-step">
            <h2>Get in Touch</h2>
            <p>Ready to place an order or have questions? Reach out to us through 
            your preferred method—whether it's email, phone, social media, or 
            whatsapp. We're here to assist! </p>
            <p style={{color: "#fc6406" , fontWeight: "900"}}>CLICK TO CONTINUE</p>
          </div>
          </Link>


          <div className="guide-step">
            <h2>Discuss Custom Orders</h2>
            <p>For custom pieces, let us know your ideas. Our team will work with 
            you to understand your vision and suggest designs, materials, and 
            finishes that align with your needs.</p>
          </div>

          <div className="guide-step">
            <h2>Place Your Order</h2>
            <p>Once everything is confirmed, our sales team will guide you through 
            the order details, timelines, and delivery options to ensure a seamless 
            experience.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyGuide