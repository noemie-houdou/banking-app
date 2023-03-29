import Form from '../../components/Form';
import styles from './SignIn.module.css';
import userIcon from '../../assets/icons/circle-user-solid.svg';

export default function SignIn() {
  return (
    <main className={styles.mainBgDark}>
      <section className={styles.signInContent}>
        <img
          className={styles.signInIcon}
          src={userIcon}
          alt="Icône d'utilisateur"
        />
        <h1>Sign In</h1>
        <Form />
      </section>
    </main>
  );
}
