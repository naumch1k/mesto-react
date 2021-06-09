import React from 'react';
import api from '../utils/api';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar)
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
  })

  return (
    <main className="content page__content">
      <section className="profile content__section">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Логотип профиля" />
          <button className="profile__avatar-btn" aria-label="Обновить аватар"
          onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__bio">{userDescription}</p>
          <button className="profile__edit-btn" type="button" aria-label="Редактировать профиль"
          onClick={props.onEditProfile}
          ></button>
        </div>
        <button className="profile__add-btn" type="button" aria-label="Добавить фотографию"
        onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements content__section">
        <ul className="elements__list">
        </ul>
      </section>
    </main>
  )
}

export default Main;
