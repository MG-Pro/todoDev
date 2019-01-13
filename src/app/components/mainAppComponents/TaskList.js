import {connect} from 'react-redux';

const TaskList = ({tasks}) => {
  console.log(tasks);
  return (
    <div className='task-list'>
      <h3 className='task-list__head'>Задачи</h3>
      {!tasks.length && <p className='task-list__msg'>У вас пока нет задач</p>}
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
