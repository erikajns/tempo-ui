import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import EmployeeShiftCard from '../EmployeeShiftCard/EmployeeShiftCard';
import useStyles from './ShiftTable.styles';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const ShiftTable = ({ columns, events, unassignedShifts, assignedShifts }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table aria-label="shift table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeader} align="center">
              <Box display="flex" alignItems="center" gap="8px">
                <NotificationsOutlinedIcon />
                3 conflicts, 2 unassigned, 4 overtime
              </Box>
            </TableCell>
            {columns.map((column, index) => (
              <TableCell key={index} align="center" className={classes.tableHeader}>
                {column}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableHeader} align="right">Events</TableCell>
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
                  key={idx}
                  align="center"
                  className={`${classes.tableCell} ${classes.clickableCell} ${idx === columns.length - 1 ? classes.shiftCellEnd : ''}`}
                >
                  <Typography variant="body2">3:30pm - 10:00pm</Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
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
  );
};

ShiftTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  events: PropTypes.arrayOf(PropTypes.string).isRequired,
  unassignedShifts: PropTypes.arrayOf(PropTypes.object).isRequired,
  assignedShifts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShiftTable;
