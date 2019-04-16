import axios from 'axios';
import {tech} from './index'
import {
  ADD_TASK,
  UPD_TASK,
  TASK_ERROR,
  TASK_LIST,
  TASK_LIST_ERROR,
  DEL_TASK,
  SUCCESS_UPD_TASK,
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
      dispatch(tech(data));
      history.push(`/app/tasks/edit/${data[data.length - 1]._id}`);
      dispatch(successUpdTask(true));
      dispatch(updProcessTask());
    })
    .catch(err => {
      dispatch({
        type: TASK_ERROR,
        payload: err.response.data
      });
      dispatch(updProcessTask());
    });
};

export const updateTask = task => dispatch => {
  dispatch(updProcessTask(true));
  dispatch(successUpdTask());
  axios.put('/api/tasks/', task)
    .then(res => {
      dispatch({
        type: UPD_TASK,
        payload: res.data
      });
      dispatch(successUpdTask(true));
      dispatch(updProcessTask());
      dispatch(tech(res.data));
    })
    .catch(err => {
      dispatch({
        type: TASK_ERROR,
        payload: err.response.data
      });
      dispatch(updProcessTask());
    });
};

export const deleteTask = taskId => dispatch => {
  axios.delete('/api/tasks/', {data: {id: taskId}})
    .then(res => {
      dispatch({
        type: DEL_TASK,
        payload: res.data
      });
      dispatch(tech(res.data));
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const successUpdTask = (success = false) => dispatch => {
  dispatch({
    type: SUCCESS_UPD_TASK,
    payload: success
  });
};

export const updProcessTask = (process = false) => dispatch => {
  dispatch({
    type: UPD_PROCESS_TASK,
    payload: process
  });
};
