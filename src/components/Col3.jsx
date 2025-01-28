import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import FilterSidebar from './FilterSidebar';
import "../styles/try.scss";
import smallPlanters from '../products/smallPlanters';

// Memoized catalog item component
const CatalogItem = memo(({ product }) => (
  <div className="catalog-item">
    <Link to={`/smallPlanters/${product.id}`} className="catalog-item-link">
      <img
        src={product.images[0]}
        alt={product.name}
        className="catalog-item-image"
        loading="lazy"
      />
    </Link>
  </div>
));

// Memoized sidebar component
const Sidebar = memo(() => (
  <div className="catalog-sidebar">
    <FilterSidebar />
  </div>
));

const Col3 = () => {
  const productGrid = useMemo(() => (
    <div className="catalog-grid1">
      {smallPlanters.map((product) => (
        <CatalogItem 
          key={product.id} 
          product={product}
        />
      ))}
    </div>
  ), []); // Empty dependency array since smallPlanters is static

  return (
    <div className="catalog-container">
      <Sidebar />
      <div className="catalog-content">
        {productGrid}
      </div>
    </div>
  );
};

export default memo(Col3);
