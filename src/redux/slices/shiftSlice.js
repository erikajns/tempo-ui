import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  unassignedShifts: [
    {
      role: 'Bartender',
      id: 1,
      name: 'Unassigned',
      hours: '48',
      isAssigned: false,
      shiftStart: '8:00pm',
      breakTime: { time: '1:00pm', overdue: false },
      shiftEnd: '5:00pm',
      notes: 'Please prepare for a busy shift.',
    },
    {
      role: 'Host',
      id: 2,
      name: 'Unassigned',
      hours: '48',
      isAssigned: false,
      shiftStart: '9:00am',
      breakTime: { time: '1:30pm', overdue: true },
      shiftEnd: '6:00pm',
      notes: 'Remember to restock the menus.',
    },
    {
      role: 'Bartender',
      id: 3,
      name: 'Unassigned',
      hours: '48',
      isAssigned: false,
      shiftStart: '7:00am',
      breakTime: { time: '12:00pm', overdue: false },
      shiftEnd: '4:00pm',
      notes: 'Check in with the kitchen before starting.',
    },
  ],
  assignedShifts: [
    {
      role: 'Bartender',
      id: 4,
      name: 'Jane Doe',
      hours: '48',
      overtime: '8',
      isAssigned: true,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
      shiftStart: '8:00am',
      breakTime: { time: '1:00pm', overdue: true, note: '13min past without break' },
      shiftEnd: '5:00pm',
      notes: 'Gate code: 162734# Please read up on the recent menu changes at the beginning of your shift.',
      sales: '$211.22 sold this shift'  // Información adicional
    },
    {
      role: 'Bartender',
      id: 5,
      name: 'Kane Smith',
      hours: '40',
      isAssigned: true,
      image: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg',
      shiftStart: '9:00am',
      breakTime: { time: '1:30pm', overdue: false, note: '' },
      shiftEnd: '6:00pm',
      notes: 'Staff meeting at 9:00am.',
      sales: '$180.55 sold this shift'
    },
    {
      role: 'Bartender',
      id: 6,
      name: 'Jane Cooper',
      hours: '32',
      isAssigned: true,
      image: 'https://c.files.bbci.co.uk/ECA7/production/_131938506_ind3bc40c5f1c10d4248e6bf848ae7033c8814005e9-1.jpg',
      shiftStart: '10:00am',
      breakTime: { time: '2:00pm', overdue: false, note: '' },
      shiftEnd: '7:00pm',
      notes: 'Please check bar inventory before shift.',
      sales: '$150.45 sold this shift'
    },
  ],
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
