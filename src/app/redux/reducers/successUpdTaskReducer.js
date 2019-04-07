import {SET_SUCCESS_UPD_TASK, CLEAN_SUCCESS_UPD_TASK} from '../types';

export default function (state = false, action) {
  switch (action.type) {
    case SET_SUCCESS_UPD_TASK:
      return action.payload;
    case CLEAN_SUCCESS_UPD_TASK:
      return action.payload;
    default:
      return state;
  }
}
