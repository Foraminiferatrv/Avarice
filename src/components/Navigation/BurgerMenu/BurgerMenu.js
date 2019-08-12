import React from 'react';

import classes from './BurgerMenu.css';

const burgerMenu = ( props ) => (
  <div onClick={props.clicked} className={classes.BurgerMenu}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default burgerMenu;