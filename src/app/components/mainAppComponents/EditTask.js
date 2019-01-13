import {Component} from 'react';

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tech: this.props.tech || '',
      target: this.props.target || '',
      targetDate: this.props.targetDate || Date.now(),
    }

  }

  render() {
    const {state} = this;
    const errors = {
      email: 'dddddddddddddddd'
    };
    return (
      <div className='edit-task'>
        <form onSubmit={this.props.submit} className='task-form'>
          <div className="task-form__group">
            <div className='task-form__name-wrap'>
              <span className="task-form__name">Технология</span>
              {errors.email && (<span className="task-form__msg">{errors.email}</span>)}
            </div>
            <div className="user-form__input-wrap">
              <span className="user-form__icon">
                <i className="fa fa-cog"></i>
              </span>
              <input
                className="user-form__input"
                name="tech"
                type="text"
                value={state.tech}
                placeholder="Начните ввод"
                onChange={this.inputChange}
              />
            </div>
          </div>
          <div className="task-form__group">
            <div className='task-form__name-wrap'>
              <span className="task-form__name">Цель</span>
              {errors.email && (<span className="task-form__msg">{errors.email}</span>)}
            </div>
            <div className="user-form__input-wrap">
              <span className="user-form__icon">
                <i className="fa fa-dot-circle-o"></i>
              </span>
              <textarea
                name="target"
                rows="1"
                value={state.target}
                className="user-form__input user-form__input_ta"
                onChange={this.inputChange}
              >

              </textarea>
            </div>
          </div>
          <div className="task-form__group">
            <div className='task-form__name-wrap'>
              <span className="task-form__name">Срок результата</span>
              {errors.email && (<span className="task-form__msg">{errors.email}</span>)}
            </div>
            <div className="user-form__input-wrap">
              <span className="user-form__icon">
                <i className="fa fa-calendar"></i>
              </span>
              <input
                className="user-form__input"
                name="date"
                type="date"
                value={state.targetDate}
                onChange={this.inputChange}
              />
            </div>
          </div>

          <button>Add Task</button>
        </form>
      </div>
    )
  }
}

export default EditTask;
