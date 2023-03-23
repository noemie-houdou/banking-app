import Banner from '../../components/Banner';
import Feature from '../../components/Feature';
import styles from './Homepage.module.css';
import featuresData from '../../utils/featuresData';

export default function Homepage() {
  return (
    <main>
      <Banner />
      <section className={styles.features}>
        <h2 className={styles.srOnly}>Features</h2>
        {featuresData?.map((feature) => (
          <Feature
            key={feature.id}
            imageSrc={feature.image}
            imageAlt={feature.alt}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </section>
    </main>
  );
}
