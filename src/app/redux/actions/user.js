import axios from 'axios';
import {GET_ERRORS, SET_NEW_PASSWORD} from './types';

export const user = (user, id) => dispatch => {
  axios.put('/api/users/' + id, user)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: SET_NEW_PASSWORD,
        payload: true
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

