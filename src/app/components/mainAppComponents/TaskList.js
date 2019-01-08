import {connect} from 'react-redux';

const TaskList = ({tasks}) => {
  console.log(tasks);
  return (
    <ul>
      {tasks.map(task =>
        <li key={task.id}>
          {task.text}
        </li>
      )}
    </ul>
  )
};

const mapStateToProps = state => ({
  tasks: state.tasksReducer
});

export default connect(mapStateToProps, dispatch => {})(TaskList);
