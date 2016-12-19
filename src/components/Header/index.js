import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
class Header extends Component {
  render() {
    return(
      <div>
        <FormattedMessage id="app.nav.greeting" />
        <FormattedMessage id="app.nav.location" />
        <FormattedMessage id="app.nav.gallery" />
        <FormattedMessage id="app.nav.guest" />
      </div>
    );
  }
}

module.exports.default = module.exports = Header;
