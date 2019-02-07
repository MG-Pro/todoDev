import axios from 'axios';
import {tech} from './index'
import {ADD_TASK, UPD_TASK, TASK_ERROR, TASK_LIST,TASK_LIST_ERROR, DEL_TASK, CLEAN_EDIT_TASK, SET_EDIT_TASK} from './types';

export const getTask = () => dispatch => {
  axios.get('/api/tasks/')
    .then(res => {
      dispatch({
        type: TASK_LIST,
        payload: res.data
      });
      dispatch(tech(res.data));
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

export const deleteTask = taskId => dispatch => {
  axios.delete('/api/tasks/', {data: {id: taskId}})
    .then(res => {
      dispatch({
        type: DEL_TASK,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const setEditTask = task => dispatch => {
  dispatch({
    type: SET_EDIT_TASK,
    payload: task
  });
};

export const cleanEditTask = () => dispatch => {
  dispatch({
    type: CLEAN_EDIT_TASK,
    payload: {}
  });
};
