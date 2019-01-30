import {SORTING_TYPE} from '../actions/types';

const initState = {
  dir: 'desc',
  value: 'date'
};

export default (state = initState, action) => {
  switch (action.type) {
    case SORTING_TYPE:
      return action.payload;
    default:
      return state
  }
}
