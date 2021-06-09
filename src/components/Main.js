import React from 'react';

function handleEditAvatarClick() {
  document.querySelector(".popup_type_avatar").classList.add("popup_opened");
}

function handleEditProfileClick() {
  document.querySelector(".popup_type_edit").classList.add("popup_opened");
}

function handleAddPlaceClick() {
  document.querySelector(".popup_type_add").classList.add("popup_opened");
}

function Main() {
  return (
    <main className="content page__content">
      <section className="profile content__section">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src="#" alt="Логотип профиля" />
          <button className="profile__avatar-btn" aria-label="Обновить аватар"
          onClick={handleEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <p className="profile__bio">Исследователь океана</p>
          <button className="profile__edit-btn" type="button" aria-label="Редактировать профиль"
          onClick={handleEditProfileClick}
          ></button>
        </div>
        <button className="profile__add-btn" type="button" aria-label="Добавить фотографию"
        onClick={handleAddPlaceClick}
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
