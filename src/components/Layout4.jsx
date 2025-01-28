import React, { useEffect, useState } from 'react';
import '../styles/layout4.scss';

const Layout4 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    }, isPaused ? 1000 : 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="layout-four">
      <div className={`image-container-four image-four-${currentImageIndex}`}>
        <img src="image_10.jpg" alt="frame1" loading="lazy" />
        <img src="image_11.jpg" alt="frame2" loading="lazy" />
        <img src="image_12.jpg" alt="frame3" loading="lazy" />
      </div>
    </div>
  );
};

export default Layout4;