import Image from 'next/image';
import styles from './Operations.module.css';

const features = [
  'A business that can run without you is a very easy workflow.',
  'A fully easy workflow can tell you without you actually needing you',
  'Automate what should not need you to do',
  'This result is a business that becomes 4 x in scale for you',
  'And you are the center things most really',
];

export default function Operations() {
  return (
    <section className={styles.operations}>
      <div className={styles.container}>
        {/* Left: Illustration */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/operations-illustration.png"
              alt="Operations AI illustration"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className={styles.textCol}>
          <div className={styles.iconBadge}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8v4l3 3M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round"/>
              <defs>
                <linearGradient id="grad2" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed"/>
                  <stop offset="1" stopColor="#06b6d4"/>
                </linearGradient>
              </defs>
            </svg>
            <span className={styles.iconBadgeText}>Operations</span>
          </div>

          <h3 className={styles.heading}>
            A business that can run without you is<br />
            a very easy workflow.
          </h3>

          <ul className={styles.featureList}>
            {features.map((f, i) => (
              <li key={i} className={styles.featureItem}>
                <span className={styles.bullet} />
                <span>{f}</span>
              </li>
            ))}
          </ul>

         <div className={styles.headingBox}>
  <h2 className={styles.heading}>
    <span className={styles.headingAccent}>Truly great</span> things done easily
  </h2>
</div>
        </div>
      </div>
    </section>
  );
}
