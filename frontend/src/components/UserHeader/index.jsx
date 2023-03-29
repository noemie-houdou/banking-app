import { useSelector } from 'react-redux';
import { profileInfos } from '../../utils/selectors';
import styles from './UserHeader.module.css';

export default function UserHeader() {
  const infos = useSelector(profileInfos);
  const firstname = infos?.firstName;
  const lastname = infos?.lastName;

  return (
    <div className={styles.header}>
      <h1>
        Welcome back
        <br />
        {infos ? `${firstname} ${lastname}` : 'Firstname Lastname'}!
      </h1>
      <button className={styles.editButton}>Edit Name</button>
    </div>
  );
}
