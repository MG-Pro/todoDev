import {Component} from 'react';
import {filters} from '../../config';
import {connect} from 'react-redux';
import {currentFilter, currentTechFilter} from '../../redux/actions';

class MainSidebar extends Component {
  constructor(props) {
    super(props);

  }

  activeFilter = (e) => {
    const value = e.currentTarget.dataset.value;
    this.props.currentFilter(value);
    this.props.currentTechFilter(null);
  };

  activeTechFilter = (e) => {
    const value = e.currentTarget.dataset.value;
    this.props.currentTechFilter(value);
  };


  render() {

    const {filterType, techList, techFilterType} = this.props;
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
          <ul className="tech-filters">
            {techList.map((tech, i) => {
              const activeClass = tech.name === techFilterType ? 'tech-filters__item_active' : '';
              return (
                <li className={`tech-filters__item ${activeClass}`} key={i}  onClick={this.activeTechFilter} data-value={tech.name}>
                  <span>{tech.name}</span>
                </li>
              )
            })}
          </ul>
        </div>
      )
  }
}

const mapStateToProps = state => ({
  filterType: state.filterType,
  techList: state.tech,
  techFilterType: state.techFilter
});

export default connect(mapStateToProps, {currentFilter, currentTechFilter})(MainSidebar);
