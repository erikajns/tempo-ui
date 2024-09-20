import React from 'react';
import ShiftManager from '../../components/ShiftManager/ShiftManager';
import useStyles from './Shifts.module.css';

const Shifts = () => {
  const columns = ['Sat Feb 4', 'Sun Feb 5', 'Mon Feb 6', 'Tue Feb 7', 'Wed Feb 8', 'Thu Feb 9', 'Fri Feb 10'];
  const events = ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6', 'Event 7'];

  const unassignedShifts = [
    {
      role: 'Bartender',
      name: 'Unassigned',
      hours: '48',
      isAssigned: false,
      shiftStart: '8:00 AM',
      breakTime: { time: '1:00 PM', overdue: false },
      shiftEnd: '5:00 PM',
      notes: 'Please prepare for a busy shift.',
    },
    {
      role: 'Host',
      name: 'Unassigned',
      hours: '48',
      isAssigned: false,
      shiftStart: '9:00 AM',
      breakTime: { time: '1:30 PM', overdue: true },
      shiftEnd: '6:00 PM',
      notes: 'Remember to restock the menus.',
    },
    {
      role: 'Bartender',
      name: 'Unassigned',
      hours: '48',
      isAssigned: false,
      shiftStart: '7:00 AM',
      breakTime: { time: '12:00 PM', overdue: false },
      shiftEnd: '4:00 PM',
      notes: 'Check in with the kitchen before starting.',
    },
  ];
  

  const assignedShifts = [
    {
      role: 'Bartender',
      name: 'Jane Doe',
      hours: '48',
      overtime: '8',
      isAssigned: true,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
      start: '8:00 AM',
      breakTime: { time: '1:00 PM', overdue: true, note: '13min past without break' },
      end: '5:00 PM',
      notes: 'Gate code: 162734# Please read up on the recent menu changes at the beginning of your shift.',
      sales: '$211.22 sold this shift'  // Información adicional
    },
    {
      role: 'Bartender',
      name: 'Kane Smith',
      hours: '40',
      isAssigned: true,
      image: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg',
      start: '9:00 AM',
      breakTime: { time: '1:30 PM', overdue: false, note: '' },
      end: '6:00 PM',
      notes: 'Staff meeting at 9:00 AM.',
      sales: '$180.55 sold this shift'
    },
    {
      role: 'Bartender',
      name: 'Jane Cooper',
      hours: '32',
      isAssigned: true,
      image: 'https://c.files.bbci.co.uk/ECA7/production/_131938506_ind3bc40c5f1c10d4248e6bf848ae7033c8814005e9-1.jpg',
      start: '10:00 AM',
      breakTime: { time: '2:00 PM', overdue: false, note: '' },
      end: '7:00 PM',
      notes: 'Please check bar inventory before shift.',
      sales: '$150.45 sold this shift'
    },
  ];
  

  return (
    <div className={ useStyles.pageStyling }>
      <ShiftManager 
        columns={columns} 
        events={events} 
        unassignedShifts={unassignedShifts} 
        assignedShifts={assignedShifts} 
      />
    </div>
  );
};

export default Shifts;
