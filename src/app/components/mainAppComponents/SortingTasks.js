import {connect} from 'react-redux';
import {getSortTypes} from '../../redux/actions';

const SortingTasks = (props) => {
  return (
      <div className='sorting'>
        <select className='soting-elem'>
          {props.types.map(item => {
            <option key={item._id} value={item.name}>{item.name}</option>
          })}
        </select>
      </div>
    )
};
const mapStateToProps = state => ({
  types: state.sortTypes,
});

export default connect(mapStateToProps, {getSortTypes})((SortingTasks));

