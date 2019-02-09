import {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {registerUser} from '../../redux/actions';

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
    this.props.registerUser(user, this.props.history);
  };

  inputChange(e) {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/app/tasks');
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }

  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/app/tasks');
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className="user-form">
        <div className="container container_user-form">
          <form onSubmit={this.submit} className="user-form__form">
            <h1 className="user-form__head">Регистрация</h1>
            <div className="user-form__group">
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
              {errors.email && (<span className="user-form__msg">{errors.email}</span>)}
            </div>
            <div className="user-form__group">
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
              {errors.password && (<span className="user-form__msg">{errors.password}</span>)}
            </div>
            <div className="user-form__group">
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
              {errors.password_confirm && (<span className="user-form__msg">{errors.password_confirm}</span>)}
            </div>
            <button className="user-form__btn">Отправить</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {registerUser})(withRouter(Register)
);
