import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseApi } from '../../api/api';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (id) => {
  const response = await baseApi.get(`posts/?userId=${id}`);

  return response.data;
});

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (payload) => {
    const { token, ...rest } = payload;

    const response = await baseApi.post('posts', rest, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log('response', response);

    return response.data;
  },
);
