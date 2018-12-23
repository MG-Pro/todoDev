import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
      <header className="header">
        <div className="container">
          <div className="header__cont">
            <div className="header__logo">
              <img className="header__logo-img" src={logo} alt="logo"/>
            </div>
            <div className="header__brand">
              <a href="" className="header__brand-link">
                <p className="header__brand-title">TODO:</p>
                <p className="header__brand-subtitle">App for development training</p>
              </a>
            </div>
            <div className="header__user">
              <a className="header__user-name" href="">UserName </a>
              <a className="header__user-sign-out" href="">(Выйти)</a>
            </div>
          </div>
        </div>
      </header>
    )
};

export default Header;
