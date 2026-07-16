import React from 'react';
import { Home, LayoutGrid, Heart, User } from 'lucide-react';
import styles from './BottomNav.module.css';

export default function BottomNav() {
  return (
    <nav className={styles.bottomNav}>
      <button className={styles.navItem}>
        <Home size={24} color="var(--highlight-pink)" fill="var(--highlight-pink)" />
        <span className={`${styles.navLabel} ${styles.navLabelActive}`}>Home</span>
      </button>
      
      <button className={styles.navItem}>
        <LayoutGrid size={24} color="var(--text-muted)" />
        <span className={styles.navLabel}>Categories</span>
      </button>
      
      <button className={styles.navItem}>
        <Heart size={24} color="var(--text-muted)" />
        <span className={styles.navLabel}>Favorites</span>
      </button>
      
      <button className={styles.navItem}>
        <User size={24} color="var(--text-muted)" />
        <span className={styles.navLabel}>Profile</span>
      </button>
    </nav>
  );
}
