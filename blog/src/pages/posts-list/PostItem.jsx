import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
  const { post, nickname } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    return navigate(`${post.id}`);
  };

  return (
    <div key={post.id}>
      <div>
        <p>Author: {nickname}</p>
        <p>Text: {post.text}</p>
      </div>
      <button type="button" onClick={handleClick}>
        View post
      </button>
    </div>
  );
};

export default PostItem;
