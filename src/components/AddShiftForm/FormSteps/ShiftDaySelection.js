import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const ShiftDaySelection = ({ onSelect }) => {
  const today = new Date();
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));

  return (
    <Box p={2}>
      <Typography variant="h6">Select a day this week</Typography>
      <Box display="flex" flexDirection="column" mt={2}>
        {days.map((day, index) => {
          const date = new Date(startOfWeek);
          date.setDate(date.getDate() + index);
          const formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
          });
          return (
            <Button
              key={index}
              onClick={() => onSelect(day)}
              variant="contained"
              sx={{ marginBottom: '8px', textAlign: 'left' }}
            >
              {formattedDate}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default ShiftDaySelection;
