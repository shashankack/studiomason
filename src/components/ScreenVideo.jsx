import React, { useState, useEffect, memo, useCallback } from 'react';
import '../styles/screenvideo.scss';
import Header from './Header';

// Constants
const MOBILE_BREAKPOINT = 768;
const VIDEO_SOURCES = {
  mobile: 'mobile_final_video.mp4',
  desktop: 'final_video.mp4'
};

// Memoized video component
const Video = memo(({ src }) => (
  <video 
    autoPlay 
    loop 
    muted 
    playsInline
    className="video-bg-screen"
    preload="auto"
    aria-hidden="true" // Since it's background video
  >
    <source src={src} type="video/mp4" />
    <track kind="captions" /> {/* For accessibility */}
  </video>
));

// Memoized overlay components
const Overlay = memo(() => (
  <>
    <div className="overlay-text-screen" />
    <div className="overlay-text-screen-one" />
  </>
));

const ScreenVideo = () => {
  const [videoSrc, setVideoSrc] = useState(VIDEO_SOURCES.desktop);

  // Memoized resize handler
  const handleResize = useCallback(() => {
    const newSrc = window.innerWidth <= MOBILE_BREAKPOINT 
      ? VIDEO_SOURCES.mobile 
      : VIDEO_SOURCES.desktop;
    
    setVideoSrc(prevSrc => {
      if (prevSrc !== newSrc) {
        return newSrc;
      }
      return prevSrc;
    });
  }, []);

  // Set up resize listener
  useEffect(() => {
    // Initial check
    handleResize();

    // Debounced resize handler
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  return (
    <>
      <Header />
      <div className="video-container-screen">
        <Video src={videoSrc} />
        <Overlay />
      </div>
    </>
  );
};

// Memoize the entire component
export default memo(ScreenVideo);
