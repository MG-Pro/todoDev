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
import techReducer from './techReducer';
import filterReducer from './filterReducer';
import techFilterReducer from './techFilterReducer';
import successUpdTaskReducer from './successUpdTaskReducer'
import forgotPassReducer from './forgotPassReducer';
import updProcessTaskReducer from './updProcessTaskReducer';


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
  tech: techReducer,
  filterType: filterReducer,
  techFilter: techFilterReducer,
  successUpdTask: successUpdTaskReducer,
  forgotPass: forgotPassReducer,
  updProcessTask: updProcessTaskReducer,
})
