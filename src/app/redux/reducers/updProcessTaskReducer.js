import {UPD_PROCESS_TASK} from '../types';

export default function (state = false, action) {
  switch (action.type) {
    case UPD_PROCESS_TASK:
      return action.payload;
    default:
      return state;
  }
}
