import styles from './Business.module.css';

export default function Business() {
  return (
    <section className={styles.business}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Your AI Builds Your Business.<br />
          <span className={styles.headingGradient}>Department By Department.</span>
        </h2>
        <p className={styles.subtext}>
          This is not a half-day busy-body and forget someone.<br />
          AI is a system that runs departments like it knows your plan. A little<br />
          like Pay it forward. And you must rebuild every single day.
        </p>
      </div>
    </section>
  );
}
