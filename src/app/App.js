import '../css/style.scss';
import {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/headerComponents/Header';
import Footer from './components/Footer';
import Main from './components/mainAppComponents/Main';
import Register from './components/authComponents/Register';
import Login from './components/authComponents/Login';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <main className="main">
            <Header/>
            <Route exact path='/app/register' component={Register}/>
            <Route exact path='/app/login' component={Login}/>
            <PrivateRoute path='/app' component={Main}/>
          </main>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
