import {Component} from 'react';
import {connect} from 'react-redux';
import {links as addLink, clearLinkState} from '../../../redux/actions';


class LinksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      value: '',
    }
  }

  linkSubmit = (e) => {
    e.preventDefault();
    if(!this.props.isTask) {
      this.setState({
        error: 'Сохраните задачу перед добавлением ссылок',
      });
      return;
    }
    const value = e.currentTarget[0].value;
    if(value.length < 5) {
      this.setState({
        error: 'Поле не должно быть пустым'
      });
      return;
    }
    this.props.addLink(value);
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.linkData) {
      this.props.links.push(nextProps.linkData);
      this.props.changeLinks(this.props.links);
      this.setState({
        value: '',
        error: false
      }, () => {
        this.props.clearLinkState();
      })
    }
    if(nextProps.linkError) {
      this.setState({
        error: nextProps.linkError,
      })
    }
  }

  inputChange = (e) => {
    this.setState({
      value: e.currentTarget.value
    })
  };

  render() {
    const {error} = this.state;
    const {links} = this.props;
    return (
      <div className="edit-task__links">
        <div className="task-form__group task-form__group_links">
          <div className='task-form__name-wrap'>
            <span className="task-form__name">Учебные материалы</span>
            {error && <span className="task-form__msg">{error}</span>}
          </div>
          <div className="user-form__input-wrap user-form__input-wrap_links">
                  <span className="user-form__icon">
                    <i className="fa fa-external-link"></i>
                  </span>
            <ul className="edit-task__links-list">
              {!links.length &&
              <li className='edit-task__links-empty'>Вы пока не добавили учебные материалы</li>
              }
              {links.map((link, i) => {
                return (
                  <li className='edit-task__links-item' key={i}>
                    {link.fav && <img src={link.fav} className='edit-task__links-fav'/>}
                    <a href={link.url} target='_blank' className='edit-task__links-link'>
                      {link.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <form className="edit-task__links-form" onSubmit={this.linkSubmit}>
          <div className="user-form__input-wrap">
              <span className="user-form__icon">
                <i className="fa fa-link"></i>
              </span>
            <input
              className="user-form__input user-form__input_links"
              name="link"
              type="text"
              placeholder="Вставьте сюда ссылку"
              value={this.state.value}
              onChange={this.inputChange}
            />
            <button className="user-form__btn user-form__btn_links">Добавить</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  linkError: state.linkError,
  linkData: state.links,
});

export default connect(
  mapStateToProps,
  {addLink, clearLinkState})((LinksList)
);

