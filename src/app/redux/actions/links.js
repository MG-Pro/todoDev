import axios from 'axios';
import {ADD_LINK, LINK_ERROR, CLEAR_LINK} from './types';

export const links = (url) => dispatch => {
  axios.get('/api/helpers/link-info?url=' + url)
    .then(res => {
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

export const clearLinkState = () => dispatch => {
  dispatch({
    type: CLEAR_LINK,
    payload: null
  })
};
