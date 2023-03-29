import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../utils/urlAPI';

export const fetchUserInfos = createAsyncThunk(
  'user/fetchUserInfos',
  async (token, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL}user/profile`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const error = await response.json();
        console.log(error);
        return rejectWithValue(error);
      } else {
        const data = await response.json();
        const profileInfos = data.body;
        return profileInfos;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  status: 'idle',
  profileInfos: null,
  error: null,
};

const userInfos = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetProfile: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfos.pending, (state) => {
        state.error = null;
        state.status = 'loading';
        return state;
      })
      .addCase(fetchUserInfos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profileInfos = action.payload;
        return state;
      })
      .addCase(fetchUserInfos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        return state;
      });
  },
});

export const { resetProfile } = userInfos.actions;

export default userInfos.reducer;
