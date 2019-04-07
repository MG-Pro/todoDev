const initialState = 'login';
import {FORM_TYPE} from '../types';

export default function (state = initialState, action) {
  switch (action.type) {
    case FORM_TYPE:
      return action.payload;
    default:
      return state;
  }
}
