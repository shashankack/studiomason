import React, { useEffect, useState } from 'react';
import '../styles/layout2.scss';

const Layout2 = () => {
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
    }, isPaused ? 900 : 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="layout-two">
      <div className={`image-container-two image-${currentImageIndex}`}>
        <img src="image4.jpg" alt="frame1" loading="lazy" />
        <img src="image5.jpg" alt="frame2" loading="lazy" />
        <img src="image6.jpg" alt="frame3" loading="lazy" />
      </div>
    </div>
  );
};

export default Layout2;