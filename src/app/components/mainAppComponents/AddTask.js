import {connect} from 'react-redux'
import {addTask} from '../../redux/actions'

const AddTask = ({dispatch}) => {
  let input;

  function submit(e) {
    e.preventDefault();
    if (!input.value.trim()) {
      return
    }
    dispatch(addTask(input.value));
    input.value = ''
  }

  return (
    <div className='add-task'>
        <form onSubmit={submit}>
          <input ref={node => input = node}/>
          <button type="submit">Add Task</button>
        </form>
    </div>
  )
};

export default connect()(AddTask)
