import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  metricCard: {
    backgroundColor: '#1C1C1E',
    color: 'rgba(235, 235, 245, 0.6)',
    borderRadius: '12px',
    padding: '14px 20px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(120, 120, 128, 0.36)',
    },
  },
  selected: {
    backgroundColor: 'rgba(120, 120, 128, 0.36) !important',
  },
  cardContent: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  chip: {
    backgroundColor: 'rgba(118, 118, 128, 0.24)',
    borderRadius: '12px',
    padding: '2px 8px',
    marginBottom: '8px',
    display: 'inline-block',
    fontWeight: '600 !important',
    width: '45%'
  },
  chipPositive: {
    color: '#32D74B',
  },
  chipNegative: {
    color: '#FF453A',
  },
  chipSelectedPositive: {
    backgroundColor: '#32D74B',
    color: 'black',
    fontWeight: 600,
  },
  chipSelectedNegative: {
    backgroundColor: '#FF453A',
    color: 'black',
    fontWeight: 600,
  },
  title: {
    color: 'white',
    marginBottom: '8px',
  },
  valueContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  valueFrom: {
    color: '#FF453A',
    marginRight: '8px',
    fontWeight: 600,
  },
  valueTo: {
    color: '#32D74B',
    fontWeight: 600,
  },
  arrowIcon: {
    margin: '0 8px',
    color: 'rgba(235, 235, 245, 0.6)',
    width: '15px',
    height: '15px',
  },
});

export default useStyles;
