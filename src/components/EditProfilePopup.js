import PopupWithForm from "./PopupWithForm";
import React, {useContext, useState, useEffect} from "react";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const currentUser = useContext(CurrentUserContext);
    const [name , setName] = useState('');
    const [description , setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name="edit"
            title="Редактировать профиль"
            buttonText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input id="title" value={name || ''} onChange={handleNameChange} placeholder="Имя" type="text" className="popup__input popup__input_type_title"
                   name="name"
                   required minLength="2" maxLength="40"/>
            <span className="popup__error title-error"/>
            <input id="description" value={description || ''} onChange={handleDescriptionChange} placeholder="О себе" type="text"
                   className="popup__input popup__input_type_description" name="description" required
                   minLength="2"
                   maxLength="200"/>
            <span className="popup__error description-error"/>
        </PopupWithForm>
    );
}

export default EditProfilePopup