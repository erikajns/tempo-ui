import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './MetricCard.styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const MetricCard = ({ title, percentageChange, valueFrom, valueTo, isSelected, onSelect }) => {
  const classes = useStyles();

  const isPositive = percentageChange.startsWith('+');

  return (
    <Box
      className={`${classes.metricCard} ${isSelected ? classes.selected : ''}`}
      onClick={onSelect}
    >
      <Box className={classes.cardContent}>
        <Box
          className={`${classes.chip} ${isPositive ? (isSelected ? classes.chipSelectedPositive : classes.chipPositive) : (isSelected ? classes.chipSelectedNegative : classes.chipNegative)}`}
        >
          <Typography variant="body2">{percentageChange}</Typography>
        </Box>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Box className={classes.valueContainer}>
          <Typography variant="body2" className={classes.valueFrom}>
            {valueFrom}
          </Typography>
          <ArrowRightAltIcon className={classes.arrowIcon} />
          <Typography variant="body2" className={classes.valueTo}>
            {valueTo}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MetricCard;
