import {Component} from 'react';

class LinksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: props.links
    }
  }

  render() {
    const {links} = this.state;
    return (
      <div className="task-form__group">
        <div className='task-form__name-wrap'>
          <span className="task-form__name">Учебные материалы</span>
        </div>
        <div className="user-form__input-wrap">
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
                  <a href={link.link} target='_blank' className='edit-task__links-link'>
                    {link.title}
                  </a>
                </li>
              )})}
          </ul>
        </div>
      </div>
      )
  }
}

export default LinksList;
