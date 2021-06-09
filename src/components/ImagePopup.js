import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__container popup__container_type_image">
        <button className="popup__close-btn" type="button" aria-label="Закрыть окно"></button>
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="альт" />
          <figcaption className="popup__image-caption"></figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;