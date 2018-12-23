import '../css/style.scss';
import {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

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
      <Router basename={process.env.PUBLIC_URL}>
        <div className="wrapper">
          <main className="main">
            <Header/>
            <Route exact path='/app' component={Register}/>
            <Route path='/login' component={Login}/>
          </main>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
