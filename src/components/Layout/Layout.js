import React, { Component, Fragment } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
  state={
    showSidedrawer: false
  }

  render() {
    return (
      <Fragment>
        <div>
          menu
          <Sidedrawer show={this.state.showSidedrawer} />
          <Toolbar />
        </div>
        <main>
          { this.props.children }
        </main>
      </Fragment>
    );
  }

}

export default Layout;