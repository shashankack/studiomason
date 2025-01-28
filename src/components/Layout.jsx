import React, { useEffect, useState } from 'react';
import '../styles/layout.scss';

const Layout = () => {
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
    }, isPaused ? 1300 : 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="layout-one">
      <div className={`image-container image-${currentImageIndex}`}>
        <img src="image1.jpg" alt="frame1" loading="lazy" />
        <img src="image2.jpg" alt="frame2" loading="lazy" />
        <img src="image3.jpg" alt="frame3" loading="lazy" />
      </div>
    </div>
  );
};

export default Layout;





