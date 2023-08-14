import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, updateUser } from './actions';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const selectUser = (state) => state.user;
export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
