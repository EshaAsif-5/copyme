import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background decorative blobs */}
      <div className={styles.blobTopLeft} />
      <div className={styles.blobTopRight} />
      <div className={styles.blobCenter} />

      <div className={styles.container}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeText}>AI-POWERED FOR BUSINESS</span>
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>
          The Best Investment<br />
          You Will Make In Your<br />
          <span className={styles.headingGradient}>Business.</span>
        </h1>

        {/* Subtext */}
        <p className={styles.subtext}>
          A system that grows with you. Let your business every day.<br />
          Builds your future within you into your present.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctaGroup}>
          <a href="#signup" className={styles.ctaPrimary}>
            Request a Demo
          </a>
          <a href="#explore" className={styles.ctaSecondary}>
            Explore Opportunities ✦
          </a>
        </div>

        {/* Dashboard Card (FULL IMAGE ONLY) */}
        <div className={styles.dashboardWrapper}>
          <div className={styles.dashboardCard}>
            <div className={styles.cardChart}>
              <Image
                src="/images/dashboard.png"
                alt="Dashboard analytics chart"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}