import {TECH_FILTER_TYPE} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case TECH_FILTER_TYPE:
      return action.payload;
    default:
      return state
  }
}
