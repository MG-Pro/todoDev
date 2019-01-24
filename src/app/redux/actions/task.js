import axios from 'axios';
import {ADD_TASK, UPD_TASK, TASK_ERROR, TASK_LIST,TASK_LIST_ERROR} from './types';

export const getTask = () => dispatch => {
  axios.get('/api/tasks/')
    .then(res => {
      dispatch({
        type: TASK_LIST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: TASK_LIST_ERROR,
        payload: err.response.data.error
      });
    });
};

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
        payload: err.response.data
      });
    });
};

export const updateTask = task => dispatch => {
  //task.updateDate && delete task.updateDate;
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
        payload: err.response.data
      });
    });
};
