import axios from 'axios';
import {ADD_LINK, LINK_ERROR, CLEAR_LINK} from '../types';
import {updProcessTask} from './index';

export const links = (url) => dispatch => {
  dispatch(updProcessTask(true));
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
        payload: err.response.data
      });
      dispatch(updProcessTask());
    });
};

export const clearLinkState = () => dispatch => {
  dispatch({
    type: CLEAR_LINK,
    payload: null
  })
};
