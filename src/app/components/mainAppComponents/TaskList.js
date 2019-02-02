import {connect} from 'react-redux';
import {Component} from 'react';
import {getTask, sorting} from '../../redux/actions';
import TaskItem from './TaskItem';
import SortingTasks from './SortingTasks'


class TaskList extends Component {


  componentDidMount() {
    this.props.getTask();
  }

  static sortList = (list, sortType) => {
    function ifDate(item) {
      sortType.value !== 'tech' ? (new Date(item[sortType.value])).getTime() : item;
    }
    let dir = sortType.dir === 'desc' ? -1 : 1;
    return Array.from(list).sort((a , b) => {
      if(ifDate(a) > ifDate(b)) {
        return dir;
      }
      return dir;
    });
  };

  static filterList = (list, filterType) => {
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    function isExpired(date) {
      return (new Date(date)).getTime() < today.getTime();
    }

    return list.filter((item) => {
      if (filterType === 'in_work') {
        return item.status;
      } else if(filterType === 'expired') {
        return isExpired(item.targetDate) && item.status;
      } else if(filterType === 'completed') {
        return !item.status;
      }
    });
  };

  sortChange = (sortType) => {
    this.props.sorting(sortType);
  };

  render() {
    const {props} = this;

    const tasks = TaskList.filterList(props.tasks, props.filterType);
    const filteredTask = TaskList.sortList(tasks, props.sortType);
    return (
      <div className='task-list'>
        <div className="task-list__sorting">
          <SortingTasks sortChange={this.sortChange} sortType={props.sortType}/>
        </div>
        {!filteredTask.length && <p className='task-list__msg'>У вас пока нет задач</p>}
        <ul>
          {filteredTask.map(task =>
            <TaskItem key={task._id} task={task}/>
          )}
        </ul>
      </div>
    )
  }


}

const mapStateToProps = state => ({
  tasks: state.tasks,
  sortType: state.sortType,
  filterType: state.filterType,
});

export default connect(mapStateToProps, {getTask, sorting})(TaskList);
