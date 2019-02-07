import {sortTypes} from '../../../config'

const SortingTasks = ({sortType = {}, sortChange}) => {
  const getSortIcon = (dir) => {
    if (dir === 'desc') {
      return <i className="fa fa-sort-desc"></i>
    } else if (dir === 'asc') {
      return <i className="fa fa-sort-asc"></i>
    }
    return <i className="fa fa-sort"></i>
  };


  const sortChangeView = (e) => {
    const value = e.currentTarget.dataset.val;
    let dir;

    if(sortType.value !== value) {
      dir = 'desc';
    } else if (sortType.dir === 'desc') {
      dir = 'asc'
    } else if (sortType.dir === 'asc') {
      dir = 'desc';
    }

    sortChange({
      value: value,
      dir: dir
    })
  };

  return (
    <div className='sorting'>
      <ul className='sorting__list'>
        {sortTypes.map((item, i) => {
          let activeClass = '';
          let dir = null;
          if(sortType.value === item.value) {
            dir = sortType.dir;
            activeClass = 'sorting__item_active';
          }
          return <li
            key={i}
            className={`sorting__item ${activeClass}`}
            onClick={sortChangeView}
            data-val={item.value}>
            {item.title}&nbsp;{getSortIcon(dir)}
          </li>
        })}
      </ul>
    </div>
  )
};
export default SortingTasks;
