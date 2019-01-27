import {sortTypes} from '../../config'

const SortingTasks = (props) => {
  const sortType = {

  }
  return (
    <div className='sorting'>
      <ul className='soting__list'>
        {sortTypes.map((item, i) => {
          return <li
            key={i}
            className='soting__item'
            onClick={props.sortChange}
            data-val={item.value}>
            {item.title}
            {item.desc ?
              <i className="fa fa-sort-desc"></i> :
              <i className="fa fa-sort-asc"></i>
            }
          </li>
        })}
      </ul>
    </div>
  )
};
export default SortingTasks;
