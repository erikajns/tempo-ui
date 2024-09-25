import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  unassignedShifts: [],
  assignedShifts: [],
};

const shiftsSlice = createSlice({
  name: 'shifts',
  initialState,
  reducers: {
    addShift: (state, action) => {
      state.unassignedShifts.push(action.payload);
    },
    assignShift: (state, action) => {
      const { shiftId, assignee } = action.payload;

      const shiftIndex = state.unassignedShifts.findIndex(shift => shift.id === shiftId);
      if (shiftIndex !== -1) {
        const shift = state.unassignedShifts[shiftIndex];
        shift.assignee = assignee;

        // Remove from unassignedShifts and add to assignedShifts
        state.unassignedShifts.splice(shiftIndex, 1);
        state.assignedShifts.push(shift);
      }
    },
  },
});

export const { addShift, assignShift } = shiftsSlice.actions;
export default shiftsSlice.reducer;
