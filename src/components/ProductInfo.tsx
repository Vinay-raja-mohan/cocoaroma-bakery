import React from 'react';
import { Star, Award } from 'lucide-react';
import styles from './ProductInfo.module.css';

interface ProductInfoProps {
  title: string;
  rating: number;
  reviewsCount: number;
  description: string;
  isBestseller: boolean;
}

export default function ProductInfo({ title, rating, reviewsCount, description, isBestseller }: ProductInfoProps) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      
      <div className={styles.ratingRow}>
        <div className={styles.ratingInfo}>
          <Star size={16} fill="#f59e0b" color="#f59e0b" />
          <span className={styles.ratingNumber}>{rating}</span>
          <span className={styles.reviews}>({reviewsCount} reviews)</span>
        </div>
        
        {isBestseller && (
          <>
            <div className={styles.verticalDivider}></div>
            <div className={styles.bestsellerBadge}>
              <Award size={16} color="var(--highlight-pink)" />
              <span className={styles.bestsellerText}>Bestseller</span>
            </div>
          </>
        )}
      </div>
      
      <p className={styles.description}>{description}</p>
    </section>
  );
}
