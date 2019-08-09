import React from 'react';

import mainLogo from '../../assets/img/logo.png'
import classes from './Logo.css';

const logo = ( props ) => (
  <div className={ classes.Logo }>
    <img alt="logo" src={ mainLogo } />
  </div>

);

export default logo;
