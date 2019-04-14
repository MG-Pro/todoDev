import {SUCCESS_UPD_TASK} from '../types';

export default function (state = false, action) {
  switch (action.type) {
    case SUCCESS_UPD_TASK:
      return action.payload;
    default:
      return state;
  }
}
