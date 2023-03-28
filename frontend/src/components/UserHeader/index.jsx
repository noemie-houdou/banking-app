import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfos } from '../../features/userInfos';
import { userToken, profileInfos } from '../../utils/selectors';
import styles from './UserHeader.module.css';

export default function UserHeader() {
  const auth = useSelector(userToken);
  const token = auth.body.token;
  //console.log(token);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfos(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const infos = useSelector(profileInfos);
  const firstname = infos?.body.firstName;
  const lastname = infos?.body.lastName;

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
