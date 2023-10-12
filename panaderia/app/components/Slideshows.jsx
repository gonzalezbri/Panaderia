'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import images from '../assets/images';

export default function Slideshow() {
  const [containerKey, setContainerKey] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [imageOrder, setImageOrder] = useState([]);
  const carousel = useRef();

  const handleLeftConstraint = useCallback(() => {
    const el = document.getElementById('carousel-container');
    if (el) {
      setCarouselWidth(el.scrollWidth - el.offsetWidth);
    }
  }, [carouselWidth]);

  useEffect(() => {
    // Shuffle the image order.
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);
    setImageOrder(shuffledImages);

    // Update the carousel width on initial render.
    handleLeftConstraint();

    // Update the carousel width on resize.
    window.addEventListener('resize', handleLeftConstraint);

    return () => {
      window.removeEventListener('resize', handleLeftConstraint);
    };
  }, [handleLeftConstraint]);

  return (
    <div
    id="carousel-container"
      className="carousel"
    >
      <motion.div
        key={containerKey}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: carouselWidth }}
          className="inner-carousel"
        >
          {imageOrder.map((image) => (
            <motion.div className="item" key={image}>
              <Image src={image} alt="cakes" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}