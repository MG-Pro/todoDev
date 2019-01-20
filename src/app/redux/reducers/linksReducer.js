import {ADD_LINK} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_LINK:
      return action.payload;
    default:
      return state;
  }
}
