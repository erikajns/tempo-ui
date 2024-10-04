import React from 'react';
import { Box, Typography, Button, TextField, IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import useStyles from './MetricDetailsDrawer.styles'; // We will create the styles file

const MetricDetailsDrawer = ({ 
  chartPlaceholder,
  insightTitle, 
  insightText, 
  causeTitle, 
  causeText, 
  recommendationTitle, 
  recommendationText, 
  buttonLabel,
  onButtonClick 
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {/* Chart placeholder */}
      <Box className={classes.chartContainer}>
        {chartPlaceholder || <Typography>Chart will appear here</Typography>}
      </Box>

      {/* Key Insight */}
      <Box className={classes.section}>
        <Typography variant="caption" className={classes.sectionTitle}>Key Insight</Typography>
        <Typography variant="h6">{insightTitle}</Typography>

        <Typography variant="body2">{insightText}</Typography>
      </Box>

      {/* Potential Causes */}
      <Box className={classes.section}>
        <Typography variant="caption" className={classes.sectionTitle}>Potential Causes</Typography>
        <Typography variant="h6">{causeTitle}</Typography>

        <Typography variant="body2">{causeText}</Typography>
      </Box>

      {/* Recommendation */}
      <Box className={classes.section}>
        <Typography variant="caption" className={classes.sectionTitle}>Recommendation</Typography>
        <Typography variant="h6">{recommendationTitle}</Typography>

        <Typography variant="body2">{recommendationText}</Typography>
        {buttonLabel && onButtonClick && (
          <Button className={classes.actionButton} onClick={onButtonClick}>
            {buttonLabel}
          </Button>
        )}
      </Box>

      {/* Chat Box */}
      <Box className={classes.chatBoxContainer}>
        <TextField 
          placeholder="Ask Tempo" 
          variant="outlined" 
          fullWidth 
          InputProps={{
            endAdornment: (
              <IconButton>
                <MicIcon />
              </IconButton>
            )
          }}
          className={classes.chatBox}
        />
      </Box>
    </Box>
  );
};

export default MetricDetailsDrawer;
