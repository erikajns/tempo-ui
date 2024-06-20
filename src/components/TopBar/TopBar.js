import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Avatar, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import useStyles from './TopBar.styles';

const logoUrl = 'https://s3-alpha-sig.figma.com/img/fc2b/a9a2/aed39c3e908a55345ff2935851ddb282?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=andjx8yReajgsMT0iGPJkiTdjQbdGPX3DWIxEzs2sta5P4cvqV~JnniEv1hPppwFRQvI6WuZ1RIA39C90RUb3ES1acyDmWD2qj~iOZg8OZNkFyyYbq87m2obci-EGG2utNOdpMf~EJZ9mFEE0gt~44vxzYHzqTtGs4DVbJrg98x2c8XjfbaqfmSgatOfbXWOb5S5Sr5gBWzWZ6ClxeUq8M-tIdcJcEKvXLr5Ghs6HaFtk0StnWCkVx8p6bsYsT0CpKHg7Htlg-SEsJNHSz8jZnxVJBq3p1wKtc0YAd0cDvkrpnZLPgtdJE50eznHgTznYICR3aqWWXDBYH58APa4TQ__';

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Box display="flex" alignItems="center" mr={2}>
          <img src={logoUrl} alt="Logo" style={{ width: 40, height: 40 }} />
        </Box>
        <Typography variant="h6" noWrap>
          Tempo
        </Typography>
        <Box className={classes.grow} />
        <Box className={classes.search}>
          <IconButton type="submit" className={classes.searchIcon} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </Box>
        <Box className={classes.grow} />
        <Avatar alt="User Name" src="/static/images/avatar/1.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
