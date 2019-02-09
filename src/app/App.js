import '../css/style.scss';
import {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/headerComponents/Header';
import Footer from './components/Footer';
import Main from './components/mainAppComponents/Main';
import Register from './components/authComponents/Register';
import Login from './components/authComponents/Login';
import PrivateRoute from './components/PrivateRoute';
import Account from './components/accountComponents/Account';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <main className="main">
            <Header/>
            <Route exact path='/app/register' component={Register}/>
            <Route exact path='/app/login' component={Login}/>
            <Switch>
              <PrivateRoute path='/app/account' component={Account}/>
              <PrivateRoute path='/app'  component={Main}/>
            </Switch>
          </main>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
