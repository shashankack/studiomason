import React, { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../styles/scrollpower.scss"

gsap.registerPlugin(ScrollTrigger);

// Constants for animation configuration
const ANIMATION_CONFIG = {
  TRIGGER_START: 'top 80%',
  TRIGGER_END: 'center center',
  SCRUB_FACTOR: 2,
  INITIAL_STATE: {
    width: '0vw',
    height: '0vh',
    opacity: 0,
    scale: 0.8
  },
  FINAL_STATE: {
    width: '75vw',
    height: '70vh',
    opacity: 1,
    scale: 1,
    duration: 5,
    ease: "power2.out"
  }
};

const ScrollPower = () => {
  // Combine refs into a single object for better organization
  const refs = {
    container: useRef(null),
    innerDiv: useRef(null),
    animatedServices: useRef(null),
    layout: useRef(null)
  };

  useEffect(() => {
    // Destructure refs for cleaner code
    const { container, innerDiv, animatedServices, layout } = refs;

    // Set initial states using GSAP
    const setInitialStates = () => {
      gsap.set(innerDiv.current, ANIMATION_CONFIG.INITIAL_STATE);
      gsap.set(animatedServices.current, { opacity: 0 });
      gsap.set(layout.current, { opacity: 0 });
    };

    // Create animation timeline
    const createAnimationTimeline = (scrollTrigger) => {
      const tl = gsap.timeline({
        scrollTrigger,
        defaults: { ease: "power1.inOut" }
      });

      tl.to(innerDiv.current, ANIMATION_CONFIG.FINAL_STATE)
        .to(layout.current, {
          opacity: 1,
          duration: 1,
        }, "-=0.5")
        .to(animatedServices.current, {
          opacity: 1,
          duration: 2,
        }, "-=0.3");

      return tl;
    };

    // Initialize animations
    const initializeAnimations = () => {
      setInitialStates();

      const scrollTrigger = ScrollTrigger.create({
        trigger: container.current,
        start: ANIMATION_CONFIG.TRIGGER_START,
        end: ANIMATION_CONFIG.TRIGGER_END,
        scrub: ANIMATION_CONFIG.SCRUB_FACTOR,
        markers: false,
        smoothTouch: true,
      });

      const timeline = createAnimationTimeline(scrollTrigger);

      // Cleanup function
      return () => {
        scrollTrigger.kill();
        timeline.kill();
      };
    };

    // Run animations
    const cleanup = initializeAnimations();

    // Cleanup on component unmount
    return cleanup;
  }, []); // Empty dependency array since we're only using refs

  return (
    <div className='scrollpower-main'> 
       <p className='craftsmanship'>CRAFTSMANSHIP</p>
      <div ref={refs.container} className="about-container-scrollpower">
      <div ref={refs.innerDiv} className="about-inner-scrollpower" aria-hidden="true"></div>
    </div>
    </div>
  );
};

// Performance optimization - prevent unnecessary re-renders
export default memo(ScrollPower);