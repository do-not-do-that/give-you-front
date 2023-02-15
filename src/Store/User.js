import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';

const fetchUserByIdAction = createAction('user/fetchUserByIdStatus');

const fetchUserById = createAsyncThunk(
  fetchUserByIdAction,
  async (userData, thunkAPI) => {
    const response = await authS;
  }
);
