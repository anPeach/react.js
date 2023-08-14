import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseApi } from '../../api/api';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (formData) => {
    const response = await baseApi.post(
      'auth/registration',
      formData,
    );

    return response.data;
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (formData) => {
    try {
      const response = await baseApi.post(
        'auth/login',
        formData,
      );

      return response.data;
    } catch (error) {
      console.log('error', error);
    }
  },
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (id) => {
    try {
      const response = await baseApi.get(`users/${id}`);

      return response.data;
    } catch (error) {
      console.log('error', error);
    }
  },
);

