import React from 'react';
import ShiftTable from '../ShiftTable/ShiftTable';
import CustomTextButton from '../CustomTextButton/CustomTextButton';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupIcon from '@mui/icons-material/Group';
import { Box } from '@mui/material';

const ShiftManager = ({ columns, events, unassignedShifts, assignedShifts }) => {
  return (
    <Box 
      p={2} 
      bgcolor="#000000" 
      borderRadius="16px"
      width="100%"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="16px">
        <Box display="flex" gap="16px">
          <CustomTextButton text="Azure Table" />
          <CustomTextButton text="Feb 4 - 10, 2024" icon={CalendarTodayIcon} />
          <CustomTextButton text="All shifts" icon={GroupIcon} />
          <CustomTextButton text="Group by assignment" icon={GroupIcon} />
        </Box>
        <CustomTextButton text="Shift" icon={AddIcon} />
      </Box>
      <Box borderBottom="2px solid #38383A" marginBottom="16px" />
      <ShiftTable 
        columns={columns} 
        events={events} 
        unassignedShifts={unassignedShifts} 
        assignedShifts={assignedShifts} 
      />
    </Box>
  );
};

export default ShiftManager;
