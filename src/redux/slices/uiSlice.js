import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isDrawerOpen: false,
    drawerContent: null,
  },
  reducers: {
    openDrawer: (state, action) => {
      state.isDrawerOpen = true;
      state.drawerContent = action.payload;
    },
    closeDrawer: (state) => {
      state.isDrawerOpen = false;
      state.drawerContent = null;
    },
  },
});

export const { openDrawer, closeDrawer } = uiSlice.actions;
export default uiSlice.reducer;