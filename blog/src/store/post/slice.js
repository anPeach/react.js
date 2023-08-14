import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from './actions';

const postSlice = createSlice({
  name: 'post',
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postSlice.reducer;
