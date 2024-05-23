import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import useStyles from './EmployeeShiftCard.styles';

const EmployeeShiftCard = ({ role, name, hours, overtime, image, isAssigned }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={0}>
      <Avatar src={image} alt={name || "Default"} className={classes.image}>
        {!image && <PersonIcon />}
      </Avatar>
      <CardContent>
        <Typography variant="h6" className={classes.whiteText}>{role}</Typography>
        {isAssigned && <Typography variant="h5" className={classes.whiteText}>{name}</Typography>}
        <Typography variant="body1" className={classes.whiteText}>
          {hours}hr, {overtime && <span className={classes.overtime}>{`${overtime}hr OT`}</span>}
        </Typography>
      </CardContent>
    </Card>
  );
};

EmployeeShiftCard.propTypes = {
  role: PropTypes.string.isRequired,
  name: PropTypes.string,
  hours: PropTypes.string.isRequired,
  overtime: PropTypes.string,
  image: PropTypes.string,
  isAssigned: PropTypes.bool.isRequired,
};

export default EmployeeShiftCard;
