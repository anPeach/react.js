import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseApi } from '../../api/api';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (id) => {
  const response = await baseApi.get(`posts/?userId=${id}`);

  return response.data;
});
