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
  CLEAN_SUCCESS_UPD_TASK
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
  axios.post('/api/tasks/', task)
    .then(res => {
      dispatch({
        type: ADD_TASK,
        payload: res.data
      });
      history.push(`/app/tasks/edit/${res.data[0]._id}`);
      dispatch(setSuccessUpdTask());
    })
    .catch(err => {
      dispatch({
        type: TASK_ERROR,
        payload: err.response.data
      });
    });
};

export const updateTask = task => dispatch => {
  dispatch(cleanSuccessUpdTask());
  axios.put('/api/tasks/', task)
    .then(res => {
      dispatch({
        type: UPD_TASK,
        payload: res.data
      });
      dispatch(setSuccessUpdTask());
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
