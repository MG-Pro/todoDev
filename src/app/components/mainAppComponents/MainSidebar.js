import {Component} from 'react';
import {filters} from '../../config';
import {connect} from 'react-redux';
import {getTask, sorting} from '../../redux/actions';

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

const mapStateToProps = state => ({
  filterType: state.filterType,
});

export default connect(mapStateToProps, {getTask, sorting})(MainSidebar);
