import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEditUsername } from '../../features/editUsername';
import { profileInfos } from '../../utils/selectors';
import UserHeader from '../UserHeader';
import styles from './EditUsername.module.css';

export default function EditUsername() {
  const [username, setUsername] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState({});

  const infos = useSelector(profileInfos);
  const userName = infos?.userName;
  const firstName = infos?.firstName;
  const lastName = infos?.lastName;

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();

    const error = {};
    if (username === '') {
      error.username = true;
    }
    setError(error);

    if (username !== '') {
      let newUserName = {
        userName: username,
      };
      dispatch(fetchEditUsername(newUserName));
      setIsSaved(!isSaved);
    }
  };
  console.log(username);

  return isClicked || isSaved ? (
    <UserHeader />
  ) : (
    <div className={styles.editUsername}>
      <h1>Edit user info</h1>
      <form className={styles.editUsernameForm}>
        <div className={styles.editUsernameItem}>
          <label className={styles.editUsernameLabel} htmlFor="username">
            User name:
          </label>
          <input
            className={styles.editUsernameInput}
            type="text"
            id="username"
            placeholder={userName}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {error.username && (
            <p className={styles.errorMessage}>🚨 Saisissez un "User name" !</p>
          )}
        </div>
        <div className={styles.editUsernameItem}>
          <label className={styles.editUsernameLabel} htmlFor="firstname">
            First name:
          </label>
          <input
            className={`${styles.editUsernameInput} ${styles.editUsernameInputReadOnly}`}
            readOnly
            type="text"
            id="firstname"
            placeholder={firstName}
          />
        </div>
        <div className={styles.editUsernameItem}>
          <label className={styles.editUsernameLabel} htmlFor="lastname">
            Last name:
          </label>
          <input
            className={`${styles.editUsernameInput} ${styles.editUsernameInputReadOnly}`}
            readOnly
            type="text"
            id="lastname"
            placeholder={lastName}
          />
        </div>
      </form>
      <div className={styles.editUsernameButtons}>
        <button
          className={`${styles.editUsernameButton} ${styles.editUsernameButtonSave}`}
          value={isSaved}
          onClick={handleSaveClick}
        >
          Save
        </button>
        <button
          className={styles.editUsernameButton}
          value={isClicked}
          onClick={handleButtonClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
