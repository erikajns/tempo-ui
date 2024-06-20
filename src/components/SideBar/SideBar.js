import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { AttachMoney, AutoAwesome, CalendarMonth, People } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import customStyles from './SideBar.module.css';

// Styles for the SideBar component
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 72,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 72,
    overflowX: 'hidden',
    backgroundColor: '#1C1C1E !important',
    color: '#cccccc',
    marginTop: '64px',
    boxShadow: 'none',
    borderRadius: '0px !important',
    border: 'none !important'
  },
  active: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
  sideBar: {
    marginTop: 64,
    zIndex: 1100,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  listItemText: {
    fontSize: '0.75rem',
    color: '#cccccc'
  },
  listItemIcon: {
    color: '#cccccc'
  }
}));

// SideBar component renders the sidebar navigation with menu items
const SideBar = () => {
  const classes = useStyles();

  // Menu items for the sidebar
  const menuItems = [
    { text: 'Tempo', icon: <AutoAwesome />, path: '/' },
    { text: 'Shifts', icon: <CalendarMonth />, path: '/shifts' },
    { text: 'Finance', icon: <AttachMoney />, path: '/finance' },
    { text: 'People', icon: <People />, path: '/people' },
  ];

  return (
    <Drawer
      variant="permanent"
      className={classes.sideBar}
      classes={{ paper: classes.drawerPaper }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
            className={({ isActive }) => (isActive ? classes.active : '')}
            classes={{ root: classes.listItem }}
          >
            <ListItemIcon className={ customStyles.sidebarIcon }>{item.icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography className={classes.listItemText} align="center">
                  {item.text}
                </Typography>
              }
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
