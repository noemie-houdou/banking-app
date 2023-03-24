import styles from './UserHeader.module.css';

export default function UserHeader() {
  return (
    <div className={styles.header}>
      <h1>
        Welcome back
        <br />
        Firstname Lastname!
      </h1>
      <button className={styles.editButton}>Edit Name</button>
    </div>
  );
}
