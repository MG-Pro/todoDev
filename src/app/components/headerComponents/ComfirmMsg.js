
const ConfirmMsg = (props) => {

  return (
      <div className='conf-msg'>
        <form className='conf-msg__form' onSubmit={e => e.preventDefault()}>
          <div className="conf-msg-wrap">
            <p className="conf-msg__text">{props.msg}</p>
          </div>
          <div className="conf-msg__btn-wrap">
            <button className="user-form__btn" onClick={props.success}>OK</button>
            <button className="user-form__btn" onClick={props.cancel}>Отмена</button>
          </div>
        </form>
      </div>
    )
};

export default ConfirmMsg;
