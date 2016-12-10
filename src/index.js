import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from 'store';

import App from './components/App';
import Intro from './routes/Intro';

require('../sass/style.scss');

const rootRoute = {
  childRoutes: [{
      path: '/',
      component: App,
      childRoutes: [
        Intro
      ]
    }]
};

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={rootRoute} />
  </Provider>, document.getElementById('root'));
