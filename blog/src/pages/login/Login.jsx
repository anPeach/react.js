import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './Login.module.css';

import { loginUser } from '../../store';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = await dispatch(loginUser({ email, password })).unwrap();
    sessionStorage.setItem('user', JSON.stringify(user));

    return navigate('/profile');
  };

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__element}>
          <label htmlFor="email" className={styles.form__label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={styles.form__input}
          />
        </div>
        <div className={styles.form__element}>
          <label htmlFor="password" className={styles.form__label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.form__input}
          />
        </div>
        <button type="submit" className={styles.form__button}>
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
