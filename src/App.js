import React from 'react';
import './index.css';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <header className="header page__header">
          <img src="<%=require('./images/header-logo.svg')%>" className="header__logo" alt="Логотип сервиса Mesto Russia" />
        </header>
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
        <footer className="footer page__footer">
          <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
        </footer>
        <div className="popup popup_type_edit">
          <div className="popup__container popup__container_type_form">
            <button className="popup__close-btn" type="button" aria-label="Закрыть окно"></button>
            <form className="form edit-form" name="edit-form" novalidate>
              <h2 className="form__heading">Редактировать профиль</h2>
              <fieldset className="form__items">
                <input className="form__item form__item_el_name" id="profile-name" type="text" name="name" placeholder="Имя" minlength="2" maxlength="40" required />
                <p className="form__error" id="profile-name-error"></p>
                <input className="form__item form__item_el_bio" id="profile-bio" type="text" name="about" placeholder="О себе" minlength="2" maxlength="200" required />
                <p className="form__error" id="profile-bio-error"></p>
              </fieldset>
              <button className="form__submit-btn" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_add">
          <div className="popup__container popup__container_type_form">
            <button className="popup__close-btn" type="button" aria-label="Закрыть окно"></button>
            <form className="form add-form" name="add-form" novalidate>
              <h2 className="form__heading">Новое место</h2>
              <fieldset className="form__items">
                <input className="form__item form__item_el_name" id="item-name" type="text" name="name" placeholder="Название" minlength="2" maxlength="30" required />
                <p className="form__error" id="item-name-error"></p>
                <input className="form__item form__item_el_link" id="item-url" type="url" name="link" placeholder="Ссылка на картинку" required />
                <p className="form__error" id="item-url-error"></p>
              </fieldset>
              <button className="form__submit-btn" type="submit">Создать</button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_image">
          <div className="popup__container popup__container_type_image">
            <button className="popup__close-btn" type="button" aria-label="Закрыть окно"></button>
            <figure className="popup__figure">
              <img className="popup__image" src="#" alt="альт" />
              <figcaption className="popup__image-caption"></figcaption>
            </figure>
          </div>
        </div>
        <div className="popup popup_type_confirm">
          <div className="popup__container popup__container_type_form">
            <button className="popup__close-btn" type="button" aria-label="Закрыть окно"></button>
            <form className="form confirm-form" name="confirm-form" novalidate>
              <h2 className="form__heading form__heading_place_confirm">Вы уверены?</h2>
              <button className="form__submit-btn" type="submit">Да</button>
            </form>
          </div>
        </div>
        <div className="popup popup-type-avatar">
          <div className="popup__container popup__container_type_form">
            <button className="popup__close-btn" type="button" aria-label="Закрыть окно"></button>
            <form className="form avatar-form" name="avatar" novalidate>
              <h2 className="form__heading">Обновить аватар</h2>
              <fieldset className="form__items">
                <input className="form__item" id="avatar-url" type="url" name="avatar" placeholder="Ссылка на картинку" required />
                <p className="form__error" id='avatar-url-error'></p>
              </fieldset>
              <button className="form__submit-btn" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
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
