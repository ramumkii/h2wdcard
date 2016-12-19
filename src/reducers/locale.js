import { GET_LOCALE, FULFILLED } from 'actions';

export default function user(state = '', action = {}) {
  switch (action.type) {
    case `${GET_LOCALE}${FULFILLED}`:
      return action.payload
    default:
      return state
  }
}
