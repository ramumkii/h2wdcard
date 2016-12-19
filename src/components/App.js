import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import store from 'store';

import { getLocale } from 'actions/locale';

import Header from './Header';
import Main from './Main';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
addLocaleData([...en, ...ko]);

import msg_en from 'locales/en';
import msg_ko from 'locales/ko';

const messages = {
  en: msg_en,
  ko: msg_ko
}

class App extends Component {
  static store(state) {
    return {
        locale: state.locale
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      locale: ''
    }

    store.subscribe(() => {
      this.setState({
        locale: store.getState().locale
      });
    });
  }

  componentWillMount() {
    const { getLocale } = this.props;
    getLocale();
  }

  changeLocale = (locale) => {
    this.setState({ locale });
  }

  render() {
    const { children } = this.props;
    const { locale } = this.state;

    if ( !locale || locale === '' ) { return null; }

    return (
      <IntlProvider
        locale={locale}
        key={locale}
        messages={messages[locale]}
      >
        <div>
          <Header />
          {children || <Main changeLocale={this.changeLocale} />}
        </div>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
}

module.exports.default = module.exports = connect(App.store, { getLocale })(App);
