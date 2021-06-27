import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onAddPlace({
      name,
      link,
    })
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText={props.buttonText}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      onClose={props.onClose}
    >
      <input
        className="form__item form__item_el_name"
        id="item-name"
        type="text"
        name="name"
        placeholder="Название"
        minLength="2" maxLength="30"
        value={name}
        onChange={handleNameChange}
        required
      />
      <p className="form__error" id="item-name-error"></p>
      <input
        className="form__item form__item_el_link"
        id="item-url"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        value={link}
        onChange={handleLinkChange}
        required
      />
      <p className="form__error" id="item-url-error"></p>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
