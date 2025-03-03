import React, { useState, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { addShift, assignShift } from '../../redux/slices/shiftSlice.js';

const DRAWER_WIDTH = 360;

const ShiftManager = ({ columns, events }) => {
  const { isDrawerOpen, openDrawer, closeDrawer } = useDrawer();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selectedShiftId, setSelectedShiftId] = useState(null); // Track selected shift ID

  const unassignedShifts = useSelector((state) => state.shifts.unassignedShifts);
  const assignedShifts = useSelector((state) => state.shifts.assignedShifts);

  // Handler for adding new shifts
  const handleAddShiftClick = () => {
    openDrawer(
      <AddShiftForm 
        onClose={closeDrawer} 
        onSave={(newShift) => dispatch(addShift(newShift))} 
      />
    );
  };

  // Unassigned shift click handler
  const handleUnassignedShiftClick = (shiftId) => {
    setSelectedShiftId(shiftId); // Set selected shift
    openDrawer(
      <UnassignedShiftDetails
        onAssign={(assignee) => dispatch(assignShift({ shiftId, assignee }))}
      />
    );
  };

  // Assigned shift click handler
  const handleAssignedShiftClick = (shiftId) => {
    setSelectedShiftId(shiftId); // Set selected shift
    openDrawer(<AssignedShiftDetails shiftId={shiftId} />);
  };

  // Reset selectedShiftId when the drawer is closed
  useEffect(() => {
    if (!isDrawerOpen) {
      setSelectedShiftId(null); // Clear selected shift when drawer closes
    }
  }, [isDrawerOpen]);

  return (
    <>
      <Box display="flex" justifyContent="space-between" width="100%">
        <Box
          flexGrow={1}
          mr={isDrawerOpen ? `${DRAWER_WIDTH}px` : '0'}
          bgcolor="#000000"
          borderRadius="16px"
          p={2}
          maxHeight="90vh"
          overflow="auto"
        >
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
                {unassignedShifts.map((shift) => (
                  <TableRow key={shift.id} className={classes.shiftRow}>
                    <TableCell className={`${classes.shiftCell}`} align="center">
                      <EmployeeShiftCard {...shift} />
                    </TableCell>
                    {columns.map((_, idx) => (
                      <TableCell
                        key={idx}
                        align="center"
                        onClick={() => handleUnassignedShiftClick(shift.id)}
                        className={`${classes.tableCell} ${classes.clickableCell} ${shift.id === selectedShiftId ? classes.selected : ''}`}
                      >
                        <Typography variant="body2">{shift.shiftStart} - {shift.shiftEnd}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

                {/* Assigned shifts */}
                <TableRow className={classes.sectionRow}>
                  <TableCell className={classes.sectionTitle} colSpan={columns.length + 1}>Assigned Shifts</TableCell>
                </TableRow>
                {assignedShifts.map((shift) => (
                  <TableRow key={shift.id} className={classes.shiftRow}>
                    <TableCell className={`${classes.shiftCell}`} align="center">
                      <EmployeeShiftCard {...shift} />
                    </TableCell>
                    {columns.map((_, idx) => (
                      <TableCell
                        key={idx}
                        align="center"
                        onClick={() => handleAssignedShiftClick(shift.id)}
                        className={`${classes.tableCell} ${classes.clickableCell} ${shift.id === selectedShiftId ? classes.selected : ''}`}
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
