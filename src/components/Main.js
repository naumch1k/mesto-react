import React from 'react';

function Main() {
  return (
    <main className="content page__content">
      <section className="profile content__section">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src="#" alt="Логотип профиля" />
          <button className="profile__avatar-btn" aria-label="Обновить аватар"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <p className="profile__bio">Исследователь океана</p>
          <button className="profile__edit-btn" type="button" aria-label="Редактировать профиль"></button>
        </div>
        <button className="profile__add-btn" type="button" aria-label="Добавить фотографию"></button>
      </section>
      <section className="elements content__section">
        <ul className="elements__list">
        </ul>
      </section>
    </main>
  )
}

export default Main;
