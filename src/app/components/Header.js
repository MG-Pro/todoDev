import {Component} from 'react';
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser, forms} from '../redux/actions';

class Header extends Component {

  constructor(props) {
    super(props);

    this.formToggle = this.formToggle.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  formToggle() {
    if(this.props.formType === 'login') {
      this.props.forms('register');
    } else {
      this.props.forms('login');
    }
  }

  logOut(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    console.log(this.props.formType);
    const {isAuthenticated, user} = this.props.auth
    return (
      <header className="header">
        <div className="container">
          <div className="header__cont">
            <div className="header__logo">
              <img className="header__logo-img" src={logo} alt="logo"/>
            </div>
            <div className="header__brand">
              <Link to={'/app'} className="header__brand-link">
                <p className="header__brand-title">TODO:</p>
                <p className="header__brand-subtitle">App for development training</p>
              </Link>
            </div>
            <ul className="header__menu">
              {this.props.formType === 'login' ?
                <li className="header__menu-item">
                  <Link
                    to={'/app/register'}
                    className="header__menu-link"
                    onClick={this.formToggle}
                  >Регистрация</Link>
                </li>
                :
                <li className="header__menu-item">
                  <Link
                    to={'/app/login'}
                    className="header__menu-link"
                    onClick={this.formToggle}
                  >Вход</Link>
                </li>
              }
            </ul>
            {isAuthenticated &&
            <div className="header__user">
              <img src={user.avatar} alt="Avatar"/>
              <Link className="header__user-name" to={'/app/account'}>{user.email} </Link>
              <a className="header__user-sign-out" href="" onClick={this.logOut}>(Выйти)</a>
            </div>
            }

          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  formType: state.formType
});

const mapDispatchToProps = {
  logoutUser,
  forms
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
