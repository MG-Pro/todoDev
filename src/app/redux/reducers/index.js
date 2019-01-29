import {combineReducers} from 'redux';
import tasksReducer from './tasksReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import formsReducer from './formsReducer';
import userReducer from './userReducer';
import linksReducer from './linksReducer';
import linkErrorReducer from './linkErrorReducer';
import taskErrorReducer from './taskErrorReducer';
import sortingReducer from './sortingReducer';


export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  tasks: tasksReducer,
  formType: formsReducer,
  user: userReducer,
  links: linksReducer,
  linkError: linkErrorReducer,
  taskError: taskErrorReducer,
  sortType: sortingReducer,

})
