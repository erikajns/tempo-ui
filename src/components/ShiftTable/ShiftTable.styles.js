import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  tableContainer: {
    marginBottom: '16px',
    backgroundColor: '#000000',
    color: 'white',
    borderRadius: '16px',
    padding: '16px',
    overflowX: 'auto',
  },
  tableHeader: {
    backgroundColor: '#000000',
    color: 'white',
    height: '68px',
    border: '2px solid #000000',
  },
  tableCell: {
    backgroundColor: '#1C1C1E',
    color: 'white',
    height: '68px',
    border: '2px solid #000000',
    cursor: 'pointer',
  },
  sectionTitle: {
    backgroundColor: '#000000',
    color: 'white',
    height: '29px',
    textAlign: 'center',
    borderBottom: '2px solid #000000',
    float: 'left',
    textTransform: 'uppercase',
    color: 'rgba(235, 235, 245, 0.6)',
  },
  shiftRow: {
    height: '68px',
    '&:not(:last-child)': {
      marginBottom: '10px',
    },
  },
  shiftCell: {
    backgroundColor: '#1C1C1E',
    border: '2px solid #000000',
  },
});

export default useStyles;
