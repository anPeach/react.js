import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';

import {
  createPost,
  fetchPosts,
  selectLoggedInUser,
} from '../../../../../store';

// import { useToggle } from '../../../hooks';

const AddPost = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  // const [open, toggleOpen] = useToggle(false); !?
  const [isOpen, setIsOpen] = useState(false);

  const { useForm } = Form;
  const [form] = useForm();

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const handleFinish = (values) => {
    dispatch(
      createPost({ ...values, userId: user.id, token: user.token }),
    ).unwrap();

    dispatch(fetchPosts(user.id));
  };

  return (
    <div>
      <Button onClick={toggleIsOpen}>add new post</Button>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          okText="Create a post"
          onCancel={toggleIsOpen}
          onOk={form.submit}
          title="Create Post"
          open={isOpen}
        >
          <Form form={form} onFinish={handleFinish}>
            <Form.Item name="text">
              <TextArea />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default AddPost;
