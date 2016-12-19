import { ADD_TODO } from 'actions';

export default function user(state = [], action = {}) {
  switch (action.type) {
    case ADD_TODO:
      console.log('add')
      return action.payload
    default:
      return state
  }
}
