import {SET_EDIT_TASK, CLEAN_EDIT_TASK} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_EDIT_TASK:
      return action.payload;
    case CLEAN_EDIT_TASK:
      return action.payload;
    default:
      return state
  }
}
