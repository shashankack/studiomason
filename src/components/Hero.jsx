import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/hero.scss';

// Animation variants - defined outside to prevent recreation
const containerVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const imageVariants = {
  initial: { y: 1, opacity: 1 },
  animate: { y: 1, opacity: 1 }
};

// Memoized components for better performance
const ProductFeatures = memo(({ features }) => {
  if (!features?.length) return null;
  
  return (
    <div className="features">
      <h3>Features:</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={`feature-${index}`}>{feature}</li>
        ))}
      </ul>
    </div>
  );
});

const ProductSpecifications = memo(({ specifications }) => {
  if (!specifications) return null;

  const specItems = useMemo(() => {
    if (Array.isArray(specifications)) {
      return specifications.map((spec, index) => (
        <li key={`spec-${index}`} className="spec-item">
          <span className="spec-name">{spec.name}:</span>
          <span className="spec-value">{spec.value}</span>
        </li>
      ));
    }

    return Object.entries(specifications).map(([key, value], index) => (
      <li key={`spec-${index}`} className="spec-item">
        <span className="spec-name">{key}:</span>
        <span className="spec-value">{value}</span>
      </li>
    ));
  }, [specifications]);

  return (
    <div className="specifications">
      <h3>Specifications:</h3>
      <ul>{specItems}</ul>
    </div>
  );
});

// Memoized action buttons
const ProductActions = memo(({ onClose }) => (
  <div className="product-actions">
    <Link to="/buyGuide">
      <button className="cta-button">
        HOW TO BUY
      </button>
    </Link>
  
  </div>
));

const Hero = ({ image, onClose, layoutId, productData }) => {
  // Early return if no data
  if (!productData) {
    return null;
  }

  // Memoize the product intro section
  const productIntro = useMemo(() => (
    <div className="product-intro">
      <h1>{productData.name}</h1>
      <p>{productData.description}</p>
    </div>
  ), [productData.name, productData.description]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={containerVariants}
      className="hero-container"
    >
      <div className="hero-content">
        {/* Left Side - Image */}
        <div className="hero-left">
        <Link to="/products">
      <button onClick={onClose} className="back-button">
        ←BACK
      </button>
    </Link>
          <motion.div
            layoutId={layoutId}
            variants={imageVariants}
            className="hero-image-container"
          >
            <img
              src={image || "/api/placeholder/1200/800"}
              alt={`${productData.name} product view`}
              loading="lazy"
              width="1200"
              height="800"
            />
          </motion.div>
        </div>

        {/* Right Side - Product Details */}
        <div className="hero-right">
          {productIntro}

          <div className="features-specs">
            <ProductFeatures features={productData.features} />
            <ProductSpecifications specifications={productData.specifications} />
          </div>

          <ProductActions onClose={onClose} />
        </div>
      </div>
    </motion.div>
  );
};

// Memoize the entire component
export default memo(Hero, (prevProps, nextProps) => {
  // Custom comparison function for memo
  return (
    prevProps.image === nextProps.image &&
    prevProps.layoutId === nextProps.layoutId &&
    JSON.stringify(prevProps.productData) === JSON.stringify(nextProps.productData)
  );
});