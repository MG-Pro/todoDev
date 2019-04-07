import {FILTER_TYPE} from '../types';

const initState = 'in_work';

export default (state = initState, action) => {
  switch (action.type) {
    case FILTER_TYPE:
      return action.payload;
    default:
      return state
  }
}
