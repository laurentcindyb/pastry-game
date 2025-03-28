import { createSlice } from '@reduxjs/toolkit';
import { patisserieApi } from './api'; 

const patisseriesSlice = createSlice({
  name: 'patisseries',
  initialState: {
    remaining: 0,
  },
  reducers: {
    setRemainingPatisseries: (state, action) => {
      state.remaining = action.payload;
    },
  },
});

export const { setRemainingPatisseries } = patisseriesSlice.actions;

export default patisseriesSlice.reducer;
