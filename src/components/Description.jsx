import React, { useRef, useState, useEffect, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import "../styles/description.scss";

// Constants
const IMAGES = [
  "founders_together1.jpg",
  "team.jpg",
  "founder_2.jpg",
  "founder_1.jpg",
];

const IMAGE_INTERVAL = 2000;

const Description = ({ threshold = 0.4 }) => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  const isTextInView = useInView(textRef, {
    amount: threshold,
    once: false, // Allow re-animation when scrolling back up
  });

  const isImageInView = useInView(imageRef, {
    amount: threshold,
    once: false, // Allow re-animation when scrolling back up
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, IMAGE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: '-10vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="description-wrapper">
      {/* Image Section */}
      <motion.div
        className="description-image"
        ref={imageRef}
        variants={imageVariants}
        initial="hidden"
        animate={isImageInView ? "visible" : "hidden"}
      >
        <img 
          src={IMAGES[currentImage]} 
          alt={`Team at Studio Mason ${currentImage + 1}`}
          loading="lazy"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="description-text"
        ref={textRef}
        variants={textVariants}
        initial="hidden"
        animate={isTextInView ? "visible" : "hidden"}
      >
        <h1>MEET THE TEAM</h1>
        <p>
          At Studio Mason, we manufacture premium furniture and decor crafted from High-Performance
          Concrete (HPC) and are based in the garden city of Bangalore - India.
          <br/><br/>
          We bring together the strength of industrial-grade materials with the sophistication of contemporary design, producing
          pieces that are not only durable but also refined and functional.
          <br/><br/>
          Each item is handmade, showcasing our meticulous eye for detail and commitment to quality. We take pride in our
          flexibility to customize creations to fit your unique vision, with a streamlined communication
          process that ensures clarity and ease every step of the way. At Studio Mason, we are dedicated to
          delivering on time, every time, so you can count on us for both exceptional craftsmanship and
          reliable service.
        </p>
      </motion.div>
    </section>
  );
};

// Memoize the entire component
export default memo(Description);

