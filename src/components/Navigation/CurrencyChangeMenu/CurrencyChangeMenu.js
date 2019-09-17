import React from 'react';

import classes from './CurrencyChangeMenu.css';

const currencyChangeMenu = ( props ) => {
  const onChangeCurrency=(currency,multiplier)=>{
    props.onChangeCurrency(currency,multiplier)
  }

  return (
  <div className={ classes.CurrencyChangeMenu }>
    <button onClick={ ()=>onChangeCurrency('USD', 1) }>USD</button>
    <button onClick={ ()=>onChangeCurrency('RUB', 63.83)  }>RUB</button>
    <button onClick={ ()=>onChangeCurrency('UAH', 24.77)  }>UAH</button>
    <button onClick={ ()=>onChangeCurrency('EUR', 0.91)  }>EUR</button>
  </div>
);
}

export default currencyChangeMenu;