import axios from 'axios';
import {ADD_LINK} from './types';

export const links = (url) => dispatch => {
  axios.get('/api/helpers/link-info?url=' + url)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: ADD_LINK,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_LINK,
        payload: err.response.data
      });
    });
};
