import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_type_photo">
      <div className="popup__photo">
        <button className="popup__close popup__close_button" type="button">

        </button>
        <img className="popup__photo-image" src="/" alt=""/>
        <h3 className="popup__photo-title">
        </h3>
      </div>
    </div>
  );
}

export default ImagePopup;