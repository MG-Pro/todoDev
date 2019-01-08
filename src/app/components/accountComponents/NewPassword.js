import {Component} from 'react';
import {connect} from 'react-redux';
import {registerUser} from '../../redux/actions';


class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      old_password: '',
      new_password: '',
      password_confirm: '',
      errors: {}
    };

    this.inputChange = this.inputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    const user = {
      old_password: this.state.old_password,
      new_password: this.state.new_password,
      password_confirm: this.state.password_confirm
    };
    //this.props.registerUser(user, this.props.history);
    console.log(user);
  };

  inputChange(e) {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { errors } = this.state;
    return (
        <div className="account__user-item account__user-item_form">
          <form className="account__user-form" onSubmit={this.submit}>
            <div className="user-form__group">
              <div className="user-form__input-wrap">
                <span className="user-form__icon">
                  <i className="fa fa-key"></i>
                </span>
                <input
                  className="user-form__input"
                  name="old_password"
                  type="password"
                  placeholder="Старый пароль"
                  onChange={this.inputChange}
                />
              </div>
              {errors.password_confirm && (<span className="user-form__msg">{errors.password_confirm}</span>)}
            </div>
            <div className="user-form__group">
              <div className="user-form__input-wrap">
                <span className="user-form__icon"><i className="fa fa-key"></i></span>
                <input
                  className="user-form__input"
                  name="new_password"
                  type="password"
                  placeholder="Новый пароль"
                  onChange={this.inputChange}
                />
              </div>
              {errors.password_confirm && (<span className="user-form__msg">{errors.password_confirm}</span>)}
            </div>
            <div className="user-form__group">
              <div className="user-form__input-wrap">
                <span className="user-form__icon"><i className="fa fa-key"></i></span>
                <input
                  className="user-form__input"
                  name="password_confirm"
                  type="password"
                  placeholder="Повторите пароль"
                  onChange={this.inputChange}
                />
              </div>
              {errors.password_confirm && (<span className="user-form__msg">{errors.password_confirm}</span>)}
            </div>
            <div className="user-form__btn-wrap">
              <button className="user-form__btn">Отправить</button>
              <button onClick={this.props.close} className="user-form__btn">Отменить</button>
            </div>

          </form>

        </div>
      )
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
});

export default connect(
  mapStateToProps, {registerUser})(NewPassword);
