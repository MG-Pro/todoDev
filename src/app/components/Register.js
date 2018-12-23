import {Component} from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      pass2: '',
      errors: {}
    };

    this.inputChange = this.inputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.pass,
      password_confirm: this.state.pass2
    };
    console.log(user);
  };

  inputChange(e) {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  };


  render() {
    return (
      <div className="user-form">
        <div className="container container_user-form">
          <form onSubmit={this.submit} className="user-form__form">
            <h1 className="user-form__head">Регистрация</h1>
            <div className="user-form__input-wrap">
              <span className="user-form__icon"><i className="fa fa-envelope"></i></span>
              <input
                className="user-form__input"
                name="email"
                type="email"
                placeholder="Email"
                onChange={this.inputChange}
              />
            </div>
            <div className="user-form__input-wrap">
              <span className="user-form__icon"><i className="fa fa-key"></i></span>
              <input
                className="user-form__input"
                name="pass"
                type="password"
                placeholder="Пароль"
                onChange={this.inputChange}
              />
            </div>
            <div className="user-form__input-wrap">
              <span className="user-form__icon"><i className="fa fa-key"></i></span>
              <input
                className="user-form__input"
                name="pass2"
                type="password"
                placeholder="Повторите пароль"
                onChange={this.inputChange}
              />
            </div>
            <button className="user-form__btn">Отправить</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
