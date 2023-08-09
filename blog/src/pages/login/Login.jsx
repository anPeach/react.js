import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../store/user/slice';

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

    const response = await axios.post('http://localhost:3000/auth/login', {
      email,
      password,
    });

    sessionStorage.setItem('user', JSON.stringify({ id: response.data.id }));
    dispatch(login({ ...response.data }));

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
