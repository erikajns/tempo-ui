import React from 'react';
import ShiftManager from '../../components/ShiftManager/ShiftManager';
import useStyles from './Shifts.module.css';

const Shifts = () => {
  const columns = ['Sat Feb 4', 'Sun Feb 5', 'Mon Feb 6', 'Tue Feb 7', 'Wed Feb 8', 'Thu Feb 9', 'Fri Feb 10'];
  const events = ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6', 'Event 7'];
  const metrics = [
    {
      percentage: '28%',
      totals: '512hr $3246',
    },
    {
      percentage: '-4%',
      totals: '76hr $240',
    },
    {
      percentage: '0%',
      totals: '80hr $246',
    },
    {
      percentage: '22%',
      totals: '97hr $246',
    },
    {
      percentage: '20%',
      totals: '94hr $595',
    },
    {
      percentage: '-2%',
      totals: '78hr $240',
    },
    {
      percentage: '0%',
      totals: '80hr $246',
    },
    {
      percentage: '20%',
      totals: '94hr $566',
    },
  ]
  

  return (
    <div className={ useStyles.pageStyling }>
      <ShiftManager 
        columns={columns} 
        events={events} 
        metrics={metrics}
      />
    </div>
  );
};

export default Shifts;
