import React from 'react';
import EmployeeInfoDrawer from './EmployeeInfoDrawer';

export default {
  title: 'Components/EmployeeShiftCard',
  component: EmployeeInfoDrawer,
  tags: ['autodocs'],
};

const Template = (args) => <EmployeeInfoDrawer {...args} />;

export const Assigned = Template.bind({});
Assigned.args = {
  role: 'Bartender',
  name: 'Jane Doe',
  hours: '48',
  overtime: '8',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
  isAssigned: true,
};
