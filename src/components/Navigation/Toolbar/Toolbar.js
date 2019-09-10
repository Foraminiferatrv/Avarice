import React, { Component } from 'react';

import classes from './Toolbar.css';

import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Label from '../../Label/Label';
import CurrencyChangeMenu from '../CurrencyChangeMenu/CurrencyChangeMenu';
import UserIcon from '../UserIcon/UserIcon';
import TotalMoneyCounter from '../../TotalMoneyCounter/TotalMoneyCounter';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

class Toolbar extends Component {
  state = {
    userInfo: {
      userName: 'Foraminifera',
      userTotalMoney: 8334,
    },
    loginStatus: true,
    currencyMenuOpened: false,
    iconUrl: '/',
    currentCurrency: 'USD',
    currencySign: '$'
  }

  dropDownMenuOpenHandler = ( event ) => {
    this.setState({currencyMenuOpened: true});
    document.addEventListener('click', this.dropDownMenuCloseHandler)
  }
  
  dropDownMenuCloseHandler = ( event ) => {
    this.setState({currencyMenuOpened: false});
    document.removeEventListener('click', this.dropDownMenuCloseHandler)
  }

  render() {

    const currencyMenu =
      this.state.currencyMenuOpened
        ? ( <CurrencyChangeMenu /> )
        : null;


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
          <div className={classes.TotalMoneyCounter}>
            <TotalMoneyCounter
              openCurrencies={this.dropDownMenuOpenHandler}
              currencySign={this.state.currencySign}
              userTotalMoney={ this.state.userInfo.userTotalMoney }
              currentCurrency={ this.state.currentCurrency } />
            { currencyMenu }
          </div>
          <UserIcon />
          <ProfileStatus
            loginStatus={ this.state.loginStatus }
            userName={ this.state.userInfo.userName }
          />
        </div>
      </header>
    );
  }
}

export default Toolbar;