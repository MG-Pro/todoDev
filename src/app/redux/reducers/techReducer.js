import {TECH_LIST} from '../types';

const initState = [];

export default (state = initState, action) => {
  switch (action.type) {
    case TECH_LIST:
      return action.payload;
    default:
      return state
  }
}
