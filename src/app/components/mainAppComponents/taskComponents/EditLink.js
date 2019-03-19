const EditLink = (props) => {
  const {url, title} = props.link;
  const close = (e) => {
    e.preventDefault();
    props.close();
  };

  const save = (e) => {
    e.preventDefault();
    props.save({
      url: e.currentTarget[0].value,
      title: e.currentTarget[1].value,
    });
  };

  return (
    <div className="edit-link">
      <form className='edit-link-form' onSubmit={save}>
        <div className="edit-link__group">
          <p className="edit-link__label">URL</p>
          <input type="text" className="edit-link__input" defaultValue={url}/>
        </div>
        <div className="edit-link__group">
          <p className="edit-link__label">Title</p>
          <input type="text" className="edit-link__input" defaultValue={title}/>
        </div>
        <div className="edit-link__btns">
          <button onClick={close} className='edit-link__btn'>Закрыть</button>
          <button className='edit-link__btn'>Сохранить</button>
        </div>
      </form>
    </div>
  )
};

export default EditLink;
