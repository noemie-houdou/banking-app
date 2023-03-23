import { NavLink, Outlet } from 'react-router-dom';
import userIcon from '../../assets/icons/circle-user-solid.svg';
import logo from '../../assets/images/argentBankLogo.png';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <header>
        <nav className={styles.mainNav}>
          <NavLink className={styles.mainNavLogo} to="/">
            <img src={logo} alt="Logo Argent Bank" />
            <h1 className={styles.srOnly}>Argent Bank</h1>
          </NavLink>
          <NavLink className={styles.mainNavItem} to="/sign-in">
            <img src={userIcon} alt="Icône d'utilisateur" />
            Sign In
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
}
