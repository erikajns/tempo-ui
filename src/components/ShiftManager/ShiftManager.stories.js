import React from 'react';
import ShiftManager from './ShiftManager';

export default {
  title: 'Components/ShiftManager',
  component: ShiftManager,
  tags: ['autodocs'],
};

const Template = (args) => <ShiftManager {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: ['Sat Feb 4', 'Sun Feb 5', 'Mon Feb 6', 'Tue Feb 7', 'Wed Feb 8', 'Thu Feb 9', 'Fri Feb 10'],
  events: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6', 'Event 7'],
  unassignedShifts: [
    { role: 'Bartender', name: '', hours: '48', isAssigned: false },
    { role: 'Host', name: '', hours: '48', isAssigned: false },
  ],
  assignedShifts: [
    { role: 'Bartender', name: 'Jane Doe', hours: '48', overtime: '8', isAssigned: true },
    { role: 'Bartender', name: 'Kane Smith', hours: '40', isAssigned: true },
    { role: 'Bartender', name: 'Jane Cooper', hours: '32', isAssigned: true },
  ],
};
