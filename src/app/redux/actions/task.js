import axios from 'axios';
import {tech} from './index'
import {
  ADD_TASK,
  UPD_TASK,
  TASK_ERROR,
  TASK_LIST,
  TASK_LIST_ERROR,
  DEL_TASK,
  SET_SUCCESS_UPD_TASK,
  CLEAN_SUCCESS_UPD_TASK,
  UPD_PROCESS_TASK
} from '../types';

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

export const addTask = (task, history) => dispatch => {
  dispatch(updProcessTask(true));
  axios.post('/api/tasks/', task)
    .then(({data}) => {
      console.log(data);
      dispatch({
        type: ADD_TASK,
        payload: data
      });
      history.push(`/app/tasks/edit/${data[data.length - 1]._id}`);
      dispatch(setSuccessUpdTask());
      dispatch(updProcessTask());
    })
    .catch(err => {
      dispatch({
        type: TASK_ERROR,
        payload: err.response.data
      });
    });
};

export const updateTask = task => dispatch => {
  dispatch(updProcessTask(true));
  dispatch(cleanSuccessUpdTask());
  console.log(1);
  axios.put('/api/tasks/', task)
    .then(res => {
      dispatch({
        type: UPD_TASK,
        payload: res.data
      });
      dispatch(setSuccessUpdTask());
      dispatch(updProcessTask());
      console.log(2);
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

export const setSuccessUpdTask = () => dispatch => {
  dispatch({
    type: SET_SUCCESS_UPD_TASK,
    payload: true
  });
};

export const cleanSuccessUpdTask = () => dispatch => {
  dispatch({
    type: CLEAN_SUCCESS_UPD_TASK,
    payload: false
  });
};

export const updProcessTask = (process = false) => dispatch => {
  dispatch({
    type: UPD_PROCESS_TASK,
    payload: process
  });
};
