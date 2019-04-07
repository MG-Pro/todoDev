import {GET_FORGOT_ERRORS, SET_FORGOT_MESSAGE} from '../types';
import axios from 'axios';

export const forgotPass = (email) => dispatch => {


  axios.post('/api/users/forgot-pass', email)
    .then(res => {
      dispatch({
        type: SET_FORGOT_MESSAGE,
        payload: res.response.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_FORGOT_ERRORS,
        payload: err.response.data
      });
    });
};
