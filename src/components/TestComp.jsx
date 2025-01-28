import React, { memo, useMemo } from 'react';
import FilterSidebar from './FilterSidebar'
import "../styles/try.scss"
import bigPlanters from '../products/bigPlanters'
import { Link } from 'react-router-dom'

// Memoized product image component
const ProductImage = memo(({ product, className }) => (
  <Link to={`/product/${product.id}`} className={className}>
    <img 
      src={product.images[product.defaultImageIndex || 0]} 
      alt={product.name}
      loading="lazy"
      className={className === "client-one-col2" ? "vase1" : undefined}
    />
  </Link>
));

// Memoized grid section component
const GridSection = memo(({ products }) => (
  <div className='client-one-col3'>
    <div className='client-one-col3-grid1'>    
      <div className='client-one-col3-grid1-1'>
        <ProductImage product={products[0]} className="client-one-col3-grid1-1" />
      </div>
      <div className='client-one-col3-grid1-2'>
        <ProductImage product={products[1]} className="client-one-col3-grid1-2" />
      </div>
    </div>
    <div className='client-one-col3-grid2'> 
      <div className='client-one-col3-grid1-3'>
        <ProductImage product={products[2]} className="client-one-col3-grid1-3" />
      </div>
      <div className='client-one-col3-grid1-4'>
        <ProductImage product={products[3]} className="client-one-col3-grid1-4" />
      </div>
    </div>
  </div>
));

// Memoized layout section component
const LayoutSection = memo(({ mainProduct, gridProducts }) => (
  <div className='client-one-col2-raja'>
    <div className='client-one-col2'>
      <ProductImage product={mainProduct} className="client-one-col2" />
    </div>
    <GridSection products={gridProducts} />
  </div>
));

const TestComp = () => {
  // Memoize the product sections to prevent unnecessary recalculations
  const productSections = useMemo(() => {
    const sections = [
      {
        main: bigPlanters[0],
        grid: [bigPlanters[3], bigPlanters[2], bigPlanters[1], bigPlanters[4]]
      },
      {
        grid: [bigPlanters[5], bigPlanters[6], bigPlanters[7], bigPlanters[8]],
        main: bigPlanters[9]
      },
      {
        main: bigPlanters[10],
        grid: [bigPlanters[11], bigPlanters[14], bigPlanters[13], bigPlanters[12]]
      },
      {
        grid: [bigPlanters[15], bigPlanters[16], bigPlanters[17], bigPlanters[18]],
        main: bigPlanters[19]
      },
      {
        main: bigPlanters[20],
        grid: [bigPlanters[21], bigPlanters[22], bigPlanters[23], bigPlanters[24]]
      },
      {
        grid: [bigPlanters[25], bigPlanters[26], bigPlanters[27], bigPlanters[28]],
        main: bigPlanters[27]
      }
    ];

    return sections.map((section, index) => (
      <LayoutSection 
        key={`section-${index}`}
        mainProduct={section.main}
        gridProducts={section.grid}
      />
    ));
  }, []); // Empty dependency array since bigPlanters is static

  return (
    <div className='client-one-main1'>
      <div className='client-one-col1'>
        <FilterSidebar />
      </div>
      <div className='client-one-combined'>
        {productSections}
      </div>
    </div>
  )
}

export default memo(TestComp)
