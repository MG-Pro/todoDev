const initialState = 'login';

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FORM_TYPE':
      return action.payload;
    default:
      return state;
  }
}
