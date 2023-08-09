// import Header from '../header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './Profile.module.css';
import axios from 'axios';

import { selectUser, setUserData } from '../../store/user/slice';

const Profile = () => {
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    if (user) return;

    const fetchData = async () => {
      const { id } = JSON.parse(sessionStorage.getItem('user'));

      const response = await axios.get(
        `http://localhost:3000/users/${id}`,
      );

      dispatch(setUserData({ ...response.data }));
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [dispatch, user]);

  if (!user) {
    return;
  }

  return (
    <div>
      <div className={styles.profile}>
        <img className={styles.profile__img} src="src/images/profile.jpg"></img>
        <div className={styles.profile__info}>
          <ul className={styles.profile__list}>
            <li className={styles.profile__name}>{user.name}</li>
            <li className={styles.profile__nickname}>{user.nickname}</li>
            <li className={styles.profile__posts}>posts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
