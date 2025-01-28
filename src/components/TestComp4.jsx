import React, { memo, useMemo, useState, useEffect } from 'react'
import FilterSidebar from './FilterSidebar'
import "../styles/try.scss"
import tables from '../products/tables'
import { Link } from 'react-router-dom'

// Memoized skeleton item component
const SkeletonItem = memo(() => (
  <div className="catalog-item skeleton">
    <div className="skeleton-image" />
  </div>
));

// Memoized catalog item component
const CatalogItem = memo(({ product }) => (
  <div className="catalog-item">
    <Link to={`/tables/${product.id}`} className="catalog-item-link">
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

const TestComp4 = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Memoize the skeleton grid
  const skeletonGrid = useMemo(() => (
    <div className="catalog-grid1">
      {[...Array(8)].map((_, index) => (
        <SkeletonItem key={`skeleton-${index}`} />
      ))}
    </div>
  ), []);

  // Memoize the product grid
  const productGrid = useMemo(() => (
    <div className="catalog-grid1">
      {tables.map((product) => (
        <CatalogItem 
          key={product.id} 
          product={product}
        />
      ))}
    </div>
  ), []); // Empty dependency array since tables is static

  return (
    <div className="catalog-container">
      <Sidebar />
      <div className="catalog-content">
        {isLoading ? skeletonGrid : productGrid}
      </div>
    </div>
  );
};

export default memo(TestComp4)