import { ADD_TODO } from 'actions'

export default function user(state = [], action = {}) {
  switch (action.type) {
    case ADD_TODO:
      return action.payload
    default:
      return state
  }
}
