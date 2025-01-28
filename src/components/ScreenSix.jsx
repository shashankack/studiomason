import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import "../styles/screensix.scss";

// Import images statically to maintain original behavior
import image1 from "../../public/rio_1.jpg";
import image2 from "../../public/rio_2.jpg";
import image3 from "../../public/rio_3.jpg";
import image4 from "../../public/bree.png";
import image5 from "../../public/5.jpg";
import image6 from "../../public/6.jpg";

// Constants outside component to prevent recreation
const GRID_ITEMS = [
  { image: image1, text: 'PLANTERS', content: '.', id: 1, route: '/test-comp' },
  { image: image2, text: 'DESK PLANTERS', content: '.', id: 2, route: '/test-comp2' },
  { image: image4, text: 'BREEZE BLOCKS', content: '.', id: 4, route: '/breezeBlocks' },
  { image: image3, text: 'TABLES', content: '.', id: 3, route: '/test-comp4' },
  { image: image5, text: 'WALL CLADDING', content: '.', id: 5, route: '/test-comp3' },
  { image: image6, text: 'SCULPTURES', content: '.', id: 6, route: '/test-comp3' },
];

// Memoized grid item component
const GridItem = memo(({ item, isHovered, isBlurred, onMouseEnter, onMouseLeave }) => (
  <div
    key={item.id}
    className={`grid-item ${isHovered ? 'hovered' : ''} ${isBlurred ? 'blur' : ''}`}
    style={{ backgroundImage: `url(${item.image})` }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Link to={item.route}>
      <span className="item-text">{item.text}</span>
      <span className="item-new">New</span>
      <div className="item-content" style={{ width: "500px", height: "500px" }}>
        {item.content}
      </div>
    </Link>
  </div>
));

const ScreenSix = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  // Memoized handlers
  const handleMouseEnter = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  return (
    <div>
      <div className="supreme-container">
        <div className="supreme-grid">
          {GRID_ITEMS.map((item, index) => (
            <GridItem
              key={item.id}
              item={item}
              isHovered={hoveredIndex === index}
              isBlurred={hoveredIndex !== null && hoveredIndex !== index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
        <Link to="/">
          <button className='screen-six-btn'>←BACK</button>
        </Link>
      </div>
    </div>
  );
};

// Memoize the entire component
export default memo(ScreenSix);