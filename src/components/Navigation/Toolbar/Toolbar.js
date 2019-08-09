import React from 'react'; 

import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';

const toolbar = (props)=> (
   <header className={classes.Toolbar}>
     <Logo/>
     <div>menu</div>
     <ul> ...</ul>
   </header>
);

export default toolbar;