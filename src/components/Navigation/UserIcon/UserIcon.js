import React from 'react';

import userIconImg from '../../../assets/img/Profile/userIcon.png';
import classes from './UserIcon.css';

const userIcon = ( props ) => (
  <div className={classes.UserIcon}>

    <a href="/" >
      <img src={ userIconImg } alt="user"  />
    </a>
  </div>
)

export default userIcon;