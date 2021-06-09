import React, {useState} from 'react';
import './../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false); 

  function handleEditProfilePopupOpen() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlacePopupOpen() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarPopupOpen() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfilePopupOpen}
          onAddPlace={handleAddPlacePopupOpen}
          onEditAvatar={handleEditAvatarPopupOpen}
        />
        <Footer />
        <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        children={
          <>
            <input className="form__item form__item_el_name" id="profile-name" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
            <p className="form__error" id="profile-name-error"></p>
            <input className="form__item form__item_el_bio" id="profile-bio" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
            <p className="form__error" id="profile-bio-error"></p>
          </>
        }
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        />
        <PopupWithForm
        name="add"
        title="Новое место"
        children={
          <>
            <input className="form__item form__item_el_name" id="item-name" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
            <p className="form__error" id="item-name-error"></p>
            <input className="form__item form__item_el_link" id="item-url" type="url" name="link" placeholder="Ссылка на картинку" required />
            <p className="form__error" id="item-url-error"></p>
          </>
        }
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        />
        <ImagePopup />
        <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        children={
          <>
          </>
        }
        buttonText="Да"
        />
        <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        children={
          <>
            <input className="form__item" id="avatar-url" type="url" name="avatar" placeholder="Ссылка на картинку" required />
                <p className="form__error" id="avatar-url-error"></p>
          </>
        }
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        />
        <template id="element-template">
          <li className="element">
            <img className="element__image" src="#" alt="альт" />
            <div className="element__desc">
              <h3 className="element__title"></h3>
              <div className="element__like-container">
                <button className="element__like-btn" type="button" aria-label="Поставить лайк"></button>
                <span className="element__like-count">0</span>
              </div>
            </div>
            <button className="element__delete-btn element__delete-btn_hidden" type="button" aria-label="Удалить фотографию"></button>
          </li>
        </template>
      </div>
    </div>
    
  )
}

export default App;
