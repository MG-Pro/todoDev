import {Component} from 'react';

class Login extends Component {

  submit(e) {
    e.preventDefault()
  };

  render() {
    return (
      <div className="user-form">
        <div className="container container_user-form">
          <form onSubmit={this.submit} className="user-form__form">
            <h1 className="user-form__head">Вход</h1>
            <div className="user-form__input-wrap">
              <span className="user-form__icon"><i className="fa fa-envelope"></i></span>
              <input className="user-form__input" name="email" type="text" placeholder="Email"/>
            </div>
            <div className="user-form__input-wrap">
              <span className="user-form__icon"><i className="fa fa-key"></i></span>
              <input className="user-form__input" name="pass" type="password" placeholder="Пароль"/>
            </div>
            <button className="user-form__btn">Отправить</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
