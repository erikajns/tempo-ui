import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import useStyles from './CustomTextButton.styles';

const CustomTextButton = ({ text, icon: Icon, onClick }) => {
  const classes = useStyles();

  return (
    <Button onClick={onClick} className={classes.button}>
      {Icon && <Icon className={classes.icon} />}
      {text}
    </Button>
  );
};

CustomTextButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  onClick: PropTypes.func,
};

CustomTextButton.defaultProps = {
  icon: null,
  onClick: () => {},
};

export default CustomTextButton;
