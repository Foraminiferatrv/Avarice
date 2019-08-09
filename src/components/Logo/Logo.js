import React from 'react';

import mainLogo from '../../assets/img/logo.png'
import classes from './Logo.css';

const logo = (props)=>(
  <img alt="logo" src={mainLogo} className={classes.Logo}/>
);

export default logo;
