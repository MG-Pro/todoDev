import {combineReducers} from 'redux';
import tasksReducer from './tasksReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import formsReducer from './formsReducer';
import userReducer from './userReducer';
import linksReducer from './linksReducer';

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  tasks: tasksReducer,
  formType: formsReducer,
  user: userReducer,
  links: linksReducer
})
