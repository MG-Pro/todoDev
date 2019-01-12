import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ToolBar extends Component {
  render() {
    return (
        <div className='tool-bar'>
          <ul className="tool-bar__list">
            <li className="tool-bar__item">
              <Link to='/app/tasks/new' className="tool-bar__link tool-bar__link_new-task">
                <i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;
                Новая задача
              </Link>
            </li>
            <li className="tool-bar__item">
              <Link to='/app' className="tool-bar__link">
                <i className="fa fa-tasks" aria-hidden="true"></i>&nbsp;
               Мои задачи
              </Link>
            </li>
            <li className="tool-bar__item">
              <Link to='/app/exercises' className="tool-bar__link">
                <i className="fa fa-code" aria-hidden="true"></i>&nbsp;
                Мои упражнения
              </Link>
            </li>
          </ul>
        </div>
      )
  }
}

export default ToolBar;
