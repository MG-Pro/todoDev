import {Component} from 'react';
import MainSidebar from './TasksSidebar';
import TaskList from './TaskList';

class Tasks extends Component {
  render() {
    return (
      <div className="main-wrap">
        <MainSidebar/>
        <TaskList/>
      </div>
      )
  }
}

export default Tasks;
