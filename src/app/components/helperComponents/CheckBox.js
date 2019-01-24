

const CheckBox = (props) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={props.checked} onChange={props.change} hidden/>
        <span className='checkbox'>
          {props.checked ?
            <i className='fa fa-check-square'></i> :
            <i className='fa fa-square'></i>
          }
        </span>
      </label>

    </div>
    )
};

export default CheckBox;
