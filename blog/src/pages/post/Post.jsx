import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPostById } from '../../store/post/slice';

import styles from './Post.module.css';
import { selectUserById } from '../../store/user/slice';

const Post = () => {
  const { id } = useParams();
  const post = useSelector((state) => selectPostById(state, id));
  const user = useSelector((state) => selectUserById(state, post.userId));

  return (
    <div className={styles.post}>
      <p className={styles.post__styles}>Author: {user.nickname}</p>
      <p className={styles.post__text}>Text: {post.text}</p>
    </div>
  );
};

export default Post;
