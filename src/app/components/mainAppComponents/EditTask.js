import {Component} from 'react';
import DatePicker from '../helperComponents/DatePicker';

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tech: this.props.tech || '',
      target: this.props.target || '',
      targetDate: this.props.targetDate || new Date(),
      showPicker: false,
    }

  }

  static stringDate(date) {
    let d = date.getDate() + '';
    let m = date.getMonth() + 1 + '';
    let y = date.getFullYear() + '';

    if(d.length < 2) {
      d = '0' + d;
    }
    if(m.length < 2) {
      m = '0' + m;
    }
    return `${d}.${m}.${y}`;
  }

  showPicker = () => {
    this.setState({
      showPicker: true,
    })
  };

  closePicker = () => {
    setTimeout(() => {
      this.setState({
        showPicker: false,
      })
    }, )

  };

  getDate = (date) => {
    console.log(date);
    this.setState({
      targetDate: date,
      showPicker: false,
    })
  };

  inputChange = (e) => {
    console.log(e);
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.showPicker);
    return true
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
              <span className="task-form__name">Дата завершения</span>
              {errors.email && (<span className="task-form__msg">{errors.email}</span>)}
            </div>
            <div className="user-form__input-wrap">
              <span className="user-form__icon">
                <i className="fa fa-calendar"></i>
              </span>
              <input
                className="user-form__input"
                name="date"
                type="text"
                value={EditTask.stringDate(state.targetDate)}
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

          <button>Add Task</button>
        </form>
      </div>
    )
  }
}

export default EditTask;
