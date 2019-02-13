import {Component} from 'react';
import {Switch, Redirect} from "react-router-dom";
import ToolBar from './ToolBar';
import Content from './Content';
import PrivateRoute from '../PrivateRoute';
import ExerciseContent from './exerciseComponents/ExersciseContent';
import EditTask from './taskComponents/EditTask';

class Main extends Component {

  render() {
    return (
      <div className="container">
        <div className="layout">
          <ToolBar/>
          <Switch>
            <PrivateRoute path='/app/tasks/new' component={EditTask}/>
            <PrivateRoute path='/app/tasks/edit/:id' component={EditTask}/>
            <PrivateRoute path='/app/exercises' component={ExerciseContent}/>
            <PrivateRoute path='/app/tasks' component={Content}/>
            <PrivateRoute component={Content}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Main;
