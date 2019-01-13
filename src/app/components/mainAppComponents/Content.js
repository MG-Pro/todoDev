import {Component} from 'react';
import MainSidebar from './MainSidebar';
import TaskList from './TaskList';

class Content extends Component {
  render() {
    return (
      <div className="main-wrap">
        <MainSidebar/>
        <TaskList/>
      </div>
      )
  }
}

export default Content;
