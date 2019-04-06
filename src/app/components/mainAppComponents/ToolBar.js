import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
  }

  showMenu = (e) => {
    e.preventDefault();
    this.setState({
      showMenu: !this.state.showMenu
    })
  };

  render() {
    const {showMenu} = this.state;
    return (
        <div className='tool-bar'>
          <ul className="tool-bar__list">
            <li className="tool-bar__item">
              <Link to='/app/tasks/new' className="tool-bar__link tool-bar__link_new-task">
                <i className="fa fa-plus-circle"/>
                Новая задача
              </Link>
            </li>
            <li className={`tool-bar__item ${showMenu ? '': 'mob-hide'}`}>
              <NavLink to='/app/tasks' className="tool-bar__link" activeClassName='tool-bar__link_active'>
                <i className="fa fa-tasks"/>
               Мои задачи
              </NavLink>
            </li>
            <li className={`tool-bar__item ${showMenu ? '': 'mob-hide'}`}>
              <NavLink to='/app/exercises' className="tool-bar__link" activeClassName='tool-bar__link_active'>
                <i className="fa fa-code"/>
                Мои упражнения
              </NavLink>
            </li>
            <li className="tool-bar__item tool-bar__mob-menu">
              <button className='tool-bar__mob-menu-btn' onClick={this.showMenu}>
                <i className='fa fa-bars'/>
              </button>
            </li>
          </ul>
        </div>
      )
  }
}

export default ToolBar;
