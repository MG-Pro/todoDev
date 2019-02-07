import {connect} from 'react-redux';
import {Component} from 'react';
import {getTask, sorting, deleteTask} from '../../../redux/actions';
import TaskItem from './TaskItem';
import SortingTasks from './SortingTasks'
import ConfirmMsg from '../../headerComponents/ComfirmMsg';


class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmShow: false,
      delTask: null,
      delProcess: false
    };
    this.confirmMsg = 'Подтвердите удаление задачи!'
  }

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

  static filterList = (list, filterType, techFilterType) => {
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    function isExpired(date) {
      return (new Date(date)).getTime() < today.getTime();
    }

    return list.filter((item) => {
      if (filterType === 'in_work') {
        if(techFilterType) {
          return item.status && techFilterType === item.tech
        } else {
          return item.status;
        }
      } else if(filterType === 'expired') {
        if(techFilterType) {
          return isExpired(item.targetDate) && item.status && techFilterType === item.tech;
        } else {
          return isExpired(item.targetDate) && item.status;
        }

      } else if(filterType === 'completed') {
        if(techFilterType) {
          return !item.status && techFilterType === item.tech;
        } else {
          return !item.status;
        }

      }
    });
  };

  sortChange = (sortType) => {
    this.props.sorting(sortType);
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.delProcess) {
      this.setState({
        delProcess: false,
        delTask: null,
      })
    }
  }

  showMsg = (task) => {
    this.setState({
      confirmShow: true,
      delTask: task,
    })
  };

  successDel = () => {
    this.setState({
      confirmShow: false,
      delProcess: true,
    });
    this.props.deleteTask(this.state.delTask);
  };

  cancelDel = () => {
    this.setState({
      confirmShow: false,
      delTask: null,
    })
  };

  render() {
    const {props, state} = this;

    const tasks = TaskList.filterList(props.tasks, props.filterType, props.techFilterType);
    const filteredTask = TaskList.sortList(tasks, props.sortType);
    return (
      <div className='task-list'>
        <div className="task-list__sorting">
          <SortingTasks sortChange={this.sortChange} sortType={props.sortType}/>
        </div>
        {!filteredTask.length && <p className='task-list__msg'>У вас пока нет задач</p>}
        <ul>
          {filteredTask.map(task =>
            <TaskItem
              key={task._id}
              task={task}
              action={[this.showMsg]}
              isActive={state.delProcess && state.delTask === task._id}

            />
          )}
        </ul>
        {state.confirmShow && <ConfirmMsg msg={this.confirmMsg} success={this.successDel} cancel={this.cancelDel}/>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  sortType: state.sortType,
  filterType: state.filterType,
  techFilterType: state.techFilter
});

export default connect(mapStateToProps, {getTask, sorting, deleteTask})(TaskList);
