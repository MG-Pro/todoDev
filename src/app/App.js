import '../css/style.scss';
import {Component} from 'react';
import AddTask from './components/addTask';
import TaskList from './components/taskList';
class App extends Component {

  componentDidMount() {
    //fetch('/api')
    //  .then(res => res.json())
    //  .then(json => {
    //    console.log(json);
    //  });
  }

  render() {
    return (
      <div>
        <AddTask/>
        <TaskList/>
      </div>
    )
  }
}

export default App;
