import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1C1C1E',
    },
    secondary: {
      main: '#38383A',
    },
    background: {
      default: '#000000',
      paper: '#000000',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
          borderRadius: '16px',
          padding: '16px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C1C1E',
          color: 'rgba(235, 235, 245, 0.6)',
          border: '2px solid #000000',
          height: '68px',
        },
        head: {
          backgroundColor: '#000000',
          color: 'white',
          height: '68px',
          border: '2px solid #000000',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'rgba(235, 235, 245, 0.6)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C1C1E',
          color: '#007BFF',
          fontSize: '14px',
          textTransform: 'none',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#3A3A3C',
            color: 'white',
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
          },
        },
      },
    },
  },
  spacing: 8,
});

export default theme;
