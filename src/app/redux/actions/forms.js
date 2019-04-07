import {FORM_TYPE} from '../types';

export const forms = (formType) => dispatch => {
  dispatch({
    type: FORM_TYPE,
    payload: formType
  })

};
