import {GET_ERRORS} from './types';

export const registerUser = (user, history) => dispatch => {

  fetch('/api/users/register', {
    method: 'post'
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      history.push('/login');
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
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
