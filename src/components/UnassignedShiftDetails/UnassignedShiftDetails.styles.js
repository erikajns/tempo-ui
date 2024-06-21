import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  title: {
    fontWeight: 'bold',
  },
  assignedButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px',
    backgroundColor: '#1C1C1E',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '8px',
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1C1C1E',
    borderRadius: '8px',
  },
  timeRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px',
  },
  timeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#007AFF',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  notes: {
    backgroundColor: '#1C1C1E',
    padding: '12px',
    borderRadius: '8px',
    color: 'white',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
    flexDirection: 'column'
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    border: 'none',
    color: '#007AFF',
    padding: '12px',
    borderRadius: '8px',
    cursor: 'pointer',
    textAlign: 'center',
  },
});

export default useStyles;
