import React, { Component, PropTypes } from 'react';

import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children || <Main />}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
}

module.exports.default = module.exports = App;
