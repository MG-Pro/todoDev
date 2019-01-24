import {connect} from 'react-redux';
import {Component} from 'react';
import {getTask} from '../../redux/actions';
import TaskItem from './TaskItem';
import SortingTasks from './SortingTask'


class TaskList extends Component {


  componentDidMount() {
    this.props.getTask();
  }

  render() {
    const {tasks} = this.props;
    return (
      <div className='task-list'>
        <div className="task-list__sorting">
          <SortingTasks/>
        </div>
        {!tasks.length && <p className='task-list__msg'>У вас пока нет задач</p>}
        <ul>
          {tasks.map(task =>
            <TaskItem key={task._id} task={task}/>
          )}
        </ul>
      </div>
    )
  }


}

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps, {getTask})(TaskList);
