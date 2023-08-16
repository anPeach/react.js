import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts } from '../../store/post/slice';
import { useEffect } from 'react';
import { fetchPosts } from '../../store/post/actions';
import { selectAllUsers } from '../../store/user/slice';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectAllUsers)
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = JSON.parse(sessionStorage.getItem('user'));
    dispatch(fetchPosts(id));
  }, [dispatch]);

  console.log('users', users);

  const postsToRender = posts.map((post) => {
    return (
      <div key={post.id}>
        <p>Author: {post.userId}</p>
        <p>Text: {post.text}</p>
      </div>
    );
  });

  return <div>{postsToRender}</div>;
};

export default PostsList;
