import React, {Component} from 'react';

class TaskItem extends Component {
  render() {
    const {task} = this.props;
    return (

      <li className='task-item'>
        <div className="task-item__content">
          <p className="task-item__content-tech">{task.tech}</p>
          <p className="task-item__content-target">{task.target}</p>
          <p className="task-item__content-target-date">{task.targetDate}</p>
        </div>
        <div className="task-item__actions">
          <div className="task-item__actions-status">
            <input type="checkbox" checked={task.status}/>
          </div>
          <p className="task-item__actions-links">{`Вы прикрепили ${task.links.length} к этой задаче`}</p>
          <p className="task-item__actions-upd-date">{`Вы прикрепили ${task.updateDate} к этой задаче`}</p>
          <div className="task-item__actions-btns">
            <button className='task-btn'><i className='fa fa-trash-o'></i></button>
            <button className='task-btn'><i className='fa fa-pencil'></i></button>
          </div>
        </div>
      </li>

    )
  }
}

export default TaskItem;
