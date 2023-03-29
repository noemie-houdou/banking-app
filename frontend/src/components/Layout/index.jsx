import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../features/login';
import { resetProfile } from '../../features/userInfos';
import { resetIsChecked } from '../../features/rememberMe';
import { profileInfos } from '../../utils/selectors';
import userIcon from '../../assets/icons/circle-user-solid.svg';
import signOutIcon from '../../assets/icons/right-from-bracket-solid.svg';
import logo from '../../assets/images/argentBankLogo.png';
import styles from './Layout.module.css';

export default function Layout() {
  const location = useLocation();
  const userRoute = location.pathname === '/user';
  const dispatch = useDispatch();
  const infos = useSelector(profileInfos);
  const username = infos?.userName;

  const handleLogOutClick = () => {
    localStorage.clear();
    dispatch(reset());
    dispatch(resetProfile());
    dispatch(resetIsChecked());
  };

  return (
    <div className={styles.layout}>
      <header>
        <nav className={styles.mainNav}>
          <NavLink className={styles.mainNavLogo} to="/">
            <img src={logo} alt="Logo Argent Bank" />
            <h1 className={styles.srOnly}>Argent Bank</h1>
          </NavLink>
          {userRoute ? (
            <div className={styles.signOutContainer}>
              <NavLink className={styles.mainNavItem} to="/user">
                <img
                  className={styles.userIcon}
                  src={userIcon}
                  alt="Icône d'utilisateur"
                />
                {infos ? `${username}` : 'Username'}
              </NavLink>
              <NavLink
                className={styles.mainNavItem}
                to="/"
                onClick={handleLogOutClick}
              >
                <img
                  className={styles.signOutIcon}
                  src={signOutIcon}
                  alt="Icône de déconnexion"
                />
                Sign Out
              </NavLink>
            </div>
          ) : (
            <NavLink className={styles.mainNavItem} to="/sign-in">
              <img
                className={styles.userIcon}
                src={userIcon}
                alt="Icône d'utilisateur"
              />
              Sign In
            </NavLink>
          )}
        </nav>
      </header>
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.footerText}>Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
}
