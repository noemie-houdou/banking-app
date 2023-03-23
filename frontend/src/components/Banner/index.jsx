import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.hero}>
      <section className={styles.heroContent}>
        <h2 className={styles.srOnly}>Promoted Content</h2>
        <p className={styles.subtitle}>No fees.</p>
        <p className={styles.subtitle}>No minimum deposit.</p>
        <p className={styles.subtitle}>High interest rates.</p>
        <p className={styles.text}>
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
}
