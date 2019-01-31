import {TECH_LIST} from '../actions/types';

const initState = {
  isComplete: false,
  list: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case TECH_LIST:
      return action.payload;
    default:
      return state
  }
}
