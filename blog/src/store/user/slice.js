import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    registration: (state, action) => {
      state.user = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const selectUser = (state) => state.user;
export const { login, registration, setUserData } = userSlice.actions;
export default userSlice.reducer;
