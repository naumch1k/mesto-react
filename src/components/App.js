import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  const [currentUser, setCurrentUser] = useState({
    name: 'Jacques Cousteau',
    about: 'Explorer',
    avatar: '',
  });

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  const [profileSubmitButtonText, setProfileSubmitButtonText] = useState('Save');
  const [avatarSubmitButtonText, setAvatarSubmitButtonText] = useState('Save');
  const [cardSubmitButtonText, setCardSubmitButtonText] = useState('Create');

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(`Couldnt get data from the server. ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      }); 

  }, [])

  const handleUpdateUser = (data) => {
    setProfileSubmitButtonText('Saving...');

    api.setUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .then(() => {
        setEditProfilePopupOpen(false);
      })
      .catch((err) => {
        console.log(`Unable to update user info. ${err}`);
      })
      .finally(() => {
        setProfileSubmitButtonText('Save');
      })
  }

  const handleAddPlace = (data) => {
    setCardSubmitButtonText('Creating...');

    api.addNewCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then(() => {
        setAddPlacePopupOpen(false);
      })
      .catch((err) => {
        console.log(`Unable to publish a card. ${err}`);
      })
      .finally(() => {
        setCardSubmitButtonText('Create');
      })
  }

  const handleUpdateAvatar = (data) => {
    setAvatarSubmitButtonText('Saving...');

    api.setUserAvatar(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .then(() => {
        setEditAvatarPopupOpen(false);
      })
      .catch((err) => {
        console.log(`Unable to update user avatar. ${err}`);
      })
      .finally(() => {
        setAvatarSubmitButtonText('Save');
      })
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(item => item._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
      })
      .catch((err) => {
        console.log(`${err}`);
      })
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((item) => item !== card));
      })
      .catch((err) => {
        console.log(`${err}`);
      })
  }

  function handleEditProfilePopupOpen() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlacePopupOpen() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarPopupOpen() {
    setEditAvatarPopupOpen(true);
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
            cards={cards}
            onEditProfile={handleEditProfilePopupOpen}
            onAddPlace={handleAddPlacePopupOpen}
            onEditAvatar={handleEditAvatarPopupOpen}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            isLoading={isLoading}
          />
          <Footer />
          <EditProfilePopup 
            buttonText={profileSubmitButtonText}
            isOpen={isEditProfilePopupOpen}
            onUpdateUser={handleUpdateUser}
            onClose={closeAllPopups}
          />
          <AddPlacePopup
            buttonText={cardSubmitButtonText}
            isOpen={isAddPlacePopupOpen}
            onAddPlace={handleAddPlace}
            onClose={closeAllPopups}
          >
          </AddPlacePopup>
          <EditAvatarPopup 
            buttonText={avatarSubmitButtonText}
            isOpen={isEditAvatarPopupOpen}
            onUpdateAvatar={handleUpdateAvatar}
            onClose={closeAllPopups}
          /> 
          <PopupWithForm
            name="confirm"
            title="Are you sure?"
            buttonText="Yes"
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
