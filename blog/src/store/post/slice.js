import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { createPost, fetchPosts } from './actions';

const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState();

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        postsAdapter.setMany(state, action.payload);
      })
      .addCase(createPost.fulfilled, (state, action) => {
        postsAdapter.addOne(state, action.payload);
      });
  },
});

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.post);

export default postSlice.reducer;
