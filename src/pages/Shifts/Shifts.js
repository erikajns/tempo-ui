import React from 'react';
import ShiftManager from '../../components/ShiftManager/ShiftManager';
import InfoDrawer from '../../components/InfoDrawer/InfoDrawer';
import useStyles from './Shifts.module.css';

const Shifts = () => {
  const columns = ['Sat Feb 4', 'Sun Feb 5', 'Mon Feb 6', 'Tue Feb 7', 'Wed Feb 8', 'Thu Feb 9', 'Fri Feb 10'];
  const events = ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6', 'Event 7'];

  const unassignedShifts = [
    { role: 'Bartender', name: '', hours: '48', isAssigned: false },
    { role: 'Host', name: '', hours: '48', isAssigned: false },
    { role: 'Bartender', name: '', hours: '48', isAssigned: false },
    { role: 'Host', name: '', hours: '48', isAssigned: false },
  ];

  const assignedShifts = [
    { role: 'Bartender', name: 'Jane Doe', hours: '48', overtime: '8', isAssigned: true, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'},
    { role: 'Bartender', name: 'Kane Smith', hours: '40', isAssigned: true, image: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg' },
    { role: 'Bartender', name: 'Jane Cooper', hours: '32', isAssigned: true, image: 'https://c.files.bbci.co.uk/ECA7/production/_131938506_ind3bc40c5f1c10d4248e6bf848ae7033c8814005e9-1.jpg' },
  ];

  return (
    <div className={ useStyles.pageStyling }>
      <ShiftManager 
        columns={columns} 
        events={events} 
        unassignedShifts={unassignedShifts} 
        assignedShifts={assignedShifts} 
      />
      < InfoDrawer />
    </div>
  );
};

export default Shifts;
