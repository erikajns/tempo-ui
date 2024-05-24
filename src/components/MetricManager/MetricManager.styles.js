import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  managerContainer: {
    backgroundColor: '#000000',
    color: 'white',
    borderRadius: '16px',
    padding: '16px',
    overflowX: 'auto',
  },
  divider: {
    height: '2px',
    backgroundColor: '#38383A',
    margin: '16px 0',
  },
  notificationRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
  },
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  titleCell: {
    width: '160px',
    backgroundColor: '#000000',
    color: 'rgba(235, 235, 245, 0.6)',
    padding: '8px',
  },
  metricCardsContainer: {
    display: 'flex',
    flex: 1,
    gap: '8px',
  },
});

export default useStyles;
