"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProductImage.module.css';

interface ProductImageProps {
  images: string[];
  altText: string;
}

export default function ProductImage({ images, altText }: ProductImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    setDirection(index > currentIndex ? 'right' : 'left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 250);
  };

  const handleNext = () => {
    goTo((currentIndex + 1) % images.length);
  };

  return (
    <div className={styles.imageSection}>
      <div className={styles.imageContainer} onClick={handleNext} style={{ cursor: 'pointer' }}>
        <div 
          className={`${styles.imageSlide} ${isAnimating ? (direction === 'right' ? styles.slideOutLeft : styles.slideOutRight) : styles.slideIn}`}
          key={currentIndex}
        >
          <Image 
            src={images[currentIndex]} 
            alt={`${altText} - photo ${currentIndex + 1}`} 
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            priority
            className={styles.image}
          />
        </div>
        <div className={styles.vegBadge}>
          <span className={styles.vegDot}></span>
          <div className={styles.vegTextContainer}>
            <span className={styles.vegPercentage}>100%</span>
            <span className={styles.vegLabel}>PURE VEG</span>
          </div>
        </div>
        <div className={styles.angleLabel}>
          {currentIndex === 0 ? 'Front View' : currentIndex === 1 ? 'Top View' : 'Bottom View'}
        </div>
      </div>
      
      <div className={styles.carouselIndicators}>
        {images.map((_, index) => (
          <div 
            key={index} 
            onClick={() => goTo(index)}
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
            style={{ cursor: 'pointer' }}
          ></div>
        ))}
      </div>
    </div>
  );
}
