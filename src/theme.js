import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h1: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '0.8rem',
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    caption: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    button: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      textTransform: 'none',
    },
    overline: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      textTransform: 'none',
    },
  },
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
          border: '2px solid #000000',
          textAlign: 'left'
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
          fontWeight: 400,
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
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: 'none'
        }
      }
    }
  },
  spacing: 8,
});

export default theme;
