import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button'; // Import Button for reopening drawer
import customStyles from './InfoDrawer.module.css';
import 'animate.css';

const drawerWidth = 240;

const InfoDrawer = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Get today's date
  const today = new Date();
  // Format the date (e.g., 'May 23, 2024')
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      const timeoutId = setTimeout(() => {
        setIsOpen(false);
      }, 2000); // Adjust the timeout value according to your animation duration
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)} style={{ display: isOpen ? 'none' : 'block' }}>Open Drawer</Button>
      <Drawer
        variant="persistent"
        anchor="right"
        open={isOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        className={`${customStyles.InfoDrawer} ${isOpen ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeOutRight'}`}
      >
        <Box className={customStyles.header} >
          <Box component="section">
            {formattedDate}
          </Box>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default InfoDrawer;
