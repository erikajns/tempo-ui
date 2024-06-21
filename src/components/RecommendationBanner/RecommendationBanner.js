import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import useStyles from './RecommendationBanner.styles';

const RecommendationBanner = () => {
  const classes = useStyles();
  const logoUrl = "https://s3-alpha-sig.figma.com/img/fc2b/a9a2/aed39c3e908a55345ff2935851ddb282?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=andjx8yReajgsMT0iGPJkiTdjQbdGPX3DWIxEzs2sta5P4cvqV~JnniEv1hPppwFRQvI6WuZ1RIA39C90RUb3ES1acyDmWD2qj~iOZg8OZNkFyyYbq87m2obci-EGG2utNOdpMf~EJZ9mFEE0gt~44vxzYHzqTtGs4DVbJrg98x2c8XjfbaqfmSgatOfbXWOb5S5Sr5gBWzWZ6ClxeUq8M-tIdcJcEKvXLr5Ghs6HaFtk0StnWCkVx8p6bsYsT0CpKHg7Htlg-SEsJNHSz8jZnxVJBq3p1wKtc0YAd0cDvkrpnZLPgtdJE50eznHgTznYICR3aqWWXDBYH58APa4TQ__";

  return (
    <Box className={classes.bannerContainer}>
      <Box className={classes.logoColumn}>
        <Box className={classes.logoContainer}>
          <img src={logoUrl} alt="Logo" className={classes.logo} />
        </Box>
      </Box>
      <Box className={classes.infoColumn}>
        <Typography variant="title1" className={classes.bannerTitle}>
          Hey Chris, your restaurant is seeing positive growth in sales and profitability, but costs, especially labor and food, are rising and need attention.
        </Typography>
        <Typography variant="title1" className={classes.bannerSubtitle}>
            <br /> Here’s my top 3 recommendations:
        </Typography>
        <Box className={classes.recommendationsContainer}>
          <Box className={classes.recommendation}>
            <Typography variant="h6">Optimize labor costs</Typography>
            <Typography variant="body2">
              Investigate and adjust staffing schedules to reduce overstaffing during less busy hours. Consider implementing efficiency training for staff to decrease overall labor hours.
            </Typography>
            <Button variant="secondary" className={classes.recommendationButton}>Adjust shift template</Button>
          </Box>
          <Box className={classes.recommendation}>
            <Typography variant="h6">Control food & beverage costs</Typography>
            <Typography variant="body2">
              Review inventory management and purchasing practices to minimize waste and negotiate better supplier rates. Implement portion control and monitor ingredient usage closely.
            </Typography>
            <Button variant="secondary" className={classes.recommendationButton}>Reduce waste</Button>
          </Box>
          <Box className={classes.recommendation}>
            <Typography variant="h6">Optimize labor costs</Typography>
            <Typography variant="body2">
              Investigate and adjust staffing schedules to reduce overstaffing during less busy hours. Consider implementing efficiency training for staff to decrease overall labor hours.
            </Typography>
            <Button variant="secondary" className={classes.recommendationButton}>Cut costs</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RecommendationBanner;
