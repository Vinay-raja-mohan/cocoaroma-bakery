"use client";

import React, { useState } from 'react';
import { CheckCircle2, CakeSlice } from 'lucide-react';
import styles from './SizeSelector.module.css';

interface SizeOption {
  id: string;
  weight: string;
  price: number;
}

interface SizeSelectorProps {
  options: SizeOption[];
  onSelect?: (option: SizeOption) => void;
}

export default function SizeSelector({ options, onSelect }: SizeSelectorProps) {
  const [selectedId, setSelectedId] = useState<string>(options[0].id);

  const handleSelect = (option: SizeOption) => {
    setSelectedId(option.id);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <section className={styles.container}>
      <h3 className={styles.label}>Select Size</h3>
      
      <div className={styles.cardsContainer}>
        {options.map((option) => {
          const isSelected = selectedId === option.id;
          
          return (
            <button
              key={option.id}
              className={`${styles.card} ${isSelected ? styles.cardSelected : ''}`}
              onClick={() => handleSelect(option)}
            >
              {isSelected && (
                <div className={styles.checkBadge}>
                  <CheckCircle2 size={18} color="var(--highlight-pink)" fill="white" />
                </div>
              )}
              
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <CakeSlice size={24} color={isSelected ? "var(--highlight-pink)" : "var(--text-muted)"} strokeWidth={1.5} />
                </div>
                <div className={styles.textInfo}>
                  <span className={styles.weight}>{option.weight}</span>
                  <span className={styles.price}>₹{option.price}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
