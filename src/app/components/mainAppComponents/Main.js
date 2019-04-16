import {Component} from 'react';
import {Switch, Redirect} from "react-router-dom";
import ToolBar from './ToolBar';
import Tasks from './taskComponents/Tasks';
import PrivateRoute from '../commonComponents/PrivateRoute';
import ExerciseContent from './exerciseComponents/ExersciseContent';
import EditTask from './taskComponents/EditTask';
import {connect} from 'react-redux';
import {getTask} from '../../redux/actions';

class Main extends Component {

  componentDidMount() {
    this.props.getTask();
  }

  render() {
    return (
      <div className="container">
        <div className="layout">
          <ToolBar/>
          <Switch>
            <PrivateRoute path='/app/tasks/new' component={EditTask}/>
            <PrivateRoute path='/app/tasks/edit/:id' component={EditTask}/>
            <PrivateRoute path='/app/exercises' component={ExerciseContent}/>
            <PrivateRoute path='/app/tasks' component={Tasks}/>
            <Redirect exact from='/app' to='/app/tasks'/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default connect(() => {return {}}, {getTask})(Main);
