import {Component} from 'react';
import DatePicker from '../helperComponents/DatePicker';
import LinksList from './LinksList';
import {connect} from 'react-redux';
import {addTask} from '../../redux/actions';
import {withRouter} from 'react-router-dom';

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tech: this.props.tech || '',
      target: this.props.target || '',
      targetDate: this.props.targetDate || new Date(),
      links: this.props.links || [],
      showPicker: false,
      linkData: props.linkData,
    }

  }

  static stringDate(date) {
    let d = date.getDate() + '';
    let m = date.getMonth() + 1 + '';
    let y = date.getFullYear() + '';

    if (d.length < 2) {
      d = '0' + d;
    }
    if (m.length < 2) {
      m = '0' + m;
    }
    return `${d}.${m}.${y}`;
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
    }, 200)

  };

  getDate = (date) => {
    console.log(date);
    this.setState({
      targetDate: date
    })
  };

  inputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  };

  submit(e) {
    e.preventDefault();
    if (!this.input.value.trim()) {
      return
    }
    this.props.addTask(this.input.value);
    this.input.value = ''
  }

  cleanForm = (e) => {
    e.preventDefault();
    this.setState({
      tech: '',
      target: '',
      targetDate: new Date()
    });
  };

  componentWillReceiveProps(nextProps, nextContext) {

  }

  render() {
    const {state} = this;
    const errors = {
      email: 'Error'
    };
    return (
      <div className='edit-task'>
        <div className="edit-task-wrap">
          <div className="edit-task__main">
            <form onSubmit={this.submit} className='task-form'>
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
              <div className="user-form__btn-wrap">
                <button className='user-form__btn'>Сохранить</button>
                <button className='user-form__btn' onClick={this.cleanForm}>Очистить</button>
              </div>
            </form>
          </div>
          <LinksList linkData={this.state.linkData}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  linkData: state.links,
});

export default connect(mapStateToProps, {addTask})(withRouter(EditTask));
