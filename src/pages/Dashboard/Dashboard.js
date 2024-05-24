import React from 'react';
import { Box, Typography } from '@mui/material';
import MetricManager from '../../components/MetricManager/MetricManager';

// Dashboard component renders the main content area for the dashboard page
const Dashboard = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <MetricManager />
    </Box>
  );
};

export default Dashboard;
