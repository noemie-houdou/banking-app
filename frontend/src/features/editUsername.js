import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../utils/urlAPI';

export const fetchEditUsername = createAsyncThunk(
  'user/fetchEditUsername',
  async (editUsername, { rejectWithValue }) => {
    try {
      const token =
        sessionStorage.getItem('token') || localStorage.getItem('token');
      const response = await fetch(`${URL}user/profile`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(editUsername),
      });
      if (!response.ok) {
        const data = await response.json();
        console.log(data);
        const error = data.status;
        const message = data.message;
        return rejectWithValue('status: ' + error + ', ' + message);
      } else {
        const data = await response.json();
        const newUsername = data.body.userName;
        return newUsername;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  status: 'idle',
  newUsername: null,
  error: null,
};

const editUsername = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    resetUsername: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEditUsername.pending, (state) => {
        state.error = null;
        state.status = 'loading';
        return state;
      })
      .addCase(fetchEditUsername.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.newUsername = action.payload;
        return state;
      })
      .addCase(fetchEditUsername.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        return state;
      });
  },
});

export const { resetUsername } = editUsername.actions;
export default editUsername.reducer;
