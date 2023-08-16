import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts } from '../../store/post/slice';
import { useEffect } from 'react';
import { fetchPosts } from '../../store/post/actions';
import { selectUserEntities } from '../../store/user/slice';
import PostItem from './PostItem';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectUserEntities);
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = JSON.parse(sessionStorage.getItem('user'));
    dispatch(fetchPosts(id));
  }, [dispatch]);

  const postsToRender = posts.map((post) => {
    const user = users[post.userId];

    return (<PostItem key={post.id} post={post} nickname={user.nickname}/>);
  });

  return <div>{postsToRender}</div>;
};

export default PostsList;
