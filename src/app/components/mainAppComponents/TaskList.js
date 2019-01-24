import {connect} from 'react-redux';
import {Component} from 'react';
import {getTask} from '../../redux/actions';
import TaskItem from './TaskItem';

class TaskList extends Component {


  componentDidMount() {
    this.props.getTask();
  }

  render() {
    const {tasks} = this.props;
    return (
      <div className='task-list'>
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
