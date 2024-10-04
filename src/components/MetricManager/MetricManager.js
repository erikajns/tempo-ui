import React, { useState } from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MetricCard from '../MetricCard/MetricCard';
import CustomTextButton from '../CustomTextButton/CustomTextButton';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useDrawer } from '../../context/DrawerContext';
import InfoDrawer from '../InfoDrawer/InfoDrawer';
import useStyles from './MetricManager.styles';
import RecommendationBanner from '../RecommendationBanner/RecommendationBanner';
import MetricDetailsDrawer from '../MetricDetailsDrawer/MetricDetailsDrawer';

const DRAWER_WIDTH = 360;

const metricsData = {
  'Financial metrics': [
    { id: 1, title: 'Average check size', percentageChange: '+5%', valueFrom: '$86', valueTo: '$92' },
    { id: 2, title: 'Table turnover rate', percentageChange: '+5%', valueFrom: '5 per hr', valueTo: '7 per hr' },
    { id: 3, title: 'Gross Profit Margin', percentageChange: '+2%', valueFrom: '67%', valueTo: '69%' },
    { id: 4, title: 'Net Profit Margin', percentageChange: '+0.3%', valueFrom: '4.5%', valueTo: '4.8%' },
  ],
  'People metrics': [
    { id: 5, title: 'Labor hours', percentageChange: '+10%', valueFrom: '2,000hr', valueTo: '2,200hr' },
    { id: 6, title: 'Labor cost %', percentageChange: '+10%', valueFrom: '20%', valueTo: '22%' },
    { id: 7, title: 'Sales per person', percentageChange: '+10%', valueFrom: '$5k', valueTo: '$5.5k' },
    { id: 8, title: 'Incidents reported', percentageChange: '-75%', valueFrom: '8', valueTo: '2' },
  ],
  'Profit & loss': [
    { id: 9, title: 'Revenue', percentageChange: '+10%', valueFrom: '$100k', valueTo: '$110k' },
    { id: 10, title: 'Expenses', percentageChange: '+5.88%', valueFrom: '$68k', valueTo: '$72k' },
    { id: 11, title: 'Net profit', percentageChange: '+18.75%', valueFrom: '$32k', valueTo: '$38k' },
  ],
  'Costs': [
    { id: 12, title: 'Food cost', percentageChange: '+7.14%', valueFrom: '$28k', valueTo: '$30k' },
    { id: 13, title: 'Beverage cost', percentageChange: '+6.25%', valueFrom: '$8k', valueTo: '$8.5k' },
    { id: 14, title: 'Labor cost', percentageChange: '+10%', valueFrom: '$20k', valueTo: '$22k' },
    { id: 15, title: 'Operations cost', percentageChange: '+10%', valueFrom: '$10k', valueTo: '$11k' },
    { id: 16, title: 'C.O.G.S.', percentageChange: '-6.94%', valueFrom: '$36k', valueTo: '$38.5k' },
  ],
};

const MetricManager = () => {
  const classes = useStyles();
  const [selectedMetric, setSelectedMetric] = useState(null);
  const { isDrawerOpen, openDrawer, closeDrawer } = useDrawer();

  const handleSelect = (metric) => {
    setSelectedMetric(metric.id === selectedMetric ? null : metric.id);
    openDrawer(
      <MetricDetailsDrawer 
        chartPlaceholder={null}
        insightTitle="Labor cost spike"
        insightText="The labor cost for the week of Feb 4 - 10, 2024, consistently exceeded the six-month average baseline..."
        causeTitle="Overstaffing or inefficiency"
        causeText="Overstaffing or inefficiency due to poor scheduling during less busy hours..."
        recommendationTitle="Optimize Staffing Levels"
        recommendationText="Adjust staff schedules to match peak and off-peak hours, reducing overstaffed shifts."
        buttonLabel="Adjust shift template"
        onButtonClick={() => console.log('Button Clicked!')}
      />
    );
  };

  return (
    <>
      <Box 
        display="flex"
        justifyContent="space-between"
        width="100%"
      >
        <Box flexGrow={1} mr={isDrawerOpen ? `${DRAWER_WIDTH}px` : '0'} bgcolor="#000000" borderRadius="16px" p={2} maxHeight="90vh" overflow="auto">
          <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="16px">
            <Box display="flex" gap="16px">
              <CustomTextButton text="Azure Table" />
              <CustomTextButton text="Feb 4 - 10, 2024" icon={CalendarTodayIcon} />
              <CustomTextButton text="Add Filter" icon={AddIcon} />
            </Box>
            <CustomTextButton text="Share this view" />
          </Box>
          <Box className={classes.divider}></Box>
          <RecommendationBanner />
          <Box className={classes.notificationRow}>
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
            <Typography variant="body2">Labor, food, and beverage costs have increased; review immediately.</Typography>
          </Box>
          <Box className={classes.tableContainer}>
            {Object.entries(metricsData).map(([category, metrics], idx) => (
              <Box key={idx} className={classes.row}>
                <Box className={classes.titleCell}>
                  <Typography variant="h6">{category}</Typography>
                </Box>
                <Box className={classes.metricCardsContainer}>
                  <Grid container spacing={1}>
                    {metrics.map((metric, index) => (
                      <Grid item xs key={index}>
                        <MetricCard
                          {...metric}
                          isSelected={selectedMetric === metric.id}
                          onSelect={() => handleSelect(metric)}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <InfoDrawer />
      </Box>
    </>
  );
};

export default MetricManager;
