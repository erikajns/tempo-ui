import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDrawer } from '../../context/DrawerContext';
import customStyles from './InfoDrawer.module.css';
import 'animate.css';

const DRAWERWIDTH = 360;

const InfoDrawer = ({drawerTitle}) => {
  const { isDrawerOpen, drawerContent, closeDrawer } = useDrawer();

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={isDrawerOpen}
      sx={{
        width: 0,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: DRAWERWIDTH, boxSizing: 'border-box', height: '90vh' },
      }}
      className={`${customStyles.InfoDrawer} ${isDrawerOpen ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeOutRight'}`}
    >
      <Box display="flex" flexDirection="column" height="100%">
        <Box className={customStyles.header}>
        <Box component="section">
            {drawerTitle}
          </Box>
          <IconButton onClick={closeDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1, overflow: 'auto', padding: 2 }}>
          {drawerContent}
        </Box>
      </Box>
    </Drawer>
  );
};

export default InfoDrawer;
