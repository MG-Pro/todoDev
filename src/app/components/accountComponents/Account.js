import {Component} from 'react';
import {connect} from 'react-redux';
import NewPassword from './NewPassword';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };

    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  showForm(e) {
    e.preventDefault();
    this.setState({
      showForm: true
    })
  };

  closeForm (e) {
    e.preventDefault();
    this.setState({
      showForm: false
    })
  }

  render() {
  const {user} = this.props;
  return (
        <div className='container'>
          <div className="layout">
            <h3 className='account__header'>Account</h3>
            <div className="account-wrap">
              <div className="account__user">
                <div className="account__user-item">
                  <span className='account__user-item-l'>Имя пользователя</span>
                  <span className='account__user-item-r'>{user.name}</span>
                </div>
                <div className="account__user-item">
                  <span className='account__user-item-l'>Email</span>
                  <span className='account__user-item-r'>{user.email}</span>
                </div>
                <div className="account__user-item">
                  <a href='' onClick={this.showForm} className='account__user-item-link'>Изменить пароль</a>
                </div>
                {this.state.showForm && <NewPassword close={this.closeForm}/>}
              </div>
              <div className="account__stat">
                <h4 className='account__stat-head'>Статистика использования приложения</h4>
                <p className='account__stat-subhead'>В разработке</p>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Account);
