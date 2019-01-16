
import {ADD_LINK} from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case ADD_LINK:
      return action.payload;
    default:
      return state;
  }
}
