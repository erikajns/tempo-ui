import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useStyles from './UnassignedShiftDetails.styles';
import CustomTextButton from '../CustomTextButton/CustomTextButton';

const UnassignedShiftDetails = ({ shiftType }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h6" className={classes.title}>
        {shiftType}
      </Typography>
      <Box className={classes.assignedButton}>
        <Box display="flex" alignItems="center">
          <Avatar alt={shiftType ? shiftType : 'Unassigned'} src="/static/images/avatar/1.jpg" className={classes.avatar}/>
          <Typography>Unassigned</Typography>
        </Box>
        <ArrowForwardIosIcon />
      </Box>
      <Box className={classes.timeContainer}>
        <Box className={classes.timeRow}>
          <Typography>Shift start</Typography>
          <Button className={classes.timeButton}>8:00 AM</Button>
        </Box>
        <Box borderBottom="1px solid #38383A" />
        <Box className={classes.timeRow}>
          <Typography>Break time (30m)</Typography>
          <Button className={classes.timeButton}>1:00 PM</Button>
        </Box>
        <Box borderBottom="1px solid #38383A" />
        <Box className={classes.timeRow}>
          <Typography>Shift end</Typography>
          <Button className={classes.timeButton}>5:00 PM</Button>
        </Box>
      </Box>
      <Box className={classes.notes}>
        <Typography>
          Gate code: 162734# <br />
          Please read up on the <a href="/recent-menu-changes" style={{ color: '#007AFF' }}>recent menu changes</a> at the beginning of your shift.
        </Typography>
      </Box>
      <Box className={classes.buttonRow}>
        <Button className={classes.actionButton}>Assign shift</Button>
        <Button className={classes.actionButton}>Report incident</Button>
        <Button className={classes.actionButton}>Delete shift</Button>
      </Box>
    </Box>
  );
};

export default UnassignedShiftDetails;
