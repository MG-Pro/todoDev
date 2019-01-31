import {Component} from 'react';
import {filters} from '../../config';

class MainSidebar extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
        <div className='sidebar'>
          <ul className="filters">
            {filters.map((item, i) => {
              const activeClass = 'filters__item_active';
              return (
                <li className={`filters__item ${activeClass}`} key={i} data-value={item.value}>
                  <i className={`fa ${item.classNameFA}`}></i>
                  <span>{item.title}</span>
                </li>
              )
            })}
          </ul>
          <div className="sidebar__separ"></div>
        </div>
      )
  }
}

export default MainSidebar;
