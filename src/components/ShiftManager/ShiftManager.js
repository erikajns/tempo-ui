import React, { useState } from 'react';
import CustomTextButton from '../CustomTextButton/CustomTextButton';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import EmployeeShiftCard from '../EmployeeShiftCard/EmployeeShiftCard';
import { useDrawer } from '../../context/DrawerContext';
import InfoDrawer from '../InfoDrawer/InfoDrawer';
import AddShiftForm from '../AddShiftForm/AddShiftForm';
import UnassignedShiftDetails from '../UnassignedShiftDetails/UnassignedShiftDetails';
import AssignedShiftDetails from '../AssignedShiftDetails/AssignedShiftDetails';
import useStyles from './ShiftManager.styles';

const DRAWER_WIDTH = 360;

const ShiftManager = ({ columns, events, unassignedShifts: initialUnassignedShifts, assignedShifts }) => {
  const { isDrawerOpen, openDrawer, closeDrawer } = useDrawer();
  const classes = useStyles();
  const [unassignedShifts, setUnassignedShifts] = useState(initialUnassignedShifts);

  // Handler for adding new shifts
  const handleAddShiftClick = () => {
    openDrawer(<AddShiftForm onClose={closeDrawer} onSave={handleSaveShift} />);
  };

  // Saving a new unassigned shift
  const handleSaveShift = (newShift) => {
    setUnassignedShifts([...unassignedShifts, newShift]);
    closeDrawer();
  };

  // Unassigned shift click handler
  const handleUnassignedShiftClick = (shift) => {
    openDrawer(
      <UnassignedShiftDetails
        shiftType={shift.role}
        shiftStart={shift.start}
        breakTime={shift.breakTime}
        shiftEnd={shift.end}
        notes={shift.notes}
      />
    );
  };

  // Assigned shift click handler
  const handleAssignedShiftClick = (shift) => {
    openDrawer(
      <AssignedShiftDetails
        shiftType={shift.role}
        assignee={{ name: shift.name, details: shift.sales, image: shift.image }}
        shiftStart={shift.start}
        breakTime={shift.breakTime}
        shiftEnd={shift.end}
        notes={shift.notes}
        onUnassign={() => console.log('Unassign shift')}
        onReportIncident={() => console.log('Report incident')}
        onDelete={() => console.log('Delete shift')}
      />
    );
  };

  return (
    <>
      <Box 
        display="flex"
        justifyContent="space-between"
        width="100%"
      >
        <Box flexGrow={1} mr={isDrawerOpen ? `${DRAWER_WIDTH}px` : '0'} bgcolor="#000000" borderRadius="16px" p={2} maxHeight="90vh" overflow="auto">
          <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="16px">
            <Box display="flex" gap="16px">
              <CustomTextButton text="Azure Table" />
              <CustomTextButton text="Feb 4 - 10, 2024" icon={CalendarTodayIcon} />
              <CustomTextButton text="All shifts" icon={GroupIcon} />
              <CustomTextButton text="Group by assignment" icon={GroupIcon} />
            </Box>
            <CustomTextButton text="Shift" icon={AddIcon} onClick={handleAddShiftClick} />
          </Box>
          <Box borderBottom="2px solid #38383A" marginBottom="16px" />

          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table aria-label="shift table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeader} align="center">
                    <Box display="flex" alignItems="center" gap="8px">
                      <NotificationsOutlinedIcon />
                      <Typography variant="body2">3 conflicts, 2 unassigned, 4 overtime</Typography>
                    </Box>
                  </TableCell>
                  {columns.map((column, index) => (
                    <TableCell key={index} align="center" className={classes.tableHeader}>
                      {column}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableHeader} align="center">Events</TableCell>
                  {events.map((event, index) => (
                    <TableCell
                      key={index}
                      align="center"
                      className={`${classes.tableCell} ${classes.clickableCell} ${index === 0 ? classes.eventCellStart : ''} ${index === events.length - 1 ? classes.eventCellEnd : ''}`}
                    >
                      {event}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Unassigned shifts */}
                <TableRow className={classes.sectionRow}>
                  <TableCell className={classes.sectionTitle} colSpan={columns.length + 1}>Unassigned Shifts</TableCell>
                </TableRow>
                {unassignedShifts.map((shift, index) => (
                  <TableRow key={index} className={classes.shiftRow}>
                    <TableCell className={`${classes.shiftCell}`} align="center">
                      <EmployeeShiftCard {...shift} />
                    </TableCell>
                    {columns.map((_, idx) => (
                      <TableCell
                        onClick={() => handleUnassignedShiftClick(shift)} // Click handler for unassigned shifts
                        key={idx}
                        align="center"
                        className={`${classes.tableCell} ${classes.clickableCell} ${idx === columns.length - 1 ? classes.shiftCellEnd : ''}`}
                      >
                        <Typography variant="body2">3:30pm - 10:00pm</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

                {/* Assigned shifts */}
                <TableRow className={classes.sectionRow}>
                  <TableCell className={classes.sectionTitle} colSpan={columns.length + 1}>Assigned Shifts</TableCell>
                </TableRow>
                {assignedShifts.map((shift, index) => (
                  <TableRow key={index} className={classes.shiftRow}>
                    <TableCell className={`${classes.shiftCell}`} align="center">
                      <EmployeeShiftCard {...shift} />
                    </TableCell>
                    {columns.map((_, idx) => (
                      <TableCell
                        onClick={() => handleAssignedShiftClick(shift)} 
                        key={idx}
                        align="center"
                        className={`${classes.tableCell} ${classes.clickableCell} ${idx === columns.length - 1 ? classes.shiftCellEnd : ''}`}
                      >
                        <Typography variant="body2">3:30pm - 10:00pm</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <InfoDrawer />
      </Box>
    </>
  );
};

export default ShiftManager;
