import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DrawerContext = createContext();

export const useDrawer = () => useContext(DrawerContext);

export const DrawerProvider = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);
  const [drawerTitle, setDrawerTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  const openDrawer = (content, title) => {
    setDrawerContent(content);
    setDrawerTitle(title);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerContent, drawerTitle, openDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
