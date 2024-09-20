import { configureStore } from '@reduxjs/toolkit';
import shiftReducer from './slices/shiftSlice';
import uiReducer from './slices/uiSlice'; // Optional, for UI state like drawers

export const store = configureStore({
  reducer: {
    shifts: shiftReducer,
    ui: uiReducer,  // Optional, for managing UI states
  },
});
