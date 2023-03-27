import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Form.module.css';
import { fetchUser } from '../../features/login';
import { userToken, loginError } from '../../utils/selectors';
import { useEffect } from 'react';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (email === '') {
      errors.email = true;
    }
    if (password === '') {
      errors.password = true;
    }
    setErrors(errors);

    if (email !== '' && password !== '') {
      let userCredentials = {
        email: email,
        password: password,
      };

      dispatch(fetchUser(userCredentials));
    }
  };

  const token = useSelector(userToken);
  if (token !== null && isChecked) {
    localStorage.setItem('token', token);
  }
  if (token !== null && !isChecked) {
    sessionStorage.setItem('token', token);
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate('/user');
    }
  }, [token, navigate]);

  const error = useSelector(loginError);

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        {error === 'status: 400, Error: Password is invalid' && (
          <p className={`${styles.errorMessage} ${styles.errorMessage2}`}>
            🚨 Erreur dans le mot de passe !
          </p>
        )}
        {error === 'status: 400, Error: User not found!' && (
          <p className={`${styles.errorMessage} ${styles.errorMessage2}`}>
            🚨 Aucun utilisateur ne correspond à cette adresse email !
          </p>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className={styles.errorMessage}>
            🚨 Saisissez votre adresse email !
          </p>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className={styles.errorMessage}>
            🚨 Saisissez votre mot de passe !
          </p>
        )}
      </div>
      <div className={styles.inputRemember}>
        <input
          type="checkbox"
          id="remember-me"
          value={isChecked}
          onChange={(e) => setIsChecked(true)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className={styles.signInButton}>Sign In</button>
    </form>
  );
}
