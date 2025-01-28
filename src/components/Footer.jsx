import React, { useState } from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/footer.scss"
import { Link } from 'react-router-dom';

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };

  return (
    <div className='footer-main'>
      <div className='footer-one'>
      </div>
      <div className='footer-two'>
        <div className='footer-two-one footer-section'>
          <div className='section-header' onClick={() => toggleSection('section1')}>
            <h1>STUDIO MASON</h1>
            <IoIosArrowDown className={`arrow-icon ${expandedSection === 'section1' ? 'expanded' : ''}`} />
          </div>
          <div className={`section-content ${expandedSection === 'section1' ? 'expanded' : ''}`}>
            <div className='footer-two-one-two'>
              <p>@STUDIO MASON</p>
              <p>KSSIDC INDUSTRIAL ESTATE, 74,</p>
              <p>BOMMASANDRA</p>
              <p>BANGALORE, INDIA</p>
            </div>
            <p className='footer-follow-us'>FOLLOW US</p>
            <div className='footer-follow-us'>
           
              <a href="mailto:info@studiomason.in" target="_blank" rel="noopener noreferrer">
                <IoMailSharp size={30} className='footer-facebook'/>
              </a>
              <a href="https://www.instagram.com/studiomason_blr?igsh=b3Z3eWo3NGo5YWt4" target="_blank" rel="noopener noreferrer">
                <FaSquareInstagram size={30} className='footer-instagram'/>
              </a>
            </div>
          </div>
        </div>

        <div className='footer-two-two footer-section'>
          <div className='section-header' onClick={() => toggleSection('section2')}>
            <p className='section-title'>01/ MASON</p>
            <IoIosArrowDown className={`arrow-icon ${expandedSection === 'section2' ? 'expanded' : ''}`} />
          </div>
          <div className={`section-content ${expandedSection === 'section2' ? 'expanded' : ''}`}>
            <a href="/" className='about-link'>
              <p className='section-item'>STUDIO MASON</p>
            </a>
            <a href="/enquiry" className='about-link'>
              <p className='section-item'>CONTACT</p>
            </a>
            <a href="/bulkOrders" className='about-link'>
              <p className='section-item'>BULK ORDERS</p>
            </a>
            <a href="/buyGuide" className='about-link'>
              <p className='section-item'>BUY GUIDE</p>
            </a>
          </div>
        </div>

        <div className='footer-two-three footer-section'>
          <div className='section-header' onClick={() => toggleSection('section3')}>
            <p className='section-title'>02/ CUSTOMER SERVICE</p>
            <IoIosArrowDown className={`arrow-icon ${expandedSection === 'section3' ? 'expanded' : ''}`} />
          </div>
          <div className={`section-content ${expandedSection === 'section3' ? 'expanded' : ''}`}>
            <a href ="/bespokeint" className='about-link'>
              <p className='section-item'>BESPOKE</p>
            </a>
            <a href ="/shipping-policy" className='about-link'>
              <p className='section-item'>SHIPPING POLICY</p>
            </a>
            <a href="/return-policy" className='about-link'>
              <p className='section-item'>RETURN & EXCHANGE</p>
            </a>
            <a href="/return-policy" className='about-link'>
              <p className='section-item'>TERMS OF TRADE</p>
            </a>
            <a href="/return-policy" className='about-link'>
              <p className='section-item'>PRIVACY POLICY</p>
            </a>
            <a href="/care-instructions" className='about-link'>
              <p className='section-item'>CARE INSTRUCTIONS</p>
            </a>
          </div>
        </div>

        <div className='footer-two-four footer-section'>
          <div className='section-header' onClick={() => toggleSection('section4')}>
            <p className='section-title'>03/ POPULAR NOW</p>
            <IoIosArrowDown className={`arrow-icon ${expandedSection === 'section4' ? 'expanded' : ''}`} />
          </div>
          <div className={`section-content ${expandedSection === 'section4' ? 'expanded' : ''}`}>
            <a href="/test-comp" className='about-link'>
              <p className='section-item'>PLANTERS</p>
            </a>
            <a href="/test-comp2" className='about-link'>
              <p className='section-item'>DESK PLANTERS</p>
            </a>

            <a href="/breezeBlocks" className='about-link'>
              <p className='section-item'>BREEZE BLOCKS</p>
            </a>
            <a href="/test-comp4" className='about-link'>
              <p className='section-item'>TABLES</p>
            </a>
          </div>
        </div>

        <div className="footer-two-five footer-section">
          <div className='section-header' onClick={() => toggleSection('section5')}>
            <h1>REACH OUT SAVE 10% ON EVERYTHING NEW</h1>
            <IoIosArrowDown className={`arrow-icon ${expandedSection === 'section5' ? 'expanded' : ''}`} />
          </div>
          <div className={`section-content ${expandedSection === 'section5' ? 'expanded' : ''}`}>
            <div className='footer-icons'>
              <a href="mailto:info@studiomason.in" aria-label="Email us">
                <IoMailSharp size={40} style={{marginRight: "1rem"}}/>
              </a>
              <a href="https://wa.me/+919980547044" aria-label="Contact on WhatsApp">
                <IoLogoWhatsapp size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer