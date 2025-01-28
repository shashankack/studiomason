import React, { useEffect, useState } from 'react';
import '../styles/layout3.scss';

const Layout3 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    }, isPaused ? 1500 : 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="layout-three">
      <div className={`image-container-three image-${currentImageIndex}`}>
        <img src="image_7.jpg" alt="frame1" loading="lazy" />
        <img src="image_8.jpg" alt="frame2" loading="lazy" />
        <img src="image_9.jpg" alt="frame3" loading="lazy" />
      </div>
    </div>
  );
};

export default Layout3;