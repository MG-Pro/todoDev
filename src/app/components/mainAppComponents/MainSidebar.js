import {Component} from 'react';
import {filters} from '../../config';
import {connect} from 'react-redux';
import {currentFilter} from '../../redux/actions';

class MainSidebar extends Component {
  constructor(props) {
    super(props);

  }

  activeFilter = (e) => {
    const value = e.currentTarget.dataset.value;
    console.log(value);
    this.props.currentFilter(value);
  };

  render() {

    const {filterType} = this.props;
    return (
        <div className='sidebar'>
          <ul className="filters">
            {filters.map((item, i) => {

              const activeClass = item.value === filterType ? 'filters__item_active' : '';
              return (
                <li className={`filters__item ${activeClass}`} key={i} data-value={item.value} onClick={this.activeFilter}>
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

export default connect(mapStateToProps, {currentFilter})(MainSidebar);
