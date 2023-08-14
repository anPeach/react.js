import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (formData) => {
    const response = await axios.post(
      'http://localhost:3000/auth/registration',
      formData,
    );

    return response.data;
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (formData) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/auth/login',
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
      const response = await axios.get(`http://localhost:3000/users/${id}`);

      return response.data;
    } catch (error) {
      console.log('error', error);
    }
  },
);

