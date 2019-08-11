import React, { Fragment } from 'react';

import classes from './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const sidedrawer = ( props ) => {
  let appliedClasses = [classes.Sidedrawer, classes.Close];
  if(props.show){
    appliedClasses = [classes.Sidedrawer, classes.Open];
  }
  return (
    <Fragment> 
         <Backdrop show={props.show} />
      <div className={appliedClasses.join(' ')}>
        <div className={ classes.Logo }>
          <Logo />
        </div>
        <nav >
          <NavigationItems />
        </nav>
      </div>
  
    </Fragment>
  );
};

export default sidedrawer;