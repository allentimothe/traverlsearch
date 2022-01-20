import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '10px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    width: '100px',
    fontFamily: 'Roboto Condensed',
    borderRadius: '15px',
    background: '#f3f2f2',
    boxShadow:  '20px 20px 60px #cfcece -20px -20px 60px #ffffff',    
  },
  mapContainer: {
    height: '85vh', 
    width: '100%',
  },
  markerContainer: {
    position: 'absolute', 
    transform: 'translate(-50%, -50%)', 
    zIndex: 1, '&:hover': 
    { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
  typography: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '400',
  },
}));