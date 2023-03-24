import { NavLink, Outlet, useLocation } from 'react-router-dom';
import userIcon from '../../assets/icons/circle-user-solid.svg';
import signOutIcon from '../../assets/icons/right-from-bracket-solid.svg';
import logo from '../../assets/images/argentBankLogo.png';
import styles from './Layout.module.css';

export default function Layout() {
  const location = useLocation();
  const userRoute = location.pathname === '/user';
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
                Username
              </NavLink>
              <NavLink className={styles.mainNavItem} to="/">
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
