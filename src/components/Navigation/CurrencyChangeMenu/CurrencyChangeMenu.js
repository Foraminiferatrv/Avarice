import React from 'react';

import classes from './CurrencyChangeMenu.css';

const currencyChangeMenu = ( props ) => (
  <div className={classes.CurrencyChangeMenu}>
    <button>USD</button>
    <button>RUB</button>
    <button>UAH</button>
    <button>EUR</button>
  </div>
);

export default currencyChangeMenu;