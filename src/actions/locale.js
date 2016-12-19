import { createAction } from 'redux-actions';
import axios from 'axios';

import { baseUrl } from './';

import {
    GET_LOCALE
} from './';

export const getLocale = createAction(GET_LOCALE, () => {
  return axios.get(`${baseUrl}/locale`)
    .then(function (response) {
      return response.data.language;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    })
});
