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
    color: 'rgba(235, 235, 245, 0.6)',
    height: '68px',
    border: '2px solid #000000',
  },
  clickableCell: {
    cursor: 'pointer',
    backgroundColor: '#1C1C1E !important',
    '&:hover': {
      backgroundColor: '#3A3A3C !important',
      color: 'white',
    },
  },
  sectionTitle: {
    backgroundColor: '#000000 !important',
    color: 'white',
    height: '29px',
    textAlign: 'left',
    borderBottom: '2px solid #000000',
    textTransform: 'uppercase',
    padding: '8px',
  },
  sectionRow: {
    backgroundColor: '#000000',
    height: '29px',
  },
  shiftRow: {
    height: '68px',
    '&:not(:last-child)': {
      marginBottom: '10px',
    },
  },
  shiftCell: {
    backgroundColor: '#1C1C1E',
    borderRadius: '10px 0 0 10px',
  },
  shiftCellEnd: {
    backgroundColor: '#1C1C1E',
    borderRadius: '0 10px 10px 0',
  },
  eventCellStart: {
    backgroundColor: '#1C1C1E',
    borderRadius: '10px 0 0 10px',
  },
  eventCellEnd: {
    backgroundColor: '#1C1C1E',
    borderRadius: '0 10px 10px 0',
  },
});

export default useStyles;
