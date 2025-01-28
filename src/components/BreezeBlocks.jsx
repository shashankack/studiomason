import React, { memo, useMemo } from 'react';
import FilterSidebar from './FilterSidebar';
import "../styles/try.scss";
import breezeBlocks from '../products/breezeBlocks';
import { Link } from 'react-router-dom';

// Memoized catalog item component
const CatalogItem = memo(({ product }) => (
  <div className="catalog-item">
    <Link to={`/breezeBlocks/${product.id}`} className="catalog-item-link">
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

const Try = () => {
  const productGrid = useMemo(() => (
    <div className="catalog-grid1">
      {breezeBlocks.map((product) => (
        <CatalogItem 
          key={product.id} 
          product={product}
        />
      ))}
    </div>
  ), []); // Empty dependency array since bigPlanters is static

  return (
    <div className="catalog-container">
      <Sidebar />
      <div className="catalog-content">
        {productGrid}
      </div>
    </div>
  );
};

export default memo(Try);
