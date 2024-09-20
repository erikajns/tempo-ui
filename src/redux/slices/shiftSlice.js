import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  unassignedShifts: [
    { role: 'Bartender', hours: '48', isAssigned: false },
    { role: 'Host', hours: '48', isAssigned: false },
  ],
  assignedShifts: [
    {
      role: 'Bartender',
      assignee: { name: 'Jane Doe', hours: '48', overtime: '8', image: 'https://example.com/avatar.jpg' },
      shiftStart: '8:00 AM',
      breakTime: { time: '1:00 PM', overdue: false },
      shiftEnd: '5:00 PM',
      notes: 'Gate code: 162734# Please read up on the menu changes at the start of your shift.',
    },
  ],
};

const shiftSlice = createSlice({
  name: 'shifts',
  initialState,
  reducers: {
    addUnassignedShift: (state, action) => {
      state.unassignedShifts.push(action.payload);
    },
    assignShift: (state, action) => {
      const { role, assignee } = action.payload;
      const shift = state.unassignedShifts.find(shift => shift.role === role);
      if (shift) {
        shift.isAssigned = true;
        state.assignedShifts.push({ ...shift, assignee });
        state.unassignedShifts = state.unassignedShifts.filter(s => s.role !== role);
      }
    },
    removeAssignedShift: (state, action) => {
      state.assignedShifts = state.assignedShifts.filter(shift => shift.role !== action.payload.role);
    },
  },
});

export const { addUnassignedShift, assignShift, removeAssignedShift } = shiftSlice.actions;
export default shiftSlice.reducer;
