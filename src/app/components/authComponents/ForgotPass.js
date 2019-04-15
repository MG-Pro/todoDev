import React, {Component} from 'react';
import {connect} from 'react-redux';
import {forgotPass} from '../../redux/actions';
import {emailRegex} from '../../helpers/regEx';

class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: {}
    };
  }

  inputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  };

  submit = (e) => {
    e.preventDefault();
    const isEmail = emailRegex.test(this.state.email);
    if (isEmail) {
      this.props.forgotPass(this.state.email);
    } else {
      this.setState({
        errors: {
          email: 'Невалидный Email'
        }
      })
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      errors: nextProps.errors || '',
    })
  }

  render() {
    const {errors, email} = this.state;
    const {message} = this.props;
    return (
      <div className="user-form">
        <div className="container container_user-form">
          <form onSubmit={this.submit} className="user-form__form">
            <h1 className="user-form__head">Восстановление пароля</h1>
            <div className="user-form__group">
              <div className="user-form__input-wrap">
                <span className="user-form__icon">
                  <i className="fa fa-envelope"/>
                </span>
                <input
                  className="user-form__input"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={this.inputChange}
                  value={email}
                  disabled={message}
                />
              </div>
              {errors.email && (<span className="user-form__msg">{errors.email}</span>)}
              {message && (<span className="user-form__msg user-form__msg_scs">{message}</span>)}
            </div>
            <button className="user-form__btn" disabled={message}>Отправить</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  errors: state.forgotPass.errors,
  message: state.forgotPass.message,
});

export default connect(mapStateToProps, {forgotPass})(ForgotPass);


