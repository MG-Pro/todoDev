import React, {Component} from 'react';
import dateToString from '../../helpers/dateToString';

class TaskItem extends Component {


  render() {
    const {task} = this.props;
    const targetDate = new Date(task.targetDate);
    const t = new Date();
    const today = new Date(t.getFullYear(), t.getMonth(), t.getDate());
    const alertClass = targetDate < today ? 'date-alert' : '';

    return (
      <li className='task-item'>
        <div className="task-item__content">
          <p className="task-item__content-tech">{task.tech}</p>
          <p className="task-item__content-target">{task.target}</p>
          <p className={`task-item__content-target-date ${alertClass}`}>{dateToString(task.targetDate)}</p>
        </div>
        <div className="task-item__actions">
          <div className="task-item__actions-status">
            <input type="checkbox" checked={task.status}/>
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

export default TaskItem;
