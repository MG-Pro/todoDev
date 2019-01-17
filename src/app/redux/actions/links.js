import axios from 'axios';
import {ADD_LINK, LINK_ERROR} from './types';

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
        type: LINK_ERROR,
        payload: err.response.data.error
      });
    });
};
