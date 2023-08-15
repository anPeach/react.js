import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, updateUser } from './actions';

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState({
  loggedInUserId: '',
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        userAdapter.setOne(state, action.payload);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        userAdapter.setOne(state, action.payload);
        state.loggedInUserId = action.payload.id;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        userAdapter.setOne(state, action.payload);
        state.loggedInUserId = action.payload.id;
      });
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = userAdapter.getSelectors((state) => state.user);

const selectLoggedInId = (state) => state.user.loggedInUserId;

export const selectLoggedInUser = (state) => {
  const entities = state.user.entities;
  return entities[selectLoggedInId(state)];
};

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
