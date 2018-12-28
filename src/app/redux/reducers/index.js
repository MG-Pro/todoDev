import {combineReducers} from 'redux';
import tasksReducer from './tasksReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  tasks: tasksReducer,
})
