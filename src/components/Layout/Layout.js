import React, {Fragment} from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
  <Fragment>
    <div>
      <Toolbar/>
      Sidedrawer,
      Backdrop
      </div>
    <main>
      { props.children }
    </main>
  </Fragment>
);

export default layout;