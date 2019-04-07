import {GET_FORGOT_ERRORS, SET_FORGOT_MESSAGE} from '../types';
import axios from 'axios';

export const forgotPass = (email) => dispatch => {
  axios.get(`/api/users/forgot-pass?email=${email}`)
    .then(res => {
      console.log(res.data);
      if(res.data.success) {
        dispatch({
          type: SET_FORGOT_MESSAGE,
          payload: res.data.message
        });
      } else {
        dispatch({
          type: GET_FORGOT_ERRORS,
          payload: res.data.errors
        });
      }

    })
    .catch(err => {
      dispatch({
        type: GET_FORGOT_ERRORS,
        payload: err.response
      });
    });
};
