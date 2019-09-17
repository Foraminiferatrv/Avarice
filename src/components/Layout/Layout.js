import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { changeCurrency } from '../../redux/currency/action'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';
import Content from '../Content/Content';


class Layout extends Component {
  
  state = {
    showSidedrawer: false,
    userInfo: {
      userName: 'Foraminifera',
      userTotalMoney: 2,
    },
    loginStatus: true,
    currencyMenuOpened: false,
    iconUrl: '/',
  }
  
  burgerMenuHanlder = () => {
    this.setState( ( prevState ) => {
      return { showSidedrawer: !prevState.showSidedrawer };
    } );
    console.log( this.state.showSidedrawer );
  }

  changeCurrencyHandler = ( currency, multiplier ) => {

  }

  toUsdHandler = () => {
    this.setState( { currentCurrency: 'USD', currencyMultiplier: 1 } );
  }
  toUahHandler = () => {
    this.setState( { currentCurrency: 'UAH', currencyMultiplier: 24.77, currencySign: <span>&#8372</span> } );
  }
  toEurHandler = () => {
    this.setState( { currentCurrency: 'EUR', currencyMultiplier: 0.91 } );
  }
  toRubHandler = () => {
    this.setState( { currentCurrency: 'RUB', currencyMultiplier: 63.83 } );
  }

  render() {
    return (
      <Fragment>
        <div>
          <Sidedrawer show={ this.state.showSidedrawer } burgerMenuHanlder={ this.burgerMenuHanlder } />
          <Toolbar
            burgerMenuHanlder={ this.burgerMenuHanlder }
            userName={ this.state.userInfo.userName }
            userTotalMoney={ this.state.userInfo.userTotalMoney }
            loginStatus={ this.state.loginStatus }
            currentCurrency={ this.props.currency }
            currencyMultiplier={ this.props.multiplier}
            currencySign={ this.state.currencySign }

            toUsd={ this.toUsdHandler }
            toEur={ this.toEurHandler }
            toRub={ this.toRubHandler }
            toUah={ this.toUahHandler }
          />
        </div>

        <div>
          <Content />
        </div>

        <main>
          { this.props.children }
        </main>
      </Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
    currency: state.currency,
    multiplier: state.multiplier
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeCurrency: ( currency, multiplier ) => dispatch( changeCurrency( currency, multiplier ) )
  }
}

// export default connect( mapStateToProps, mapDispatchToProps )( Layout);
export default Layout;