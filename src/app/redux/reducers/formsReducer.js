const initialState = 'login';
import {FORM_TYPE} from '../actions/types';

export default function (state = initialState, action) {
  switch (action.type) {
    case FORM_TYPE:
      return action.payload;
    default:
      return state;
  }
}
