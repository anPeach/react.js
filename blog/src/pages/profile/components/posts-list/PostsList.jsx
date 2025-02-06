import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './PostList.styled.js';
import { AddPost, PostItem } from './components';
import {
  selectAllPosts,
  selectUserEntities,
  fetchPosts,
} from '../../../../store';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectUserEntities);

  useEffect(() => {
    const { id } = JSON.parse(sessionStorage.getItem('user'));
    dispatch(fetchPosts(id));
  }, [dispatch]);

  return (
    <Container>
      <AddPost />

      {posts.map((post) => {
        const user = users[post.userId];

        return <PostItem key={post.id} post={post} nickname={user.nickname} />;
      })}
    </Container>
  );
};

export default PostsList;
