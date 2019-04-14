import {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {newForgotPass} from '../../redux/actions';

class NewPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: '',
      pass2: '',
      token: null,
      errors: {},
    };

    this.inputChange = this.inputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    const user = {
      password: this.state.pass,
      password_confirm: this.state.pass2,
      token: this.state.token
    };
    this.props.newForgotPass(user, this.props.history);
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
    } else {
      import('query-string').then((qs) => {
        const token = qs.parse(this.props.location.search).token;
        if(!token) {
          this.props.history.push('/app/login');
          return;
        }
        this.setState({
          token: token
        })
      });


    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className="user-form">
        <div className="container container_user-form">
          <form onSubmit={this.submit} className="user-form__form">
            <h1 className="user-form__head">Новый пароль</h1>
            <div className="user-form__group">
              <div className="user-form__input-wrap">
                <span className="user-form__icon"><i className="fa fa-key"/></span>
                <input
                  className="user-form__input"
                  name="pass"
                  type="password"
                  placeholder="Новый пароль"
                  onChange={this.inputChange}
                />
              </div>
              {errors.password && (<span className="user-form__msg">{errors.password}</span>)}
            </div>
            <div className="user-form__group">
              <div className="user-form__input-wrap">
                <span className="user-form__icon"><i className="fa fa-key"/></span>
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
  auth: state.auth,
  successNewPass: state.user.isSetNewPassword
});

export default connect(
  mapStateToProps,  {newForgotPass})(withRouter(NewPass)
);
