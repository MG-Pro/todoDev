import {LINK_ERROR} from '../types';

export default function (state = null, action) {
  switch (action.type) {
    case LINK_ERROR:
      return action.payload;
    default:
      return state;
  }
}
