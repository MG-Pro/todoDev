import {ADD_LINK, CLEAR_LINK} from '../types';

export default function (state = null, action) {
  switch (action.type) {
    case ADD_LINK:
      return action.payload;
    case CLEAR_LINK:
      return action.payload;
    default:
      return state;
  }
}
