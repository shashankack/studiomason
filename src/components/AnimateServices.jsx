import React, { useEffect, useCallback, useMemo, memo } from 'react';
import "../styles/ani.scss"

const ANIMATION_TEXTS = ['BeSPOKE', 'INNOVATE', 'CUSTOMIZE', 'BUILD', 'INSTALL', 'MAGIC!'];
const PAUSE_DURATION = 2000;
const ANIMATION_DURATION = 1000;
const TOTAL_IMAGES = 7;

const AnimatedServices = () => {
  // Use useReducer instead of multiple useState for related state
  const [state, dispatch] = React.useReducer(reducer, {
    currentImageIndex: 0,
    isPaused: false
  });

  // Memoize the animation logic
  const handleAnimation = useCallback(() => {
    dispatch({ type: state.isPaused ? 'RESUME' : 'ADVANCE' });
  }, [state.isPaused]);

  // Set up the interval with useEffect
  useEffect(() => {
    const interval = setInterval(
      handleAnimation,
      state.isPaused ? PAUSE_DURATION : ANIMATION_DURATION
    );

    return () => clearInterval(interval);
  }, [handleAnimation, state.isPaused]);

  // Memoize the text elements to prevent unnecessary re-renders
  const animationTexts = useMemo(() => 
    ANIMATION_TEXTS.map((text, index) => (
      <p key={text}>{text}</p>
    )),
    [] // Empty dependency array since ANIMATION_TEXTS is constant
  );

  return (
    <div className='main-layout-ani'>
      <div className='layout-two-ani'>
        <div 
          className={`image-container-two-ani ani-image-${state.currentImageIndex}`}
          aria-live="polite" // Accessibility improvement
        > 
          {animationTexts}
        </div>
      </div>
    </div>
  );
};

// Reducer function for state management
function reducer(state, action) {
  switch (action.type) {
    case 'ADVANCE':
      return {
        currentImageIndex: (state.currentImageIndex + 1) % TOTAL_IMAGES,
        isPaused: true
      };
    case 'RESUME':
      return {
        ...state,
        isPaused: false
      };
    default:
      return state;
  }
}

// Memoize the entire component to prevent unnecessary re-renders
export default memo(AnimatedServices);