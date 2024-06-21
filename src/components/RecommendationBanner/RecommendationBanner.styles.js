import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  bannerContainer: {
    backgroundColor: '#000000',
    borderRadius: '16px',
    padding: '16px',
    color: 'white',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'flex-start',
  },
  logoColumn: {
    flex: '0 0 80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '78.4px',
    height: '78.4px',
    borderRadius: '50%',
    backgroundColor: '#000000',
    boxShadow: '0 0 8px 4px rgba(0, 122, 255, 0.33)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
  },
  infoColumn: {
    flex: 1,
    marginLeft: '16px',
  },
  bannerTitle: {
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  bannerSubtitle: {
    margin: '16px 0',
  },
  recommendationsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
    marginTop: '16px',
    gap: '24px'
  },
  recommendation: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginRight: '16px',
    '&:last-child': {
      marginRight: 0,
    },
    // Set the height to be equal
    minHeight: '200px',
  },
  recommendationButton: {
    marginTop: '8px',
    alignSelf: 'flex-start',
  },
  bannerFooter: {
    color: '#FF453A',
  },
});

export default useStyles;
