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
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfilePopupOpen() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlacePopupOpen() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarPopupOpen() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfilePopupOpen}
          onAddPlace={handleAddPlacePopupOpen}
          onEditAvatar={handleEditAvatarPopupOpen}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input className="form__item form__item_el_name" id="profile-name" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
          <p className="form__error" id="profile-name-error"></p>
          <input className="form__item form__item_el_bio" id="profile-bio" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
          <p className="form__error" id="profile-bio-error"></p>
        </PopupWithForm>
        <PopupWithForm
          name="add"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input className="form__item form__item_el_name" id="item-name" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
          <p className="form__error" id="item-name-error"></p>
          <input className="form__item form__item_el_link" id="item-url" type="url" name="link" placeholder="Ссылка на картинку" required />
          <p className="form__error" id="item-url-error"></p>
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input className="form__item" id="avatar-url" type="url" name="avatar" placeholder="Ссылка на картинку" required />
          <p className="form__error" id="avatar-url-error"></p>
        </PopupWithForm>
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          buttonText="Да"
        />
        { selectedCard && 
          <ImagePopup 
            card={selectedCard} 
            onClose={closeAllPopups}
          /> 
        }
      </div>
    </div>
    
  )
}

export default App;
