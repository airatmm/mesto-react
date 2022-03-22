function ImagePopup({card, onClose}) {
    return (
        <div className={`popup popup_type_photo ${card && 'popup_opened'}`}>
            <div className="popup__photo">
                <button className="popup__close popup__close_button" type="button" onClick={onClose}></button>
                <img className="popup__photo-image" src={card.link} alt={card.name}/>
                <h3 className="popup__photo-title">{card.name}</h3>
            </div>
        </div>
    );
}

export default ImagePopup;