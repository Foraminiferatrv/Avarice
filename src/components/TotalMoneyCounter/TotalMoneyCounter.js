import React from 'react';

import classes from './TotalMoneyCounter.css';

const totalMoneyCounter = ( props ) => (
  <div className={ classes.TotalMoneyCounter } onclick={ props.clicked } >
    <p>{ props.chosenCurrency + ' ' + props.totalMoney }</p>
    <div className={ classes.Curencies }>
      <p>USD</p>
      <p>EUR</p>
      <p>UAH</p>
    </div>
  </div>
);

export default totalMoneyCounter;
