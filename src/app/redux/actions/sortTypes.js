import axios from 'axios';
import {SORT_TYPES} from './types';

export const getSortTypes = () => dispatch => {
  axios.get('/api/helpers/sort-types/')
    .then(res => {
      dispatch({
        type: SORT_TYPES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
