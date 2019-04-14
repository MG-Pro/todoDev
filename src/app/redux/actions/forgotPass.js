import {GET_FORGOT_ERRORS, SET_FORGOT_MESSAGE, SET_NEW_PASSWORD, GET_ERRORS} from '../types';
import axios from 'axios';

export const forgotPass = (email) => dispatch => {
  axios.get(`/api/users/forgot-pass?email=${email}`)
    .then(res => {
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

export const newForgotPass = (user, history) => dispatch => {
  axios.post(`/api/users/forgot-pass`, user)
    .then(res => {
      history.push('/app/login', 'Pass reset!');
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
