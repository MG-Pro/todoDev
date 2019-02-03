import {ADD_TASK, UPD_TASK, TASK_LIST, DEL_TASK} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case TASK_LIST:
      return action.payload;
    case ADD_TASK:
      return action.payload;
    case UPD_TASK:
      return action.payload;
    case DEL_TASK:
      return action.payload;
    default:
      return state
  }
}
