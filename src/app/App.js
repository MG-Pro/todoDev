import '../css/style.scss';
import {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Register from './components/Register';
import Login from './components/Login';

class App extends Component {

  render() {

    return (
      <Router>
        <div className="wrapper">
          <main className="main">
            <Header/>
            <Route exact path='/app' component={Main}/>
            <Route exact path='/app/register' component={Register}/>
            <Route exact path='/app/login' component={Login}/>
          </main>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
