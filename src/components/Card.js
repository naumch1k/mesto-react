import React from 'react';

function Card(props) {

  function handleClick() {
    props.onClick(props.card);
  }

  return(
    <li className="element">
      <img onClick={handleClick} className="element__image" src={props.card.link} alt={`Изображение ${props.card.name}`} />
      <div className="element__desc">
        <h3 className="element__title">{props.card.name}</h3>
        <div className="element__like-container">
          <button className="element__like-btn" type="button" aria-label="Поставить лайк"></button>
          <span className="element__like-count">{props.card.likes.lenght}</span>
        </div>
      </div>
      <button className="element__delete-btn element__delete-btn_hidden" type="button" aria-label="Удалить фотографию"></button>
    </li>
  );

}

export default Card; 