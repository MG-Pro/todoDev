import React, {Component} from 'react';
import MainSidebar from './MainSidebar';
import TaskList from './TaskList';

export default class name extends Component {
  render() {
    return (
      <div className="main-wrap">
        <MainSidebar/>
        <TaskList/>
      </div>
      )
  }
}
