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

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const goTo = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    // Determine direction based on index difference, handling wraparound
    const isNext = index > currentIndex || (currentIndex === images.length - 1 && index === 0);
    const isPrev = index < currentIndex || (currentIndex === 0 && index === images.length - 1);
    
    setDirection(isNext ? 'right' : 'left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 250);
  };

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setTouchEnd(null);
    if ('targetTouches' in e) {
      setTouchStart(e.targetTouches[0].clientX);
    } else {
      setTouchStart((e as React.MouseEvent).clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    // Only track if we have a starting point
    if (!touchStart) return;
    if ('targetTouches' in e) {
      setTouchEnd(e.targetTouches[0].clientX);
    } else {
      setTouchEnd((e as React.MouseEvent).clientX);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart) return;
    
    // If no movement, or very little movement, treat as a tap/click (next image)
    if (!touchEnd || Math.abs(touchStart - touchEnd) < 10) {
      goTo((currentIndex + 1) % images.length);
      setTouchStart(null);
      setTouchEnd(null);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goTo((currentIndex + 1) % images.length);
    } else if (isRightSwipe) {
      goTo(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className={styles.imageSection}>
      <div 
        className={styles.imageContainer} 
        style={{ cursor: 'pointer' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onTouchStart}
        onMouseMove={onTouchMove}
        onMouseUp={onTouchEnd}
        onMouseLeave={onTouchEnd}
      >
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
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
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
