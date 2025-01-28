import React, { memo } from 'react';

// Memoized skeleton item component
export const SkeletonItem = memo(() => (
  <div className="catalog-item skeleton">
    <div className="skeleton-image" />
  </div>
));

// Memoized skeleton grid component
export const SkeletonGrid = memo(({ count = 8 }) => (
  <div className="catalog-grid1">
    {[...Array(count)].map((_, index) => (
      <SkeletonItem key={`skeleton-${index}`} />
    ))}
  </div>
)); 