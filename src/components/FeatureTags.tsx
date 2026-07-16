import React from 'react';
import { Sparkles, Leaf, Droplets } from 'lucide-react';
import styles from './FeatureTags.module.css';

interface FeatureTagsProps {
  ingredients: string[];
}

const icons = [Sparkles, Leaf, Droplets];

export default function FeatureTags({ ingredients }: FeatureTagsProps) {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        {ingredients.map((ingredient, index) => (
          <React.Fragment key={index}>
            {index > 0 && <div className={styles.divider}></div>}
            <div className={styles.tag}>
              {React.createElement(icons[index % icons.length], { size: 14, color: 'var(--text-muted)' })}
              <span className={styles.label}>{ingredient}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
