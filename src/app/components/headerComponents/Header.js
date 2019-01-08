import {Component} from 'react';
import logo from '../../../img/logo.png';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser, forms} from '../../redux/actions';
import HeaderDropMenu from './HeaderDropMenu';

class Header extends Component {

  constructor(props) {
    super(props);

    this.formToggle = this.formToggle.bind(this);
    this.logOut = this.logOut.bind(this);
    this.menuToggle = this.menuToggle.bind(this);
    this.state = {
      showMenu: false
    }
  }

  formToggle() {
    if (this.props.formType === 'login') {
      this.props.forms('register');
    } else {
      this.props.forms('login');
    }
  }

  logOut(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  menuToggle() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    const {isAuthenticated, user} = this.props.auth;
    let formsButtons;
    if (!isAuthenticated) {
      formsButtons = this.props.formType === 'login' ?
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
    } else {
      formsButtons = null;
    }

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
              {formsButtons}
            </ul>
            {isAuthenticated &&
            <div className="header__user">
              <img className="header__user-avatar" src={user.avatar} alt="Avatar"/>
              <div className="header__user-name" onClick={this.menuToggle}>{user.name}
                <span className="header__user-name-angle">
                  {!this.state.showMenu
                    ? <i className="fa fa-angle-down" aria-hidden="true"></i>
                    : <i className="fa fa-angle-right" aria-hidden="true"></i>
                  }
              </span>
              </div>
              {this.state.showMenu && <HeaderDropMenu user={user} logOut={this.logOut} menuToggle={this.menuToggle}/>}
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
