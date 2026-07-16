"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <button className={styles.backBtn} aria-label="Go back" onClick={() => router.back()}>
        <ChevronLeft size={24} color="var(--text-dark)" />
      </button>
      
      <div className={styles.logoContainer}>
        <img src="/images/Logo/real logo.jpg" alt="Company Logo" className={styles.logoImg} />
      </div>
      
      {/* Empty spacer to keep logo centered */}
      <div style={{ width: '44px' }}></div>
    </header>
  );
}
