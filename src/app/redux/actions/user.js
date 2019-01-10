import axios from 'axios';
import {GET_ERRORS, SET_NEW_PASSWORD} from './types';
import setAuthToken from '../../helpers/setAuthToken';
import jwt_decode from 'jwt-decode';
import {setCurrentUser} from './authentication';

export const user = (user, id) => dispatch => {
  axios.put('/api/users/' + id, user)
    .then(res => {
      console.log(res.data);
      const {token} = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
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

