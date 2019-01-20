import axios from 'axios';
import {ADD_TASK, UPD_TASK, TASK_ERROR} from './types';

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

export const updateTask = task => dispatch => {
  axios.put('/api/tasks/', task)
    .then(res => {
      dispatch({
        type: UPD_TASK,
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
