import React from 'react';

import classes from './TotalMoneyCounter.css';

const totalMoneyCounter = ( props ) => (
<<<<<<< HEAD

  <div className={ classes.TotalMoneyCounter } onClick={props.openCurrencies}>
    <p className={classes.Currency}>{props.currentCurrency}</p>
    <p>{ props.userTotalMoney + " " + props.currencySign}</p>
=======
  <div className={ classes.TotalMoneyCounter } onclick={ props.clicked } >
    <p>{ props.chosenCurrency + ' ' + props.totalMoney }</p>
    <div className={ classes.Curencies }>
      <p>USD</p>
      <p>EUR</p>
      <p>UAH</p>
    </div>
>>>>>>> e46a4f4f6e2e8b0cab5e4acc94d8cf33a844a3ab
  </div>
);

export default totalMoneyCounter;
