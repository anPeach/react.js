import { useNavigate } from 'react-router-dom';

import styles from '../PostsList.module.css';

const PostItem = (props) => {
  const { post, nickname } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    return navigate(`/posts/${post.id}`);
  };

  return (
    <div key={post.id} className={styles.post}>
      <div className={styles.post__info}>
        <p className={styles.post__author}>{nickname}</p>
        <p className={styles.post__text}>{post.text}</p>
      </div>
      <button
        type="button"
        onClick={handleClick}
        className={`${styles.post__button} button`}
      >
        more
      </button>
    </div>
  );
};

export default PostItem;
