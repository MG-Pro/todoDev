import {sortTypes} from '../../config'

const SortingTasks = ({sortType = {}, sortChange}) => {
  sortType.dir = null;
  sortType.value = 'createDate';

  let dirIcon;
  if(sortType.dir === 'desc') {
    dirIcon = <i className="fa fa-sort-desc"></i>
  } else if(sortType.dir === 'asc') {
    dirIcon = <i className="fa fa-sort-asc"></i>
  } else {
    dirIcon = <i className="fa fa-sort"></i>
  }



  return (
    <div className='sorting'>
      <ul className='sorting__list'>
        {sortTypes.map((item, i) => {
          const activeClass = sortType.value === item.value ?
            'sorting__item_active' : '';
          return <li
            key={i}
            className={`sorting__item ${activeClass}`}
            onClick={sortChange}
            data-val={item.value}>
            {item.title}&nbsp;{dirIcon}
          </li>
        })}
      </ul>
    </div>
  )
};
export default SortingTasks;
