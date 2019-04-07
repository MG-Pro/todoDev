import {GET_FORGOT_ERRORS, SET_FORGOT_MESSAGE} from '../types';

const initialState = {
  message: null,
  errors: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FORGOT_MESSAGE:
      return {
        message: action.payload,
        errors: {}
      };
    case GET_FORGOT_ERRORS:
      return {
        message: null,
        errors: action.payload
      };
    default:
      return state;
  }
}
