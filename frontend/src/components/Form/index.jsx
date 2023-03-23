import styles from './Form.module.css';

export default function Form() {
  return (
    <form>
      <div className={styles.inputWrapper}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className={styles.inputRemember}>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className={styles.signInButton}>Sign In</button>
    </form>
  );
}
