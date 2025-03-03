import React from 'react';
import ShiftTable from './ShiftTable';

export default {
  title: 'Components/ShiftTable',
  component: ShiftTable,
  tags: ['autodocs'],
};

const Template = (args) => <ShiftTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: ['Sat Feb 4', 'Sun Feb 5', 'Mon Feb 6', 'Tue Feb 7', 'Wed Feb 8', 'Thu Feb 9', 'Fri Feb 10'],
  events: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6', 'Event 7'],
  unassignedShifts: [
    { role: 'Bartender', name: '', hours: '48hr', isAssigned: false },
    { role: 'Host', name: '', hours: '48hr', isAssigned: false },
  ],
  assignedShifts: [
    { role: 'Bartender', name: 'Jane Doe', hours: '48hr', overtime: '8hr', isAssigned: true },
    { role: 'Bartender', name: 'Kane Smith', hours: '40hr', isAssigned: true },
    { role: 'Bartender', name: 'Jane Cooper', hours: '32hr', isAssigned: true },
  ],
};
