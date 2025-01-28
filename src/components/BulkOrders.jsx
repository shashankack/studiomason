import React from 'react'
import "../styles/bulk.scss"

const BulkOrders = () => {
  return (
    <div className="bulk-orders">
      <div className="bulk-container">
        <h1 className="bulk-title">Bulk Orders</h1>
        
        <div className="bulk-content">
          <p className="bulk-description">
            At Studio Mason, we specialize in delivering premium concrete furniture 
            and décor tailored for bulk requirements. Whether you're outfitting a 
            commercial space, planning large-scale architectural projects, or sourcing 
            unique décor for events, we are equipped to meet your needs with precision 
            and style.
          </p>

          <div className="bulk-ideal">
            <h2>Ideal for:</h2>
            <ul className="bulk-list">
              <li>Restaurants and Cafés</li>
              <li>Hotels and Resorts</li>
              <li>Real Estate Developments</li>
              <li>Corporate Offices</li>
              <li>Event Planners and Designers</li>
            </ul>
          </div>

          <div className="bulk-cta">
            <p>Ready to bring your project to life?</p>
            <p>Get in touch with us for tailored solutions and exclusive bulk order benefits.</p>
            <a href =  "/enquiry" >
            <button className="contact-btn">Contact Us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BulkOrders