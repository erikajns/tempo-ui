import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
  },
  image: {
    width: '80px',
    height: '80px',
    marginRight: '16px',
  },
  overtime: {
    color: 'red',
  },
  whiteText: {
    color: 'white',
  }
});

export default useStyles;
