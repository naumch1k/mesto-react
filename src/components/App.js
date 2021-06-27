import React, {useState} from 'react';
import './../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  const [currentUser, setCurrentUser] = useState({
    name: 'Ирусик',
    about: 'offline',
    avatar: '',
  });

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  const [profileSubmitButtonText, setProfileSubmitButtonText] = useState('Сохранить');

  const [selectedCard, setSelectedCard] = useState(null);

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
  }, [])

  const handleUpdateUser = (data) => {
    setProfileSubmitButtonText('Сохранение...');
    api.setUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .then(() => {
        setEditProfilePopupOpen(false);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        setProfileSubmitButtonText('Сохранить');
      })
  }

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
    <CurrentUserContext.Provider value={currentUser}>
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
          <EditProfilePopup 
            buttonText={profileSubmitButtonText}
            isOpen={isEditProfilePopupOpen}
            onUpdateUser={handleUpdateUser}
            onClose={closeAllPopups}
          />
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
    </CurrentUserContext.Provider>
  )
}

export default App;
