import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useStyles from './AssignedShiftDetails.styles';

const AssignedShiftDetails = ({ shiftType, assignee, shiftStart, breakTime, shiftEnd, notes, onUnassign, onReportIncident, onDelete }) => {
  const classes = useStyles();

  const formatTime = (time) => {
    // Add time formatting logic if needed
    return time || "N/A";
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h6" className={classes.title}>
        {shiftType || "Shift Type"}
      </Typography>
      <Box className={classes.assignedButton}>
        <Box display="flex" alignItems="center">
          <Avatar alt={shiftType ? shiftType : 'Unassigned'} src="/static/images/avatar/1.jpg" className={classes.avatar}/>
          <Box>
            <Typography className={classes.infoText}>{assignee.name || "Unassigned"}</Typography>
            <Typography className={classes.infoText}>{assignee.details || ""}</Typography>
          </Box>
        </Box>
        <ArrowForwardIosIcon />
      </Box>
      <Box className={classes.timeContainer}>
        <Box className={classes.timeRow}>
          <Typography className={classes.infoText}>Shift start</Typography>
          <Button className={classes.timeButton}>{formatTime(shiftStart)}</Button>
        </Box>
        <Box borderBottom="1px solid #38383A" />
        <Box className={classes.timeRow}>
          <Typography className={classes.infoText}>Break time (30m)</Typography>
          <Button className={classes.timeButton}>
            <Typography className={breakTime.overdue ? classes.breakWarning : classes.completeText}>
              {formatTime(breakTime.time)}
            </Typography>
          </Button>
        </Box>
        <Box borderBottom="1px solid #38383A" />
        <Box className={classes.timeRow}>
          <Typography className={classes.infoText}>Shift end</Typography>
          <Button className={classes.timeButton}>{formatTime(shiftEnd)}</Button>
        </Box>
      </Box>
      <Box className={classes.notes}>
        <Typography>
          {notes || "No notes available"}
        </Typography>
      </Box>
      <Box className={classes.buttonRow}>
        <Button className={classes.actionButton} onClick={onUnassign}>Unassign shift</Button>
        <Button className={classes.actionButton} onClick={onReportIncident}>Report incident</Button>
        <Button className={classes.actionButton} onClick={onDelete}>Delete shift</Button>
      </Box>
    </Box>
  );
};

export default AssignedShiftDetails;
