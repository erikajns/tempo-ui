import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const shiftTypes = {
  'Front of House': ['Host / Hostess', 'Server', 'Bartender', 'Busser'],
  'Back of House': ['Chef', 'Sous Chef', 'Line Cook', 'Dishwasher'],
};

const ShiftTypeSelection = ({ onSelect }) => {
  return (
    <Box p={2}>
      <Typography variant="h6">Select a shift type</Typography>
      <Box mt={2} display="flex" flexDirection="column" gap="16px">
        {Object.entries(shiftTypes).map(([category, types], index) => (
          <Box key={index}>
            <Typography variant="subtitle1">{category}</Typography>
            <Box display="flex" flexDirection="column" gap="8px">
              {types.map((type, idx) => (
                <Button
                  key={idx}
                  onClick={() => onSelect(type)}
                  variant="contained"
                  sx={{ textAlign: 'left' }}
                >
                  {type}
                </Button>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ShiftTypeSelection;
