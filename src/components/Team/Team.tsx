import Image from 'next/image';
import styles from './Team.module.css';

const features = [
  'Your team is your biggest asset',
  'As your AI stays and keeps it communicates clearly',
  'Each of these teams and each teams start things right with a syncing system before they start',
  'Tells you only media measures every result',
  'Tell you best plans will make things',
  'Full documents',
];

export default function Team() {
  return (
    <section className={styles.team}>
      <div className={styles.container}>
        {/* Left: Text */}
        <div className={styles.textCol}>
          <div className={styles.iconBadge}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="grad3" x1="1" y1="3" x2="23" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed"/>
                  <stop offset="1" stopColor="#06b6d4"/>
                </linearGradient>
              </defs>
            </svg>
            <span className={styles.iconBadgeText}>Team</span>
          </div>

          <h3 className={styles.heading}>
            Your team is your biggest asset.
          </h3>

          <ul className={styles.featureList}>
            {features.map((f, i) => (
              <li key={i} className={styles.featureItem}>
                <span className={styles.bullet} />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <a href="#team" className={styles.link}>
            And also the details have not been advertised &rarr;
          </a>
        </div>

        {/* Right: Illustration */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/team-illustration.png"
              alt="Team AI illustration"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
