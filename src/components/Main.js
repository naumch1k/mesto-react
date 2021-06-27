import React from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCards()
      .then((res) => setCards(res))
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
  })

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(item => item._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((item) => item !== card));
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
  }

  return (
    <main className="content page__content">
      <section className="profile content__section">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={currentUser.avatar} alt="Логотип профиля" />
          <button className="profile__avatar-btn" aria-label="Обновить аватар"
          onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__bio">{currentUser.about}</p>
          <button className="profile__edit-btn" type="button" aria-label="Редактировать профиль"
          onClick={onEditProfile}
          ></button>
        </div>
        <button className="profile__add-btn" type="button" aria-label="Добавить фотографию"
        onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements content__section">
        <ul className="elements__list">
        {cards.map((card) => (
          <Card key={card._id} onClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} card={card} />
          ))}          
        </ul>
      </section>
    </main>
  )
}

export default Main;
