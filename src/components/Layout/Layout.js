import React, { Component, Fragment } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
  state = {
    showSidedrawer: false
  }

  burgerMenuHanlder = () => {
    this.setState( ( prevState ) => {
      return { showSidedrawer: !prevState.showSidedrawer };
     
    } );
    console.log( this.state.showSidedrawer );
  }

  render() {
    return (
      <Fragment>
        <div>
          <Sidedrawer show={ this.state.showSidedrawer } burgerMenuHanlder={ this.burgerMenuHanlder}/>
          <Toolbar burgerMenuHanlder={this.burgerMenuHanlder} />
        </div>
        <main>
          { this.props.children }
        </main>
      </Fragment>
    );
  }

}

export default Layout;