import {connect} from 'react-redux';

const TaskList = ({tasks}) => {
  console.log(tasks);
  return (
    <div className='task-list'>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task =>
          <li key={task.id}>
            {task.text}
          </li>
        )}
      </ul>
    </div>
  )
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps, dispatch => {})(TaskList);
