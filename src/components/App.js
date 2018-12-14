import {Component} from 'react';
import '../css/style.scss';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api', {
      credentials: 'same-origin',
    })
      .then(res=> res.json())
      .then(json => {
        console.log(json);
      });
  }

  render() {
    return (
      <div className='bg'>
        <p>Test O</p>
        <i className='fa fa-th-list'></i>
      </div>

    )
  }
}

export default App;
