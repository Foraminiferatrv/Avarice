import React, { Component } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';

class toolbar extends Component {
  state = {
  }

  render() {
    return (
      <header className={ classes.Toolbar }>
        <div className={ classes.Logo }>
          <Logo />
        </div>
        <nav className={ classes.DesktopOnly }>
          <NavigationItems />
        </nav>
        <div>Profile</div>
      </header>
    );
  }
}

export default toolbar;