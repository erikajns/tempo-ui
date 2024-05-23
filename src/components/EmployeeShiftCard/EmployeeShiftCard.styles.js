import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: 'transparent !important',
    border: 'none',
    color: 'white',
  },
  image: {
    width: '60px !important',
    height: '60px !important',
    marginRight: '16px',
  },
  overtime: {
    color: 'red',
  },
  whiteText: {
    color: 'white !important',
  },
  employeeInfo: {
    textAlign: 'left',
    padding: '0px !important'
  }
});

export default useStyles;
