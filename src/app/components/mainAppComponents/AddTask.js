import {Component} from 'react';
import {connect} from 'react-redux'
import {addTask} from '../../redux/actions'
import {withRouter} from 'react-router-dom';

class AddTask extends Component {
  constructor(props) {
    super(props);
  }


  submit(e) {
    e.preventDefault();
    if (!this.input.value.trim()) {
      return
    }
    this.props.addTask(this.input.value);
    this.input.value = ''
  }

  render() {
    return (
      <div className='add-task'>
        <form onSubmit={this.submit}>
          <input ref={node => this.input = node}/>
          <button type="submit">Add Task</button>
        </form>
      </div>
    )
  }


}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps, {addTask})(withRouter(AddTask)
);

