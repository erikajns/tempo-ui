import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  button: {
    backgroundColor: '#1C1C1E',
    border: 'none',
    color: '#007BFF', // color azul
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    textTransform: 'none',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#3A3A3C',
      color: 'white',
      '& $icon': {
        color: 'white'
      }
    },
  },
  icon: {
    color: '#0A84FF',
    '&:hover': {
        color: 'white'
      },
  }
});

export default useStyles;
