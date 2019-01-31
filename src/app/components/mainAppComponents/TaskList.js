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

    const copyList = Array.from(list).sort((a , b) => {
      if(ifDate(a) > ifDate(b)) {
        return dir;
      }
      return dir;
    });
    return copyList;
  };

  sortChange = (sortType) => {
    console.log(sortType);
    this.props.sorting(sortType);
  };

  render() {
    const {props} = this;
    const tasks = TaskList.sortList(props.tasks, props.sortType);
    return (
      <div className='task-list'>
        <div className="task-list__sorting">
          <SortingTasks sortChange={this.sortChange} sortType={props.sortType}/>
        </div>
        {!tasks.length && <p className='task-list__msg'>У вас пока нет задач</p>}
        <ul>
          {tasks.map(task =>
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
});

export default connect(mapStateToProps, {getTask, sorting})(TaskList);
