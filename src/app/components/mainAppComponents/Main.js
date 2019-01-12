import {Component} from 'react';
import {Switch} from "react-router-dom";
import ToolBar from './ToolBar';
import Content from './Content';
import AddTask from './AddTask';
import PrivateRoute from '../PrivateRoute';

class Main extends Component {

  render() {
    return (
      <div className="container">
        <div className="layout">
          <ToolBar/>
          <Switch>
            <PrivateRoute path='/app/tasks/new' component={AddTask}/>
            <PrivateRoute path='/app' component={Content}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Main;
