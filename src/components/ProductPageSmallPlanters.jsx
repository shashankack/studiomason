import React from "react";
import { Link, useParams } from "react-router-dom";
import smallPlanters from "../products/smallPlanters";
import Slider from "react-slick";
import "../styles/productPage.scss"
import Logo from "./Logo";

const ProductPage = () => {
  const { id } = useParams();
  const product = smallPlanters.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  // Settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 501,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="product-page">


      {/* Left Side - Image Carousel */}
      <div className="product-page__left">
      <button 
            className="back-btn"
            onClick={() => window.history.back()}
          >
            ←BACK
          </button>
        <div className="product-carousel">
          <Slider {...sliderSettings}>
            {product.images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`${product.name} - ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="product-page__right">
        {/* Green Section */}
        <div className="product-header">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>

        {/* Red Section */}
        <div className="product-details">
          {/* Features */}
          <div className="features">
            <h3>Features:</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="specifications">
            <h3>Specifications:</h3>
            <ul>
              {product.specifications.map((spec, index) => (
                <li key={index} className="spec-item">
                  <span className="spec-name">{spec.name}:</span>
                  <span className="spec-value">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Buy Guide Button */}
        <div className="product-actions">
          <Link to="/buyGuide">
            <button className="buy-guide-btn">HOW TO BUY</button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
