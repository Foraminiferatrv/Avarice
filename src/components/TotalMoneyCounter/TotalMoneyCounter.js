import React from 'react';

import classes from './TotalMoneyCounter.css';

const totalMoneyCounter = ( props ) => (

  <div className={ classes.TotalMoneyCounter } onClick={props.openCurrencies}>
    <p className={classes.Currency}>{props.currentCurrency}</p>
    <p>{ (props.userTotalMoney * props.multiplier) + " " + props.currencySign}</p>
  </div>
);

export default totalMoneyCounter;
