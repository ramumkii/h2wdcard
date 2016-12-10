import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';

import reducers from 'reducers';

const store = createStore(reducers, {}, applyMiddleware(
  createLogger(),
  promiseMiddleware()
));

export default store;
