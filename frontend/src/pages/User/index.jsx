import styles from './User.module.css';
import UserHeader from '../../components/UserHeader';
import Account from '../../components/Account';
import accountsData from '../../utils/accountsData';

export default function User() {
  return (
    <main className={styles.mainBgDark}>
      <UserHeader />
      <h2 className={styles.srOnly}>Accounts</h2>
      {accountsData?.map((account) => (
        <Account
          key={account.id}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </main>
  );
}
