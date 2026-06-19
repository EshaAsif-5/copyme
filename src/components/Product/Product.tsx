import Image from 'next/image';
import styles from './Product.module.css';

const features = [
  'And it make known what your product achieves exactly',
  'Train AI to list the business your brand represents',
  'Top AI guides your positioning always',
  'A little and you need to turn you can grow',
  'And every circle to work true to profit clearly',
  'Just for an easy way',
  'The strategy lays your positionality',
];

export default function Product() {
  return (
    <section className={styles.product}>
      <div className={styles.container}>
        {/* Left: Text */}
        <div className={styles.textCol}>
          <div className={styles.iconBadge}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="grad1" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed"/>
                  <stop offset="1" stopColor="#06b6d4"/>
                </linearGradient>
              </defs>
            </svg>
            <span className={styles.iconBadgeText}>Product</span>
          </div>

          <h3 className={styles.heading}>
            And it make known what your product<br />
            achieves exactly<br />
            <span className={styles.headingAccent}>
              And every industry
            </span>
          </h3>

          <p className={styles.desc}>
            And it make known what your product achieves exactly. Train AI to list the business your brand represents.
          </p>

          <ul className={styles.featureList}>
            {features.map((f, i) => (
              <li key={i} className={styles.featureItem}>
                <span className={styles.checkIcon}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="7" fill="url(#checkGrad)"/>
                    <path d="M4 7l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="checkGrad" x1="0" y1="0" x2="14" y2="14" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7c3aed"/>
                        <stop offset="1" stopColor="#06b6d4"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
<div className={styles.headingBox}>
  <h2 className={styles.heading}>
    <span className={styles.headingAccent}>AI guides you</span> from idea to market fit.
  </h2>
</div>
        </div>

        {/* Right: Illustration */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/product-illustration.png"
              alt="Product AI illustration"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
