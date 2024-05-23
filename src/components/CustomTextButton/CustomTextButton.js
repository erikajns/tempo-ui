import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import useStyles from './CustomTextButton.styles';

const CustomTextButton = ({ text = '', icon: Icon = null }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      startIcon={Icon ? <Icon /> : null}
    >
      {text}
    </Button>
  );
};

CustomTextButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.elementType,
};

export default CustomTextButton;
