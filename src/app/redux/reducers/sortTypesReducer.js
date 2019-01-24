import {SORT_TYPES} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case SORT_TYPES:
      return action.payload;
    default:
      return state;
  }
}
