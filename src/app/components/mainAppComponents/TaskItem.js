import React, {Component} from 'react';
import dateToString from '../../helpers/dateToString';
import CheckBox from '../helperComponents/CheckBox';
import {updateTask} from '../../redux/actions';
import {connect} from 'react-redux';

class TaskItem extends Component {
  constructor(props) {
    super(props);
  }

  changeStatus = () => {
    const task = Object.assign({}, this.props.task);
    task.status = !this.props.task.status;
    console.log(task);
    this.props.updateTask(task);
  };

  render() {
    const {task, error} = this.props;
    const targetDate = new Date(task.targetDate);
    const t = new Date();
    const today = new Date(t.getFullYear(), t.getMonth(), t.getDate());
    const alertClass = targetDate < today ? 'date-alert' : '';
    let errStr = '';
    for (let key in error) {
      errStr += error[key] + ' ';
    }
    return (
      <li className='task-item'>
        <div className="task-item__content">
          <p className="task-item__content-tech">{task.tech}</p>
          <p className="task-item__content-target">{task.target}</p>
          <div className="task-item__content-footer">
            <p className={`task-item__content-target-date ${alertClass}`}>{dateToString(task.targetDate)}</p>
            {error && <span className='task-form__msg'>{errStr}</span>}
          </div>

        </div>
        <div className="task-item__actions">
          <div className="task-item__actions-status">
            <span className='task-item__actions-status-name'>Статус</span>
            <CheckBox checked={task.status} change={this.changeStatus}/>
          </div>
          {!task.links.length ?
            <p className="task-item__actions-links">{`Вы не прикрепили ссылки к задаче`}</p> :
            <p className="task-item__actions-links">{`Вы прикрепили ${task.links.length} ссылок к задаче`}</p>
          }
          <p className="task-item__actions-upd-date">{`Обновлена ${dateToString(task.updateDate)}`}</p>
          <div className="task-item__actions-btns">
            <button className='task-btn'><i className='fa fa-pencil'></i></button>
            <button className='task-btn task-btn_del'><i className='fa fa-trash-o'></i></button>
          </div>
        </div>
      </li>
    )
  }
}
const mapStateToProps = state => ({
  tasks: state.tasks,
  error: state.taskError
});

export default connect(mapStateToProps, {updateTask})(TaskItem);
