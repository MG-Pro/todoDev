import {addTask, updateTask, getTask, deleteTask, setEditTask, cleanEditTask} from './task';
import {registerUser, loginUser, logoutUser, setCurrentUser} from './authentication';
import {forms} from './forms';
import {user} from './user';
import {links, clearLinkState} from './links';
import {sorting} from './sorting';
import {tech} from './tech';
import {currentFilter, currentTechFilter} from './filters';

export {
  addTask,
  registerUser,
  loginUser,
  logoutUser,
  setCurrentUser,
  forms,
  user,
  links,
  updateTask,
  deleteTask,
  clearLinkState,
  getTask,
  sorting,
  tech,
  currentFilter,
  currentTechFilter,
  setEditTask,
  cleanEditTask

};
