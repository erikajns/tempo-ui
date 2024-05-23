import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '16px',
    margin: '8px',
    backgroundColor: '#1C1C1E',
    border: 'none',
    color: 'white',
    borderRadius: '8px',
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
