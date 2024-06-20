import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: 1400,
    boxShadow: 'none',
  },
  search: {
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    marginRight: '16px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '70%',
    },
  },
  searchIcon: {
    padding: '10px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#FFFFFF',
  },
  inputInput: {
    padding: '8px 8px 8px 0',
    paddingLeft: 'calc(1em + 32px)',
    width: '100%',
    transition: 'width 0.3s',
},
grow: {
flexGrow: 1,
},
topBar: {
zIndex: 1200,
},
}));

export default useStyles;