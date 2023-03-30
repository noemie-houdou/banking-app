import { useState } from 'react';
import { useSelector } from 'react-redux';
import { profileInfos } from '../../utils/selectors';
import EditUserName from '../EditUsername';
import styles from './UserHeader.module.css';

export default function UserHeader() {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  const infos = useSelector(profileInfos);
  const firstname = infos?.firstName;
  const lastname = infos?.lastName;

  return isClicked ? (
    <EditUserName />
  ) : (
    <div className={styles.header}>
      <h1>
        Welcome back
        <br />
        {infos ? `${firstname} ${lastname}` : 'Firstname Lastname'}!
      </h1>
      <button
        className={styles.editButton}
        value={isClicked}
        onClick={handleButtonClick}
      >
        Edit Name
      </button>
    </div>
  );
}
