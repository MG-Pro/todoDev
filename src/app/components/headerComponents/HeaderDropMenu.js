import {Link} from 'react-router-dom';

const HeaderDropMenu = (props) => {
    return (
        <div className='header__drop-menu'>
            <ul className='header__drop-menu-list'>
              <li className='header__drop-menu-item'>
                <Link className='header__drop-menu-link' to={'/app/account'}>Личный кабинет</Link>
              </li>
              <li className='header__drop-menu-item'>
                <a className='header__drop-menu-link' href="/app/logout" onClick={props.logOut}>Выход</a>
              </li>
            </ul>
        </div>
      )
};

export default HeaderDropMenu;
