import axios from 'axios';
import {ADD_TASK, TASK_ERROR} from './types';

export const addTask = task => dispatch => {
  axios.post('/api/tasks/', task)
    .then(res => {
      dispatch({
        type: ADD_TASK,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: TASK_ERROR,
        payload: err.response.data.error
      });
    });
};
