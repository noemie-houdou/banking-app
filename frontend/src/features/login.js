import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../utils/urlAPI';

export const fetchUser = createAsyncThunk(
  'login/fetchUser',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL}user/login`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        const data = await response.json();
        console.log(data);
        const error = data.status;
        const message = data.message;
        return rejectWithValue('status: ' + error + ', ' + message);
      } else {
        const data = await response.json();
        const userToken = data.body.token;
        return userToken;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  status: 'idle',
  userToken: null,
  error: null,
};

const usersLogin = createSlice({
  name: 'login',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.error = null;
        state.status = 'loading';
        return state;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userToken = action.payload;
        return state;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        return state;
      });
  },
});

export const { reset } = usersLogin.actions;

export default usersLogin.reducer;
