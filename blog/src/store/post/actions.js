import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (id) => {
  const response = await axios.get(`http://localhost:3000/posts/?userId=${id}`);

  return response.data;
});
