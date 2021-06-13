import React from 'react';

function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_type_image ${card && 'popup_opened'}`}>
      <div className="popup__container popup__container_type_image">
        <button onClick={onClose} className="popup__close-btn" type="button" aria-label="Закрыть окно"></button>
        <figure className="popup__figure">
          <img className="popup__image" src={`${card.link}`} alt={`Изображение ${card.name}`} />
          <figcaption className="popup__image-caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;