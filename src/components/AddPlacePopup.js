import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
    const name = React.useRef();
    const link = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({
            name: name.current.value,
            link: link.current.value
        });
    }
    return (
        <PopupWithForm
            name="card"
            title="Новое место"
            buttonText="Создать"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input ref={name} id="cardtitle" placeholder="Название" type="text"
                   className="popup__input popup__input_card_name"
                   name="name" required minLength="2" maxLength="30"/>
            <span className="popup__error cardtitle-error"/>
            <input ref={link} id="cardurl" placeholder="Ссылка на картинку" type="url"
                   className="popup__input popup__input_card_url" name="link" required/>
            <span className="popup__error cardurl-error"/>
        </PopupWithForm>
    )
}

export default AddPlacePopup;