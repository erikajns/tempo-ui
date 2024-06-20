import React from 'react';
import { CssBaseline, Box, Grid } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TopBar, SideBar } from './components';
import './index.css'
import Dashboard from './pages/Dashboard/Dashboard';
import Shifts from './pages/Shifts/Shifts';
import Finance from './pages/Finance/Finance';
import People from './pages/People/People'
import { DrawerProvider } from './context/DrawerContext';


// App component sets up the main layout and routing for the application
const App = () => {
  return (
    <Router>
      <CssBaseline />
      <DrawerProvider>
      {/* TopBar component */}
      <TopBar />
      <Grid container>
        {/* SideBar component */}
        <Grid item xs={12} sm={3}>
          <SideBar />
        </Grid>
        {/* Main content area */}
        <Grid item xs={12}>
          <Box className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path='/shifts' element={<Shifts />} />
              <Route path='/finance' element={<Finance />} />
              <Route path='/people' element={<People />} />
            </Routes>
          </Box>
        </Grid>
      </Grid>
      </DrawerProvider>
    </Router>
  );
};

export default App;
