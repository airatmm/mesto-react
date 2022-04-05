import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const avatar = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatar.current.value,
        });
    }

    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input  ref={avatar} id="avatar" placeholder="Ссылка на картинку" type="url"
                   className="popup__input popup__input_avatar" name="avatar" required/>
            <span className="popup__error avatar-error"/>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;