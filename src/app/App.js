import '../css/style.scss';
import {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <div className="wrapper">
        <main className="main">
          <Header/>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default App;
