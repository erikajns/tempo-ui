import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    backgroundColor: '#000',
    overflow: 'scroll',
    paddingBottom: '150px'
  },
  chartContainer: {
    height: '200px',
    backgroundColor: '#1C1C1E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    marginBottom: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(2),
  },
  sectionTitle: {
    color: 'rgba(235, 235, 245, 0.6)',
    textTransform: 'uppercase',
  },
  actionButton: {
    marginTop: theme.spacing(1),
    backgroundColor: '#007AFF',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#005BB5',
    },
  },
  chatBoxContainer: {
    position: 'fixed',
    bottom: '5px',
    width: '300px'
  },
  chatBox: {
    backgroundColor: '#1C1C1E',
    borderRadius: '8px',
  }
}));

export default useStyles;
