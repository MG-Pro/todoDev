import {Component} from 'react';
import DatePicker from '../../helperComponents/DatePicker';
import LinksList from './LinksList';
import {connect} from 'react-redux';
import {addTask, updateTask} from '../../../redux/actions';
import {withRouter} from 'react-router-dom';
import dateToString from '../../../helpers/dateToString';

class EditTask extends Component {
  constructor(props) {
    super(props);
    const task = props.task || {};
    this.state = {
      id: task.id,
      tech: task.tech || '',
      target: task.target || '',
      targetDate: task.targetDate || new Date(),
      links: task.links || [],
      showPicker: false,
      errors: {},
      success: ''
    }

  }

  showPicker = () => {
    this.setState({
      showPicker: true
    })
  };

  closePicker = () => {
    setTimeout(() => {
      this.setState({
        showPicker: false
      })
    }, 300)

  };

  getDate = (date) => {
    this.setState({
      targetDate: date
    })
  };

  inputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  };

  submit = (e) => {
    e.preventDefault();
    const {state} = this;
    const errors = {};
    if (state.tech.length < 2) {
      errors.tech = 'Название технологии не должно быть короче 2 символов';
    }
    if (state.target.length < 5) {
      errors.target = 'Описание цели не должно быть короче 5 символов';
    }
    if (state.targetDate.getTime() < Date.now()) {
      errors.targetDate = 'Дата завершения должна быть позже сегодняшней';
    }

    if (Object.keys(errors).length) {
      this.setState({
        errors: errors
      });
      return;
    }

    const task = {
      id: state.id,
      userId: this.props.user.id,
      tech: state.tech,
      target: state.target,
      targetDate: state.targetDate,
      links: state.links
    };
    if (state.id) {
      this.props.updateTask(task);
      return;
    }
    this.props.addTask(task);
  };

  cleanForm = (e) => {
    e.preventDefault();
    this.setState({
      tech: '',
      target: '',
      targetDate: new Date()
    });
  };

  changeLinks = (links) => {
    this.setState({
      links: links
    })
  };

  componentWillReceiveProps(nextProps) {
    const len = nextProps.tasks.length;
    let task;
    if (!this.state.id && len > this.props.tasks.length) {
      task = nextProps.tasks[len - 1];
    } else if (this.state.id) {
      task = nextProps.tasks.find(item => item._id === this.state.id);
    }
    this.setState({
      success: 'Задача обновлена',
      errors: {},
      id: task._id,
      tech: task.tech,
      target: task.target,
      targetDate: new Date(task.targetDate),
      links: task.links
    });
  }

  render() {
    const {state} = this;
    const {errors, success} = state;
    return (
      <div className='edit-task'>
        <div className="edit-task-wrap">
          <div className="edit-task__main">
            <form onSubmit={this.submit} className='task-form'>
              <div className="task-form__group">
                <div className='task-form__name-wrap'>
                  <span className="task-form__name">Технология</span>
                  {errors.tech && (<span className="task-form__msg ">{errors.tech}</span>)}
                  {success && (<span className="task-form__msg task-form__msg_success">{success}</span>)}
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
                  {errors.target && (<span className="task-form__msg">{errors.target}</span>)}
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
                  <span className="task-form__name">Дата завершения</span>
                  {errors.targetDate && (<span className="task-form__msg">{errors.targetDate}</span>)}
                </div>
                <div className="user-form__input-wrap">
              <span className="user-form__icon">
                <i className="fa fa-calendar"></i>
              </span>
                  <input
                    className="user-form__input"
                    name="date"
                    type="text"
                    value={dateToString(state.targetDate)}
                    onChange={this.inputChange}
                    onFocus={this.showPicker}
                    onBlur={this.closePicker}
                  />
                  {this.state.showPicker &&
                  <div className="date-picker-wrap">
                    <DatePicker
                      onDayClick={this.getDate}
                    />
                  </div>
                  }
                </div>
              </div>
              <div className="user-form__btn-wrap">
                <button className='user-form__btn'>Сохранить</button>
                <button className='user-form__btn' onClick={this.cleanForm}>Очистить</button>
              </div>
            </form>
          </div>
          <LinksList links={this.state.links} changeLinks={this.changeLinks} isTask={this.state.id}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  user: state.auth.user,
  tasks: state.tasks
});

export default connect(mapStateToProps, {addTask, updateTask})(withRouter(EditTask));
