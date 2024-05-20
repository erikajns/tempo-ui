import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Avatar, Box, Input } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import useStyles from './TopBar.module.css';

const TopBar = () => {
  return (
    <AppBar position="fixed" className={useStyles.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Logo
        </Typography>
        <Box className={useStyles.grow} />
        <Box className={useStyles.search}>
          <IconButton type="submit" className={useStyles.searchIcon} aria-label="search" color='white'>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search"
            classes={{
              root: useStyles.inputRoot,
              input: useStyles.inputInput,
            }}
            color='white'
          />
        </Box>
        <Avatar alt="User Name" src="/static/images/avatar/1.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
