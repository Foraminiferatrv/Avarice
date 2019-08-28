import React, { Component } from 'react';

import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import Label from '../../Label/Label';
import UserIcon from '../UserIcon/UserIcon';
import TotalMoneyCounter from '../../TotalMoneyCounter/TotalMoneyCounter';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

class Toolbar extends Component {
  state = {
    loginStatus: true,
    userName: 'Foraminifera',
    iconUrl: '/',
    userTotalMoney: 8334,
    chosenCurrency: 'usd'
  }


  render() {
    return (
      <header className={ classes.Toolbar }>
        <BurgerMenu clicked={ this.props.burgerMenuHanlder } />
        <div className={ classes.Logo }>
          <Logo />
          <Label />
        </div>
        <nav className={ classes.DesktopOnly }>
          <NavigationItems />
        </nav>
        <div className={ classes.Profile }>
          <TotalMoneyCounter chosenCurrency={this.state.chosenCurrency} totalMoney={this.state.userTotalMoney}/>
          <UserIcon />
          <ProfileStatus
            loginStatus={ this.state.loginStatus }
            userName={this.state.userName}
          />
        </div>
      </header>
    );
  }
}

export default Toolbar;