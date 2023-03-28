import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const rememberMe = createSlice({
  name: 'rememberMe',
  initialState: false,
  reducers: {
    toggle: (state) => !state,
    resetIsChecked: () => initialState,
  },
});

export const { toggle, resetIsChecked } = rememberMe.actions;
export default rememberMe.reducer;
