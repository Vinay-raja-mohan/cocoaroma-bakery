import Link from 'next/link';
import Image from 'next/image';
import { cakesData } from '@/data/cakes';
import styles from './Home.module.css';
import { Award } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="mobile-container">
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <img src="/images/Logo/real logo.jpg" alt="Company Logo" className={styles.logo} />
        </div>
      </header>

      <div className={styles.menuGrid}>
        {cakesData.map(cake => (
          <Link href={`/cake/${cake.id}`} key={cake.id} className={`${styles.cakeCard} ${cake.isBestseller ? styles.bestsellerCard : ''}`}>
            <div className={styles.imageWrapper}>
              <Image 
                src={cake.images[0]} 
                alt={cake.name} 
                fill 
                className={styles.image}
                sizes="(max-width: 480px) 50vw, 33vw"
              />
              {cake.isBestseller && (
                <div className={styles.bestsellerRibbon}>
                  <Award size={12} color="white" />
                  <span>Bestseller</span>
                </div>
              )}
            </div>
            <div className={styles.cardInfo}>
              <h3 className={styles.cakeName}>{cake.name}</h3>
              <p className={styles.cakePrice}>Starts ₹{cake.prices[0].price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
