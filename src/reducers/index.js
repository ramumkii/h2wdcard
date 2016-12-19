import { combineReducers } from 'redux';
import locale from './locale';
import user from './user';

export default combineReducers({
  locale: locale,
  user: user
});
