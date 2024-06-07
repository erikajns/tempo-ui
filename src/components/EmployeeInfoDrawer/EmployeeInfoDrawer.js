import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import useStyles from './EmployeeInfoDrawer.module.css';

const EmployeeInfoDrawer = ({ role, name, hours, overtime, image }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} elevation={0}>
            <Avatar src={image} alt={name || "Default"} className={classes.image}>
                {!image && <PersonIcon />}
            </Avatar>
            <CardContent className={classes.employeeInfo}>
                <Typography variant="body1">{role}</Typography>
                {<Typography variant="h6" className={classes.whiteText}>{name}</Typography>}
                <Typography variant="body1">
                    {hours}hr{(hours && overtime) && ','} {overtime && <span className={classes.overtime}>{`${overtime}hr OT`}</span>}
                </Typography>
            </CardContent>
        </Card>
    );
}

EmployeeInfoDrawer.propTypes = {
    role: PropTypes.string.isRequired,
    name: PropTypes.string,
    hours: PropTypes.string.isRequired,
    overtime: PropTypes.string,
    image: PropTypes.string,
};

export default EmployeeInfoDrawer;