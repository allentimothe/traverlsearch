import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), 
    minWidth: 120, 
    marginBottom: '30px',
    fontFamily: 'Roboto Condensed',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  container: {
    padding: '25px',   
    fontFamily: 'Roboto Condensed',      
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', 
    overflow: 'auto',
    fontFamily: 'Roboto Condensed',
    
  },
}));