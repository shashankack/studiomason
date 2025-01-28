import React from "react";
import "../styles/beSpokeInt.scss";
import Logo from "./Logo";

const BeSpokeInt = () => {
  return (
    <div className="bespoke-int">
      <div className="left-section">
        <Logo />
        <h1>PROJECT STAGES</h1>
        <p className="intro">
          At Studio Mason, we specialize in crafting planters tailored to your unique needs. From custom sizes,
          colors, and designs to branded solutions for large corporate orders, our flexibility ensures your vision
          comes to life. Perfect for large-scale projects, we combine quality craftsmanship with personalized service
          to deliver exceptional results.
        </p>
        <img
          src="craftmanship.jpg"
          alt="Project stages"
          className="project-image"
          loading="lazy"
        />
        <a href="/enquiry">
          <button className="enq-btn">ENQUIRY</button>
        </a>
        <button 
          className="back-btn1"
          onClick={() => window.history.back()}
          aria-label="Go back"
        >
          ←
        </button>
      </div>

      <div className="right-section">
        <div className="stages">
          <div className="stage">
            <img src="logo2.png" alt="Stage 1" loading="lazy" />
            <h3>STAGE 1: CUSTOMER INPUT</h3>
            <p>
              At Studio Mason, our journey begins with you. We collaborate closely to understand your unique needs—whether it's custom sizes, colors, or designs. For larger corporate orders, we tailor branded solutions to align perfectly with your vision.
            </p>
          </div>
          <div className="stage">
            <h3>STAGE 2: DESIGN & MANUFACTURING</h3>
            <p>
              Once we've gathered your input, our skilled team gets to work. We craft innovative designs and rigorously test them to ensure they meet the highest standards of quality and functionality. Your feedback is integrated throughout the process to refine the product to perfection.
            </p>
          </div>
          <div className="stage">
            <h3>STAGE 3: DELIVERY</h3>
            <p>
              After design and testing are complete, we seamlessly deliver the final product. Whether it's for a large-scale project or a personalized order, our commitment to quality craftsmanship and exceptional service ensures your planters arrive ready to impress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeSpokeInt;
