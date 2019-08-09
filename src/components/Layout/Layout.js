import React, { Fragment } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

const layout = ( props ) => (
  <Fragment>
    <div>
      <Sidedrawer/>
      <Toolbar />
      Backdrop
      </div>
    <main>
      { props.children }
    </main>
  </Fragment>
);

export default layout;