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
        [`& .MuiDrawer-paper`]: { width: DRAWERWIDTH, boxSizing: 'border-box' },
      }}
      className={`${customStyles.InfoDrawer} ${isDrawerOpen ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeOutRight'}`}
    >
      <Box className={customStyles.header}>
        <Box component="section">
            {drawerTitle}
          </Box>
        <IconButton onClick={closeDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ overflow: 'auto' }}>
        {drawerContent}
      </Box>
    </Drawer>
  );
};

export default InfoDrawer;
