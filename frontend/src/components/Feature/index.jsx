import styles from './Feature.module.css';

export default function Feature({ imageSrc, imageAlt, title, text }) {
  return (
    <div className={styles.featureItem}>
      <img className={styles.featureIcon} src={imageSrc} alt={imageAlt} />
      <h3 className={styles.featureItemTitle}>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
