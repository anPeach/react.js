import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './Profile.module.css';

import { selectLoggedInUser } from '../../store/user/slice';
import { fetchPosts } from '../../store/post/actions';
import { updateUser } from '../../store/user/actions';
import { selectAllPosts } from '../../store/post/slice';

const Profile = () => {
  const user  = useSelector(selectLoggedInUser);
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = JSON.parse(sessionStorage.getItem('user'));
    dispatch(fetchPosts(id));

    if (user) return;
    dispatch(updateUser(id));

    return () => {};
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
            <li className={styles.profile__posts}>{posts.length} posts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
