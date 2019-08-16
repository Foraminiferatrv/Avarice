import React from 'react';

import classes from './UserIcon.css';

const userImg = '/img/Profile/userIcon.png';

const userIcon = ( props ) => (
  <div className={classes.UserIcon}>

    <a href="/" >
      <img src={ window.location.origin + userImg } alt="user"  />
    </a>
  </div>
)

export default userIcon;