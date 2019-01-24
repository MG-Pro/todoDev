import {TASK_ERROR} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case TASK_ERROR:
      return action.payload;
    default:
      return state
  }
}
