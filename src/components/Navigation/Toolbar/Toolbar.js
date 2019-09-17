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
    currencyMenuOpened: false,
    iconUrl: '/'
  }

  dropDownMenuOpenHandler = ( event ) => {
    this.setState( { currencyMenuOpened: true } );
    document.addEventListener( 'click', this.dropDownMenuCloseHandler )
  }

  dropDownMenuCloseHandler = ( event ) => {
    this.setState( { currencyMenuOpened: false } );
    document.removeEventListener( 'click', this.dropDownMenuCloseHandler )
  }

  changeCurrencyHandler = ( currency, multiplier ) => {
    this.props.onChangeCurrency( currency, multiplier )
  }

  render() {

    const currencyMenu =
      this.state.currencyMenuOpened
        ? ( <CurrencyChangeMenu
          toUsd={ this.props.toUsd }
          toEur={ this.props.toEur }
          toRub={ this.props.toRub }
          toUah={ this.props.toUah }
        /> )
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
          <div className={ classes.TotalMoneyCounter }>
            <TotalMoneyCounter
              openCurrencies={ this.dropDownMenuOpenHandler }
              currencySign={ this.props.currencySign }
              userTotalMoney={ this.props.userTotalMoney }
              currentCurrency={ this.props.currentCurrency }
              multiplier={ this.props.currencyMultiplier }
            />
            { currencyMenu }
          </div>
          <UserIcon />
          <ProfileStatus
            loginStatus={ this.props.loginStatus }
            userName={ this.props.userName }
          />
        </div>
      </header>
    );
  }
}

export default Toolbar;