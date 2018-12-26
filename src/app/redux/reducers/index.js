import {combineReducers} from 'redux';
import tasksReducer from './tasksReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  errors: errorReducer,
  tasks: tasksReducer,
})
