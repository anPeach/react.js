import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectAllPosts, fetchPosts, selectLoggedInUser } from '../../store';

import { PostsList } from './components';
import { Background, Container, Name, Info, Image } from './Profile.styled';

const Profile = () => {
  const user = useSelector(selectLoggedInUser);
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = JSON.parse(sessionStorage.getItem('user'));
    dispatch(fetchPosts(id));

    return () => {};
  }, [dispatch]);

  return (
    <Background>
      <Container>
        <Image src="src/images/profile.jpg" />

        <Info>
          <Name>
            {user.name} @{user.nickname}
          </Name>
          {posts.length} posts
        </Info>

        <PostsList />
      </Container>
    </Background>
  );
};

export default Profile;
