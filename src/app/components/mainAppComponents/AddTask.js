import {Component} from 'react';
import EditTask from './EditTask';

class AddTask extends Component {

  render() {
    return (
      <div className='add-task'>
        <EditTask/>
      </div>
    )
  }
}

export default AddTask;

