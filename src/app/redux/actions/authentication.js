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
      if (!err) {
        return;
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const loginUser = (user) => dispatch => {
  fetchData('/api/users/login', {
    method: 'post'
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      if (!err) {
        return;
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};
