import { configureStore } from '@reduxjs/toolkit';
import shiftsReducer from './slices/shiftSlice.js';

const store = configureStore({
  reducer: {
    shifts: shiftsReducer,
  },
});

export default store;
