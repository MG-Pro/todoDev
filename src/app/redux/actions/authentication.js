import {GET_ERRORS} from './types';
import fetchData from '../../helpers/fetchData'

export const registerUser = (user, history) => dispatch => {

  fetchData('/api/users/register', {
    method: 'post'
  })
    .then(data => {
      console.log(data);
      history.push('/login');
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const loginUser = (user) => dispatch => {
  fetch('/api/users/login', {
    method: 'post'
  })
    .then(res => res.json())
    .then(json => {
      console.log(json.data);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
