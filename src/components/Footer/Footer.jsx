import React from "react";
import { Typography } from '@material-ui/core';


import useStyles from './styles.js';

const Footer = () => {
  const classes = useStyles();


  return (
    <Typography variant="h5" className={classes.title}>
          ///// Excursion Guru /////
        </Typography>
  );
};


export default Footer;