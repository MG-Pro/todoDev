import {SET_NEW_PASSWORD} from '../types';

const initialState = {
  isSetNewPassword: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_NEW_PASSWORD:
      return {
        ...state,
        isSetNewPassword: action.payload,
      };
    default:
      return state;
  }
}
