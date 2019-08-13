import React from 'react';

import classes from './ProfileStatus.css';

let attachedClasses = [classes.SignUp];

const profileStatus = ( props ) => {
  if ( props.loginStatus ) {
    attachedClasses = [classes.SignUp, classes.Hide];
  }
  return (
    <div className={ classes.ProfileStatus }>
      <a href="/">{ props.loginStatus ? props.userName : 'Log In' }</a>
      <a href="/" className={ attachedClasses.join( ' ' ) }>Sign Up</a>
    </div> )
};

export default profileStatus;